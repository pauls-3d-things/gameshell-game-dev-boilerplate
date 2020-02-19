#!/bin/bash

LD_LIBRARY_PATH=/home/cpi/apps/nwjs-*-linux-arm/lib \
    /home/cpi/apps/nwjs-sdk-*-linux-arm/nw \
    /home/cpi/aria2download/uvwxy/gsw/master/tests/dvd-logo/file/dvd-logo/  \
    --use-gl=egl \
    --ignore-gpu-blacklist \
    --disable-accelerated-2d-canvas \
    --num-raster-threads=2 \
    --remote-debugging-port=9222