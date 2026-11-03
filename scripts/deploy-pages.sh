#!/usr/bin/env bash
# Genera el export estático y lo publica en la rama gh-pages (GitHub Pages).
# Por defecto se sirve en el dominio propio; con CUSTOM_DOMAIN= vacío se sirve en <usuario>.github.io/<repo>.
set -euo pipefail
cd "$(dirname "$0")/.."
CUSTOM_DOMAIN="${CUSTOM_DOMAIN-ochoonzas.retuertographicdesign.com}"
REPO_NAME="${REPO_NAME:-onzas}"
rm -rf out
if [ -n "$CUSTOM_DOMAIN" ]; then
  STATIC_EXPORT=1 npx next build
  echo "$CUSTOM_DOMAIN" > out/CNAME
else
  STATIC_EXPORT=1 NEXT_PUBLIC_BASE_PATH="/$REPO_NAME" npx next build
fi
touch out/.nojekyll
REMOTE="$(git remote get-url origin)"
cd out
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE" gh-pages
rm -rf .git
