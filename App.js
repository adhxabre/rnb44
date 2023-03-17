import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Form from "./src/screens/Form";

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <StatusBar />
      <Form />
    </View>
  );
}
