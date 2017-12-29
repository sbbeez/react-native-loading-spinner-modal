import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

//Import your loading spinner here
import {
  LoadingModal,
  LoadingModalManager
} from "react-native-loading-spinner-modal";

export default class Example extends Component {
  //Register your loading spinner when component mounts
  componentDidMount() {
    LoadingModalManager.registerModal(this.refs.loadingModal);
  }
  //unregister the loading modal when component dismounts
  componentWillUnmount() {
    LoadingModalManager.unregisterModal();
  }
  render() {
    return (
      <View style={styles.container}>
        <LoadingModal ref="loadingModal" />
        <Button
          title={"Default Loading spinner"}
          onPress={() => LoadingModalManager.showLoadingModal({})}
        />
        <Button
          title={"progress bar with custom subtext and text"}
          onPress={() =>
            LoadingModalManager.showLoadingModal({
              text: "Custom header text",
              subText: "Add subtext here"
            })}
        />
        <Button
          title={"spinner size small"}
          onPress={() =>
            LoadingModalManager.showLoadingModal({
              text: "you can change size of spinner",
              spinnerSize: "small"
            })}
        />
        <Button
          title={"Customized spinner and all text"}
          onPress={() =>
            LoadingModalManager.showLoadingModal({
              text: "I can be any color",
              subText: "no issues, if subtext is empty",
              textColor: "#AAD",
              subTextColor: "#FAE",
              spinnerSize: "large",
              spinnerColor: "#FF1"
            })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
});
