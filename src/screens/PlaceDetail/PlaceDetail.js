import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { deletePlace } from "../../store/actions/index";

import Icon from "react-native-vector-icons/Ionicons";

class PlaceDetail extends Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={
              this.props.selectedPlace ? this.props.selectedPlace.image : null
            }
            style={styles.placeImage}
          />
          <Text style={styles.placeName1}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          {/* <Button title="Delete" color="red" onPress={this.props.onItemDeleted} /> */}
          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon
                size={30}
                name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                color="red"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName1: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
