# DevOps & CI/CD — Concepts + Practical Walkthrough

## 1. What is DevOps?

DevOps merges **Dev**elopment and **Op**erations into one continuous
practice, instead of two teams that hand code off to each other. The goal:
ship changes faster, more reliably, with less manual coordination.

**Key practices:**
- Continuous Integration (CI) — merge + test code constantly, not in big batches
- Continuous Delivery/Deployment (CD) — every passing build is releasable (or auto-released)
- Infrastructure as Code — servers/environments defined in version-controlled files, not clicked together manually
- Monitoring & Logging — know what's happening in production, not just "it compiled"
- Automation everywhere — builds, tests, deployments, rollbacks

## 2. CI vs CD — the actual difference

| | Continuous Integration | Continuous Delivery | Continuous Deployment |
|---|---|---|---|
| What happens | Merge code + run tests automatically | CI, plus auto-package a releasable build | CI + CD, plus auto-push to production |
| Human step needed | None to merge, but no auto-release | Someone clicks "deploy" | Nothing — it just ships |
| Your `cicd-example` in week6 | ✅ (test + build job) | ✅ (build artifact ready) | ⚠️ (deploy step is a placeholder — flip it on when you're ready) |

## 3. Walk through YOUR pipeline (from week6/cicd-example)

Open `week6/cicd-example/.github/workflows/react-ci-cd.yml`. Trace it stage by stage:

1. **Trigger** — `on: push/pull_request to main`. This is the automation
   hook: nobody has to remember to run tests, GitHub does it every time.
2. **build-and-test job** — checks out code, installs deps, runs
   `npm test`, runs `npm run build`. If ANY step fails, the whole job goes
   red and (if this were a required check) the PR can't merge.
3. **deploy job** — `needs: build-and-test` means it only runs if the
   previous job succeeded, and `if: github.ref == 'refs/heads/main'`
   means it only fires on the real branch, not every PR.

This is a real, minimal DevOps pipeline. The only thing missing for true
"Continuous Deployment" is filling in the actual deploy step (Azure
Static Web Apps / Netlify / Vercel token).

## 4. Popular CI/CD tools (just know what each is)

- **Jenkins** — self-hosted, oldest/most flexible, needs your own server
- **GitHub Actions** — what you're using; lives inside GitHub, YAML-based
- **GitLab CI/CD** — same idea, built into GitLab
- **CircleCI** — hosted SaaS alternative, popular pre-GitHub-Actions

## 5. Deployment strategies (concept only — good interview talking point)

- **Rolling update** — replace old instances with new ones a few at a time, zero downtime
- **Blue-green deployment** — run two full environments (blue=current, green=new), switch traffic over instantly, instant rollback by switching back
- **Canary release** — send a small % of traffic to the new version first, watch for errors, then ramp up

## 6. What to actually submit / demonstrate

1. Push any of your React apps (from week5/week6) with the
   `cicd-example/.github/workflows/react-ci-cd.yml` copied in.
2. Check the **Actions** tab on GitHub — screenshot the green checkmark
   run. That's your practical DevOps artifact.
3. (Optional, for extra depth) Fill in the deploy step with a real
   target — GitHub Pages is the fastest to wire up for a static React build.

## Check your understanding
- https://www.geeksforgeeks.org/devops-tutorial/
- https://www.geeksforgeeks.org/introduction-to-devops/
- https://www.geeksforgeeks.org/what-is-ci-cd/
- DevOps quiz (linked in the DN5.0 handbook)
