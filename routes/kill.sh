#!/bin/sh


kill `ps -ef | grep python3 | grep -v grep | awk '{print $2}'`

