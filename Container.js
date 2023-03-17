import React from "react";

import Posts from "./src/screens/Posts";
import DetailPost from "./src/screens/DetailPost";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Detail Post" component={DetailPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
