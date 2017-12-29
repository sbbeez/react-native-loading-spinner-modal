# react-native-loading-spinner-modal

[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-message-bar "View this project on npm")

Android like circular progress bar in react-native that works on both Android and IOS.


## Content
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Hide the Message Bar Alert](#hide-the-message-bar-alert)
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
- 1. Import the `react-native-loading-spinner-modal` package
```javascript
import {
  LoadingModal,
  LoadingModalManager
} from "react-native-loading-spinner-modal";
```

- 2. Add the `LoadingModal` to your render function
Note: Add it at the very end of your render function, the alert will then be displayed over any component of the view
```javascript
// Within your render function.
// Include the LoadingModal once within your top View element
<LoadingModal ref="loadingmodal" />
```

- 3. Register and Release your Loading Modal as the current main alert
```javascript
componentDidMount() {
  // Register the alert located on this master page
  // This LoadingModal will be accessible from the current (same) component, and from its child component
  // The LoadingModal is then declared only once, in your main component.
  LoadingModalManager.registerModal(this.refs.loadingmodal);
}

componentWillUnmount() {
  // Remove the LoadingModal located on this master page from the manager
  LoadingModalManager.unregisterModal();
}
```


- 4. Display the Loading Modal on demand
```javascript
// Call this method after registering your LoadingModal as the current loadingModal
// By calling this method the registered loadingModal will be displayed
// This is useful to show the loadingModal from your current page or a child component
LoadingModalManager.showLoadingModal({
  text: 'your text goes here', //default as `loading...`
  subText: 'Your alert message goes here',  //default ""
});
```


## Hide the Loading modal
```javascript
// You can force the current loadingmodal to be hidden through the Manager
LoadingModalManager.hideLoadingModal();
```


## Properties
Prop                  | Type     | Default              | Description
--------------------- | -------- | -------------------- | -----------
text                  | String   | Loading...           | heading text of the loading dialog
subText               | String   |                      | SubText for the loading Modal
spinnerSize           | String   | large                |  `large` or `small`
textColor             | String   | #000                 | Any hex color code can be passed
subTextColor          | String   | #000                 | Any hex color code can be passed
spinnerColor          | String   | #098                 | Any hex color code can be passed
