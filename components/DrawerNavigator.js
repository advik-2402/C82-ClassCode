import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./AppTabNavigator";
import { SideBar } from "../components/SideBar";
import Profile from "../screens/Profile";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Setting: {
      screen: Profile,
    },
  },
  { contentComponent: SideBar },
  { initialRouteName: "Home" }
);
