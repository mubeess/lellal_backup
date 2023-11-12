import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import {
  HomeIcon,
  HomeIcon2,
  NotificationIcon,
  SearchIcon,
  SettingsIcon,
} from "../../assets/Svg/Index";
import Colors from "../../constants/Colors";
import HomeScreenStack from "../Stack/HomeScreenStack";
import HomeScreen from "../../screens/MainApp/Home/HomeScreen";
const Tab = createBottomTabNavigator();
const MainAppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // @ts-ignore
        tabBarStyle: {
          backgroundColor: "#fff",
        },

        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: Colors.general.secondary,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <HomeIcon2 {...props} />,
          tabBarLabel: "Home",
        }}
        name="Home"
        component={HomeScreenStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <SearchIcon {...props} />,
          tabBarLabel: "Search",
        }}
        name="Search"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <NotificationIcon {...props} />,
          tabBarLabel: "Notifications",
        }}
        name="Notifications"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <SettingsIcon {...props} />,
          tabBarLabel: "Settings",
        }}
        name="Settings"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default MainAppBottomTab;

const styles = StyleSheet.create({});
