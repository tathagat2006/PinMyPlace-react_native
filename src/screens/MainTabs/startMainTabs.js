import { Navigation } from "react-native-navigation";

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "pinmyplaces.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place",
        icon: ""
      },
      {
        screen: "pinmyplaces.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place",
        icon: null
      }
    ]
  });
};

export default startTabs;
