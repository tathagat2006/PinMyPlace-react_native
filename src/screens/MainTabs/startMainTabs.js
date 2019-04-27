import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";
import React from "react";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-share-alt" : "ios-share",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(ImageSources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "pinmyplaces.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: ImageSources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: ImageSources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "pinmyplaces.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: ImageSources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: ImageSources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "pinmyplaces.SideDrawer"
        }
      }
    });
  });
};

export default startTabs;
