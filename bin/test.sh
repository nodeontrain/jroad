#!/bin/sh

cd bin
node test_server > /dev/null 2>&1 &
TRAINS_PID=$!

cd ..
mocha
kill $TRAINS_PID
