#!/bin/bash

BASEDIR=$(pwd)
ANDROID_ASSETS_DIR=$BASEDIR/android/app/src/main/assets
IOS_ASSETS_DIR=$BASEDIR/ios/assets
CHART_JS_LIB=$BASEDIR/node_modules/chart.js/dist/Chart.min.js
rm -rf $ANDROID_ASSETS_DIR $IOS_ASSETS_DIR
mkdir -p $ANDROID_ASSETS_DIR
mkdir -p $IOS_ASSETS_DIR
ln -s $CHART_JS_LIB $ANDROID_ASSETS_DIR
ln -s $CHART_JS_LIB $IOS_ASSETS_DIR