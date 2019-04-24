import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

export default AuthScreen;
