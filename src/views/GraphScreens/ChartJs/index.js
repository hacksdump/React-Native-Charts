import React, {Component} from 'react';
import {Platform} from 'react-native';
import {WebView} from 'react-native-webview';

import html from './html.js';

const baseUrl = Platform.OS === 'ios' ? './assets/' : 'file:///android_asset/';

export default class extends Component {
  sendPoints() {
    if (this.webview) {
      this.webview.postMessage(
        JSON.stringify([...Array(16)].map(e => ~~(Math.random() * 16))),
      );
    }
  }
  componentDidMount() {
    this.intervalIdentifier = setInterval(() => {
      this.sendPoints();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalIdentifier);
  }
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
