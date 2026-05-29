# Deploy SumBuck with GitHub Pages

This copy has already been prepared for GitHub Pages.

Changed files added for deployment:

- `next.config.ts` now exports the app as a static site and automatically handles the repository subpath used by GitHub Pages.
- `.github/workflows/deploy.yml` builds and deploys the app through GitHub Actions.
- `.gitignore` keeps build folders and dependency folders out of the repository.
- `public/.nojekyll` prevents GitHub Pages from ignoring the `_next` folder.

## Upload the files to GitHub

1. Open your SumBuck repository on GitHub.
2. Click **Add file**.
3. Click **Upload files**.
4. Drag the contents of this unzipped folder into the upload window.
5. Do not upload the outer zip file itself.
6. Commit the upload to the `main` branch.

If GitHub will not let you upload folders through the browser, use GitHub Desktop instead:

1. Install and open GitHub Desktop.
2. Choose **File > Clone repository** and select your SumBuck repository.
3. Copy all files and folders from this prepared SumBuck folder into the cloned repository folder.
4. In GitHub Desktop, enter a summary such as `Add SumBuck app`.
5. Click **Commit to main**.
6. Click **Push origin**.

## Turn on GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings**.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Save if GitHub shows a save button.

## Watch the deployment

1. Go to the repository **Actions** tab.
2. Open the workflow named **Deploy SumBuck to GitHub Pages**.
3. When it finishes successfully, GitHub will show the live Pages URL.

The live address will usually look like this:

`https://YOUR-GITHUB-NAME.github.io/YOUR-REPOSITORY-NAME/`
