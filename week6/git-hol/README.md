# Git Hands-On Labs (HOL 1–5)

Unlike the React/Angular HOLs, these are pure Git command-line exercises —
there's no app to build, just a sequence of commands to run and understand.
Each folder has a `run.sh` that actually executes the real git commands
(config steps that need your personal info are printed, not run for you).

```
cd HOL1-git-setup-first-commit
bash run.sh
```
Run them in order (1 → 5) since each builds on the `GitDemo` repo the
previous one created.

| # | Folder | Topic |
|---|--------|-------|
| 1 | HOL1-git-setup-first-commit | git config, editor setup, init, add, commit, remote, push/pull |
| 2 | HOL2-gitignore | .gitignore patterns (`*.log`, `log/`) |
| 3 | HOL3-branching-merging | branch, checkout, diff, merge, log --graph, branch -d |
| 4 | HOL4-merge-conflict-resolution | intentional conflict + manual resolution |
| 5 | HOL5-cleanup-and-push | status check, pull, push to remote |

## Notes
- Run these in **Git Bash** (Windows) or any bash shell with `git` installed.
- HOL1 says "don't use Cognizant credentials on GitHub/GitLab" — use a
  personal account.
- P4Merge (visual diff/merge tool) steps are GUI-only and can't be
  scripted; each README explains the equivalent CLI command and how to
  wire up P4Merge as your `git mergetool` if you want the visual version.
- All 5 scripts operate on the same `GitDemo/` folder that gets created
  the first time you run HOL1 — run them in order.
