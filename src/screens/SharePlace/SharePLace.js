import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/index";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";

class SharePlaceScreen extends Component {
  state = {
    placename: ""
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    // console.log(event);
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placeNameChangedHandler = val => {
    this.setState({
      placename: val
    });
  };
  placeAddedHandler = () => {
    if (this.state.placename.trim() !== " ") {
      this.props.onAddPlace(this.state.placename);
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share A Place With Us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placename={this.state.placename}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share The Place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
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

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
