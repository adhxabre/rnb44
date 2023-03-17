import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EmbedExpressions from "./src/components/EmbedExpressions";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <EmbedExpressions />
    </View>
  );
}
