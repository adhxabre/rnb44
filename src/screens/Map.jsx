import { View, Text } from "react-native";

export default function Map() {
  const cars = ["BMW", "Mercedes", "Lemberjember", "Fururri", "Tuyuta"];

  return (
    <View>
      <Text>This is list on React Native</Text>
      {cars.map((car, i) => (
        <Text key={i}>{car}</Text>
      ))}
    </View>
  );
}
