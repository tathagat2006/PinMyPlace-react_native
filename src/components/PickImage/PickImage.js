import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";

class PickImage extends Component {
  render() {
    return (
      <View>
        <View style={styles.placeholder}>
          <Image source={imagePlaceHolder} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image!" onPress={() => alert("Pick Image!")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  }
});

export default PickImage;
