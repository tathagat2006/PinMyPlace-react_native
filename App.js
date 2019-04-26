import { Navigation } from "react-native-navigation";
import React from "react";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import SideDrawerScreen from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "pinmyplaces.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "pinmyplaces.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "pinmyplaces.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "pinmyplaces.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "pinmyplaces.SideDrawerScreen",
  () => SideDrawerScreen,
  store,
  Provider
);

//Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "pinmyplaces.AuthScreen",
    title: "Login"
  }
});
