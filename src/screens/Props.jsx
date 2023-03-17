import { Text, View } from "react-native";

import List from "../components/list";

export default function Props() {
  return (
    <View>
      <Text>This is props</Text>
      <List title="BMW" />
      <List title="Mercedez" />
      <List title="Toyota" />
      <List title="Tesla" />
    </View>
  );
}
