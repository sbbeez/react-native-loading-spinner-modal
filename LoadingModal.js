import React, { Component } from "react";
import { Modal, View, ActivityIndicator, Text, StyleSheet } from "react-native";
import ModalViewsBG from "./ModalViewsBG";

class LoadingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      text: "",
      subText: "",
      cancelable: true,
      spinnerColor: "#098",
      spinnerSize: "large",
      textColor: "#000",
      subTextColor: "#000"
    };
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  setNewState(newState) {
    this.setState(newState);
  }

  render() {
    const { visible, text } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.showModal}
        onRequestClose={() => {}}
      >
        <ModalViewsBG
          closeModal={() => {
            if (this.state.cancelable) {
              this.setState({ showModal: false });
            }
          }}
        >
          <View style={styles.loadingView}>
            <ActivityIndicator
              size={this.state.spinnerSize}
              color={this.state.spinnerColor}
            />
            <View>
              <Text
                numberOfLines={1}
                style={[styles.loadingText, { color: this.state.textColor }]}
              >
                {this.state.text ? this.state.text : "Loading..."}
              </Text>
              <Text
                style={[
                  styles.loadingSubText,
                  { color: this.state.subTextColor }
                ]}
                numberOfLines={1}
              >
                {this.state.subText}
              </Text>
            </View>
          </View>
        </ModalViewsBG>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  loadingView: {
    padding: 30,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center"
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  },
  loadingSubText: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10
  }
});

export default LoadingModal;
