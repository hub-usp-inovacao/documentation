#!/usr/bin/env sh

# abort on errors
set -e

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hub-usp-inovacao/documentation.git master:gh-pages

# install dependencies
yarn install

# build
yarn build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



cd -