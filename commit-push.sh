#! /bin/bash
# 确保脚本抛出遇到的错误
set -e

echo "git auto push start..."


# build
yarn build


# push
git add .
git commit -m "commit"
git push


echo "git auto push end..."
