# SumBuck

SumBuck is a browser-based hardwood log bucking and grading training app.

It lets users practice bucking tree-length stems, grade pre-cut logs, enter market specifications and prices, and compare their bucking pattern with the highest-value pattern found under the current SumBuck rules.

## Features

- Bucking practice with practice and instruction stem sets
- Log grading trainer with scorekeeping
- Northern Hardwoods Market defaults
- Custom one-species market entry for prices, grade names, and specifications
- Clear-face and clear-cutting grading modes
- Veneer, sawlog, sweep, heartwood, trim, hollow, seam, and defect handling
- Compare-optimal view with side-by-side bucker and optimal results
- Bucking recovery scoreboard
- In-app user manual with searchable help
- First-visit entry overlay
- Static export support for GitHub Pages

## Run Locally

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

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to the `main` branch, enable GitHub Pages in the repository settings and choose GitHub Actions as the Pages source.

## Notes

SumBuck is an educational training model. Its optimizer compares bucking patterns under the currently selected species, prices, specifications, trim rules, visible defect rules, sweep rules, heart rules, and log rule.
