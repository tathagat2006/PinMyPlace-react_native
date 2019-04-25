import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(ImageSources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "pinmyplaces.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: ImageSources[0]
        },
        {
          screen: "pinmyplaces.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: ImageSources[1]
        }
      ]
    });
  });
};

export default startTabs;
