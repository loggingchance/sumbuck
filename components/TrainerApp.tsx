"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { INSTRUCTION_LOGS } from "@/data/instructionLogs";
import { PRACTICE_LOGS } from "@/data/practiceLogs";
import { TRIM_FT, allDefects, calculateHeartwoodPercent, interpolateHeartwoodDiameter, makeSegments, overlaps, scoreSegment } from "@/lib/calculations";
import { scoreAttempt } from "@/lib/feedback";
import { MARKET_MODE_STORAGE_KEY, NORTHERN_HARDWOODS_MARKET } from "@/lib/markets";
import { LOG_LIBRARY_STORAGE_KEY, PRICE_STORAGE_KEY } from "@/lib/prices";
import { GRADE_STANDARD_STORAGE_KEY } from "@/lib/specifications";
import { UserManual } from "@/components/UserManual";
import {
  PRODUCT_CLASSES,
  PRODUCT_LABELS,
  SPECIES,
  type CutLine,
  type Defect,
  type Face,
  type GradeStandard,
  type GradeStandards,
  type LogRule,
  type ProductClass,
  type PracticeLog,
  type PricesBySpecies,
  type PriceTable,
  type SawlogGradingBasis,
  type SegmentScore,
  type Species
} from "@/lib/types";

const activeFaces: Face[] = ["face_1", "face_2", "face_3", "face_4"];
const QUICK_CUT_NOMINAL_LENGTHS_FT = [8, 9, 10, 11, 12, 13, 14, 15, 16];
const LOG_RULE_LABELS: Record<LogRule, string> = {
  international_1_4: "International 1/4",
  doyle: "Doyle",
  scribner: "Scribner"
};
const LOG_SET_LABELS = {
  practice: "Practice",
  instruction: "Instruction"
} as const;

type GraphicSegment = Pick<
  SegmentScore,
  "id" | "startFt" | "endFt" | "nominalLengthFt" | "smallEndDiameterIn" | "heartwoodDiameterIn" | "heartwoodPercent" | "product" | "volumeMbf" | "value"
>;
type SpeciesGradeStandards = Record<Species, GradeStandards>;
type SideTab = "buck" | "grade" | "specifications" | "manual";
type MarketMode = "northern" | "custom";
type ProductLabels = Record<ProductClass, string>;
type CustomGradeLabels = Record<Species, Partial<ProductLabels>>;
const MARKET_NAME = NORTHERN_HARDWOODS_MARKET.name;
const CUSTOM_GRADE_LABEL_STORAGE_KEY = "sumbuck-custom-grade-labels-v1";
const SAVED_CUSTOM_MARKET_STORAGE_KEY = "sumbuck-saved-custom-species-market-v1";
const INTRO_STORAGE_KEY = "sumbuck-seen-intro-v1";

interface GradingExercise {
  id: string;
  log: PracticeLog;
  segment: SegmentScore;
}

interface GradingAnswer {
  exerciseId: string;
  selected: ProductClass;
  correct: ProductClass;
}

interface SavedCustomMarket {
  name: string;
  species: Species;
  logRule: LogRule;
  prices: PriceTable;
  standards: GradeStandards;
  gradeLabels: Partial<ProductLabels>;
  savedAt: string;
}

interface BuckingScore {
  id: string;
  stemTitle: string;
  logSet: "practice" | "instruction";
  species: Species;
  userValue: number;
  optimalValue: number;
  recoveryPercent: number;
}

function applySpeciesProfile(log: PracticeLog, species: Species): PracticeLog {
  const profiledLog = { ...log, species };
  if (species !== "walnut" && species !== "black cherry" && species !== "yellow birch") return profiledLog;

  return {
    ...profiledLog,
    heartwoodPoints: log.diameterPoints.map((point, index) => {
      const fraction = log.totalLengthFt === 0 ? 0 : point.positionFt / log.totalLengthFt;
      const baseRatio = species === "yellow birch" ? 0.48 : species === "black cherry" ? 0.8 : 0.82;
      const minimumRatio = species === "yellow birch" ? 0.45 : 0.8;
      const maximumRatio = species === "yellow birch" ? 0.62 : 0.9;
      const ratio = clamp(baseRatio + (index % 3) * 0.025 + fraction * 0.035, minimumRatio, maximumRatio);
      return {
        positionFt: point.positionFt,
        diameterIn: roundForDisplay(point.diameterIn * ratio)
      };
    })
  };
}

export function TrainerApp() {
  const [logs, setLogs] = useState<PracticeLog[]>(PRACTICE_LOGS);
  const [logSet, setLogSet] = useState<"practice" | "instruction">("practice");
  const [selectedLogId, setSelectedLogId] = useState(PRACTICE_LOGS[0].id);
  const [selectedSpecies, setSelectedSpecies] = useState<Species>("hard maple");
  const [marketMode, setMarketMode] = useState<MarketMode>("northern");
  const [pricesBySpecies, setPricesBySpecies] = useState<PricesBySpecies>(clonePricesBySpecies(NORTHERN_HARDWOODS_MARKET.pricesBySpecies));
  const [standardsBySpecies, setStandardsBySpecies] = useState<SpeciesGradeStandards>(DEFAULT_SPECIES_GRADE_STANDARDS);
  const [customGradeLabels, setCustomGradeLabels] = useState<CustomGradeLabels>(() =>
    SPECIES.reduce((next, species) => {
      next[species] = {};
      return next;
    }, {} as CustomGradeLabels)
  );
  const [cuts, setCuts] = useState<CutLine[]>([]);
  const [activeFace, setActiveFace] = useState<Face>("face_1");
  const [rollTurns, setRollTurns] = useState(0);
  const [magnifierEnabled, setMagnifierEnabled] = useState(false);
  const [logRule, setLogRule] = useState<LogRule>("international_1_4");
  const [sideTab, setSideTab] = useState<SideTab>("buck");
  const [resultMode, setResultMode] = useState<"bucker" | "compare" | null>(null);
  const [gradingIndex, setGradingIndex] = useState(0);
  const [gradingSelection, setGradingSelection] = useState<ProductClass | "">("");
  const [gradingSubmitted, setGradingSubmitted] = useState(false);
  const [gradingScoreEnabled, setGradingScoreEnabled] = useState(true);
  const [gradingAnswers, setGradingAnswers] = useState<GradingAnswer[]>([]);
  const [customMarketName, setCustomMarketName] = useState("Custom species market");
  const [savedCustomMarket, setSavedCustomMarket] = useState<SavedCustomMarket | null>(null);
  const [buckSelectorsOpen, setBuckSelectorsOpen] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [introOpen, setIntroOpen] = useState(false);
  const [dontShowIntro, setDontShowIntro] = useState(false);
  const [buckingScores, setBuckingScores] = useState<BuckingScore[]>([]);
  const loadedFromStorage = useRef(false);

  useEffect(() => {
    const storedPrices = window.localStorage.getItem(PRICE_STORAGE_KEY);
    const storedLogs = window.localStorage.getItem(LOG_LIBRARY_STORAGE_KEY);
    const storedStandards = window.localStorage.getItem(GRADE_STANDARD_STORAGE_KEY);
    const storedMarketMode = window.localStorage.getItem(MARKET_MODE_STORAGE_KEY);
    const storedCustomGradeLabels = window.localStorage.getItem(CUSTOM_GRADE_LABEL_STORAGE_KEY);
    const storedSavedCustomMarket = window.localStorage.getItem(SAVED_CUSTOM_MARKET_STORAGE_KEY);
    if (storedMarketMode === "custom" || storedMarketMode === "northern") setMarketMode(storedMarketMode);
    if (storedPrices) setPricesBySpecies(mergePricesBySpecies(JSON.parse(storedPrices)));
    if (storedLogs) setLogs(JSON.parse(storedLogs));
    if (storedStandards) setStandardsBySpecies(mergeSpeciesStandards(JSON.parse(storedStandards)));
    if (storedCustomGradeLabels) setCustomGradeLabels(mergeCustomGradeLabels(JSON.parse(storedCustomGradeLabels)));
    if (storedSavedCustomMarket) {
      const saved = mergeSavedCustomMarket(JSON.parse(storedSavedCustomMarket));
      if (saved) {
        setSavedCustomMarket(saved);
        setCustomMarketName(saved.name);
      }
    }
    loadedFromStorage.current = true;
  }, []);

  useEffect(() => {
    if (!window.localStorage.getItem(INTRO_STORAGE_KEY)) setIntroOpen(true);
  }, []);

  useEffect(() => {
    if (!loadedFromStorage.current) return;
    window.localStorage.setItem(PRICE_STORAGE_KEY, JSON.stringify(pricesBySpecies));
  }, [pricesBySpecies]);

  useEffect(() => {
    if (!loadedFromStorage.current) return;
    window.localStorage.setItem(GRADE_STANDARD_STORAGE_KEY, JSON.stringify(standardsBySpecies));
  }, [standardsBySpecies]);

  useEffect(() => {
    if (!loadedFromStorage.current) return;
    window.localStorage.setItem(MARKET_MODE_STORAGE_KEY, marketMode);
  }, [marketMode]);

  useEffect(() => {
    if (!loadedFromStorage.current) return;
    window.localStorage.setItem(CUSTOM_GRADE_LABEL_STORAGE_KEY, JSON.stringify(customGradeLabels));
  }, [customGradeLabels]);

  useEffect(() => {
    if (!loadedFromStorage.current) return;
    if (savedCustomMarket) {
      window.localStorage.setItem(SAVED_CUSTOM_MARKET_STORAGE_KEY, JSON.stringify(savedCustomMarket));
    } else {
      window.localStorage.removeItem(SAVED_CUSTOM_MARKET_STORAGE_KEY);
    }
  }, [savedCustomMarket]);

  const activeLogs = logSet === "instruction" ? INSTRUCTION_LOGS : logs;
  const baseLog = activeLogs.find((item) => item.id === selectedLogId) ?? activeLogs[0];
  const log = useMemo(() => applySpeciesProfile(baseLog, selectedSpecies), [baseLog, selectedSpecies]);

  useEffect(() => {
    const firstDefectFace = baseLog.visibleDefects[0]?.faces[0] ?? "face_1";
    setActiveFace(firstDefectFace);
    setRollTurns(activeFaces.indexOf(firstDefectFace));
  }, [baseLog.id]);

  const submitted = resultMode !== null;
  const showComparison = resultMode === "compare";
  const cutPositions = cuts.map((cut) => cut.positionFt).sort((a, b) => a - b);
  const standards = standardsBySpecies[selectedSpecies];
  const prices = pricesBySpecies[selectedSpecies];
  const productLabels = useMemo(
    () => productLabelsFor(marketMode === "custom" ? customGradeLabels[selectedSpecies] : {}),
    [marketMode, customGradeLabels, selectedSpecies]
  );
  const sawlogGradingBasis = standards.number_1_sawlog.sawlogGradingBasis;
  const gradingExercises = useMemo(
    () => buildGradingExercises(logs, selectedSpecies, prices, logRule, standards),
    [logs, selectedSpecies, prices, logRule, standards]
  );
  const gradingExercise = gradingExercises[gradingIndex % Math.max(1, gradingExercises.length)];
  const attempt = useMemo(
    () => scoreAttempt(log, cutPositions, prices, logRule, standards),
    [log, cutPositions.join(","), prices, logRule, standards]
  );
  const optimalCuts = useMemo(
    () =>
      (attempt.optimized?.cutPositionsFt ?? []).map((positionFt, index) => ({
        id: `optimal-cut-${index + 1}`,
        positionFt
      })),
    [attempt.optimized?.cutPositionsFt.join(",")]
  );
  const userGraphicSegments = useMemo(
    () => (submitted ? graphicSegmentsFor(log, cuts.map((cut) => cut.positionFt), attempt.user.segments) : []),
    [submitted, log, cutPositions.join(","), attempt.user.segments]
  );
  const optimalGraphicSegments = useMemo(
    () => graphicSegmentsFor(log, optimalCuts.map((cut) => cut.positionFt), attempt.optimized?.segments ?? []),
    [log, optimalCuts.map((cut) => cut.positionFt).join(","), attempt.optimized?.segments]
  );
  function updatePrice(key: keyof PriceTable, value: string) {
    setMarketMode("custom");
    setPricesBySpecies((current) => ({
      ...current,
      [selectedSpecies]: { ...current[selectedSpecies], [key]: Number(value) || 0 }
    }));
  }

  function updateStandard(product: ProductClass, field: keyof GradeStandard, value: string) {
    setMarketMode("custom");
    setStandardsBySpecies((current) => {
      const speciesStandards = current[selectedSpecies];
      const next = { ...speciesStandards[product] };
      if (field === "allowedNominalLengthsFt") {
        next.allowedNominalLengthsFt = parseLengths(value);
      } else if (field === "maxHeartwoodPercent") {
        next.maxHeartwoodPercent = value.trim() === "" ? null : Number(value) || 0;
      } else if (field === "maxSweepIn") {
        next.maxSweepIn = value.trim() === "" ? null : Number(value) || 0;
      } else if (field === "sawlogGradingBasis") {
        next.sawlogGradingBasis = value === "clear_cuttings" ? "clear_cuttings" : "clear_faces";
      } else if (field === "maxClearCuttings") {
        next.maxClearCuttings = value.trim() === "" ? null : Number(value) || 0;
      } else if (field === "minClearCuttingProportion") {
        next.minClearCuttingProportion = parseProportion(value);
      } else if (field === "allowSmallTrimDefects") {
        next.allowSmallTrimDefects = value === "true";
      } else if (field === "notes") {
        next.notes = value;
      } else if (field === "minSmallEndDiameterIn" || field === "minClearFaces" || field === "minClearCuttingLengthFt") {
        next[field] = Number(value) || 0;
      }
      return { ...current, [selectedSpecies]: { ...speciesStandards, [product]: next } };
    });
  }

  function updateGradeLabel(product: ProductClass, value: string) {
    setMarketMode("custom");
    setCustomGradeLabels((current) => ({
      ...current,
      [selectedSpecies]: {
        ...current[selectedSpecies],
        [product]: value
      }
    }));
  }

  function updateSawlogGradingBasis(value: SawlogGradingBasis) {
    setMarketMode("custom");
    setStandardsBySpecies((current) => ({
      ...current,
      [selectedSpecies]: applySawlogGradingBasisToStandards(current[selectedSpecies], value)
    }));
  }

  function resetStandards() {
    useNorthernMarket();
  }

  function useNorthernMarket() {
    setMarketMode("northern");
    setStandardsBySpecies(cloneSpeciesStandards(NORTHERN_HARDWOODS_MARKET.standardsBySpecies));
    setPricesBySpecies(clonePricesBySpecies(NORTHERN_HARDWOODS_MARKET.pricesBySpecies));
    setLogRule(NORTHERN_HARDWOODS_MARKET.logRule);
  }

  function useCustomMarket() {
    setMarketMode("custom");
  }

  function updateLogRule(value: LogRule) {
    setMarketMode("custom");
    setLogRule(value);
  }

  function saveCustomMarket() {
    const name = customMarketName.trim() || `${selectedSpecies} custom market`;
    const saved: SavedCustomMarket = {
      name,
      species: selectedSpecies,
      logRule,
      prices: { ...pricesBySpecies[selectedSpecies] },
      standards: cloneStandards(standardsBySpecies[selectedSpecies]),
      gradeLabels: { ...customGradeLabels[selectedSpecies] },
      savedAt: new Date().toISOString()
    };
    setCustomMarketName(name);
    setMarketMode("custom");
    setSavedCustomMarket(saved);
  }

  function loadCustomMarket() {
    if (!savedCustomMarket) return;
    setSelectedSpecies(savedCustomMarket.species);
    setMarketMode("custom");
    setLogRule(savedCustomMarket.logRule);
    setPricesBySpecies((current) => ({
      ...current,
      [savedCustomMarket.species]: { ...savedCustomMarket.prices }
    }));
    setStandardsBySpecies((current) => ({
      ...current,
      [savedCustomMarket.species]: cloneStandards(savedCustomMarket.standards)
    }));
    setCustomGradeLabels((current) => ({
      ...current,
      [savedCustomMarket.species]: { ...savedCustomMarket.gradeLabels }
    }));
    setCustomMarketName(savedCustomMarket.name);
    setResultMode(null);
  }

  function clearSavedCustomMarket() {
    setSavedCustomMarket(null);
  }

  function addCut(positionFt = Math.round(log.totalLengthFt / 2)) {
    setCuts((current) => [
      ...current,
      { id: crypto.randomUUID(), positionFt: clamp(positionFt, 1, log.totalLengthFt - 1) }
    ]);
    setResultMode(null);
  }

  function addQuickCut(nominalLengthFt: number) {
    const sortedCuts = cuts.map((cut) => cut.positionFt).sort((a, b) => a - b);
    const openingStartFt = sortedCuts[sortedCuts.length - 1] ?? 0;
    const cutPositionFt = openingStartFt + nominalLengthFt + TRIM_FT;
    if (cutPositionFt >= log.totalLengthFt - 0.5) return;
    addCut(cutPositionFt);
  }

  function canAddQuickCut(nominalLengthFt: number) {
    const sortedCuts = cuts.map((cut) => cut.positionFt).sort((a, b) => a - b);
    const openingStartFt = sortedCuts[sortedCuts.length - 1] ?? 0;
    return openingStartFt + nominalLengthFt + TRIM_FT < log.totalLengthFt - 0.5;
  }

  function moveCut(id: string, positionFt: number) {
    setCuts((current) =>
      current.map((cut) => (cut.id === id ? { ...cut, positionFt: clamp(positionFt, 0.5, log.totalLengthFt - 0.5) } : cut))
    );
    setResultMode(null);
  }

  function removeCut(id: string) {
    setCuts((current) => current.filter((cut) => cut.id !== id));
    setResultMode(null);
  }

  function undoLastCut() {
    setCuts((current) => current.slice(0, -1));
    setResultMode(null);
  }

  function resetForLog(id: string) {
    setSelectedLogId(id);
    setCuts([]);
    setResultMode(null);
  }

  function nextLog() {
    const currentIndex = activeLogs.findIndex((item) => item.id === selectedLogId);
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % activeLogs.length;
    resetForLog(activeLogs[nextIndex].id);
  }

  function nextGradingLog() {
    setGradingIndex((index) => (index + 1) % Math.max(1, gradingExercises.length));
    setGradingSelection("");
    setGradingSubmitted(false);
  }

  function submitGradingAnswer() {
    if (!gradingExercise || !gradingSelection) return;
    setGradingSubmitted(true);
    if (!gradingScoreEnabled) return;
    setGradingAnswers((current) => [
      ...current.filter((answer) => answer.exerciseId !== gradingExercise.id),
      {
        exerciseId: gradingExercise.id,
        selected: gradingSelection,
        correct: gradingExercise.segment.product
      }
    ]);
  }

  function resetGradingScore() {
    setGradingAnswers([]);
    setGradingSelection("");
    setGradingSubmitted(false);
    setGradingIndex(0);
  }

  function changeLogSet(nextSet: "practice" | "instruction") {
    setLogSet(nextSet);
    setBuckSelectorsOpen(true);
    const nextLogs = nextSet === "instruction" ? INSTRUCTION_LOGS : logs;
    resetForLog(nextLogs[0].id);
  }

  function changeMarketMode(nextMode: MarketMode) {
    if (nextMode === "northern") {
      useNorthernMarket();
    } else {
      useCustomMarket();
    }
    setResultMode(null);
  }

  function submitBuckingResult(mode: "bucker" | "compare") {
    const optimalValue = attempt.optimized?.totalValue ?? 0;
    const recoveryPercent = optimalValue > 0 ? (attempt.user.totalValue / optimalValue) * 100 : 0;
    setBuckingScores((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        stemTitle: log.title,
        logSet,
        species: selectedSpecies,
        userValue: attempt.user.totalValue,
        optimalValue,
        recoveryPercent
      }
    ]);
    setResultMode(mode);
  }

  function dismissIntro(remember = dontShowIntro) {
    if (remember) window.localStorage.setItem(INTRO_STORAGE_KEY, "1");
    setIntroOpen(false);
  }

  function startFromIntro(mode: "practice" | "instruction" | "grade") {
    dismissIntro();
    if (mode === "grade") {
      setSideTab("grade");
      return;
    }
    setSideTab("buck");
    changeLogSet(mode);
    setBuckSelectorsOpen(mode === "instruction");
  }

  return (
    <main>
      <header className="topbar">
        <div>
          <h1>SumBuck</h1>
          <p className="tagline"><em>World&apos;s best hardwood log bucker training app</em></p>
        </div>
        <div className="headerStats">
          <button className="aboutButton" onClick={() => setAboutOpen(true)}>About</button>
          <a className="lumbermenLink" href="https://lumbermen.org" target="_blank" rel="noreferrer">Lumbermen OS</a>
        </div>
      </header>

      {introOpen && (
        <div className="sb-overlay" role="dialog" aria-modal="true" aria-labelledby="sbBrand">
          <div
            className="sb-hero"
            aria-hidden="true"
            style={{ backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/intro-hero.jpg")` }}
          ></div>
          <div className="sb-scrim" aria-hidden="true"></div>
          <div className="sb-card">
            <svg className="sb-logend" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="sb-bark" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d8b87a" />
                  <stop offset="70%" stopColor="#a8854a" />
                  <stop offset="100%" stopColor="#5b3f22" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#sb-bark)" />
              <g fill="none" stroke="#6b4f2c" strokeOpacity=".55">
                <circle cx="50" cy="50" r="40" strokeWidth="1.4" />
                <circle cx="50" cy="50" r="32" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="25" strokeWidth="1" />
                <circle cx="50" cy="50" r="18" strokeWidth="1" />
                <circle cx="50" cy="50" r="11" strokeWidth="1" />
              </g>
              <circle cx="50" cy="50" r="4" fill="#3a2a16" />
            </svg>

            <h1 className="sb-brand" id="sbBrand">SumBuck</h1>
            <p className="sb-tag">World&apos;s best hardwood log bucker training app</p>
            <p className="sb-lede">
              Buck tree-length stems, grade the logs, and chase the <b>highest-value pattern</b> the optimizer
              can find across eleven hardwood species and the markets you set.
            </p>

            <div className="sb-modes">
              <button className="sb-mode sb-mode--primary" onClick={() => startFromIntro("practice")}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 17l6-6" />
                  <path d="M14 6l4 4" />
                  <path d="M2 22l4-1 12-12a2.8 2.8 0 0 0-4-4L2 17z" />
                </svg>
                <h3>Buck a stem</h3>
                <p>Place cuts on a full stem, then score your pattern against the optimizer.</p>
                <span className="go">Start practice &rarr;</span>
              </button>

              <button className="sb-mode" onClick={() => startFromIntro("instruction")}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
                  <path d="M9 7h7M9 11h7" />
                </svg>
                <h3>Learn the optimum</h3>
                <p>Walk through curated instruction stems built to teach a specific lesson.</p>
                <span className="go">Open instruction logs &rarr;</span>
              </button>

              <button className="sb-mode" onClick={() => startFromIntro("grade")}>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path d="M3 7v7l9 4 9-4V7" />
                </svg>
                <h3>Grade logs</h3>
                <p>Call the grade on pre-cut logs, from slicer veneer down to scrag, and keep score.</p>
                <span className="go">Practice grading &rarr;</span>
              </button>
            </div>

            <div className="sb-inside">
              <span><i className="sb-dot"></i><b>11</b>&nbsp;valuable hardwood species</span>
              <span><i className="sb-dot"></i>Resident <b>Northern Hardwoods</b> market</span>
              <span><i className="sb-dot"></i>Or enter your own <b>specs &amp; prices</b> free</span>
            </div>

            <p className="sb-minor">
              <button
                className="sb-link"
                onClick={() => {
                  dismissIntro();
                  setSideTab("manual");
                }}
              >
                Read the user manual
              </button>
              <span aria-hidden="true">|</span>
              <label className="sb-check">
                <input type="checkbox" checked={dontShowIntro} onChange={(event) => setDontShowIntro(event.target.checked)} />
                Do not show this again
              </label>
            </p>
          </div>
          <p className="sb-credit">Field photo courtesy of Paul Smith&apos;s College field day.</p>
        </div>
      )}

      {aboutOpen && (
        <div className="modalBackdrop" role="presentation" onClick={() => setAboutOpen(false)}>
          <section className="aboutModal" role="dialog" aria-modal="true" aria-labelledby="about-sumbuck-title" onClick={(event) => event.stopPropagation()}>
            <div className="aboutModalHeader">
              <div>
                <p className="eyebrow">About</p>
                <h2 id="about-sumbuck-title">About SumBuck</h2>
              </div>
              <button aria-label="Close About SumBuck" onClick={() => setAboutOpen(false)}>Close</button>
            </div>
            <div className="aboutCopy">
              <p>
                SumBuck was created by Dr. Steven Bick of Northeast Forests LLC and The Forest Business School as part of the Lumbermen OS suite of tools.
              </p>
              <p>
                SumBuck supports hardwood utilization training for people, organizations, businesses, schools, and public agencies. It gives learners a practical way to think through tree-length bucking decisions, log grades, defects, product specifications, and market values. Used with a good training presentation on scaling, defects, grading, and optimal bucking practices, SumBuck can help create an effective and memorable educational program.
              </p>
              <p>
                In SumBuck, the optimal bucking pattern is the highest-value pattern found under the currently selected species, prices, grade specifications, trim rules, visible defect rules, sweep rules, heart rules, and log rule. It is a training comparison based on the active market assumptions in the app.
              </p>
              <p>
                SumBuck is an educational tool. It is not intended to provide commercial optimization, financial advice, professional forestry advice, or a substitute for local log specifications, mill requirements, market knowledge, or experienced judgment. Log values, grades, defect rules, product specifications, and market opportunities vary by region, buyer, species, season, and individual stem. Users are responsible for checking all assumptions and applying their own professional judgment before making real-world harvesting, marketing, or purchasing decisions.
              </p>
              <p>
                Use SumBuck at your own risk, for your own benefit, and for your own enjoyment. Share it with others.
              </p>
              <p>
                SumBuck can be customized to add features, especially alternative markets, regional specifications, training examples, branded content, and organization-specific workflows. It can also be branded to match an agency, school, association, business, or other organization. Contact Steve Bick at <a href="mailto:steve@northeastforests.com">steve@northeastforests.com</a> to discuss possibilities and costs.
              </p>
              <p>
                Caution: log bucking practice can be addictive. Know when to quit.
              </p>
              <p className="aboutQuote">
                "You'd be a woreout sumbuck. I'll tell you that." - Cormac McCarthy, All the Pretty Horses
              </p>
            </div>
          </section>
        </div>
      )}

      <section className="workspace">
        <aside className="panel sidebar">
          <div className="sideTabs">
            <button className={sideTab === "buck" ? "active" : ""} onClick={() => setSideTab("buck")}>Buck</button>
            <button className={sideTab === "grade" ? "active" : ""} onClick={() => setSideTab("grade")}>Grade</button>
            <button
              className={sideTab === "specifications" ? "active" : ""}
              onClick={() => setSideTab("specifications")}
            >
              Enter Specs and Prices
            </button>
            <button className={sideTab === "manual" ? "active" : ""} onClick={() => setSideTab("manual")}>User Manual</button>
          </div>

          {sideTab === "buck" && (
            <div className="sidePanelBody">
              <div className="selectorSummary">
                <div>
                  <strong>{selectedSpecies}</strong>
                  <span>{marketMode === "northern" ? MARKET_NAME : "custom market"} | {LOG_SET_LABELS[logSet]} stem {String(activeLogs.findIndex((item) => item.id === baseLog.id) + 1).padStart(3, "0")}</span>
                </div>
                <button onClick={() => setBuckSelectorsOpen((open) => !open)}>{buckSelectorsOpen ? "Hide" : "Change"}</button>
              </div>
              {buckSelectorsOpen && (
                <div className="selectorFields">
                  <label>
                    Market
                    <select value={marketMode} onChange={(event) => changeMarketMode(event.target.value as MarketMode)}>
                      <option value="northern">{MARKET_NAME}</option>
                      <option value="custom">Custom market for {selectedSpecies}</option>
                    </select>
                  </label>
                  <label>
                    Species
                    <select
                      value={selectedSpecies}
                      onChange={(event) => {
                        setSelectedSpecies(event.target.value as Species);
                        setResultMode(null);
                      }}
                    >
                      {SPECIES.map((species) => (
                        <option key={species} value={species}>
                          {species}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Log set
                    <select value={logSet} onChange={(event) => changeLogSet(event.target.value as "practice" | "instruction")}>
                      <option value="practice">Practice logs</option>
                      <option value="instruction">Instruction logs</option>
                    </select>
                  </label>
                  <label>
                    {LOG_SET_LABELS[logSet]} stem
                    <select value={baseLog.id} onChange={(event) => resetForLog(event.target.value)}>
                      {activeLogs.map((item, index) => (
                        <option key={item.id} value={item.id}>
                          {`${logSet} stem ${String(index + 1).padStart(3, "0")}`}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
              {logSet === "instruction" && (
                <section className="instructionNotes">
                  <p className="eyebrow">Instruction points</p>
                  {submitted ? (
                    <>
                      <p className="objective">{log.teachingObjective}</p>
                      {log.instructionalPointTags && log.instructionalPointTags.length > 0 && (
                        <div className="instructionTags">
                          {log.instructionalPointTags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                      {log.instructionalNote && <p className="instructionNote">{log.instructionalNote}</p>}
                    </>
                  ) : (
                    <p className="instructionNote">
                      First inspect all faces, make your cuts, and score the stem. The teaching point appears after your attempt.
                    </p>
                  )}
                </section>
              )}
            </div>
          )}

          {sideTab === "grade" && (
            <div className="sidePanelBody">
              <label>
                Species
                <select
                  value={selectedSpecies}
                  onChange={(event) => {
                    setSelectedSpecies(event.target.value as Species);
                    setGradingIndex(0);
                    setGradingSelection("");
                    setGradingSubmitted(false);
                  }}
                >
                  {SPECIES.map((species) => (
                    <option key={species} value={species}>
                      {species}
                    </option>
                  ))}
                </select>
              </label>
              <div className="stemFacts">
                <div>
                  <strong>100</strong>
                  <span>pre-cut logs</span>
                </div>
                <div>
                  <strong>{gradingIndex + 1}</strong>
                  <span>current</span>
                </div>
                <div>
                  <strong>{gradingScoreEnabled ? "on" : "off"}</strong>
                  <span>score</span>
                </div>
              </div>
              <label className="checkRow">
                <input
                  type="checkbox"
                  checked={gradingScoreEnabled}
                  onChange={(event) => setGradingScoreEnabled(event.target.checked)}
                />
                keep score
              </label>
              <button onClick={resetGradingScore}>Reset grading score</button>
            </div>
          )}

          {sideTab === "specifications" && (
            <div className="sidePanelBody">
              <div className="marketNotice">
                <strong>Market setup</strong>
                <span>{marketMode === "northern" ? MARKET_NAME : `custom market for ${selectedSpecies}`}</span>
                <div className="marketModeButtons">
                  <button className={marketMode === "northern" ? "active" : ""} onClick={useNorthernMarket}>
                    {MARKET_NAME}
                  </button>
                  <button className={marketMode === "custom" ? "active" : ""} onClick={useCustomMarket}>
                    Custom species market
                  </button>
                </div>
              </div>
              {marketMode === "custom" && (
                <div className="customMarketSave">
                  <label>
                    Custom market name
                    <input
                      value={customMarketName}
                      placeholder={`${selectedSpecies} custom market`}
                      onChange={(event) => setCustomMarketName(event.target.value)}
                    />
                  </label>
                  <div className="customMarketActions">
                    <button className="primary" onClick={saveCustomMarket}>Save custom market</button>
                    <button disabled={!savedCustomMarket} onClick={loadCustomMarket}>Load saved</button>
                    <button disabled={!savedCustomMarket} onClick={clearSavedCustomMarket}>Clear saved</button>
                  </div>
                  <p>
                    {savedCustomMarket
                      ? `Saved: ${savedCustomMarket.name} for ${savedCustomMarket.species}.`
                      : "Free version saves one custom species market at a time."}
                  </p>
                </div>
              )}
              <label>
                Log rule
                <select value={logRule} onChange={(event) => updateLogRule(event.target.value as LogRule)}>
                  <option value="international_1_4">International 1/4</option>
                  <option value="doyle">Doyle</option>
                  <option value="scribner">Scribner</option>
                </select>
              </label>
              <PriceEditor prices={prices} species={selectedSpecies} productLabels={productLabels} onChange={updatePrice} />
              <StandardsEditor
                standards={standards}
                species={selectedSpecies}
                customGradeLabels={customGradeLabels[selectedSpecies]}
                productLabels={productLabels}
                gradingBasis={sawlogGradingBasis}
                onGradingBasisChange={updateSawlogGradingBasis}
                onLabelChange={updateGradeLabel}
                onChange={updateStandard}
                onReset={resetStandards}
              />
            </div>
          )}

          {sideTab === "manual" && (
            <div className="sidePanelBody">
              <div className="marketNotice">
                <strong>SumBuck manual</strong>
                <span>Read the full guide, jump by section, and return to practice whenever you are ready.</span>
              </div>
            </div>
          )}
        </aside>

        <section className="mainColumn">
          {sideTab === "manual" ? (
            <UserManual />
          ) : sideTab === "grade" && gradingExercise ? (
            <GradingTrainer
              exercise={gradingExercise}
              exerciseIndex={gradingIndex}
              totalExercises={gradingExercises.length}
              activeFace={activeFace}
              rollTurns={rollTurns}
              magnifierEnabled={magnifierEnabled}
              selectedGrade={gradingSelection}
              submitted={gradingSubmitted}
              scoreEnabled={gradingScoreEnabled}
              answers={gradingAnswers}
              gradingBasis={sawlogGradingBasis}
              productLabels={productLabels}
              onSelectGrade={(grade) => {
                setGradingSelection(grade);
                setGradingSubmitted(false);
              }}
              onSubmit={submitGradingAnswer}
              onNext={nextGradingLog}
              onRoll={(nextRollTurns) => rollTo(setRollTurns, setActiveFace, nextRollTurns)}
              onToggleMagnifier={() => setMagnifierEnabled((enabled) => !enabled)}
            />
          ) : (
          <>
          <div className="panel">
            <div className="panelHeader">
              <div>
                <div className="eyebrowRow">
                  <p className="eyebrow">{logSet === "instruction" ? "Instruction stem" : "Bucking practice"}</p>
                </div>
                <div className="logMetaRow">
                  <h2 className="stemTitle">{log.title}</h2>
                  <LogContextPills log={log} ruleLabel={`${LOG_RULE_LABELS[logRule]} rule`} />
                  <button className="primary nextLogButton" onClick={nextLog}>Next</button>
                </div>
                <p className="screenObjective">Maximize total stem value.</p>
              </div>
            </div>
            <div className="rollControls">
              <button onClick={() => rollTo(setRollTurns, setActiveFace, rollTurns - 1)}>Roll left</button>
              <input
                aria-label="Roll log"
                type="range"
                min="0"
                max="3"
                step="1"
                value={normalizedRoll(rollTurns)}
                onChange={(event) => rollTo(setRollTurns, setActiveFace, Number(event.target.value))}
              />
              <button onClick={() => rollTo(setRollTurns, setActiveFace, rollTurns + 1)}>Roll right</button>
              <span>{rolledFaces(rollTurns)[0].replace("_", " ")} up</span>
              <button
                className={magnifierEnabled ? "activeTool" : ""}
                aria-pressed={magnifierEnabled}
                onClick={() => setMagnifierEnabled((enabled) => !enabled)}
              >
                Magnifier
              </button>
            </div>
            <div className="quickCutBar">
              <div className="quickCutTools">
                <div className="faceTabs">
                  {activeFaces.map((face) => (
                    <button
                      key={face}
                      className={activeFace === face ? "active" : ""}
                      onClick={() => {
                        setActiveFace(face);
                        setRollTurns(activeFaces.indexOf(face));
                      }}
                    >
                      {face.replace("_", " ")}
                    </button>
                  ))}
                </div>
              </div>
              <div className="quickCutButtons">
                <span>Quick cuts</span>
                <button
                  className="undoCutButton"
                  disabled={submitted || cuts.length === 0}
                  onClick={undoLastCut}
                  title="Remove the last cut"
                  aria-label="Remove the last cut"
                >
                  Back
                </button>
                {QUICK_CUT_NOMINAL_LENGTHS_FT.map((nominalLengthFt) => (
                  <button
                    key={nominalLengthFt}
                    disabled={submitted || !canAddQuickCut(nominalLengthFt)}
                    onClick={() => addQuickCut(nominalLengthFt)}
                    title={`${nominalLengthFt}' log, ${formatFeetInches(nominalLengthFt + TRIM_FT)} opening`}
                  >
                    {nominalLengthFt}'
                  </button>
                ))}
              </div>
            </div>
            {showComparison ? (
              <div className="comparisonStack">
                <div className="comparisonGraphicBlock">
                  <div className="comparisonGraphicHeader">
                    <span>Bucker</span>
                    <strong>${attempt.user.totalValue.toFixed(2)}</strong>
                  </div>
                  <LogGraphic
                    log={log}
                    cuts={cuts}
                    segments={userGraphicSegments}
                    alwaysShowSegmentBoxes
                    totalValue={attempt.user.totalValue}
                    totalValueLabel="bucker value"
                    activeFace={activeFace}
                    rollTurns={rollTurns}
                    magnifierEnabled={false}
                    readOnly
                    separated
                    onMoveCut={() => undefined}
                    onRemoveCut={() => undefined}
                    onAddCut={() => undefined}
                    onRoll={(nextRollTurns) => rollTo(setRollTurns, setActiveFace, nextRollTurns)}
                    productLabels={productLabels}
                  />
                </div>
                <div className="comparisonGraphicBlock">
                  <div className="comparisonGraphicHeader">
                    <span>Optimal</span>
                    <strong>${(attempt.optimized?.totalValue ?? 0).toFixed(2)}</strong>
                  </div>
                  <LogGraphic
                    log={log}
                    cuts={optimalCuts}
                    segments={optimalGraphicSegments}
                    alwaysShowSegmentBoxes
                    totalValue={attempt.optimized?.totalValue}
                    totalValueLabel="optimal value"
                    activeFace={activeFace}
                    rollTurns={rollTurns}
                    magnifierEnabled={false}
                    readOnly
                    separated
                    onMoveCut={() => undefined}
                    onRemoveCut={() => undefined}
                    onAddCut={() => undefined}
                    onRoll={(nextRollTurns) => rollTo(setRollTurns, setActiveFace, nextRollTurns)}
                    productLabels={productLabels}
                  />
                </div>
              </div>
            ) : (
              <LogGraphic
                log={log}
                cuts={cuts}
                segments={userGraphicSegments}
                alwaysShowSegmentBoxes={submitted}
                totalValue={submitted ? attempt.user.totalValue : undefined}
                totalValueLabel="bucker value"
                activeFace={activeFace}
                rollTurns={rollTurns}
                magnifierEnabled={magnifierEnabled}
                readOnly={submitted}
                separated={submitted}
                onMoveCut={moveCut}
                onRemoveCut={removeCut}
                onAddCut={addCut}
                onRoll={(nextRollTurns) => rollTo(setRollTurns, setActiveFace, nextRollTurns)}
                productLabels={productLabels}
              />
            )}
            {submitted && !showComparison && <SegmentSummaryBoxes segments={attempt.user.segments} productLabels={productLabels} />}
            <div className="actionRow">
              <button onClick={() => {
                setCuts([]);
                setResultMode(null);
              }}>
                Clear cuts
              </button>
              {submitted && <button onClick={() => setResultMode(null)}>Edit cuts</button>}
              <button className="primary" onClick={() => submitBuckingResult("bucker")}>
                Score bucker
              </button>
              <button className="primary" onClick={() => submitBuckingResult("compare")}>
                Compare optimal
              </button>
            </div>
          </div>

          <BuckingScoreboard scores={buckingScores} onReset={() => setBuckingScores([])} />

          {submitted && !showComparison && (
            <SegmentTable
              title="Bucker results"
              totalValue={attempt.user.totalValue}
              segments={attempt.user.segments}
              gradingBasis={sawlogGradingBasis}
              productLabels={productLabels}
            />
          )}

          {showComparison && (
            <>
              <section className="panel resultSummary">
                <div>
                  <p className="eyebrow">Bucker result</p>
                  <h2>${attempt.user.totalValue.toFixed(2)}</h2>
                </div>
                <div>
                  <p className="eyebrow">Optimal result</p>
                  <h2>${attempt.optimized?.totalValue.toFixed(2)}</h2>
                </div>
                <div>
                  <p className="eyebrow">Difference</p>
                  <h2>${Math.max(0, attempt.differenceFromModel).toFixed(2)}</h2>
                </div>
              </section>

              <SegmentComparisonTables
                buckerSegments={attempt.user.segments}
                optimalSegments={attempt.optimized?.segments ?? []}
                gradingBasis={sawlogGradingBasis}
                productLabels={productLabels}
              />

              <section className="panel feedbackGrid">
                <div>
                  <p className="eyebrow">Result notes</p>
                  <h2>${Math.max(0, attempt.differenceFromModel).toFixed(2)}</h2>
                  <p>Difference from optimal</p>
                </div>
                <div className="feedbackList">
                  <article className="feedback info">
                    <strong>Why this optimal pattern is higher</strong>
                    <p>{optimalPatternSummary(attempt.user.segments, attempt.optimized?.segments ?? [], productLabels)}</p>
                  </article>
                  {attempt.feedback.map((item) => (
                    <article key={item.title} className={`feedback ${item.tone}`}>
                      <strong>{item.title}</strong>
                      <p>{item.message}</p>
                    </article>
                  ))}
                </div>
              </section>
            </>
          )}
          </>
          )}
        </section>
      </section>
    </main>
  );
}

function PriceEditor({
  prices,
  species,
  productLabels,
  onChange
}: {
  prices: PriceTable;
  species: Species;
  productLabels: ProductLabels;
  onChange: (key: keyof PriceTable, value: string) => void;
}) {
  return (
    <div className="priceGrid">
      <p className="priceTitle">Prices for {species}, dollars per MBF</p>
      {PRODUCT_CLASSES.map((product) => (
        <label key={product}>
          {productLabels[product]}
          <input
            type="number"
            min="0"
            step="25"
            value={prices[product]}
            onChange={(event) => onChange(product, event.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

function SegmentSummaryBoxes({
  segments,
  productLabels
}: {
  segments: ReturnType<typeof scoreAttempt>["user"]["segments"];
  productLabels: ProductLabels;
}) {
  return (
    <div className="segmentSummaryBoxes">
      {segments.map((segment, index) => (
        <article className="segmentSummaryBox" key={segment.id}>
          <div className="segmentBoxHeader">
            <strong>Log {index + 1}</strong>
            <span>${segment.value.toFixed(2)}</span>
          </div>
          <dl>
            <div>
              <dt>length</dt>
              <dd>{segment.nominalLengthFt} ft{segment.trimAllowanceInches ? " trim allowance" : ""}</dd>
            </div>
            <div>
              <dt>diameter</dt>
              <dd>{segment.smallEndDiameterIn.toFixed(1)}"</dd>
            </div>
            <div>
              <dt>heart</dt>
              <dd>{segment.heartwoodDiameterIn.toFixed(1)}" / {segment.heartwoodPercent.toFixed(0)}%</dd>
            </div>
            <div>
              <dt>sweep</dt>
              <dd>{segment.sweepIn.toFixed(1)}"</dd>
            </div>
            <div>
              <dt>grade</dt>
              <dd>{productLabels[segment.product]}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function LogContextPills({ log, lengthLabel, ruleLabel }: { log: PracticeLog; lengthLabel?: string; ruleLabel?: string }) {
  return (
    <div className="logContextPills">
      <span>{log.species}</span>
      <span>{lengthLabel ?? `${log.totalLengthFt.toFixed(1)} ft`}</span>
      {ruleLabel && <span>{ruleLabel}</span>}
    </div>
  );
}

function BuckingScoreboard({ scores, onReset }: { scores: BuckingScore[]; onReset: () => void }) {
  if (scores.length === 0) return null;
  const totalUserValue = scores.reduce((total, score) => total + score.userValue, 0);
  const totalOptimalValue = scores.reduce((total, score) => total + score.optimalValue, 0);
  const overallRecovery = totalOptimalValue > 0 ? (totalUserValue / totalOptimalValue) * 100 : 0;
  const lastTen = scores.slice(-10);
  const lastTenUserValue = lastTen.reduce((total, score) => total + score.userValue, 0);
  const lastTenOptimalValue = lastTen.reduce((total, score) => total + score.optimalValue, 0);
  const lastTenRecovery = lastTenOptimalValue > 0 ? (lastTenUserValue / lastTenOptimalValue) * 100 : 0;
  const latest = scores[scores.length - 1];

  return (
    <section className="panel scoreboardPanel">
      <div className="panelHeader compact">
        <div>
          <p className="eyebrow">Scoreboard</p>
          <h2>Bucking recovery</h2>
        </div>
        <button onClick={onReset}>Reset</button>
      </div>
      <div className="scoreboardGrid">
        <div>
          <span>overall recovery</span>
          <strong>{overallRecovery.toFixed(1)}%</strong>
          <p>{scores.length} scored {scores.length === 1 ? "stem" : "stems"}</p>
        </div>
        <div>
          <span>last 10</span>
          <strong>{lastTenRecovery.toFixed(1)}%</strong>
          <p>{lastTen.length} recent {lastTen.length === 1 ? "stem" : "stems"}</p>
        </div>
        <div>
          <span>latest</span>
          <strong>{latest.recoveryPercent.toFixed(1)}%</strong>
          <p>{latest.species} | {LOG_SET_LABELS[latest.logSet]} stem</p>
        </div>
        <div>
          <span>total value recovered</span>
          <strong>${totalUserValue.toFixed(2)}</strong>
          <p>of ${totalOptimalValue.toFixed(2)} possible</p>
        </div>
      </div>
    </section>
  );
}

function GradingTrainer({
  exercise,
  exerciseIndex,
  totalExercises,
  activeFace,
  rollTurns,
  magnifierEnabled,
  selectedGrade,
  submitted,
  scoreEnabled,
  answers,
  gradingBasis,
  productLabels,
  onSelectGrade,
  onSubmit,
  onNext,
  onRoll,
  onToggleMagnifier
}: {
  exercise: GradingExercise;
  exerciseIndex: number;
  totalExercises: number;
  activeFace: Face;
  rollTurns: number;
  magnifierEnabled: boolean;
  selectedGrade: ProductClass | "";
  submitted: boolean;
  scoreEnabled: boolean;
  answers: GradingAnswer[];
  gradingBasis: SawlogGradingBasis;
  productLabels: ProductLabels;
  onSelectGrade: (grade: ProductClass) => void;
  onSubmit: () => void;
  onNext: () => void;
  onRoll: (nextRollTurns: number) => void;
  onToggleMagnifier: () => void;
}) {
  const correct = selectedGrade === exercise.segment.product;
  const answered = answers.length;
  const correctCount = answers.filter((answer) => answer.selected === answer.correct).length;
  const recent = answers.slice(-10);
  const recentCorrect = recent.filter((answer) => answer.selected === answer.correct).length;

  return (
    <>
      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">Log grading trainer</p>
            <h2>{exercise.log.title}</h2>
            <LogContextPills log={exercise.log} lengthLabel={`${exercise.segment.nominalLengthFt} ft`} />
          </div>
          <div className="gradingProgress">
            <strong>{exerciseIndex + 1}</strong>
            <span>of {totalExercises}</span>
          </div>
        </div>
        <div className="rollControls">
          <button onClick={() => onRoll(rollTurns - 1)}>Roll left</button>
          <input
            aria-label="Roll grading log"
            type="range"
            min="0"
            max="3"
            step="1"
            value={normalizedRoll(rollTurns)}
            onChange={(event) => onRoll(Number(event.target.value))}
          />
          <button onClick={() => onRoll(rollTurns + 1)}>Roll right</button>
          <span>{rolledFaces(rollTurns)[0].replace("_", " ")} up</span>
          <button className={magnifierEnabled ? "activeTool" : ""} aria-pressed={magnifierEnabled} onClick={onToggleMagnifier}>
            Magnifier
          </button>
        </div>
        <LogGraphic
          log={exercise.log}
          cuts={[]}
          segments={[exercise.segment]}
          activeFace={activeFace}
          rollTurns={rollTurns}
          magnifierEnabled={magnifierEnabled}
          preserveLengthScale
          showEndCookies
          readOnly
          onMoveCut={() => undefined}
          onRemoveCut={() => undefined}
          onAddCut={() => undefined}
          onRoll={onRoll}
          productLabels={productLabels}
        />
      </section>

      <section className="panel gradingPanel">
        <div className="gradingStats">
          <div><span>diameter</span><strong>{Math.round(exercise.segment.smallEndDiameterIn)}"</strong></div>
          <div><span>length</span><strong>{exercise.segment.nominalLengthFt} ft</strong></div>
          <div><span>heart</span><strong>{exercise.segment.heartwoodPercent.toFixed(0)}%</strong></div>
          <div><span>sweep</span><strong>{exercise.segment.sweepIn.toFixed(1)}"</strong></div>
          <div>
            <span>{gradingBasis === "clear_cuttings" ? "clear cuttings" : "clear faces"}</span>
            <strong>{gradingBasis === "clear_cuttings" ? exercise.segment.clearCuttingSummary : `${exercise.segment.clearFaceCount}/4`}</strong>
          </div>
        </div>
        <div className="gradeChoices">
          {PRODUCT_CLASSES.map((product) => (
            <button key={product} className={selectedGrade === product ? "active" : ""} onClick={() => onSelectGrade(product)}>
              {productLabels[product]}
            </button>
          ))}
        </div>
        <div className="actionRow">
          <button className="primary" disabled={!selectedGrade} onClick={onSubmit}>Submit grade</button>
          <button onClick={onNext}>Next log</button>
        </div>
        {submitted && (
          <article className={`gradingExplanation ${correct ? "correct" : "incorrect"}`}>
            <p className="eyebrow">{correct ? "Correct" : "Not quite"}</p>
            <h3>{productLabels[exercise.segment.product]}</h3>
            <p>{gradingExplanation(exercise.segment, selectedGrade || null, productLabels)}</p>
            <ul>
              {exercise.segment.eligibilityNotes.slice(0, 5).map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>
        )}
      </section>

      {scoreEnabled && (
        <section className="panel resultSummary">
          <div>
            <p className="eyebrow">Score</p>
            <h2>{answered === 0 ? "0%" : `${Math.round((correctCount / answered) * 100)}%`}</h2>
            <p>{correctCount} correct of {answered}</p>
          </div>
          <div>
            <p className="eyebrow">Last 10</p>
            <h2>{recent.length === 0 ? "0%" : `${Math.round((recentCorrect / recent.length) * 100)}%`}</h2>
            <p>{recentCorrect} correct of {recent.length}</p>
          </div>
          <div>
            <p className="eyebrow">Current</p>
            <h2>{submitted ? (correct ? "right" : "wrong") : "open"}</h2>
            <p>{submitted && selectedGrade ? `picked ${productLabels[selectedGrade]}` : "select a grade"}</p>
          </div>
        </section>
      )}
    </>
  );
}

function StandardsEditor({
  standards,
  species,
  customGradeLabels,
  productLabels,
  gradingBasis,
  onGradingBasisChange,
  onLabelChange,
  onChange,
  onReset
}: {
  standards: GradeStandards;
  species: Species;
  customGradeLabels: Partial<ProductLabels>;
  productLabels: ProductLabels;
  gradingBasis: SawlogGradingBasis;
  onGradingBasisChange: (value: SawlogGradingBasis) => void;
  onLabelChange: (product: ProductClass, value: string) => void;
  onChange: (product: ProductClass, field: keyof GradeStandard, value: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="standardsEditor">
      <div className="standardHeader">
        <p className="priceTitle">Grade standards for {species}</p>
        <button onClick={onReset}>Use Northern Hardwoods defaults</button>
      </div>
      <div className="gradingBasisPanel">
        <label>
          Sawlog grading method for this price set
          <select
            value={gradingBasis}
            onChange={(event) => onGradingBasisChange(event.target.value as SawlogGradingBasis)}
          >
            <option value="clear_faces">clear faces</option>
            <option value="clear_cuttings">clear cuttings</option>
          </select>
        </label>
        <p>
          One price set must use one sawlog grading method throughout. Changing this applies the same method to every
          sawlog grade below.
        </p>
      </div>
      {PRODUCT_CLASSES.map((product) => {
        const standard = standards[product];
        const usesSawlogGrading = product.includes("sawlog");
        return (
          <article className="standardCard" key={product}>
            <h3>{productLabels[product]}</h3>
            <div className="standardFields">
              <label className="standardNameField">
                grade name
                <input
                  value={customGradeLabels[product] ?? ""}
                  placeholder={PRODUCT_LABELS[product]}
                  onChange={(event) => onLabelChange(product, event.target.value)}
                />
              </label>
              <label>
                min SED
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={standard.minSmallEndDiameterIn}
                  onChange={(event) => onChange(product, "minSmallEndDiameterIn", event.target.value)}
                />
              </label>
              <label>
                lengths
                <input
                  value={standard.allowedNominalLengthsFt.join(", ")}
                  onChange={(event) => onChange(product, "allowedNominalLengthsFt", event.target.value)}
                />
              </label>
              {usesSawlogGrading && gradingBasis === "clear_faces" && (
                <label>
                  clear faces
                  <input
                    type="number"
                    min="0"
                    max="4"
                    step="1"
                    value={standard.minClearFaces}
                    onChange={(event) => onChange(product, "minClearFaces", event.target.value)}
                  />
                </label>
              )}
              {usesSawlogGrading && gradingBasis === "clear_cuttings" && (
                <>
                  <label>
                    min cutting ft
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={standard.minClearCuttingLengthFt}
                      onChange={(event) => onChange(product, "minClearCuttingLengthFt", event.target.value)}
                    />
                  </label>
                  <label>
                    max cuttings
                    <input
                      type="number"
                      min="0"
                      step="1"
                      value={standard.maxClearCuttings ?? ""}
                      placeholder="none"
                      onChange={(event) => onChange(product, "maxClearCuttings", event.target.value)}
                    />
                  </label>
                  <label>
                    clear portion
                    <input
                      value={formatProportionInput(standard.minClearCuttingProportion)}
                      onChange={(event) => onChange(product, "minClearCuttingProportion", event.target.value)}
                    />
                  </label>
                </>
              )}
              <label>
                max heart %
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={standard.maxHeartwoodPercent ?? ""}
                  placeholder="none"
                  onChange={(event) => onChange(product, "maxHeartwoodPercent", event.target.value)}
                />
              </label>
              <label>
                max sweep
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={standard.maxSweepIn ?? ""}
                  placeholder="none"
                  onChange={(event) => onChange(product, "maxSweepIn", event.target.value)}
                />
              </label>
              {usesSawlogGrading && (
                <label className="checkRow standardCheck">
                  <input
                    type="checkbox"
                    checked={standard.allowSmallTrimDefects}
                    onChange={(event) =>
                      onChange(product, "allowSmallTrimDefects", event.target.checked ? "true" : "false")
                    }
                  />
                  ignore defects 2&quot; or less fully inside 6&quot; trim
                </label>
              )}
            </div>
            <label>
              notes
              <textarea
                className="standardNotes"
                value={standard.notes}
                onChange={(event) => onChange(product, "notes", event.target.value)}
              />
            </label>
            {usesSawlogGrading && gradingBasis === "clear_cuttings" && (
              <p className="standardHelp">
                Clear cuttings are defect-free lengths on a grading face. For factory-log style rules, judge the best
                three faces; each clear cutting must run the full face width, meet the minimum length, stay within the
                maximum number of cuttings, and add up to the required clear portion.
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}

function DefectMark({
  defect,
  x,
  y,
  width,
  radius
}: {
  defect: Defect;
  x: number;
  y: number;
  width: number;
  radius: number;
}) {
  const hash = hashString(defect.id);
  const isVeneerBlocker = defect.impactClass === "informational" || defect.impactClass === "veneer_only";
  const sourceSize = defect.sourceSize ?? (defect.severity === "major" ? 9 : defect.severity === "moderate" ? 6 : 3);
  const sizeScale = clamp(0.72 + sourceSize / 12, 0.78, 1.82);
  const isLongMark = /seam|crack|channel|stain|sweep/.test(defect.type);
  const isSeam = /seam/.test(defect.type);
  const isHollow = /hollow/.test(defect.type);
  const verticalOffset = isSeam ? 0 : ((hash % 100) / 100 - 0.5) * Math.min(radius * 0.46, 10);
  const centerY = y + verticalOffset;
  const markWidth = isVeneerBlocker
    ? Math.min(14, Math.max(7, width * 0.28))
    : isSeam
      ? clamp(width, 54, 160)
      : Math.min(defect.severity === "major" ? 38 : 28, Math.max(9, width * (0.22 + sourceSize * 0.035)));
  const centerX = x + markWidth / 2;
  const isOpenMark = /open|catface|rot|stub|hollow/.test(defect.type);
  const severityScale = isVeneerBlocker ? 0.58 : defect.severity === "major" ? 1.05 : defect.severity === "moderate" ? 0.82 : 0.68;
  const maxMarkRadius = Math.max(1.6, radius * 0.42);
  const isVertical = defect.visualOrientation === "vertical";
  const knotRx = Math.min((isVeneerBlocker ? 4.2 : defect.severity === "major" ? 7.8 : 5.8) * severityScale * sizeScale, maxMarkRadius);
  const knotRy = Math.min((isVeneerBlocker ? 2.6 : defect.severity === "major" ? 5.8 : 4.4) * severityScale * sizeScale, Math.max(1.2, radius * 0.36));
  const displayRx = isVertical ? Math.max(1.8, knotRy * 0.72) : knotRx;
  const displayRy = isVertical ? Math.min(maxMarkRadius, knotRx * 0.86) : knotRy;
  const seamDrop = Math.min(radius * 0.95, 5 + sourceSize * 0.75);
  const seamStrokeWidth = clamp(1.2 + sourceSize / 10, 1.8, 4.8);

  return (
    <g className={`defect ${isSeam ? "seam" : ""} ${defect.impactClass} severity-${defect.severity}`}>
      <title>{`${defect.type.replaceAll("_", " ")}${defect.sourceSize ? `, source size ${defect.sourceSize}` : ""}`}</title>
      {isHollow ? (
        <>
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={displayRx * 1.08}
            ry={displayRy * 1.08}
            className="defectHollowRim"
          />
          <ellipse
            cx={centerX - displayRx * 0.06}
            cy={centerY}
            rx={Math.max(1.8, displayRx * 0.58)}
            ry={Math.max(1.4, displayRy * 0.56)}
            className="defectHollowCore"
          />
        </>
      ) : isSeam ? (
        <>
          <path
            d={`M ${x + 1} ${centerY} C ${x + markWidth * 0.35} ${centerY - seamDrop * 0.2}, ${x + markWidth * 0.68} ${centerY + seamDrop * 0.24}, ${x + markWidth - 1} ${centerY}`}
            className="defectSeam"
            strokeWidth={seamStrokeWidth}
          />
        </>
      ) : isLongMark ? (
        <>
          <path
            d={
              isVertical
                ? `M ${centerX} ${centerY - displayRy} C ${centerX - 3} ${centerY - displayRy * 0.34}, ${centerX + 3} ${centerY + displayRy * 0.24}, ${centerX - 1} ${centerY + displayRy}`
                : `M ${x + 1} ${centerY} C ${x + markWidth * 0.3} ${centerY - 4}, ${x + markWidth * 0.54} ${centerY + 4}, ${x + markWidth - 1} ${centerY - 1}`
            }
            className="defectSlash"
          />
          <path
            d={
              isVertical
                ? `M ${centerX + 3} ${centerY - displayRy * 0.8} C ${centerX + 1} ${centerY - displayRy * 0.22}, ${centerX + 4} ${centerY + displayRy * 0.4}, ${centerX + 1} ${centerY + displayRy * 0.88}`
                : `M ${x + 3} ${centerY + 4} C ${x + markWidth * 0.42} ${centerY + 1}, ${x + markWidth * 0.68} ${centerY + 5}, ${x + markWidth - 2} ${centerY + 2}`
            }
            className="defectScar"
          />
        </>
      ) : (
        <>
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={displayRx}
            ry={displayRy}
            className="defectKnot"
          />
          <ellipse
            cx={centerX - displayRx * 0.15}
            cy={centerY}
            rx={Math.max(1.3, displayRx * 0.34)}
            ry={Math.max(0.9, displayRy * 0.38)}
            className="defectCore"
          />
          {isOpenMark && <path d={`M ${centerX - displayRx} ${centerY + displayRy + 2} C ${centerX - 1} ${centerY + 1}, ${centerX + displayRx * 0.6} ${centerY + displayRy + 3}, ${centerX + displayRx * 1.2} ${centerY + displayRy}`} className="defectScar" />}
        </>
      )}
    </g>
  );
}

function LogGraphic({
  log,
  cuts,
  segments = [],
  alwaysShowSegmentBoxes = false,
  totalValue,
  totalValueLabel = "total value",
  activeFace,
  rollTurns,
  magnifierEnabled,
  preserveLengthScale = false,
  showEndCookies = false,
  readOnly = false,
  separated = false,
  productLabels,
  onMoveCut,
  onRemoveCut,
  onAddCut,
  onRoll
}: {
  log: PracticeLog;
  cuts: CutLine[];
  segments?: GraphicSegment[];
  alwaysShowSegmentBoxes?: boolean;
  totalValue?: number;
  totalValueLabel?: string;
  activeFace: Face;
  rollTurns: number;
  magnifierEnabled: boolean;
  preserveLengthScale?: boolean;
  showEndCookies?: boolean;
  readOnly?: boolean;
  separated?: boolean;
  productLabels: ProductLabels;
  onMoveCut: (id: string, positionFt: number) => void;
  onRemoveCut: (id: string) => void;
  onAddCut: (positionFt: number) => void;
  onRoll: (nextRollTurns: number) => void;
}) {
  const width = 920;
  const height = 520;
  const orderedFaces = rolledFaces(rollTurns);
  const visibleFaces: Face[] = [activeFace];
  const shape = log.shapeProfile ?? fallbackShape(log);
  const bark = barkStyleFor(log.species);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(null);
  const cutPositionsForDisplay = cuts.map((cut) => cut.positionFt).sort((a, b) => a - b);
  const pieceBoundaries = [0, ...cutPositionsForDisplay, log.totalLengthFt];
  const pieceGap = separated ? 36 : 0;
  const availableWidth = width - 64 - Math.max(0, pieceBoundaries.length - 2) * pieceGap;
  const fullLengthScale = availableWidth / log.totalLengthFt;
  const radiusScale = preserveLengthScale ? 1.72 : 1;
  const proportionalLengthPx = ((log.totalLengthFt * 12) / Math.max(1, diameterAt(log, 0))) * radiusAt(log, 0, radiusScale) * 2;
  const displayLengthPx = preserveLengthScale ? clamp(proportionalLengthPx * 3, 520, availableWidth) : availableWidth;
  const lengthScale = displayLengthPx / log.totalLengthFt;
  const leftPad = 32 + (availableWidth - displayLengthPx) / 2;
  const allDefects = uniqueDefects([
    ...log.visibleDefects,
    ...log.veneerOnlyDefects,
    ...log.sawlogAffectingDefects,
    ...log.bothVeneerAndSawlogDefects
  ]);
  const hollowCookiePositions = [0, ...cutPositionsForDisplay, log.totalLengthFt].filter(
    (position, index, positions) =>
      hollowDiameterAt(log, position) > 0.1 && positions.findIndex((item) => Math.abs(item - position) < 0.03) === index
  );

  function xFor(positionFt: number) {
    if (!separated) return leftPad + positionFt * lengthScale;
    const pieceIndex = Math.max(0, pieceBoundaries.findIndex((boundary, index) => positionFt >= boundary && positionFt <= pieceBoundaries[index + 1]) );
    return leftPad + positionFt * lengthScale + pieceIndex * pieceGap;
  }

  function xForPiece(positionFt: number, pieceIndex: number) {
    if (!separated) return xFor(positionFt);
    return leftPad + positionFt * lengthScale + pieceIndex * pieceGap;
  }

  function positionFor(clientX: number, svg: SVGSVGElement) {
    const rect = svg.getBoundingClientRect();
    const viewX = ((clientX - rect.left) / rect.width) * width;
    return clamp(((viewX - leftPad) / lengthScale), 0.5, log.totalLengthFt - 0.5);
  }

  function segmentForPiece(startFt: number, endFt: number) {
    return segments.find((segment) => Math.abs(segment.startFt - startFt) < 0.03 && Math.abs(segment.endFt - endFt) < 0.03);
  }

  return (
    <svg
      className="logGraphic singleStem"
      viewBox={`0 0 ${width} ${height}`}
      onPointerMove={(event) => setHoverPosition(positionFor(event.clientX, event.currentTarget))}
      onPointerLeave={() => setHoverPosition(null)}
      onWheel={(event) => {
        event.preventDefault();
        if (Math.abs(event.deltaY) < 2 && Math.abs(event.deltaX) < 2) return;
        onRoll(rollTurns + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));
      }}
      onClick={(event) => {
        if (readOnly) return;
        const target = event.target as Element;
        if (target.closest("[data-cut-handle]")) return;
        onAddCut(positionFor(event.clientX, event.currentTarget));
      }}
    >
      <defs>
        <linearGradient id="bark" x1="0" x2="1">
          <stop offset="0" stopColor={bark.shadow} />
          <stop offset="0.35" stopColor={bark.base} />
          <stop offset="0.72" stopColor={bark.highlight} />
          <stop offset="1" stopColor={bark.shadow} />
        </linearGradient>
        <linearGradient id="yellowBirchBark" gradientUnits="userSpaceOnUse" x1="0" x2={width} y1="0" y2="0">
          <stop offset="0" stopColor="#5f5946" />
          <stop offset="0.22" stopColor="#8a8061" />
          <stop offset="0.52" stopColor="#bcb17d" />
          <stop offset="0.78" stopColor="#e0d195" />
          <stop offset="1" stopColor="#f4e6b2" />
        </linearGradient>
        <linearGradient id="roundShade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".2" />
          <stop offset="0.22" stopColor="#ffffff" stopOpacity=".05" />
          <stop offset="0.58" stopColor="#000000" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity=".24" />
        </linearGradient>
        <linearGradient id="yellowBirchUpperStem" gradientUnits="userSpaceOnUse" x1="0" x2={width} y1="0" y2="0">
          <stop offset="0" stopColor="#f0df9a" stopOpacity="0" />
          <stop offset="0.42" stopColor="#f0df9a" stopOpacity=".08" />
          <stop offset="0.72" stopColor="#f3e1a0" stopOpacity=".34" />
          <stop offset="1" stopColor="#f8eab6" stopOpacity=".62" />
        </linearGradient>
        <pattern id="barkLines" width={bark.patternWidth} height={bark.patternHeight} patternUnits="userSpaceOnUse">
          {bark.pattern === "diamond" && (
            <>
              <path d="M0 18 L12 0 L24 18 L12 36 Z" stroke={bark.line} strokeOpacity=".44" fill="none" strokeWidth="1.4" />
              <path d="M12 0 L36 36 M-12 0 L12 36" stroke={bark.darkLine} strokeOpacity=".25" fill="none" strokeWidth="1" />
            </>
          )}
          {bark.pattern === "horizontalPeel" && (
            <>
              <path d="M0 5 C10 2, 18 8, 30 4 M0 15 C14 12, 18 20, 34 15 M2 27 C13 24, 24 31, 38 25" stroke={bark.line} strokeOpacity=".48" fill="none" strokeWidth="1.4" />
              <path d="M8 9 h18 M4 21 h24 M16 32 h18" stroke={bark.highlight} strokeOpacity=".46" fill="none" strokeWidth="2.4" />
            </>
          )}
          {bark.pattern === "yellowBirchPeel" && (
            <>
              <path d="M5 1 C3 8, 4 15, 7 22 M17 4 C14 12, 16 19, 13 28 M29 0 C26 8, 28 16, 31 25 M42 5 C39 13, 41 21, 38 31 M55 2 C52 11, 54 19, 57 29 M69 6 C66 14, 68 23, 65 34" stroke={bark.darkLine} strokeOpacity=".48" fill="none" strokeWidth="1.05" strokeLinecap="round" />
              <path d="M9 2 C7 10, 8 18, 11 26 M23 5 C20 13, 22 21, 19 30 M35 3 C32 12, 34 21, 37 31 M49 7 C46 16, 48 25, 45 36 M63 4 C60 13, 62 23, 65 34 M75 8 C72 16, 74 25, 71 36" stroke={bark.highlight} strokeOpacity=".76" fill="none" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 8 C7 6, 13 7, 18 5 M21 17 C27 15, 33 17, 39 14 M42 9 C49 7, 56 9, 62 6 M3 31 C10 29, 17 31, 24 28 M31 39 C39 36, 46 39, 54 36 M57 24 C64 22, 70 24, 77 21" stroke={bark.line} strokeOpacity=".48" fill="none" strokeWidth=".8" strokeLinecap="round" />
              <path d="M6 7 l7 -3 l3 5 l-9 5 Z M28 13 l9 -4 l4 5 l-10 7 Z M53 8 l8 -4 l4 5 l-9 6 Z M15 31 l10 -5 l3 6 l-11 7 Z M43 34 l11 -5 l4 6 l-12 8 Z M64 22 l8 -4 l3 5 l-9 6 Z" fill={bark.highlight} fillOpacity=".24" />
              <path d="M8 13 h5 M16 10 h4 M30 21 h7 M39 17 h4 M55 15 h6 M18 37 h8 M45 42 h9 M66 29 h6" stroke={bark.darkLine} strokeOpacity=".36" fill="none" strokeWidth=".8" strokeLinecap="round" />
              <path d="M3 18 v7 M12 20 v5 M22 9 v8 M35 27 v6 M47 20 v8 M61 14 v7 M70 18 v5 M5 43 v6 M13 46 v8 M29 33 v7 M39 47 v5 M52 31 v7 M63 39 v8 M72 33 v4" stroke={bark.darkLine} strokeOpacity=".58" fill="none" strokeWidth="1.05" strokeLinecap="round" />
              <path d="M9 24 v4 M26 17 v5 M43 12 v4 M57 27 v5 M21 42 v5 M49 45 v6 M68 47 v4" stroke={bark.darkLine} strokeOpacity=".46" fill="none" strokeWidth=".75" strokeLinecap="round" />
              <circle cx="31" cy="22" r=".45" fill={bark.darkLine} opacity=".3" />
              <circle cx="49" cy="9" r=".42" fill={bark.line} opacity=".28" />
              <circle cx="66" cy="42" r=".45" fill={bark.darkLine} opacity=".24" />
            </>
          )}
          {bark.pattern === "plates" && (
            <>
              <path d="M4 7 C12 5, 20 6, 28 5 M8 19 C16 17, 25 18, 34 17 M2 31 C12 29, 22 30, 32 29" stroke={bark.line} strokeOpacity=".46" fill="none" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M6 12 h12 M18 24 h14 M4 36 h18" stroke={bark.darkLine} strokeOpacity=".24" fill="none" strokeWidth="1.4" strokeLinecap="round" />
            </>
          )}
          {bark.pattern === "softMaplePlates" && (
            <>
              <path d="M4 6 h14 v6 H4 Z M25 9 h11 v5 H25 Z M42 5 h13 v6 H42 Z M10 23 h16 v6 H10 Z M35 20 h22 v7 H35 Z M2 35 h13 v5 H2 Z M27 37 h19 v5 H27 Z" fill={bark.highlight} fillOpacity=".14" />
              <path d="M3 8 C12 6, 20 8, 30 6 M34 13 C42 11, 50 13, 58 11 M7 18 C18 16, 28 18, 39 16 M1 29 C10 27, 21 29, 33 27 M38 32 C47 30, 55 32, 63 30 M8 43 C18 41, 29 43, 42 41" stroke={bark.darkLine} strokeOpacity=".5" fill="none" strokeWidth="1.15" strokeLinecap="round" />
              <path d="M6 14 h9 M20 12 h16 M43 17 h11 M4 25 h18 M28 24 h7 M47 26 h15 M13 34 h13 M32 39 h20 M55 38 h7" stroke={bark.line} strokeOpacity=".48" fill="none" strokeWidth="1" strokeLinecap="round" />
              <circle cx="18" cy="31" r=".7" fill={bark.darkLine} opacity=".34" />
              <circle cx="44" cy="8" r=".65" fill={bark.line} opacity=".38" />
              <circle cx="56" cy="34" r=".7" fill={bark.darkLine} opacity=".32" />
            </>
          )}
          {bark.pattern === "hardMaplePlates" && (
            <>
              <path d="M4 6 h12 v7 H4 Z M21 10 h14 v8 H21 Z M39 5 h12 v9 H39 Z M2 26 h13 v7 H2 Z M18 29 h15 v8 H18 Z M37 25 h17 v8 H37 Z" fill={bark.highlight} fillOpacity=".16" />
              <path d="M3 13 C8 12, 12 13, 17 12 M22 20 C27 19, 32 20, 37 19 M40 16 C45 15, 50 16, 55 15 M2 36 C7 35, 13 36, 18 35 M20 42 C26 41, 32 42, 38 41 M39 37 C45 36, 51 37, 56 36" stroke={bark.darkLine} strokeOpacity=".54" fill="none" strokeWidth="1.05" strokeLinecap="round" />
              <path d="M7 20 h8 M17 24 h5 M28 12 h9 M42 22 h8 M9 44 h10 M27 32 h8 M46 43 h7" stroke={bark.line} strokeOpacity=".48" fill="none" strokeWidth=".95" strokeLinecap="round" />
              <circle cx="12" cy="18" r=".8" fill={bark.darkLine} opacity=".42" />
              <circle cx="31" cy="36" r=".75" fill={bark.darkLine} opacity=".38" />
              <circle cx="48" cy="9" r=".8" fill={bark.line} opacity=".44" />
            </>
          )}
          {bark.pattern === "redOakRidges" && (
            <>
              <path d="M2 7 C11 5, 20 6, 31 5 C41 4, 48 6, 52 5 M4 21 C13 19, 23 20, 33 19 C42 18, 48 20, 53 19 M1 36 C12 34, 22 35, 32 34 C42 33, 50 35, 55 34" stroke={bark.darkLine} strokeOpacity=".5" fill="none" strokeWidth="1.45" strokeLinecap="round" />
              <path d="M5 11 C14 10, 23 11, 33 10 M11 25 C20 24, 29 25, 38 24 M7 42 C17 41, 27 42, 36 41 M39 43 C46 42, 51 43, 55 42" stroke={bark.line} strokeOpacity=".42" fill="none" strokeWidth=".95" strokeLinecap="round" />
              <path d="M6 2 h20 v7 H6 Z M31 4 h18 v7 H31 Z M8 16 h24 v8 H8 Z M36 17 h17 v7 H36 Z M5 31 h23 v8 H5 Z M33 30 h20 v8 H33 Z" fill={bark.highlight} fillOpacity=".26" />
              <path d="M8 8 h16 M33 10 h14 M10 23 h20 M38 23 h13 M7 38 h19 M35 37 h16" stroke={bark.highlight} strokeOpacity=".34" fill="none" strokeWidth="1.1" strokeLinecap="round" />
            </>
          )}
          {bark.pattern === "blackOakRidges" && (
            <>
              <path d="M2 6 C9 3, 17 5, 24 3 C32 1, 39 5, 45 3 M6 17 C13 14, 21 16, 29 14 C38 12, 46 16, 54 14 M1 31 C9 27, 18 30, 26 27 C35 24, 44 30, 55 27 M4 45 C12 41, 21 44, 31 41 C40 38, 48 44, 56 41" stroke={bark.darkLine} strokeOpacity=".68" fill="none" strokeWidth="1.55" strokeLinecap="round" />
              <path d="M8 2 h12 v7 H8 Z M24 11 h13 v8 H24 Z M39 4 h10 v9 H39 Z M3 25 h15 v7 H3 Z M20 35 h13 v9 H20 Z M36 29 h17 v8 H36 Z M45 45 h9 v6 H45 Z" fill={bark.highlight} fillOpacity=".16" />
              <path d="M7 12 h7 M16 24 h10 M28 8 h8 M39 20 h11 M5 38 h9 M25 32 h11 M41 47 h9" stroke={bark.line} strokeOpacity=".6" fill="none" strokeWidth="1.05" strokeLinecap="round" />
              <circle cx="12" cy="28" r=".9" fill={bark.darkLine} opacity=".42" />
              <circle cx="39" cy="43" r=".8" fill={bark.darkLine} opacity=".4" />
            </>
          )}
          {bark.pattern === "skiTracks" && (
            <>
              <path d="M3 7 C11 5, 20 6, 30 5 M2 19 C11 17, 21 18, 32 17 M4 31 C13 29, 23 30, 33 29" stroke={bark.line} strokeOpacity=".5" fill="none" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M7 11 h16 M8 23 h18 M3 35 h20" stroke={bark.highlight} strokeOpacity=".28" fill="none" strokeWidth="1.2" strokeLinecap="round" />
            </>
          )}
          {bark.pattern === "flaky" && (
            <>
              <path d="M2 2 h15 v10 H2 Z M20 0 h18 v13 H20 Z M5 16 h19 v9 H5 Z M27 18 h13 v12 H27 Z M0 29 h18 v8 H0 Z M21 32 h19 v7 H21 Z" fill={bark.line} fillOpacity=".22" />
              <path d="M2 12 h15 M20 13 h18 M5 25 h19 M27 30 h13 M0 37 h18 M21 39 h19" stroke={bark.darkLine} strokeOpacity=".38" fill="none" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M4 7 h10 M23 6 h12 M8 21 h13 M30 24 h8 M3 33 h12 M24 36 h14" stroke={bark.highlight} strokeOpacity=".22" fill="none" strokeWidth="1.1" strokeLinecap="round" />
            </>
          )}
          {bark.pattern === "cherryScales" && (
            <>
              <path d="M2 2 h10 l4 4 -2 8 H1 Z M17 0 h13 l3 5 -3 9 H15 Z M35 3 h12 l4 4 -2 8 H34 Z M6 17 h14 l3 5 -4 8 H4 Z M24 15 h13 l5 6 -3 10 H22 Z M43 19 h10 l4 5 -3 8 H42 Z M1 32 h15 l4 5 -3 10 H0 Z M22 34 h12 l4 5 -2 9 H20 Z M39 33 h14 l3 6 -3 9 H38 Z" fill={bark.line} fillOpacity=".36" />
              <path d="M1 14 h13 M16 14 h14 M35 15 h14 M4 30 h15 M22 31 h17 M42 32 h12 M0 47 h16 M20 48 h16 M38 48 h15" stroke={bark.darkLine} strokeOpacity=".62" fill="none" strokeWidth="1.15" strokeLinecap="round" />
              <path d="M4 5 h8 M19 4 h10 M38 7 h8 M8 21 h10 M27 19 h8 M46 23 h7 M4 36 h11 M24 38 h9 M42 37 h9" stroke={bark.highlight} strokeOpacity=".5" fill="none" strokeWidth="1.25" strokeLinecap="round" />
              <path d="M13 4 C16 7, 14 10, 12 13 M30 3 C34 7, 33 10, 29 14 M48 5 C52 9, 51 12, 48 15 M20 20 C24 24, 22 27, 18 30 M39 19 C43 23, 42 27, 38 31 M16 36 C20 40, 19 44, 15 48 M35 37 C39 41, 38 44, 35 48" stroke={bark.darkLine} strokeOpacity=".5" fill="none" strokeWidth=".9" strokeLinecap="round" />
              <circle cx="9" cy="11" r=".55" fill={bark.darkLine} opacity=".42" />
              <circle cx="29" cy="24" r=".55" fill={bark.darkLine} opacity=".38" />
              <circle cx="47" cy="42" r=".5" fill={bark.highlight} opacity=".34" />
            </>
          )}
          {bark.pattern === "genericFurrow" && (
            <path d="M2 5 C8 3, 13 4, 18 3 M3 12 C9 10, 14 11, 19 10 M1 17 C7 15, 13 16, 18 15" stroke={bark.line} strokeOpacity=".42" fill="none" strokeWidth="1.2" strokeLinecap="round" />
          )}
          {bark.pattern === "tulipPoplarMottle" && (
            <>
              <path d="M2 4 C9 2, 15 5, 22 3 M26 7 C33 4, 40 8, 48 5 M5 15 C13 12, 20 16, 28 13 M31 18 C39 15, 46 19, 55 16 M1 28 C9 25, 17 29, 25 26 M29 31 C38 28, 46 33, 56 29" stroke={bark.line} strokeOpacity=".58" fill="none" strokeWidth="1.25" strokeLinecap="round" />
              <path d="M4 7 h12 M18 9 h6 M30 11 h14 M47 9 h7 M7 20 h10 M21 22 h12 M38 23 h15 M3 34 h8 M15 33 h14 M34 36 h17" stroke={bark.highlight} strokeOpacity=".54" fill="none" strokeWidth="1.9" strokeLinecap="round" />
              <path d="M5 3 h11 v5 H5 Z M24 12 h12 v6 H24 Z M40 4 h10 v5 H40 Z M9 27 h14 v6 H9 Z M35 29 h13 v6 H35 Z" fill={bark.highlight} fillOpacity=".2" />
              <path d="M2 11 h5 M12 13 h4 M25 6 h6 M42 15 h5 M18 26 h7 M31 24 h5 M50 30 h4" stroke={bark.darkLine} strokeOpacity=".34" fill="none" strokeWidth=".85" strokeLinecap="round" />
              <circle cx="19" cy="5" r=".55" fill={bark.highlight} opacity=".46" />
              <circle cx="33" cy="25" r=".5" fill={bark.darkLine} opacity=".3" />
              <circle cx="52" cy="13" r=".5" fill={bark.highlight} opacity=".38" />
            </>
          )}
          {bark.pattern === "ashFurrow" && (
            <>
              <path d="M-4 5 L4 13 L12 5 M8 13 L16 5 L24 13 M20 5 L28 13 L36 5" stroke={bark.darkLine} strokeOpacity=".5" fill="none" strokeWidth=".95" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M-2 12 L4 6 L10 12 M12 6 L18 12 L24 6 M26 12 L32 6 L38 12" stroke={bark.line} strokeOpacity=".42" fill="none" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 4 C5 3, 8 3, 11 4 M15 14 C18 15, 21 15, 24 14 M27 4 C30 3, 33 3, 36 4" stroke={bark.highlight} strokeOpacity=".46" fill="none" strokeWidth="1.35" strokeLinecap="round" />
              <path d="M3 9 h4 M11 10 h3 M19 8 h5 M28 10 h4 M34 8 h3" stroke={bark.darkLine} strokeOpacity=".34" fill="none" strokeWidth=".7" strokeLinecap="round" />
              <circle cx="9" cy="7" r=".45" fill={bark.darkLine} opacity=".36" />
              <circle cx="22" cy="11" r=".4" fill={bark.highlight} opacity=".34" />
              <circle cx="31" cy="7" r=".45" fill={bark.darkLine} opacity=".32" />
            </>
          )}
          {bark.pattern === "hickoryScales" && (
            <>
              <path d="M1 5 C6 1, 11 3, 15 7 C19 11, 25 7, 31 3 M0 17 C6 13, 12 16, 18 20 C24 24, 29 19, 36 16 M2 30 C7 26, 13 28, 18 32 C24 37, 31 31, 36 28" stroke={bark.darkLine} strokeOpacity=".56" fill="none" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M3 7 h9 M18 8 h7 M27 5 h8 M6 18 h10 M21 22 h8 M1 31 h11 M17 33 h9" stroke={bark.line} strokeOpacity=".5" fill="none" strokeWidth="2.1" strokeLinecap="round" />
              <path d="M8 11 h8 M24 12 h7 M4 24 h8 M15 27 h10 M27 35 h7" stroke={bark.highlight} strokeOpacity=".23" fill="none" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M12 3 c4 0, 7 2, 8 5 M28 18 c4 0, 7 2, 8 4 M9 35 c4 0, 7 1, 10 4" stroke="#8d4a28" strokeOpacity=".42" fill="none" strokeWidth="2.3" strokeLinecap="round" />
              <ellipse cx="5" cy="13" rx="2.3" ry="1.1" fill="#9d522b" opacity=".35" />
              <ellipse cx="30" cy="25" rx="2.8" ry="1.2" fill="#a65a30" opacity=".34" />
            </>
          )}
          {bark.pattern === "walnutFineFurrow" && (
            <>
              <path d="M1 4 C7 2, 12 4, 18 2 M21 6 C28 4, 34 7, 41 4 M5 12 C12 10, 17 12, 24 10 M29 14 C35 12, 42 15, 48 12 M2 21 C9 18, 15 22, 22 19 M25 25 C32 22, 39 26, 47 23 M7 31 C14 28, 21 32, 29 29 M34 33 C40 30, 45 33, 50 31" stroke={bark.darkLine} strokeOpacity=".68" fill="none" strokeWidth="1.05" strokeLinecap="round" />
              <path d="M3 7 h5 M10 8 h7 M20 10 h4 M27 9 h9 M39 8 h6 M6 17 h8 M16 16 h5 M25 18 h6 M35 19 h10 M2 28 h6 M12 27 h9 M24 30 h5 M33 28 h8 M43 29 h5" stroke={bark.line} strokeOpacity=".62" fill="none" strokeWidth=".85" strokeLinecap="round" />
              <path d="M4 3 h7 v4 H4 Z M15 13 h9 v5 H15 Z M31 5 h7 v4 H31 Z M39 15 h8 v5 H39 Z M7 24 h10 v5 H7 Z M27 27 h8 v5 H27 Z" fill={bark.highlight} fillOpacity=".14" />
              <path d="M5 5 h4 M17 15 h5 M32 7 h4 M41 17 h5 M9 26 h6 M29 29 h5" stroke={bark.highlight} strokeOpacity=".28" fill="none" strokeWidth=".9" strokeLinecap="round" />
              <circle cx="13" cy="5" r=".45" fill={bark.darkLine} opacity=".45" />
              <circle cx="24" cy="22" r=".4" fill={bark.darkLine} opacity=".38" />
              <circle cx="43" cy="4" r=".45" fill={bark.highlight} opacity=".28" />
              <circle cx="48" cy="25" r=".4" fill={bark.darkLine} opacity=".42" />
            </>
          )}
        </pattern>
        <pattern id="barkFlecks" width="36" height="28" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="7" r="1.4" fill={bark.darkLine} opacity=".2" />
          <circle cx="27" cy="18" r="1" fill={bark.highlight} opacity=".25" />
          <path d="M16 4 h8 M4 21 h10 M23 9 h7" stroke={bark.darkLine} strokeOpacity=".18" strokeWidth="1.2" />
        </pattern>
      </defs>

      {visibleFaces.map((face, index) => {
        const y = 255;
        const facePosition = orderedFaces.indexOf(face);
        const rollAngle = rollTurns * (Math.PI / 2);
        const rollView = rollProjection(rollAngle);
        const frontFactor = 1;
        const faceShift = (facePosition - 1.5) * 3 + rollView.sideOffset;
        const pieces = separated
          ? pieceBoundaries.slice(0, -1).map((start, pieceIndex) => ({
              start,
              end: pieceBoundaries[pieceIndex + 1],
              index: pieceIndex
            }))
          : [{ start: 0, end: log.totalLengthFt, index: 0 }];
        const hoverBounds = hoverPosition === null ? null : segmentBoundsFor(log, cuts, hoverPosition);
        const hoverBoxWidth = 288;
        const hoverBoxHeight = readOnly ? 50 : 84;
        const hoverLabelX = hoverPosition === null ? 0 : clamp(xFor(hoverPosition), hoverBoxWidth / 2 + 12, width - hoverBoxWidth / 2 - 12);
        const hoverBoxX = hoverPosition === null ? 0 : clamp(hoverLabelX - hoverBoxWidth / 2, 24, width - hoverBoxWidth - 24);
        const hoverBoxY = readOnly ? height - 122 : height - 138;
        const hoverStemY = hoverPosition === null ? y : centerYAt(log, shape, hoverPosition, y, faceShift, rollView);
        const lensX = hoverPosition === null ? 0 : clamp(xFor(hoverPosition) + 92, 92, width - 92);
        const lensY = hoverPosition === null ? 0 : clamp(hoverStemY - 122, 86, height - 142);
        const lensClipId = `inspection-lens-${face}-${log.id}`;
        return (
          <g key={face} className={index === 0 ? "frontFace" : ""}>
            <text x="34" y={y - 10} className="svgLabel">{face.replace("_", " ")}</text>
            {pieces.map((piece) => {
              const segment = segmentForPiece(piece.start, piece.end);
              const clipId = `clip-${face}-${piece.index}-${log.id}`;
              const piecePath = buildLogPath(
                log,
                shape,
                y,
                frontFactor,
                faceShift,
                rollView,
                radiusScale,
                piece.start,
                piece.end,
                (positionFt: number) => xForPiece(positionFt, piece.index)
              );
              return (
                <g key={`${face}-piece-${piece.index}`}>
                  <clipPath id={clipId}>
                    <path d={piecePath} />
                  </clipPath>
                  <path d={piecePath} fill={log.species === "yellow birch" ? "url(#yellowBirchBark)" : "url(#bark)"} />
                  <path d={piecePath} fill="url(#barkLines)" />
                  <path d={piecePath} fill="url(#barkFlecks)" />
                  {log.species === "yellow birch" && <path d={piecePath} fill="url(#yellowBirchUpperStem)" />}
                  <path d={piecePath} fill="url(#roundShade)" />
                  <g clipPath={`url(#${clipId})`}>
                    {allDefects
                      .filter((defect) => defect.faces.includes(face) && overlaps(defect.startFt, defect.endFt, piece.start, piece.end))
                      .map((defect) => {
                        const defectStart = clamp(defect.startFt, piece.start, piece.end);
                        const defectEnd = clamp(defect.endFt, piece.start, piece.end);
                        const defectX = xForPiece(defectStart, piece.index);
                        const defectWidth = Math.max(8, xForPiece(defectEnd, piece.index) - defectX);
                        const defectMid = (defectStart + defectEnd) / 2;
                        return (
                          <DefectMark
                            key={`${piece.index}-${defect.id}`}
                            defect={defect}
                            x={defectX}
                            y={centerYAt(log, shape, defectMid, y, faceShift)}
                            width={defectWidth}
                            radius={radiusAt(log, defectMid, radiusScale)}
                          />
                        );
                      })}
                  </g>
                  {piece.start > 0 && (
                    <line
                      x1={xForPiece(piece.start, piece.index)}
                      x2={xForPiece(piece.start, piece.index)}
                      y1={centerYAt(log, shape, piece.start, y, faceShift) - radiusAt(log, piece.start, radiusScale)}
                      y2={centerYAt(log, shape, piece.start, y, faceShift) + radiusAt(log, piece.start, radiusScale)}
                      className="sawedEdge"
                    />
                  )}
                  {piece.end < log.totalLengthFt && (
                    <line
                      x1={xForPiece(piece.end, piece.index)}
                      x2={xForPiece(piece.end, piece.index)}
                      y1={centerYAt(log, shape, piece.end, y, faceShift) - radiusAt(log, piece.end, radiusScale)}
                      y2={centerYAt(log, shape, piece.end, y, faceShift) + radiusAt(log, piece.end, radiusScale)}
                      className="sawedEdge"
                    />
                  )}
                  {segment && (
                    <path
                      d={piecePath}
                      className="resultPieceHitbox"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedSegmentId((current) => (current === segment.id ? null : segment.id));
                      }}
                    />
                  )}
                </g>
              );
            })}
            {segments
              .filter((segment) => alwaysShowSegmentBoxes || segment.id === selectedSegmentId)
              .map((segment) => {
                const midFt = (segment.startFt + segment.endFt) / 2;
                const boxWidth = alwaysShowSegmentBoxes ? 118 : 236;
                const boxHeight = alwaysShowSegmentBoxes ? 72 : 132;
                const boxX = clamp(xFor(midFt) - boxWidth / 2, 24, width - boxWidth - 24);
                const labelSlot = alwaysShowSegmentBoxes ? segments.findIndex((item) => item.id === segment.id) % 2 : 0;
                const boxY = alwaysShowSegmentBoxes
                  ? 42 + labelSlot * 82
                  : clamp(centerYAt(log, shape, midFt, y, faceShift) - 176, 24, height - boxHeight - 44);
                return (
                  <g key={`${face}-${segment.id}-popup`} className={`segmentPopover ${alwaysShowSegmentBoxes ? "pinned" : ""}`}>
                    <rect x={boxX} y={boxY} width={boxWidth} height={boxHeight} rx="7" />
                    <text x={boxX + 9} y={boxY + 17} className="segmentPopoverTitle">
                      {productLabels[segment.product]}
                    </text>
                    <text x={boxX + 9} y={boxY + 34}>{segment.nominalLengthFt} ft  {segment.smallEndDiameterIn.toFixed(1)}"</text>
                    <text x={boxX + 9} y={boxY + 51}>heart {segment.heartwoodDiameterIn.toFixed(1)}" / {segment.heartwoodPercent.toFixed(0)}%</text>
                    <text x={boxX + 9} y={boxY + 68}>MBF {(segment.volumeMbf ?? 0).toFixed(3)}  ${(segment.value ?? 0).toFixed(2)}</text>
                  </g>
                );
              })}
            {alwaysShowSegmentBoxes && totalValue !== undefined && (
              <g className="optimalValueBanner">
                <rect x={width / 2 - 120} y="336" width="240" height="44" rx="8" />
                <text x={width / 2} y="364" textAnchor="middle">
                  {totalValueLabel} ${totalValue.toFixed(2)}
                </text>
              </g>
            )}
            {hoverPosition !== null && hoverBounds && !magnifierEnabled && (
              <g className="measurePreview">
                <line
                  x1={xFor(hoverPosition)}
                  x2={xFor(hoverPosition)}
                  y1={centerYAt(log, shape, hoverPosition, y, faceShift) - radiusAt(log, hoverPosition, radiusScale) * 2.4}
                  y2={centerYAt(log, shape, hoverPosition, y, faceShift) + radiusAt(log, hoverPosition, radiusScale) * 2.4}
                />
                <line
                  x1={xFor(hoverBounds.left)}
                  x2={xFor(hoverBounds.right)}
                  y1={height - 62}
                  y2={height - 62}
                />
                <circle cx={xFor(hoverBounds.left)} cy={height - 62} r="5" />
                <circle cx={xFor(hoverBounds.right)} cy={height - 62} r="5" />
                <rect x={hoverBoxX} y={hoverBoxY} width={hoverBoxWidth} height={hoverBoxHeight} rx="6" />
                <text x={hoverLabelX} y={readOnly ? height - 103 : height - 116} textAnchor="middle">
                  diameter here: {diameterAt(log, hoverPosition).toFixed(1)}"
                </text>
                <text x={hoverLabelX} y={readOnly ? height - 83 : height - 96} textAnchor="middle">
                  heart: {interpolateHeartwoodDiameter(log, hoverPosition).toFixed(1)}" / {calculateHeartwoodPercent(log, hoverPosition).toFixed(0)}%
                </text>
                {!readOnly && (
                  <>
                    <text x={hoverLabelX} y={height - 76} textAnchor="middle">
                      opening: {formatFeetInches(hoverBounds.right - hoverBounds.left)}
                    </text>
                    <text x={hoverLabelX} y={height - 56} textAnchor="middle">
                      cut here: {formatFeetInches(hoverPosition - hoverBounds.left)} / {formatFeetInches(hoverBounds.right - hoverPosition)}
                    </text>
                  </>
                )}
              </g>
            )}
            {hoverPosition !== null && magnifierEnabled && (
              <g className="inspectionLens" pointerEvents="none">
                <line x1={xFor(hoverPosition)} y1={hoverStemY - 5} x2={lensX} y2={lensY + 72} />
                <defs>
                  <clipPath id={lensClipId}>
                    <circle cx={lensX} cy={lensY} r="74" />
                  </clipPath>
                </defs>
                <circle cx={lensX + 4} cy={lensY + 5} r="76" className="lensShadow" />
                <g clipPath={`url(#${lensClipId})`}>
                  <rect x={lensX - 74} y={lensY - 74} width="148" height="148" className="lensBackplate" />
                  <g transform={`translate(${lensX} ${lensY}) scale(2.8) translate(${-xFor(hoverPosition)} ${-hoverStemY})`}>
                    {pieces.map((piece) => {
                      const magnifiedPath = buildLogPath(
                        log,
                        shape,
                        y,
                        frontFactor,
                        faceShift,
                        rollView,
                        radiusScale,
                        piece.start,
                        piece.end,
                        (positionFt: number) => xForPiece(positionFt, piece.index)
                      );
                      const magnifiedClipId = `lens-piece-${face}-${piece.index}-${log.id}`;
                      return (
                        <g key={`lens-piece-${piece.index}`}>
                          <clipPath id={magnifiedClipId}>
                            <path d={magnifiedPath} />
                          </clipPath>
                          <path d={magnifiedPath} fill="url(#bark)" />
                          <path d={magnifiedPath} fill="url(#barkLines)" />
                          <path d={magnifiedPath} fill="url(#barkFlecks)" />
                          <path d={magnifiedPath} fill="url(#roundShade)" />
                          <g clipPath={`url(#${magnifiedClipId})`}>
                            {allDefects
                              .filter((defect) => defect.faces.includes(face) && overlaps(defect.startFt, defect.endFt, piece.start, piece.end))
                              .map((defect) => {
                                const defectStart = clamp(defect.startFt, piece.start, piece.end);
                                const defectEnd = clamp(defect.endFt, piece.start, piece.end);
                                const defectX = xForPiece(defectStart, piece.index);
                                const defectWidth = Math.max(8, xForPiece(defectEnd, piece.index) - defectX);
                                const defectMid = (defectStart + defectEnd) / 2;
                                return (
                                  <DefectMark
                                    key={`lens-${piece.index}-${defect.id}`}
                                    defect={defect}
                                    x={defectX}
                                    y={centerYAt(log, shape, defectMid, y, faceShift)}
                                    width={defectWidth}
                                    radius={radiusAt(log, defectMid, radiusScale)}
                                  />
                                );
                              })}
                          </g>
                        </g>
                      );
                    })}
                  </g>
                </g>
                <circle cx={lensX} cy={lensY} r="74" className="lensRim" />
                <text x={lensX} y={lensY + 94} textAnchor="middle">inspection lens</text>
              </g>
            )}
            {cuts.map((cut) => (
              <g
                key={`${face}-${cut.id}`}
                className={`cutLine ${separated ? "hiddenCutLine" : ""}`}
                data-cut-handle="true"
                onClick={(event) => {
                  if (readOnly) return;
                  event.stopPropagation();
                  onRemoveCut(cut.id);
                }}
              >
                <CutCookie
                  log={log}
                  x={xFor(cut.positionFt)}
                  y={centerYAt(log, shape, cut.positionFt, y, faceShift) - radiusAt(log, cut.positionFt, radiusScale) - 38}
                  positionFt={cut.positionFt}
                  leaderDirection="down"
                />
                <ellipse
                  cx={xFor(cut.positionFt)}
                  cy={centerYAt(log, shape, cut.positionFt, y, faceShift)}
                  rx="6"
                  ry={Math.max(14, radiusAt(log, cut.positionFt, radiusScale) * shape.ovality)}
                  className="cutEnd"
                />
                <line
                  x1={xFor(cut.positionFt)}
                  x2={xFor(cut.positionFt)}
                  y1={centerYAt(log, shape, cut.positionFt, y, faceShift) - radiusAt(log, cut.positionFt, radiusScale) - 8}
                  y2={centerYAt(log, shape, cut.positionFt, y, faceShift) + radiusAt(log, cut.positionFt, radiusScale) + 8}
                />
                <rect
                  data-cut-handle="true"
                  x={xFor(cut.positionFt) - 7}
                  y={centerYAt(log, shape, cut.positionFt, y, faceShift) - radiusAt(log, cut.positionFt, radiusScale) - 10}
                  width="14"
                  height={radiusAt(log, cut.positionFt, radiusScale) * 2 + 20}
                  fill="transparent"
                  onPointerMove={(event) => {
                    if (!readOnly && event.buttons === 1) {
                      onMoveCut(cut.id, positionFor(event.clientX, event.currentTarget.ownerSVGElement!));
                    }
                  }}
                />
              </g>
            ))}
            {!separated &&
              hollowCookiePositions.map((positionFt) => (
                <HollowEndCookie
                  key={`${face}-hollow-cookie-${positionFt}`}
                  log={log}
                  positionFt={positionFt}
                  x={clamp(xFor(positionFt), 38, width - 38)}
                  y={centerYAt(log, shape, positionFt, y, faceShift) + radiusAt(log, positionFt, radiusScale) + 58}
                />
              ))}
            {showEndCookies && (
              <g className="endCookieRow">
                <LogEndCookie log={log} positionFt={0} x={clamp(xFor(0), 118, width - 118)} y={y - 112} label="butt end" />
                <LogEndCookie log={log} positionFt={log.totalLengthFt} x={clamp(xFor(log.totalLengthFt), 118, width - 118)} y={y - 112} label="top end" />
              </g>
            )}
          </g>
        );
      })}

      {Array.from({ length: Math.floor(log.totalLengthFt / 4) + 1 }, (_, index) => index * 4).map((tick) => (
        <g key={tick}>
          <line x1={xFor(tick)} x2={xFor(tick)} y1={height - 28} y2={height - 20} stroke="#22312b" />
          <text x={xFor(tick)} y={height - 8} textAnchor="middle" className="svgLabel">{tick}</text>
        </g>
      ))}
    </svg>
  );
}

function CutCookie({
  log,
  x,
  y,
  positionFt,
  leaderDirection = "down"
}: {
  log: PracticeLog;
  x: number;
  y: number;
  positionFt: number;
  leaderDirection?: "up" | "down" | "none";
}) {
  const diameter = diameterAt(log, positionFt);
  const heartDiameter = interpolateHeartwoodDiameter(log, positionFt);
  const hollowDiameter = hollowDiameterAt(log, positionFt);
  const radius = clamp(diameter * 0.92, 16, 27);
  const barkThickness = cookieBarkThickness(radius);
  const heartRadius = clamp(radius * (heartDiameter / Math.max(1, diameter)), 3, radius * maxCookieHeartRatio(log.species));
  const hollowRadius = radius * (hollowDiameter / Math.max(1, diameter));
  const ringStep = radius / 3.8;

  return (
    <g className="cutCookie" transform={`translate(${x} ${y})`} style={cookieStyleFor(log.species)}>
      <title>
        cut cookie: {diameter.toFixed(1)} in diameter, {heartDiameter.toFixed(1)} in heart{hollowDiameter > 0 ? `, ${hollowDiameter.toFixed(1)} in hollow center` : ""}
      </title>
      {leaderDirection === "down" && <line x1="0" x2="0" y1={radius + 3} y2={radius + 18} />}
      {leaderDirection === "up" && <line x1="0" x2="0" y1={-radius - 18} y2={-radius - 3} />}
      <circle r={radius + 3} className="cookieShadow" cx="2" cy="2" />
      <circle r={radius} className="cookieBark" />
      <circle r={radius - barkThickness} className="cookieWood" />
      <circle r={heartRadius} className="cookieHeart" />
      <circle r={ringStep} className="cookieRing" />
      <circle r={ringStep * 1.85} className="cookieRing" />
      <circle r={ringStep * 2.65} className="cookieRing" />
      <path d={`M ${-heartRadius * 0.72} ${-heartRadius * 0.18} C ${-heartRadius * 0.25} ${heartRadius * 0.02}, ${heartRadius * 0.2} ${-heartRadius * 0.08}, ${heartRadius * 0.7} ${heartRadius * 0.12}`} className="cookieHeartGrain" />
      <path d={`M ${-heartRadius * 0.55} ${heartRadius * 0.24} C ${-heartRadius * 0.1} ${heartRadius * 0.34}, ${heartRadius * 0.22} ${heartRadius * 0.18}, ${heartRadius * 0.56} ${heartRadius * 0.32}`} className="cookieHeartGrain" />
      {hollowDiameter > 0.1 && (
        <>
          <circle r={Math.max(2.4, hollowRadius + 1.6)} className="cookieHollowRim" />
          <circle r={Math.max(1.4, hollowRadius)} className="cookieHollow" />
        </>
      )}
      <path d={`M ${-radius * 0.72} -1 C ${-radius * 0.2} -4, ${radius * 0.24} 4, ${radius * 0.72} 1`} className="cookieCheck" />
    </g>
  );
}

function HollowEndCookie({ log, positionFt, x, y }: { log: PracticeLog; positionFt: number; x: number; y: number }) {
  return (
    <g className="buttHollowCookie">
      <CutCookie log={log} x={x} y={y} positionFt={positionFt} leaderDirection="up" />
      <text x={x} y={y + 48} textAnchor="middle">hollow</text>
    </g>
  );
}

function LogEndCookie({
  log,
  positionFt,
  x,
  y,
  label
}: {
  log: PracticeLog;
  positionFt: number;
  x: number;
  y: number;
  label: string;
}) {
  const diameter = diameterAt(log, positionFt);
  const heartDiameter = interpolateHeartwoodDiameter(log, positionFt);
  const hollowDiameter = hollowDiameterAt(log, positionFt);
  const radius = clamp(diameter * 1.35, 24, 42);
  const barkThickness = cookieBarkThickness(radius);
  const heartRadius = clamp(radius * (heartDiameter / Math.max(1, diameter)), 4, radius * maxCookieHeartRatio(log.species));
  const hollowRadius = radius * (hollowDiameter / Math.max(1, diameter));
  const ringStep = radius / 4.2;

  return (
    <g className="endCookie" transform={`translate(${x} ${y})`} style={cookieStyleFor(log.species)}>
      <title>
        {label}: {diameter.toFixed(1)} in diameter, {heartDiameter.toFixed(1)} in heart{hollowDiameter > 0 ? `, ${hollowDiameter.toFixed(1)} in hollow center` : ""}
      </title>
      <circle r={radius + 3} className="cookieShadow" cx="3" cy="4" />
      <circle r={radius} className="cookieBark" />
      <circle r={radius - barkThickness} className="cookieWood" />
      <circle r={heartRadius} className="cookieHeart" />
      <circle r={ringStep} className="cookieRing" />
      <circle r={ringStep * 1.9} className="cookieRing" />
      <circle r={ringStep * 2.8} className="cookieRing" />
      <path d={`M ${-heartRadius * 0.72} ${-heartRadius * 0.18} C ${-heartRadius * 0.25} ${heartRadius * 0.02}, ${heartRadius * 0.2} ${-heartRadius * 0.08}, ${heartRadius * 0.7} ${heartRadius * 0.12}`} className="cookieHeartGrain" />
      <path d={`M ${-heartRadius * 0.55} ${heartRadius * 0.24} C ${-heartRadius * 0.1} ${heartRadius * 0.34}, ${heartRadius * 0.22} ${heartRadius * 0.18}, ${heartRadius * 0.56} ${heartRadius * 0.32}`} className="cookieHeartGrain" />
      {hollowDiameter > 0.1 && (
        <>
          <circle r={Math.max(3.2, hollowRadius + 2.1)} className="cookieHollowRim" />
          <circle r={Math.max(2, hollowRadius)} className="cookieHollow" />
        </>
      )}
      <path d={`M ${-radius * 0.62} ${radius * 0.1} C ${-radius * 0.15} ${-radius * 0.08}, ${radius * 0.25} ${radius * 0.18}, ${radius * 0.62} ${-radius * 0.03}`} className="cookieCheck" />
      <text y={radius + 18} textAnchor="middle">{label}</text>
      <text y={radius + 34} textAnchor="middle">
        {diameter.toFixed(1)}" / heart {heartDiameter.toFixed(1)}"{hollowDiameter > 0.1 ? ` / hollow ${hollowDiameter.toFixed(1)}"` : ""}
      </text>
    </g>
  );
}

function hollowDiameterAt(log: PracticeLog, positionFt: number): number {
  const hollow = log.visibleDefects.find((defect) => defect.type === "hollow_center" && (defect.sourceSize ?? 0) > 0);
  if (!hollow?.sourceSize) return 0;
  const taperEnd = hollow.hollowTaperOutFt ?? hollow.endFt;
  if (positionFt <= hollow.startFt) return hollow.sourceSize;
  if (positionFt >= taperEnd) return 0;
  const fraction = (positionFt - hollow.startFt) / Math.max(0.1, taperEnd - hollow.startFt);
  return Math.max(0, hollow.sourceSize * (1 - fraction));
}

function cookieBarkThickness(radius: number): number {
  return clamp(radius * 0.055, 1.2, 2.1);
}

function maxCookieHeartRatio(species: Species): number {
  return species === "walnut" || species === "black cherry" ? 0.9 : 0.76;
}

function cookieStyleFor(species: Species): CSSProperties {
  if (species === "walnut" || species === "black cherry") {
    return {
      "--cookie-bark": "#4b3528",
      "--cookie-bark-stroke": "#2d2019",
      "--cookie-wood": "#ead7ad",
      "--cookie-wood-stroke": "#b08a55",
      "--cookie-heart": "#b46b31",
      "--cookie-heart-stroke": "#7a431f",
      "--cookie-ring": "rgba(120, 73, 32, 0.28)",
      "--cookie-grain": "rgba(96, 48, 18, 0.34)"
    } as CSSProperties;
  }

  return {};
}

function SegmentTable({
  title,
  totalValue,
  segments,
  gradingBasis,
  productLabels
}: {
  title: string;
  totalValue: number;
  segments: ReturnType<typeof scoreAttempt>["user"]["segments"];
  gradingBasis: SawlogGradingBasis;
  productLabels: ProductLabels;
}) {
  const species = segments[0]?.species;
  return (
    <section className="panel tablePanel">
      <div className="panelHeader compact">
        <div>
          <p className="eyebrow">{title}</p>
          <div className="resultHeadingRow">
            <h2>${totalValue.toFixed(2)}</h2>
            {species && <span>{species}</span>}
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Log length</th>
            <th>Diameter</th>
            <th>Heart</th>
            <th>Sweep</th>
            <th>{gradingBasis === "clear_cuttings" ? "Clear cuttings" : "Clear faces"}</th>
            <th>Product</th>
            <th>Gross MBF</th>
            <th>Deduct</th>
            <th>MBF</th>
            <th>$/MBF</th>
            <th>Value</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment) => (
            <tr key={segment.id}>
              <td>{segment.nominalLengthFt} ft</td>
              <td>{Math.round(segment.smallEndDiameterIn)}"</td>
              <td>{segment.heartwoodPercent.toFixed(0)}%</td>
              <td>{segment.sweepIn.toFixed(1)}"</td>
              <td>{gradingBasis === "clear_cuttings" ? segment.clearCuttingSummary : `${segment.clearFaceCount}/4`}</td>
              <td>{productLabels[segment.product]}</td>
              <td>{(segment.grossVolumeBoardFeet / 1000).toFixed(3)}</td>
              <td>{segment.scaleDeductionPercent}%</td>
              <td>{segment.volumeMbf.toFixed(3)}</td>
              <td>${segment.pricePerMbf}</td>
              <td>${segment.value.toFixed(2)}</td>
              <td>{[segment.trimAllowanceInches ? "1 in sawlog trim allowance" : "", segment.defects.map((defect) => defect.type.replaceAll("_", " ")).join(", ")].filter(Boolean).join(", ") || "clear"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function SegmentComparisonTables({
  buckerSegments,
  optimalSegments,
  gradingBasis,
  productLabels
}: {
  buckerSegments: ReturnType<typeof scoreAttempt>["user"]["segments"];
  optimalSegments: ReturnType<typeof scoreAttempt>["user"]["segments"];
  gradingBasis: SawlogGradingBasis;
  productLabels: ProductLabels;
}) {
  return (
    <section className="panel comparisonTables">
      <div className="panelHeader compact">
        <div>
          <p className="eyebrow">Log-by-log comparison</p>
          <h2>Bucker and optimal results</h2>
        </div>
      </div>
      <div className="comparisonTableGrid">
        <CompactSegmentTable title="Bucker" segments={buckerSegments} gradingBasis={gradingBasis} productLabels={productLabels} />
        <CompactSegmentTable title="Optimal" segments={optimalSegments} gradingBasis={gradingBasis} productLabels={productLabels} />
      </div>
    </section>
  );
}

function CompactSegmentTable({
  title,
  segments,
  gradingBasis,
  productLabels
}: {
  title: string;
  segments: ReturnType<typeof scoreAttempt>["user"]["segments"];
  gradingBasis: SawlogGradingBasis;
  productLabels: ProductLabels;
}) {
  return (
    <div className="compactResultTable">
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Log</th>
            <th>Len</th>
            <th>Dia</th>
            <th>{gradingBasis === "clear_cuttings" ? "Cuttings" : "Faces"}</th>
            <th>Product</th>
            <th>MBF</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment, index) => (
            <tr key={segment.id}>
              <td>{index + 1}</td>
              <td>{segment.nominalLengthFt}</td>
              <td>{Math.round(segment.smallEndDiameterIn)}"</td>
              <td>{gradingBasis === "clear_cuttings" ? segment.clearCuttingSummary : `${segment.clearFaceCount}/4`}</td>
              <td>{productLabels[segment.product]}</td>
              <td>{segment.volumeMbf.toFixed(3)}</td>
              <td>${segment.value.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function optimalPatternSummary(userSegments: SegmentScore[], optimalSegments: SegmentScore[], productLabels: ProductLabels) {
  if (optimalSegments.length === 0) return "No optimal comparison is available for this stem under the current settings.";
  const userValue = userSegments.reduce((total, segment) => total + segment.value, 0);
  const optimalValue = optimalSegments.reduce((total, segment) => total + segment.value, 0);
  const difference = optimalValue - userValue;
  if (difference <= 0.005) {
    return "Your pattern matches the highest-value pattern SumBuck found under the current specs, prices, defects, sweep, trim, and log rule.";
  }

  const userPattern = summarizePattern(userSegments, productLabels);
  const optimalPattern = summarizePattern(optimalSegments, productLabels);
  return `The optimal pattern recovers $${difference.toFixed(2)} more by changing the log mix: your pattern is ${userPattern}, while the optimal pattern is ${optimalPattern}. Check the comparison tables for the specific length, diameter, grade, and MBF differences.`;
}

function summarizePattern(segments: SegmentScore[], productLabels: ProductLabels) {
  const lengths = segments.map((segment) => `${segment.nominalLengthFt}'`).join(", ");
  const products = segments.reduce((counts, segment) => {
    const label = productLabels[segment.product];
    counts[label] = (counts[label] ?? 0) + 1;
    return counts;
  }, {} as Record<string, number>);
  const productMix = Object.entries(products)
    .map(([label, count]) => `${count} ${label}`)
    .join(", ");
  return `${segments.length} logs (${lengths}) producing ${productMix}`;
}

function graphicSegmentsFor(log: PracticeLog, cutPositionsFt: number[], scoredSegments: SegmentScore[]): GraphicSegment[] {
  return makeSegments(log, cutPositionsFt)
    .map((rawSegment) =>
      scoredSegments.find(
        (segment) => Math.abs(segment.startFt - rawSegment.startFt) < 0.03 && Math.abs(segment.endFt - rawSegment.endFt) < 0.03
      )
    )
    .filter((segment): segment is SegmentScore => Boolean(segment));
}

function buildGradingExercises(
  sourceLogs: PracticeLog[],
  species: Species,
  prices: PriceTable,
  logRule: LogRule,
  standards: GradeStandards
): GradingExercise[] {
  const nominalLengths = [8, 9, 10, 11, 12, 13, 14, 15, 16];
  const exercises: GradingExercise[] = [];
  for (let index = 0; exercises.length < 100 && index < sourceLogs.length * 3; index += 1) {
    const source = sourceLogs[index % sourceLogs.length];
    const nominalLength = nominalLengths[index % nominalLengths.length];
    const rawLength = nominalLength + TRIM_FT;
    if (source.totalLengthFt < rawLength + 1) continue;
    const maxStart = Math.max(0, source.totalLengthFt - rawLength);
    const startFt = index % 6 === 0 ? 0 : roundForDisplay(((index * 5.7) % Math.max(1, maxStart * 10)) / 10);
    const log = gradingLogFromSource(source, species, exercises.length + 1, startFt, startFt + rawLength);
    const rawSegment = makeSegments(log, [])[0];
    if (!rawSegment) continue;
    const segment = scoreSegment(rawSegment, prices, logRule, standards);
    exercises.push({
      id: log.id,
      log,
      segment
    });
  }
  return exercises;
}

function gradingLogFromSource(source: PracticeLog, species: Species, index: number, startFt: number, endFt: number): PracticeLog {
  const totalLengthFt = roundForDisplay(endFt - startFt);
  const sampleFractions = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const baseShape = shapePointAt(source.shapeProfile, startFt);
  const defects = allDefects(source)
    .filter((defect) => overlaps(defect.startFt, defect.endFt, startFt, endFt))
    .map((defect) => ({
      ...defect,
      id: `grading-${index}-${defect.id}`,
      startFt: clamp(roundForDisplay(defect.startFt - startFt), 0, totalLengthFt),
      endFt: clamp(roundForDisplay(defect.endFt - startFt), 0, totalLengthFt)
    }))
    .filter((defect) => defect.endFt > defect.startFt);

  return applySpeciesProfile({
    ...source,
    id: `grading-${String(index).padStart(3, "0")}`,
    title: `grading log ${String(index).padStart(3, "0")}`,
    species,
    totalLengthFt,
    diameterPoints: sampleFractions.map((fraction) => ({
      positionFt: roundForDisplay(totalLengthFt * fraction),
      diameterIn: roundForDisplay(diameterAt(source, startFt + totalLengthFt * fraction))
    })),
    heartwoodPoints: sampleFractions.map((fraction) => ({
      positionFt: roundForDisplay(totalLengthFt * fraction),
      diameterIn: roundForDisplay(interpolateHeartwoodDiameter(source, startFt + totalLengthFt * fraction))
    })),
    shapeProfile: {
      ...source.shapeProfile,
      shapePoints: sampleFractions.map((fraction) => {
        const sourcePosition = startFt + totalLengthFt * fraction;
        const point = shapePointAt(source.shapeProfile, sourcePosition);
        return {
          positionFt: roundForDisplay(totalLengthFt * fraction),
          sweepOffsetIn: roundForDisplay(point.sweepOffsetIn - baseShape.sweepOffsetIn),
          topIrregularityIn: point.topIrregularityIn,
          bottomIrregularityIn: point.bottomIrregularityIn
        };
      })
    },
    visibleDefects: defects,
    veneerOnlyDefects: defects.filter((defect) => defect.impactClass === "veneer_only"),
    sawlogAffectingDefects: defects.filter((defect) => defect.impactClass === "sawlog_grade"),
    bothVeneerAndSawlogDefects: defects.filter((defect) => defect.impactClass === "veneer_and_sawlog"),
    modelSolutionCutPositionsFt: [],
    modelSolutionExplanation: "",
    teachingObjective: "",
    instructionalPointTags: undefined,
    instructionalNote: undefined
  }, species);
}

function gradingExplanation(segment: SegmentScore, selected: ProductClass | null, productLabels: ProductLabels) {
  const picked = selected ? productLabels[selected] : "no grade";
  const correct = productLabels[segment.product];
  const details = `${segment.nominalLengthFt} ft, ${Math.round(segment.smallEndDiameterIn)} in diameter, ${segment.sweepIn.toFixed(1)} in sweep, ${segment.heartwoodPercent.toFixed(0)}% heart, and ${segment.clearFaceCount}/4 clear faces.`;
  if (selected === segment.product) return `This log is ${correct}. It meets that grade with ${details}`;
  return `You selected ${picked}, but this log grades as ${correct}. The controlling measurements are ${details}`;
}

function roundForDisplay(value: number) {
  return Math.round(value * 10) / 10;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function parseLengths(value: string) {
  return value
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item) && item > 0)
    .sort((a, b) => a - b);
}

function parseProportion(value: string) {
  const trimmed = value.trim();
  if (trimmed.endsWith("%")) {
    const percent = Number(trimmed.slice(0, -1));
    return Number.isFinite(percent) ? percent / 100 : 0;
  }
  if (trimmed.includes("/")) {
    const [top, bottom] = trimmed.split("/").map((item) => Number(item.trim()));
    if (top >= 0 && bottom > 0) return top / bottom;
  }
  const numeric = Number(trimmed);
  if (!Number.isFinite(numeric)) return 0;
  return numeric > 1 ? numeric / 100 : numeric;
}

function formatProportionInput(value: number) {
  if (Math.abs(value - 5 / 6) < 0.001) return "5/6";
  if (Math.abs(value - 3 / 4) < 0.001) return "3/4";
  if (Math.abs(value - 2 / 3) < 0.001) return "2/3";
  if (Math.abs(value - 1 / 2) < 0.001) return "1/2";
  if (Math.abs(value - 1 / 3) < 0.001) return "1/3";
  return `${Math.round(value * 100)}%`;
}

const DEFAULT_SPECIES_GRADE_STANDARDS = SPECIES.reduce((next, species) => {
  next[species] = speciesDefaults(species);
  return next;
}, {} as SpeciesGradeStandards);

function speciesDefaults(species: Species): GradeStandards {
  return cloneStandards(NORTHERN_HARDWOODS_MARKET.standardsBySpecies[species]);
}

function cloneStandards(standards: GradeStandards): GradeStandards {
  return PRODUCT_CLASSES.reduce((next, product) => {
    next[product] = { ...standards[product], allowedNominalLengthsFt: [...standards[product].allowedNominalLengthsFt] };
    return next;
  }, {} as GradeStandards);
}

function cloneSpeciesStandards(standardsBySpecies: SpeciesGradeStandards): SpeciesGradeStandards {
  return SPECIES.reduce((next, species) => {
    next[species] = cloneStandards(standardsBySpecies[species]);
    return next;
  }, {} as SpeciesGradeStandards);
}

function mergeStandards(parsed: Partial<GradeStandards>, species: Species): GradeStandards {
  const defaults = NORTHERN_HARDWOODS_MARKET.standardsBySpecies[species];
  const merged = PRODUCT_CLASSES.reduce((next, product) => {
    next[product] = { ...defaults[product], ...parsed[product], product };
    return next;
  }, {} as GradeStandards);
  const basis = merged.number_1_sawlog.sawlogGradingBasis === "clear_cuttings" ? "clear_cuttings" : "clear_faces";
  return applySawlogGradingBasisToStandards(merged, basis);
}

function mergeSpeciesStandards(parsed: unknown): SpeciesGradeStandards {
  if (isSpeciesStandardsShape(parsed)) {
    const firstSpecies = SPECIES.find((species) => parsed[species]?.number_1_sawlog);
    const basis = firstSpecies && parsed[firstSpecies]?.number_1_sawlog?.sawlogGradingBasis === "clear_cuttings" ? "clear_cuttings" : "clear_faces";
    const merged = SPECIES.reduce((next, species) => {
      next[species] = mergeStandards(parsed[species] ?? {}, species);
      return next;
    }, {} as SpeciesGradeStandards);
    return applySawlogGradingBasisToSpeciesStandards(merged, basis);
  }

  const migrated = mergeStandards((parsed ?? {}) as Partial<GradeStandards>, "hard maple");
  const basis = migrated.number_1_sawlog.sawlogGradingBasis;
  return applySawlogGradingBasisToSpeciesStandards(
    SPECIES.reduce((next, species) => {
      next[species] = species === "hard maple" ? migrated : speciesDefaults(species);
      return next;
    }, {} as SpeciesGradeStandards),
    basis
  );
}

function isSpeciesStandardsShape(value: unknown): value is Partial<SpeciesGradeStandards> {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return SPECIES.some((species) => Boolean(record[species]));
}

function applySawlogGradingBasisToSpeciesStandards(standards: SpeciesGradeStandards, basis: SawlogGradingBasis): SpeciesGradeStandards {
  return SPECIES.reduce((next, species) => {
    next[species] = applySawlogGradingBasisToStandards(standards[species], basis);
    return next;
  }, {} as SpeciesGradeStandards);
}

function applySawlogGradingBasisToStandards(standards: GradeStandards, basis: SawlogGradingBasis): GradeStandards {
  return PRODUCT_CLASSES.reduce((next, product) => {
    next[product] = product.includes("sawlog") ? { ...standards[product], sawlogGradingBasis: basis } : standards[product];
    return next;
  }, {} as GradeStandards);
}

function clonePricesBySpecies(pricesBySpecies: PricesBySpecies): PricesBySpecies {
  return SPECIES.reduce((next, species) => {
    next[species] = { ...pricesBySpecies[species] };
    return next;
  }, {} as PricesBySpecies);
}

function emptyCustomGradeLabels(): CustomGradeLabels {
  return SPECIES.reduce((next, species) => {
    next[species] = {};
    return next;
  }, {} as CustomGradeLabels);
}

function productLabelsFor(customLabels: Partial<ProductLabels> = {}): ProductLabels {
  return PRODUCT_CLASSES.reduce((next, product) => {
    const label = customLabels[product]?.trim();
    next[product] = label || PRODUCT_LABELS[product];
    return next;
  }, {} as ProductLabels);
}

function mergeCustomGradeLabels(parsed: unknown): CustomGradeLabels {
  if (!parsed || typeof parsed !== "object") return emptyCustomGradeLabels();
  const record = parsed as Partial<Record<Species, Partial<Record<ProductClass, unknown>>>>;
  return SPECIES.reduce((next, species) => {
    next[species] = PRODUCT_CLASSES.reduce((labels, product) => {
      const value = record[species]?.[product];
      if (typeof value === "string") labels[product] = value;
      return labels;
    }, {} as Partial<ProductLabels>);
    return next;
  }, {} as CustomGradeLabels);
}

function mergeSavedCustomMarket(parsed: unknown): SavedCustomMarket | null {
  if (!parsed || typeof parsed !== "object") return null;
  const record = parsed as Partial<SavedCustomMarket>;
  if (!record.species || !SPECIES.includes(record.species)) return null;
  const species = record.species;
  return {
    name: typeof record.name === "string" && record.name.trim() ? record.name : `${species} custom market`,
    species,
    logRule: record.logRule === "doyle" || record.logRule === "scribner" || record.logRule === "international_1_4"
      ? record.logRule
      : NORTHERN_HARDWOODS_MARKET.logRule,
    prices: mergePriceTable(record.prices ?? {}, species),
    standards: mergeStandards(record.standards ?? {}, species),
    gradeLabels: mergeCustomGradeLabels({ [species]: record.gradeLabels ?? {} })[species],
    savedAt: typeof record.savedAt === "string" ? record.savedAt : new Date().toISOString()
  };
}

function mergePriceTable(parsed: Partial<PriceTable>, species: Species): PriceTable {
  const defaults = NORTHERN_HARDWOODS_MARKET.pricesBySpecies[species];
  return PRODUCT_CLASSES.reduce((next, product) => {
    next[product] = Number(parsed[product] ?? defaults[product]) || 0;
    return next;
  }, {} as PriceTable);
}

function mergePricesBySpecies(parsed: unknown): PricesBySpecies {
  if (isPricesBySpeciesShape(parsed)) {
    return SPECIES.reduce((next, species) => {
      next[species] = mergePriceTable(parsed[species] ?? {}, species);
      return next;
    }, {} as PricesBySpecies);
  }

  const hardMaplePrices = mergePriceTable((parsed ?? {}) as Partial<PriceTable>, "hard maple");
  return SPECIES.reduce((next, species) => {
    next[species] = species === "hard maple" ? hardMaplePrices : { ...NORTHERN_HARDWOODS_MARKET.pricesBySpecies[species] };
    return next;
  }, {} as PricesBySpecies);
}

function isPricesBySpeciesShape(value: unknown): value is Partial<PricesBySpecies> {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return SPECIES.some((species) => Boolean(record[species]));
}

function rolledFaces(rollTurns: number): Face[] {
  const base: Face[] = ["face_1", "face_2", "face_3", "face_4"];
  const turns = normalizedRoll(rollTurns);
  return [...base.slice(turns), ...base.slice(0, turns)];
}

function normalizedRoll(rollTurns: number): number {
  return ((rollTurns % 4) + 4) % 4;
}

function rollTo(
  setRollTurns: (value: number) => void,
  setActiveFace: (value: Face) => void,
  nextRollTurns: number
) {
  setRollTurns(nextRollTurns);
  setActiveFace(rolledFaces(nextRollTurns)[0]);
}

function segmentBoundsFor(log: PracticeLog, cuts: CutLine[], positionFt: number) {
  const positions = [0, ...cuts.map((cut) => cut.positionFt).sort((a, b) => a - b), log.totalLengthFt];
  const right = positions.find((position) => position > positionFt) ?? log.totalLengthFt;
  const left = [...positions].reverse().find((position) => position < positionFt) ?? 0;
  return { left, right };
}

function uniqueDefects(defects: Defect[]): Defect[] {
  return defects.filter((defect, index) => defects.findIndex((item) => item.id === defect.id) === index);
}

function hashString(value: string): number {
  return [...value].reduce((total, character) => (total * 31 + character.charCodeAt(0)) % 9973, 7);
}

function formatFeetInches(distanceFt: number) {
  const totalInches = Math.max(0, Math.round(distanceFt * 12));
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  return `${feet}' ${inches}"`;
}

function barkStyleFor(species: PracticeLog["species"]) {
  type BarkPattern =
    | "diamond"
    | "horizontalPeel"
    | "yellowBirchPeel"
    | "plates"
    | "softMaplePlates"
    | "hardMaplePlates"
    | "redOakRidges"
    | "blackOakRidges"
    | "skiTracks"
    | "flaky"
    | "cherryScales"
    | "genericFurrow"
    | "tulipPoplarMottle"
    | "ashFurrow"
    | "hickoryScales"
    | "walnutFineFurrow";
  type BarkStyle = {
    base: string;
    shadow: string;
    highlight: string;
    line: string;
    darkLine: string;
    pattern: BarkPattern;
    patternWidth: number;
    patternHeight: number;
  };

  const styles: Record<PracticeLog["species"], BarkStyle> = {
    "hard maple": {
      base: "#73736d",
      shadow: "#343430",
      highlight: "#a2a197",
      line: "#4a4a45",
      darkLine: "#24231f",
      pattern: "hardMaplePlates",
      patternWidth: 56,
      patternHeight: 48
    },
    "soft maple": {
      base: "#777166",
      shadow: "#46433d",
      highlight: "#a59e8f",
      line: "#3a3731",
      darkLine: "#24221f",
      pattern: "softMaplePlates",
      patternWidth: 64,
      patternHeight: 46
    },
    "red oak": {
      base: "#625e55",
      shadow: "#302d28",
      highlight: "#9b9483",
      line: "#4a453d",
      darkLine: "#23211d",
      pattern: "redOakRidges",
      patternWidth: 52,
      patternHeight: 56
    },
    "black oak": {
      base: "#5a4f43",
      shadow: "#29241f",
      highlight: "#8f7d68",
      line: "#443a31",
      darkLine: "#1d1915",
      pattern: "blackOakRidges",
      patternWidth: 56,
      patternHeight: 52
    },
    "white oak": {
      base: "#9a9485",
      shadow: "#5d5a52",
      highlight: "#c3bcaa",
      line: "#696356",
      darkLine: "#403d36",
      pattern: "flaky",
      patternWidth: 42,
      patternHeight: 38
    },
    "white ash": {
      base: "#8b8371",
      shadow: "#3f3b32",
      highlight: "#d2c6a8",
      line: "#6a614f",
      darkLine: "#2f2a22",
      pattern: "ashFurrow",
      patternWidth: 34,
      patternHeight: 18
    },
    hickory: {
      base: "#514b40",
      shadow: "#24211c",
      highlight: "#807664",
      line: "#332f28",
      darkLine: "#171411",
      pattern: "hickoryScales",
      patternWidth: 38,
      patternHeight: 40
    },
    "yellow birch": {
      base: "#bfb57f",
      shadow: "#766f58",
      highlight: "#eee1a7",
      line: "#887f5d",
      darkLine: "#4d493b",
      pattern: "yellowBirchPeel",
      patternWidth: 78,
      patternHeight: 54
    },
    "black cherry": {
      base: "#342d2a",
      shadow: "#14110f",
      highlight: "#7b7168",
      line: "#25201d",
      darkLine: "#0d0b0a",
      pattern: "cherryScales",
      patternWidth: 56,
      patternHeight: 50
    },
    "tulip poplar": {
      base: "#969284",
      shadow: "#565247",
      highlight: "#d4d0bf",
      line: "#6c685d",
      darkLine: "#3c3932",
      pattern: "tulipPoplarMottle",
      patternWidth: 58,
      patternHeight: 40
    },
    walnut: {
      base: "#4a463d",
      shadow: "#211f1b",
      highlight: "#7b7364",
      line: "#302d27",
      darkLine: "#14120f",
      pattern: "walnutFineFurrow",
      patternWidth: 50,
      patternHeight: 36
    }
  };

  return styles[species] ?? {
    base: "#6b4b2f",
    shadow: "#4b3525",
    highlight: "#8a6845",
    line: "#2e2118",
    darkLine: "#1f1711",
    pattern: "genericFurrow",
    patternWidth: 18,
    patternHeight: 18
  };
}

function rollProjection(rollAngle: number) {
  return {
    vertical: Math.cos(rollAngle),
    side: Math.sin(rollAngle),
    sideOffset: Math.sin(rollAngle) * 16,
    surfaceBand: Math.sin(rollAngle) * 10
  };
}

function buildLogPath(
  log: PracticeLog,
  shape: NonNullable<PracticeLog["shapeProfile"]>,
  baseY: number,
  frontFactor: number,
  faceShift: number,
  rollView = rollProjection(0),
  radiusScale: number | ((positionFt: number) => number) = 1,
  startFt: number | ((positionFt: number) => number) = 0,
  endFt: number | ((positionFt: number) => number) = log.totalLengthFt,
  xFor: unknown = (positionFt: number) => xForPosition(log, 920, positionFt)
) {
  const normalized = normalizePathArgs(log, radiusScale, startFt, endFt, xFor);
  const samples = Array.from({ length: 9 }, (_, index) => normalized.startFt + ((normalized.endFt - normalized.startFt) * index) / 8);
  const top = samples.map((position) => {
    const radius = radiusAt(log, position, normalized.radiusScale);
    const center = centerYAt(log, shape, position, baseY, faceShift, rollView);
    return `${normalized.xFor(position)} ${center - radius * frontFactor}`;
  });
  const bottom = samples
    .slice()
    .reverse()
    .map((position) => {
      const radius = radiusAt(log, position, normalized.radiusScale);
      const center = centerYAt(log, shape, position, baseY, faceShift, rollView);
      return `${normalized.xFor(position)} ${center + radius * frontFactor}`;
    });

  return `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;
}

function buildHeartwoodPath(
  log: PracticeLog,
  shape: NonNullable<PracticeLog["shapeProfile"]>,
  baseY: number,
  frontFactor: number,
  faceShift: number,
  rollView = rollProjection(0),
  radiusScale: number | ((positionFt: number) => number) = 1,
  startFt: number | ((positionFt: number) => number) = 0,
  endFt: number | ((positionFt: number) => number) = log.totalLengthFt,
  xFor: unknown = (positionFt: number) => xForPosition(log, 920, positionFt)
) {
  const normalized = normalizePathArgs(log, radiusScale, startFt, endFt, xFor);
  const samples = Array.from({ length: 9 }, (_, index) => normalized.startFt + ((normalized.endFt - normalized.startFt) * index) / 8);
  const top = samples.map((position) => {
    const radius = heartwoodRadiusAt(log, position, normalized.radiusScale);
    const center = centerYAt(log, shape, position, baseY, faceShift, rollView);
    return `${normalized.xFor(position)} ${center - radius * frontFactor}`;
  });
  const bottom = samples
    .slice()
    .reverse()
    .map((position) => {
      const radius = heartwoodRadiusAt(log, position, normalized.radiusScale);
      const center = centerYAt(log, shape, position, baseY, faceShift, rollView);
      return `${normalized.xFor(position)} ${center + radius * frontFactor}`;
    });

  return `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;
}

function normalizePathArgs(
  log: PracticeLog,
  radiusScale: number | ((positionFt: number) => number),
  startFt: number | ((positionFt: number) => number),
  endFt: number | ((positionFt: number) => number),
  xFor: unknown
) {
  const fallbackXFor = (positionFt: number) => xForPosition(log, 920, positionFt);
  if (typeof endFt === "function") {
    return {
      radiusScale: 1,
      startFt: typeof radiusScale === "number" ? radiusScale : 0,
      endFt: typeof startFt === "number" ? startFt : log.totalLengthFt,
      xFor: endFt
    };
  }
  return {
    radiusScale: typeof radiusScale === "number" ? radiusScale : 1,
    startFt: typeof startFt === "number" ? startFt : 0,
    endFt: typeof endFt === "number" ? endFt : log.totalLengthFt,
    xFor: typeof xFor === "function" ? xFor as (positionFt: number) => number : fallbackXFor
  };
}

function centerYAt(
  log: PracticeLog,
  shape: NonNullable<PracticeLog["shapeProfile"]>,
  positionFt: number,
  baseY: number,
  faceShift: number,
  rollView = rollProjection(0)
) {
  const point = shapePointAt(shape, positionFt);
  const verticalSweepPixels = point.sweepOffsetIn * 1.85 * rollView.vertical;
  const sideSweepPixels = point.sweepOffsetIn * 0.72 * rollView.side;
  const apparentOvalRoll = Math.sin((positionFt / Math.max(1, log.totalLengthFt)) * Math.PI) * rollView.side * 10;
  return baseY + verticalSweepPixels + sideSweepPixels + apparentOvalRoll + faceShift;
}

function radiusAt(log: PracticeLog, positionFt: number, scale = 1) {
  return Math.max(5, diameterAt(log, positionFt) * 0.78 * scale);
}

function heartwoodRadiusAt(log: PracticeLog, positionFt: number, scale = 1) {
  return Math.max(1.4, interpolateHeartwoodDiameter(log, positionFt) * 0.78 * scale);
}

function diameterAt(log: PracticeLog, positionFt: number) {
  const points = [...log.diameterPoints].sort((a, b) => a.positionFt - b.positionFt);
  if (positionFt <= points[0].positionFt) return points[0].diameterIn;
  if (positionFt >= points[points.length - 1].positionFt) return points[points.length - 1].diameterIn;
  const right = points.find((point) => point.positionFt >= positionFt) ?? points[points.length - 1];
  const left = [...points].reverse().find((point) => point.positionFt <= positionFt) ?? points[0];
  const span = right.positionFt - left.positionFt || 1;
  const fraction = (positionFt - left.positionFt) / span;
  return left.diameterIn + (right.diameterIn - left.diameterIn) * fraction;
}

function shapePointAt(shape: NonNullable<PracticeLog["shapeProfile"]>, positionFt: number) {
  const points = [...shape.shapePoints].sort((a, b) => a.positionFt - b.positionFt);
  if (positionFt <= points[0].positionFt) return points[0];
  if (positionFt >= points[points.length - 1].positionFt) return points[points.length - 1];
  const right = points.find((point) => point.positionFt >= positionFt) ?? points[points.length - 1];
  const left = [...points].reverse().find((point) => point.positionFt <= positionFt) ?? points[0];
  const span = right.positionFt - left.positionFt || 1;
  const fraction = (positionFt - left.positionFt) / span;
  return {
    positionFt,
    sweepOffsetIn: left.sweepOffsetIn + (right.sweepOffsetIn - left.sweepOffsetIn) * fraction,
    topIrregularityIn: left.topIrregularityIn + (right.topIrregularityIn - left.topIrregularityIn) * fraction,
    bottomIrregularityIn: left.bottomIrregularityIn + (right.bottomIrregularityIn - left.bottomIrregularityIn) * fraction
  };
}

function xForPosition(log: PracticeLog, width: number, positionFt: number) {
  return 32 + (positionFt / log.totalLengthFt) * (width - 64);
}

function fallbackShape(log: PracticeLog): NonNullable<PracticeLog["shapeProfile"]> {
  return {
    sweepDirection: "right",
    ovality: 0.9,
    barkRidgeFrequency: 16,
    shapePoints: [0, 0.25, 0.5, 0.75, 1].map((fraction, index) => ({
      positionFt: log.totalLengthFt * fraction,
      sweepOffsetIn: Math.sin(fraction * Math.PI) * 4,
      topIrregularityIn: Math.sin(index) * 0.8,
      bottomIrregularityIn: Math.cos(index) * 0.8
    }))
  };
}
