import React from "react";
import { Box, Text, Pressable } from "native-base";

export default function Hello({ navigation }) {
  return (
    <Box
      bg="primary.800"
      display="flex"
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too smart
      </Text>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={16}>
        Lifeindo Ltd.
      </Text>

      <Pressable
        onPress={() => navigation.navigate("Form")}
        style={{
          backgroundColor: "white",
          height: 40,
          width: "40%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color="primary.800">Sign In</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("IncDec")}
        style={{
          backgroundColor: "white",
          height: 40,
          width: "40%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color="primary.800">Inc/Dec</Text>
      </Pressable>
    </Box>
  );
}
