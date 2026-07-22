#!/bin/bash
# HOL 3 - Branching and Merging
# Run this with: bash run.sh

set -e

REPO_DIR="GitDemo"

if [ ! -d "$REPO_DIR/.git" ]; then
  mkdir -p "$REPO_DIR"
  cd "$REPO_DIR"
  git init
  echo "base content" > base.txt
  git add base.txt
  git commit -m "Initial commit on master"
else
  cd "$REPO_DIR"
fi

# Ensure branch is named master for this exercise (course convention)
git branch -m master 2>/dev/null || true

echo "=== Branching ==="

echo "--- Create a new branch GitNewBranch ---"
git branch GitNewBranch

echo "--- List all local branches (note the * on current branch) ---"
git branch -a

echo "--- Switch to GitNewBranch ---"
git checkout GitNewBranch

echo "--- Add a file with some content ---"
echo "feature work in progress" > feature.txt

echo "--- Commit the change on the branch ---"
git add feature.txt
git commit -m "Add feature.txt on GitNewBranch"

echo "--- Check status ---"
git status

echo ""
echo "=== Merging ==="

echo "--- Switch back to master ---"
git checkout master

echo "--- Show differences between master and GitNewBranch (CLI) ---"
git diff master GitNewBranch || true

echo "--- (Visual diff would use: git difftool master GitNewBranch -- if P4Merge is configured) ---"

echo "--- Merge GitNewBranch into master ---"
git merge GitNewBranch -m "Merge GitNewBranch into master"

echo "--- Observe the log graph ---"
git log --oneline --graph --decorate --all

echo "--- Delete the now-merged branch ---"
git branch -d GitNewBranch

echo "--- Confirm branch is gone ---"
git branch -a
git status

echo ""
echo "HOL 3 complete. GitNewBranch was created, committed to, merged into master, and deleted."
