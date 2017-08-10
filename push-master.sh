#!/bin/bash
#use only in grandmaster branch!


echo ""
echo ">>>  PUSHING TO MASTER (TO DISPLAY ON tigersyndicate.github.io)"
echo ""

echo ""
echo ">>> GIT BRANCH MASTER GRANDMASTER -F"
echo ""
git branch master grandmaster -f

echo ""
echo ">>> GIT CHECKOUT MASTER"
echo ""
git checkout master


echo ""
echo ">>> REMOVING FILES"
echo ""
rm -rf 2.0/ 3.0/ PublishInstructions.txt push-grandmaster.sh push-master.sh README.md

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
echo ">>>  GIT PUSH ORIGIN MASTER -F"
echo ""
git push origin master -f

echo ""
echo ">>>  GIT CHECKOUT GRANDMASTER"
echo ""
git checkout grandmaster

