# HOL 4 - Merge Conflict Resolution

## What this covers
Deliberately creating a merge conflict (same file, different content, on
two branches) and resolving it manually.

## How to run
```
bash run.sh
```
The script will pause conceptually at the conflict (it auto-resolves for
scripting purposes, but prints exactly what you'd do by hand). Open
`GitDemo/hello.xml` mid-run in another terminal if you want to see the
raw conflict markers before the script overwrites them.

## What a real conflict looks like
After `git merge GitWork` fails, `hello.xml` contains:
```
<<<<<<< HEAD
<message>Hello from master branch - different content entirely</message>
=======
<message>Hello from GitWork branch - UPDATED version A</message>
>>>>>>> GitWork
```
You manually edit the file to keep the correct content (or a combination),
remove the `<<<<<<<`, `=======`, `>>>>>>>` markers, then:
```
git add hello.xml
git commit
```

## Key commands reference
| Command | Purpose |
|---|---|
| `git checkout -b <name>` | Create + switch to a new branch in one step |
| `git log --oneline --graph --decorate --all` | Visualize divergent branch history |
| `git merge <branch>` | Attempt merge; conflicts halt with markers in the file |
| `git status` (mid-conflict) | Lists files with unmerged paths |
| `git add <file>` | Marks a conflict as resolved once you've edited it |
| `git commit` | Completes the merge commit after resolution |

P4Merge is a GUI 3-way merge tool — configure it with
`git config --global merge.tool p4merge` and launch with `git mergetool`
for a visual conflict resolution experience instead of hand-editing.
