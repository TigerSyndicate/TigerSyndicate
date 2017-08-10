#!/bin/bash

git add .
echo ">>>  git add ."

git status
echo ">>>  git status"


if [ "$#" -eq 1 ]
then
    git commit -m "update"
    echo ">>>  git commit -m 'update'"
    
    git push origin master
    echo ">>>  git push origin master"
    
    if [ "$1" -eq "-du" ]
    then
        reddtoric
    fi
    
elif [ "$#" -eq 2 ]
then
    git commit -m $1
    echo ">>>  git commit -m 'cmdline msg'"
    
else
    echo " "
    echo ">>>  Illegal cmdline argument."
    echo ">>>  ./push-master 'msg' 'username'"
    echo ">>>  or ./push-master 'username'"
    echo ">>>  or ./push-master -du (for default username)"
fi
