import React from "react";
import { Box, Text } from "native-base";

export default function DetailSoc({ route }) {
  return (
    <Box
      safeArea
      width="100%"
      height="100%"
      bg="primary.800"
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {route.params.value || "Not Found"}
      </Text>
    </Box>
  );
}
