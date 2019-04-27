import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import DefaultInput from "../UI/DefaultInput/DefaultInput";

class PlaceInput extends Component {
  state = {
    placename: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placename: val
    });
  };

  render() {
    return (
      <DefaultInput
        placeholder="Place Name"
        value={this.state.placename}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

export default PlaceInput;
