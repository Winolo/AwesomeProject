import React, { useState, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"

import InitializingScreen from "./src/components/welcome/Initializing";
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

const AppContainer = createAppContainer(RootStack);

const App = () => {
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitializing(true);
    }, 2000);
  }, []);

  return (initializing ? <AppContainer /> : <InitializingScreen />);
}

export default App;