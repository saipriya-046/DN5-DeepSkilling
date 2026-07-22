# HOL 3 - Branching and Merging

## What this covers
Creating a branch, committing on it, merging it back to master, and
cleaning up.

## How to run
```
bash run.sh
```

## Steps performed
1. `git branch GitNewBranch` — create branch
2. `git branch -a` — list local + remote branches (the `*` marks current)
3. `git checkout GitNewBranch` — switch to it
4. Add a file, `git commit`
5. `git checkout master`, `git diff master GitNewBranch` — see differences
   (the doc's P4Merge visual diff step is `git difftool` with P4Merge
   configured as your diff tool — GUI only, not scriptable here)
6. `git merge GitNewBranch` — merge into master
7. `git log --oneline --graph --decorate` — visualize the merge history
8. `git branch -d GitNewBranch` — delete the merged branch

## Key commands reference
| Command | Purpose |
|---|---|
| `git branch <name>` | Create a new branch |
| `git checkout <name>` | Switch to a branch |
| `git diff <a> <b>` | Show line-level differences between two branches |
| `git merge <name>` | Merge a branch into the current branch |
| `git log --oneline --graph --decorate` | Compact visual commit history |
| `git branch -d <name>` | Delete a branch (only if fully merged) |
