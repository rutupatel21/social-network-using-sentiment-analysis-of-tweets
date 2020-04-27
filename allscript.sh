#!/bin/bash 	


kill -9 `ps -aef | grep '/usr/bin/node' | grep -v grep | awk '{print $2}'`

