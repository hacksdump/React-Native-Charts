import React, {Component} from 'react';
import {Platform} from 'react-native';
import {WebView} from 'react-native-webview';

import html from './html.js';

const baseUrl =
  Platform.OS === 'ios'
    ? '../../../../node_modules/chart.js/dist/'
    : 'file:///android_asset/';

export default class extends Component {
  render() {
    return (
      <WebView
        ref={c => {
          this.webview = c;
        }}
        javaScriptEnabled={true}
        source={{html: html, baseUrl: baseUrl}}
        allowingReadAccessToURL={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
        scalesPageToFit={true}
        scrollEnable={false}
      />
    );
  }
}
