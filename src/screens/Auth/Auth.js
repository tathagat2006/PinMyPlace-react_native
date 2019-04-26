import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Please Log In</Text>
        <Button title="Switch To Log In" />
        <View style={styles.inputContainer}>
          <TextInput placeholder="Your Email Address" style={styles.input} />
          <TextInput placeholder="Password" style={styles.input} />
          <TextInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    width: "100%"
  }
});

export default AuthScreen;
