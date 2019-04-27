import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import background from "../../assets/image1.jpg";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import validate from "../../utility/validation";

class AuthScreen extends Component {
  state = {
    respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
    },
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        }
      }
    }
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      respStyles: {
        pwContainerDirection: dims.window.height > 500 ? "column" : "row",
        pwContainerJustifyContent:
          dims.window.height > 500 ? "flex-start" : "space-between",
        pwWrapperWidth: dims.window.height > 500 ? "100%" : "45%"
      }
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            )
          }
        }
      };
    });
  };

  render() {
    let headingText = null;

    if (Dimensions.get("window").height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("Hello")}>
            Switch To Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your Email Address"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
            />
            <View
              style={{
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerJustifyContent
              }}
            >
              <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                <DefaultInput
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={val => this.updateInputState("password", val)}
                />
              </View>
              <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                <DefaultInput
                  placeholder="Confirm Password"
                  style={styles.input}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={val =>
                    this.updateInputState("confirmPassword", val)
                  }
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get("window").height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;
