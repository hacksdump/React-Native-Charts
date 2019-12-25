import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

import html from './html.js';

export default class extends Component {
  render() {
    return (
      <WebView
        ref={c => {
          this.webview = c;
        }}
        injectedJavaScript={''}
        javaScriptEnabled={true}
        source={{html: html, baseUrl: './'}}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccessFromFileURLs={true}
        allowFileAccess={true}
        allowingReadAccessToURL={true}
        mixedContentMode="always"
        domStorageEnabled={true}
        originWhitelist={['*']}
        onMessage={this.onMessage}
        useWebKit={true}
        scalesPageToFit={true}
        scrollEnable={false}
      />
    );
  }
}
