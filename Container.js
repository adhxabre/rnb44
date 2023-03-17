import React from "react";
import { View } from "react-native";
import { Box, Text } from "native-base";

import Form from "./src/screens/Form";
import Hello from "./src/screens/Hello";
import IncDec from "./src/screens/IncDec";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "native-base";

const Stack = createStackNavigator();

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: theme.colors.primary["800"],
          headerStyle: { backgroundColor: theme.colors.white },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Hello}
          options={{
            title: "Hello Screen",
          }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            title: "Sign In",
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment/Decrement",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
