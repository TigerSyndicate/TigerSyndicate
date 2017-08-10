#!/bin/bash

git add .
echo ">>>  GIT ADD ."

git status
echo ">>>  GIT STATUS"


if [ "$#" -eq 0 ]
then
    git commit -m "update"
    echo ">>>  GIT COMMIT -M 'UPDATE'"
    
elif [ "$#" -gt 0 ]
then
    git commit -m "$*"
    echo ">>>  GIT COMMIT -M 'CMDLINE MSG'"
fi


git push origin master
echo ">>>  GIT PUSH ORIGIN MASTER"