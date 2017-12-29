#react-native-loading-spinner-modal

[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-message-bar "View this project on npm")

Android like circular progress bar in react-native that works on both Android and IOS.


## Content
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Hide the Message Bar Alert](#hide-the-message-bar-alert)
- [Customize Alert Type](#customize-alert-type)
- [Customize Alert Content](#customize-alert-content)
- [Customize View Layout](#customize-view-layout)
- [Properties](#properties)
- [License](#license)

## Features
- Android and iOS capable
- Android like circular progress bar in react native
- cusomized text color and subtext color
- size of spinner large or small
- can set to cancelable
- add subtext/no issues if no subtext
- works in any orientation

## Installation
Make sure that you are in your React Native project directory and run:
```batch
$ npm install react-native-loading-spinner-modal --save
```
or
```batch
$ yarn add react-native-loading-spinner-modal
```

## Usage
1. Import the `react-native-loading-spinner-modal` package
```javascript
import {
  LoadingModal,
  LoadingModalManager
} from "react-native-loading-spinner-modal";
```

2. Add the `LoadingModal` to your render function
