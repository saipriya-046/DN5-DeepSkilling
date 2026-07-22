#!/bin/bash
# HOL 1 - Git Configuration, Editor Setup, First Commit
# Run this with: bash run.sh
# Requires: Git Bash (Windows) or any bash shell with git installed.

set -e

echo "=== Step 1: Verify Git is installed ==="
git --version

echo ""
echo "=== Step 2: Configure user identity (edit the values below first!) ==="
echo "Run these manually with YOUR name/email (not Cognizant credentials):"
echo '  git config --global user.name "Your Name"'
echo '  git config --global user.email "you@example.com"'
echo ""
echo "Verify with:"
echo "  git config --global --list"

echo ""
echo "=== Step 3: (Optional) Set notepad++ as default editor (Windows only) ==="
echo 'git config --global core.editor "notepad++ -multiInst -notabbar -nosession -noPlugin"'
echo "Verify with: git config -e"

echo ""
echo "=== Step 4: Create the GitDemo repository and first commit ==="
mkdir -p GitDemo
cd GitDemo
git init

# Verify hidden .git folder exists
ls -la

echo "welcome to Git!" > welcome.txt
cat welcome.txt

git status

git add welcome.txt
git status

git commit -m "Initial commit: add welcome.txt"

echo ""
echo "=== Step 5: Connect to a remote (do this manually) ==="
echo "1. Create a free account on GitHub or GitLab (do NOT use Cognizant credentials)"
echo "2. Create an empty remote repo named GitDemo"
echo "3. Then run:"
echo '   git remote add origin <your-repo-url>'
echo '   git pull origin master --allow-unrelated-histories'
echo '   git push origin master'

echo ""
echo "HOL 1 complete. GitDemo repo created at ./GitDemo with one commit."
