# HOL 1 - Git Setup, Config, First Commit

## What this covers
- `git --version`, `git config --global user.name/email`
- Setting notepad++ (or any editor) as your default Git editor
- `git init`, `git add`, `git commit`, `git status`
- Connecting a local repo to a remote (GitHub/GitLab) with `git remote add`, `git pull`, `git push`

## How to run
```
bash run.sh
```
This creates a `GitDemo/` folder, initializes it as a Git repo, creates
`welcome.txt`, and makes the first commit. The remote connection step
(GitHub/GitLab signup + push) needs to be done manually since it requires
your own account — the exact commands are printed at the end of the script.

**Important:** Do NOT use your Cognizant credentials to sign up for GitHub/GitLab.
Use a personal account.

## Key commands reference
| Command | Purpose |
|---|---|
| `git init` | Initialize a new local repository |
| `git status` | Show working directory / staging state |
| `git add <file>` | Stage a file for commit |
| `git commit -m "message"` | Commit staged changes |
| `git remote add origin <url>` | Link local repo to a remote |
| `git pull origin master` | Fetch + merge from remote |
| `git push origin master` | Push local commits to remote |
