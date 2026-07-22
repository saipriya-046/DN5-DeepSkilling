# CI/CD Example (Week 6 topic)

A working GitHub Actions pipeline you can drop into any of your React app
folders (e.g. copy `.github/workflows/react-ci-cd.yml` into HOL17-fetchuserapp
or your BrochureAI repo root).

## What it does
1. **CI (Continuous Integration)** — on every push or pull request to `main`:
   - Checks out the code
   - Installs Node.js + npm dependencies
   - Runs the test suite (`npm test`)
   - Builds the production bundle (`npm run build`)
   - Uploads the build as a downloadable artifact
2. **CD (Continuous Deployment)** — only after CI passes, and only on a push
   to `main` (not on PRs):
   - Downloads the build artifact
   - Deploys it (placeholder step — swap in Azure Static Web Apps, Netlify,
     Vercel, or GitHub Pages depending on where you want it hosted)

## How to actually use it
1. Copy the `.github/` folder into the root of any of your GitHub repos
   (must contain a `package.json` with `test` and `build` scripts — every
   CRA project from week5/week6 already has these).
2. Push to GitHub. Go to the repo's **Actions** tab — you'll see the
   pipeline run automatically.
3. To wire up real deployment, pick a target:
   - **GitHub Pages**: add `gh-pages` npm package + `actions/deploy-pages`
   - **Azure Static Web Apps**: use `Azure/static-web-apps-deploy@v1` with
     a deployment token stored in GitHub Secrets
   - **Vercel/Netlify**: connecting the repo directly in their dashboard is
     usually simpler than scripting it in Actions

## Why this matters for interviews
Being able to say "I set up a CI pipeline that runs tests and builds on
every push" is a concrete, verifiable differentiator for mass-recruiter and
product-company interviews alike — it shows you understand the deployment
lifecycle, not just how to write code.
