import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={[styles.input, props.style]}
      underlineColorAndroid="transparent"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default defaultInput;
