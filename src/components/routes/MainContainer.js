import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Profile from "../screens/Profile";
import Home from "../screens/Home";
import About from "../screens/About";
import UserList from "../screens/UserList";

const Drawer = createDrawerNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Users" component={UserList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
