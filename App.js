import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Map from "./src/screens/Map";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Map />
    </View>
  );
}
