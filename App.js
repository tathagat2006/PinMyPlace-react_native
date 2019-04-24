import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";

// Register Screens
Navigation.registerComponent("pinmyplaces.AuthScreen", () => AuthScreen);

//Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "pinmyplaces.AuthScreen",
    title: "Login"
  }
});
