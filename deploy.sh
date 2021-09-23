#!/usr/bin/env sh

# abort on errors
set -e

# install dependencies
yarn install

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hub-usp-inovacao/documentation.git deploy:gh-pages

cd -