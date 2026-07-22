# HOL 5 - Clean Up and Push Back to Remote

## What this covers
Confirming a clean working state, listing branches, pulling the latest
remote changes, and pushing your local commits.

## How to run
```
bash run.sh
```
This reports status/branches and prints the exact `pull`/`push` commands
to run — the actual remote sync depends on your personal GitHub/GitLab
URL and credentials, which the script can't have.

## Key commands reference
| Command | Purpose |
|---|---|
| `git status` | Confirms nothing uncommitted is lying around before syncing |
| `git branch -a` | Lists all local and remote-tracking branches |
| `git pull origin master` | Fetches and merges remote changes into local master |
| `git push origin master` | Sends your local commits to the remote |
| `git remote -v` | Shows which remote URL(s) your repo is configured with |
