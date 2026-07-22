# HOL 2 - .gitignore

## What this covers
Creating a `.log` file and a `log/` folder, then updating `.gitignore` so
Git stops tracking them, and verifying with `git status` before/after.

## How to run
```
bash run.sh
```

## .gitignore content used
```
# Ignore all .log files
*.log

# Ignore the entire log folder
log/
```

## Key commands reference
| Command | Purpose |
|---|---|
| `git status` | Shows untracked files (before) vs. clean (after ignoring) |
| `.gitignore` | Plain text file, one pattern per line, tells Git what to never track |

`*.log` matches any file ending in `.log` anywhere in the repo.
`log/` matches the entire `log` directory and everything inside it.
