import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Event from "./src/components/Event";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Event />
    </View>
  );
}
