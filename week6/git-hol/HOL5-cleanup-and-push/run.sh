#!/bin/bash
# HOL 5 - Clean up and Push Back to Remote
# Run this with: bash run.sh
# NOTE: requires a remote already configured (see HOL1). This script
# prints the commands rather than executing the remote steps, since
# that depends on your personal GitHub/GitLab repo URL and credentials.

set -e

REPO_DIR="GitDemo"
cd "$REPO_DIR" 2>/dev/null || { echo "Run HOL1 first to create GitDemo."; exit 1; }

echo "=== Step 1: Verify master is in a clean state ==="
git status

echo "=== Step 2: List all available branches ==="
git branch -a

echo "=== Step 3: Pull latest changes from remote (run manually with your remote configured) ==="
echo "  git pull origin master"

echo "=== Step 4: Push pending local commits to remote ==="
echo "  git push origin master"

echo "=== Step 5: Verify on GitHub/GitLab web UI that your commits appear ==="
echo "  Open your repo URL in a browser and check the commit history."

echo ""
echo "HOL 5 reference complete. Run the printed pull/push commands with your"
echo "own remote URL configured (git remote -v to check what's set)."
git remote -v
