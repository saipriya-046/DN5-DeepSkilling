#!/bin/bash
# HOL 2 - .gitignore
# Run this with: bash run.sh
# Assumes HOL1's GitDemo repo exists one directory up, or creates a fresh one.

set -e

REPO_DIR="GitDemo"

if [ ! -d "$REPO_DIR/.git" ]; then
  echo "No existing GitDemo repo found here -- creating a fresh one for this HOL."
  mkdir -p "$REPO_DIR"
  cd "$REPO_DIR"
  git init
else
  cd "$REPO_DIR"
fi

echo "=== Step 1: Create files that should be ignored ==="
echo "some log output" > app.log
mkdir -p log
echo "another log file" > log/debug.log

echo "=== Step 2: Check status BEFORE .gitignore (both should show as untracked) ==="
git status

echo "=== Step 3: Create .gitignore ==="
cat > .gitignore << 'EOF'
# Ignore all .log files
*.log

# Ignore the entire log folder
log/
EOF

git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log/ folder"

echo "=== Step 4: Check status AFTER .gitignore (app.log and log/ should no longer appear) ==="
git status

echo ""
echo "HOL 2 complete. app.log and log/ are now ignored by Git."
