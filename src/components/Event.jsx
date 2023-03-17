import { Text, View, TouchableOpacity } from "react-native";

export default function Event() {
  function Greetings() {
    return alert("Hello world!");
  }

  return (
    <View>
      <Text>This is event</Text>
      <TouchableOpacity onPress={Greetings}>
        <Text>P Mabar</Text>
      </TouchableOpacity>

      <Text>This is event inline</Text>
      <TouchableOpacity onPress={() => alert("Frifayer")}>
        <Text>P mabar bos</Text>
      </TouchableOpacity>
    </View>
  );
}
