# SumBuck

First-pass prototype for a browser-based hardwood log bucking practice app.

## What is included

- Next.js + TypeScript app structure
- 100 original local practice logs covering the requested species, with 95 including at least one veneer-only defect
- Prices and log-rule selection in tabs, with Doyle, Scribner, and International 1/4 supported
- Product-specific defect model, including veneer-only defects
- Large semi-realistic SVG stem view with species-specific bark palettes/textures, taper, sweep, irregular edges, oval end-grain, defects, click-to-cut, live feet/inches spacing, roll controls, scale, and model overlay
- Segment table with grade/product, volume, price, value, and defect notes
- Scoring against a model solution and a simple optimizer
- JSON import/export area for local practice-log editing
- Unit tests for the calculation engine

## Run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Verify

```bash
npm run typecheck
npm test
npm run build
```

The grading rules in `lib/calculations.ts` are intentionally simplified prototype rules. Veneer-only defects block veneer products while leaving sawlog clear-face grading untouched.
