import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placename: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placename: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placename.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placename);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placename}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
