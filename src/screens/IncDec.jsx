import React, { useState } from "react";
import { Box, Text, Pressable } from "native-base";

export default function IncDec() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count >= 50) return;
    setCount(count + 1);
  }

  function decrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <Box
      width="100%"
      height="100%"
      bg="primary.800"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="xl">{count}</Text>

      <Pressable
        onPress={increment}
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
        <Text color="primary.800">Inc</Text>
      </Pressable>

      <Pressable
        onPress={decrement}
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
        <Text color="primary.800">Dec</Text>
      </Pressable>
    </Box>
  );
}
