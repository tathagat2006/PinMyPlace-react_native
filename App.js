import { Navigation } from "react-native-navigation";
import React from "react";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";

// Register Screens
Navigation.registerComponent("pinmyplaces.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "pinmyplaces.SharePlaceScreen",
  () => SharePlaceScreen
);
Navigation.registerComponent(
  "pinmyplaces.FindPlaceScreen",
  () => FindPlaceScreen
);

//Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "pinmyplaces.AuthScreen",
    title: "Login"
  }
});
