import React from "react";
import { View } from "react-native";
import { Box, Text } from "native-base";

import Form from "./src/screens/Form";
import Hello from "./src/screens/Hello";
import IncDec from "./src/screens/IncDec";
import ListSoc from "./src/screens/ListSoc";
import DetailSoc from "./src/screens/DetailSoc";

import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "native-base";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["800"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Form") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "ListSoc") {
            iconName = focused ? "ios-list-circle" : "ios-list-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: theme.colors.secondary["500"],
      })}
    >
      <Tab.Screen name="Home" component={Hello} />
      <Tab.Screen name="Form" component={Form} />
      <Tab.Screen name="ListSoc" component={ListSoc} />
    </Tab.Navigator>
  );
}

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: theme.colors.primary["800"],
          headerStyle: { backgroundColor: theme.colors.white },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment/Decrement",
          }}
        />
        <Stack.Screen
          name="Detail Social"
          component={DetailSoc}
          options={{
            title: "Detail Social",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["800"] },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
