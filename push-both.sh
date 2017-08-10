#!/bin/bash
#use only in grandmaster branch!

echo ""
echo ">>>  PUSHING TO GRANDMASTER AND MASTER"
echo ""

./push-grandmaster.sh $*
./push-master.sh $*