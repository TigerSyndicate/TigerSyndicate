#!/bin/bash


echo ""
echo ">>>  PUSHING TO MASTER"
echo ""

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
echo ">>>  GIT PUSH ORIGIN MASTER"
echo ""
git push origin master