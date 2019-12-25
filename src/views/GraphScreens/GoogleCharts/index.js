import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

import html from './html.js';

export default class extends Component {
  componentDidMount() {
    let counter = 0;
    this.interval = setInterval(() => {
      this.webview.postMessage(`from react ${counter++}`);
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onMessage(event) {
    console.log(event.nativeEvent.data);
  }
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
