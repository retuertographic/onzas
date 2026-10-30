#!/usr/bin/env bash
# Genera el export estático y lo publica en la rama gh-pages (GitHub Pages).
set -euo pipefail
cd "$(dirname "$0")/.."
REPO_NAME="${REPO_NAME:-onzas}"
rm -rf out
NEXT_PUBLIC_BASE_PATH="/$REPO_NAME" npx next build
touch out/.nojekyll
REMOTE="$(git remote get-url origin)"
cd out
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE" gh-pages
rm -rf .git
