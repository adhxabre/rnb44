import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function State() {
  const [count, setCount] = useState(0);

  const Add = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };

  const Less = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <View>
      <Text style={{ fontSize: 50 }}>Hi!</Text>
      <Text style={{ fontSize: 50 }}>This is count!</Text>
      <Text style={{ fontSize: 50 }}>{count}</Text>

      <TouchableOpacity onPress={Add}>
        <Text style={{ fontSize: 50 }}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Less}>
        <Text style={{ fontSize: 50 }}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
