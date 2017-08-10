#!/bin/bash

git add .
echo ""
echo ">>>  GIT ADD ."
echo ""

git status
echo ""
echo ">>>  GIT STATUS"
echo ""


if [ "$#" -eq 0 ]
then
    git commit -m "update"
    echo ""
    echo ">>>  GIT COMMIT -M 'UPDATE'"
    echo ""
    
elif [ "$#" -gt 0 ]
then
    git commit -m "$*"
    echo ""
    echo ">>>  GIT COMMIT -M '"$*"'"
    echo ""
fi


git push origin master
echo ""
echo ">>>  GIT PUSH ORIGIN MASTER"
echo ""