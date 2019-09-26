import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"

import LoginScreen from "./src/components/login/LoginScreen";
import HomeScreen from "./src/components/home/HomeScreen";
import ProfileScreen from "./src/components/profile/ProfileScreen";

const MainNavigattor = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const RootStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: {
    screen: MainNavigattor
  },
}, { mode: "modal", headerMode: "none" });

const App = createAppContainer(RootStack);

export default App;