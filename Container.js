import React from "react";
import { View } from "react-native";
import { Box, Text } from "native-base";

import Form from "./src/screens/Form";
import Hello from "./src/screens/Hello";

export default function Container() {
  return (
    <View>
      <Form />
    </View>
  );
}
