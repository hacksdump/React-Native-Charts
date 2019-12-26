#!/bin/bash

mkdir -p ../android/app/src/main/assets
mkdir -p ../ios/assets
CHART_JS_LIB=$(pwd)/../node_modules/chart.js/dist/Chart.min.js
ln -s $CHART_JS_LIB ../android/app/src/main/assets/
ln -s $CHART_JS_LIB ../ios/assets/