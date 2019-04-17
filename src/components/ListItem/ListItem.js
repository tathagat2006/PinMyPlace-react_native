import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

const listItem = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.placename}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  }
});

export default listItem;
