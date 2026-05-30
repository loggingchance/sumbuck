"use client";

import { useMemo, useState, type ReactNode } from "react";
import { SUMBUCK_USER_MANUAL } from "@/data/userManual";

type ManualBlock =
  | { type: "heading"; level: number; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

interface ManualTocItem {
  id: string;
  text: string;
}

interface ManualSearchSection {
  id: string;
  title: string;
  body: string;
}

const manualBlocks = parseManual(SUMBUCK_USER_MANUAL);
const manualToc = manualBlocks
  .filter((block): block is Extract<ManualBlock, { type: "heading" }> => block.type === "heading" && block.level === 2)
  .map<ManualTocItem>((block) => ({ id: block.id, text: block.text }));
const manualSearchSections = buildSearchSections(manualBlocks);

export function UserManual() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchManual(query, manualSearchSections), [query]);
  const cleanQuery = query.trim();

  return (
    <article className="panel manualPanel">
      <div className="manualHero">
        <p className="eyebrow">Manual</p>
        <h2>SumBuck User Manual</h2>
        <p>Use this as an in-app reference while practicing bucking, grading, and market setup.</p>
      </div>

      <section className="manualQuery" aria-label="Query manual">
        <label htmlFor="manual-query">Ask or search the manual</label>
        <div className="manualQueryRow">
          <input
            id="manual-query"
            value={query}
            placeholder="Try trim, custom market, clear faces, optimal, grading..."
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && <button onClick={() => setQuery("")}>Clear</button>}
        </div>
        {cleanQuery ? (
          <div className="manualQueryResults">
            <p>
              {results.length === 0
                ? "No manual sections match that query."
                : `${results.length} matching ${results.length === 1 ? "section" : "sections"}`}
            </p>
            {results.length > 0 && (
              <ul>
                {results.map((result) => (
                  <li key={result.id}>
                    <a href={`#${result.id}`}>{result.title}</a>
                    <span>{result.snippet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <p className="manualQueryHint">Type a word or phrase to find the most relevant manual sections.</p>
        )}
      </section>

      <nav className="manualToc" aria-label="Manual contents">
        <h3>Contents</h3>
        <div>
          {manualToc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.text}
            </a>
          ))}
        </div>
      </nav>

      <div className="manualContent">
        {manualBlocks.map((block, index) => renderManualBlock(block, index))}
      </div>
    </article>
  );
}

function renderManualBlock(block: ManualBlock, index: number): ReactNode {
  if (block.type === "heading") {
    const Tag = `h${Math.min(block.level, 4)}` as "h1" | "h2" | "h3" | "h4";
    return (
      <Tag key={`${block.id}-${index}`} id={block.id}>
        {block.text}
      </Tag>
    );
  }

  if (block.type === "list") {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag key={`list-${index}`}>
        {block.items.map((item, itemIndex) => (
          <li key={`${item}-${itemIndex}`}>{renderInlineMarkdown(item)}</li>
        ))}
      </ListTag>
    );
  }

  return <p key={`paragraph-${index}`}>{renderInlineMarkdown(block.text)}</p>;
}

function parseManual(markdown: string): ManualBlock[] {
  const blocks: ManualBlock[] = [];
  const lines = markdown.split(/\r?\n/);
  const slugCounts = new Map<string, number>();
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let orderedList = false;

  function flushParagraph() {
    if (paragraphLines.length === 0) return;
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ").trim() });
    paragraphLines = [];
  }

  function flushList() {
    if (listItems.length === 0) return;
    blocks.push({ type: "list", ordered: orderedList, items: listItems });
    listItems = [];
  }

  function uniqueSlug(text: string) {
    const base = slugify(text);
    const count = slugCounts.get(base) ?? 0;
    slugCounts.set(base, count + 1);
    return count === 0 ? base : `${base}-${count + 1}`;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const text = headingMatch[2].trim();
      blocks.push({ type: "heading", level: headingMatch[1].length, text, id: uniqueSlug(text) });
      continue;
    }

    const unorderedMatch = line.match(/^-\s+(.+)$/);
    const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
    if (unorderedMatch || orderedMatch) {
      flushParagraph();
      const nextOrdered = Boolean(orderedMatch);
      if (listItems.length > 0 && orderedList !== nextOrdered) flushList();
      orderedList = nextOrdered;
      listItems.push((orderedMatch?.[1] ?? unorderedMatch?.[1] ?? "").trim());
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function buildSearchSections(blocks: ManualBlock[]): ManualSearchSection[] {
  const sections: ManualSearchSection[] = [];
  let current: ManualSearchSection | null = null;

  for (const block of blocks) {
    if (block.type === "heading") {
      if (current) sections.push(current);
      current = { id: block.id, title: block.text, body: block.text };
      continue;
    }

    if (!current) current = { id: "top", title: "SumBuck User Manual", body: "" };
    if (block.type === "paragraph") current.body += ` ${stripInlineMarkdown(block.text)}`;
    if (block.type === "list") current.body += ` ${block.items.map(stripInlineMarkdown).join(" ")}`;
  }

  if (current) sections.push(current);
  return sections;
}

function searchManual(query: string, sections: ManualSearchSection[]) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
  if (terms.length === 0) return [];

  return sections
    .map((section) => {
      const haystack = `${section.title} ${section.body}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return {
        id: section.id,
        title: section.title,
        snippet: makeSnippet(section.body, terms),
        score
      };
    })
    .filter((result) => result.score > 0)
    .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
    .slice(0, 8);
}

function makeSnippet(text: string, terms: string[]) {
  const normalized = text.replace(/\s+/g, " ").trim();
  const lower = normalized.toLowerCase();
  const firstHit = terms
    .map((term) => lower.indexOf(term))
    .filter((index) => index >= 0)
    .sort((left, right) => left - right)[0];
  const start = Math.max(0, (firstHit ?? 0) - 70);
  const snippet = normalized.slice(start, start + 170);
  return `${start > 0 ? "... " : ""}${snippet}${start + 170 < normalized.length ? " ..." : ""}`;
}

function renderInlineMarkdown(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function stripInlineMarkdown(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}
