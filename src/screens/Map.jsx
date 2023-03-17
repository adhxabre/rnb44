import { FlatList, View, Text } from "react-native";

export default function Map() {
  const cars = [
    { name: "BMW" },
    { name: "Mercudu" },
    { name: "Lemberjember" },
    { name: "Fururri" },
    { name: "Tuyuti" },
    { name: "Tesla" },
  ];

  return (
    <View>
      <Text>This is list on React Native</Text>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarList name={item.name} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

function CarList(props) {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}
