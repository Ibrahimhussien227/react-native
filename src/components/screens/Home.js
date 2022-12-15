import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import About from "./About";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={28} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={28} color="blue" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
