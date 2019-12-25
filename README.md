# React Native Charts

This repository aims to serve as the exhibit for multiple charting libraries in react native.

## Build instructions

```bash
yarn install
yarn android
yarn start
```

### Motivation

There exist a plethora of libraries to draw charts and graphs on the web due to excellent canvas and svg APIs.
But mobile still remains a developmental field in native graphics drawing, which means there is a very limited number of native graph libraries for native platforms.

### Aim

To exhibit and compare various graph libraries based on their UI/UX on mobile platforms with touch interactions, load times, responsiveness and performance.

#### Two ways

1. Undoubtedly, native libraries drawing with [ART](https://github.com/react-native-community/art) or [SVG-ART abstraction](https://github.com/react-native-community/react-native-svg) provide top-notch performance.
But the options available as of now are very few.

2. The libraries available to the web, which utilize either SVG or Canvas APIs, can be rendered in a webview in the react native app. This intermediate layer means reduction in performance and responsiveness.
