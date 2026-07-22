#!/bin/bash
# HOL 4 - Merge Conflict Resolution
# Run this with: bash run.sh
# This script intentionally creates a conflict, then shows how to resolve it.

set -e

REPO_DIR="GitDemo"

if [ ! -d "$REPO_DIR/.git" ]; then
  mkdir -p "$REPO_DIR"
  cd "$REPO_DIR"
  git init
  echo "base content" > base.txt
  git add base.txt
  git commit -m "Initial commit on master"
  git branch -m master
else
  cd "$REPO_DIR"
fi

echo "=== Step 1: Verify master is clean ==="
git checkout master
git status

echo "=== Step 2: Create branch GitWork, add hello.xml ==="
git checkout -b GitWork
cat > hello.xml << 'EOF'
<message>Hello from GitWork branch - version A</message>
EOF
git add hello.xml
git commit -m "Add hello.xml on GitWork"

echo "=== Step 3: Update hello.xml content on GitWork ==="
cat > hello.xml << 'EOF'
<message>Hello from GitWork branch - UPDATED version A</message>
EOF
git status
git add hello.xml
git commit -m "Update hello.xml on GitWork"

echo "=== Step 4: Switch to master, add a CONFLICTING hello.xml ==="
git checkout master
cat > hello.xml << 'EOF'
<message>Hello from master branch - different content entirely</message>
EOF
git add hello.xml
git commit -m "Add conflicting hello.xml on master"

echo "=== Step 5: Observe divergent history ==="
git log --oneline --graph --decorate --all

echo "=== Step 6: Attempt the merge (this WILL conflict) ==="
set +e
git merge GitWork -m "Merge GitWork into master"
set -e

echo ""
echo "=== CONFLICT DETECTED ==="
echo "hello.xml now contains conflict markers <<<<<<< ======= >>>>>>>"
echo "Open hello.xml and manually pick the correct content, e.g.:"
echo '  <message>Hello - merged and resolved content</message>'
echo ""
echo "For this script, we auto-resolve by keeping a merged version:"
cat > hello.xml << 'EOF'
<message>Hello - merged and resolved content</message>
EOF

echo "=== Step 7: Mark as resolved and commit ==="
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

echo "=== Step 8: Add a backup-file pattern to .gitignore ==="
cat >> .gitignore << 'EOF'
*.orig
*.bak
EOF
git add .gitignore
git commit -m "Ignore backup files created during merge conflicts"

echo "=== Step 9: List branches, delete the merged one ==="
git branch -a
git branch -d GitWork

echo "=== Step 10: Final log ==="
git log --oneline --graph --decorate

echo ""
echo "HOL 4 complete. Conflict was created, resolved, and GitWork branch cleaned up."
