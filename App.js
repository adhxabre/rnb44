import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Props from "./src/screens/Props";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Props />
    </View>
  );
}
