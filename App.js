import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/components/Header";

import Content from "./src/components/Content";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Header />
      <Content />
    </View>
  );
}
