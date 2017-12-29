import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default class ModalViewsBG extends Component {
  render() {
    const { closeModal, children } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => closeModal && closeModal()}>
        <View style={styles.modalMain}>
          <View style={styles.modalInnerView}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  modalMain: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000a"
  },
  modalInnerView: {
    width: 300,
    backgroundColor: "#fafafa",
    elevation: 10
  }
});
