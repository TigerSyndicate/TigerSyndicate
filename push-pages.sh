#!/bin/bash
#works in master branch only!

echo ""
echo ">>> GIT BRANCH GH-PAGES MASTER -F"
echo ""
git branch gh-pages master -f

echo ""
echo ">>> GIT CHECKOUT GH-PAGES"
echo ""
git checkout gh-pages


echo ""
echo ">>> REMOVING FILES"
echo ""
rm -rf 2.0/ 3.0/ PublishInstructions.txt push-master.sh push-pages.sh README.md

echo ""
echo ">>> MOVING 4.0/ OUT AND REMOVE FOLDER"
echo ""
mv 4.0/* ../*
rm -r 4.0/

echo ""
echo ">>>  GIT ADD ."
echo ""
git add .

echo ""
echo ">>>  GIT STATUS"
echo ""
git status


if [ "$#" -eq 0 ]
then
    echo ""
    echo ">>>  GIT COMMIT -M 'UPDATE'"
    echo ""
    git commit -m "update"
    
elif [ "$#" -gt 0 ]
then
    echo ""
    echo ">>>  GIT COMMIT -M '"$*"'"
    echo ""
    git commit -m "$*"
fi


echo ""
echo ">>>  GIT PUSH ORIGIN GH-PAGES -F"
echo ""
git push origin gh-pages -f