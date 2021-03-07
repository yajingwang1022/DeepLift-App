import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import PreWorkout from "../screens/PreWorkout";
import Profile from "../screens/Profile";
import PastWorkouts from "../screens/PastWorkouts";
import QRCodePage from "../screens/QRCodePage";

const Stack = createStackNavigator();

const screenOptionStyle = {
  title: 'Deep Lift',
  headerTitleStyle: { 
    textAlign: 'center', 
    marginTop: '5%',
    flex: 1 
  },
  headerStyle: {
    backgroundColor: "#62a4f5",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const PastWorkoutsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="PastWorkouts" component={PastWorkouts} />
      </Stack.Navigator>
    );
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PreWorkout" component={PreWorkout} />
      <Stack.Screen name="QRCodePage" component={QRCodePage} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { PastWorkoutsStackNavigator, MainStackNavigator, ProfileStackNavigator };
