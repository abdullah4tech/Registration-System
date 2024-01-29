#!/usr/bin/env sh


set -e

# # build
npm run build

cd dist


#git init
git add -A
git commit -m 'deploy'

<<<<<<< HEAD
git branch -m Main

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
=======
>>>>>>> 632ac78fa9e9fbbe91706a8fc43149536f1760e3

git push -f git@github.com:abdullahCoder-Tech/Registration-System.git main:gh-pages

cd -