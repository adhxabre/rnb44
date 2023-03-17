import React from "react";
import { Box, Text } from "native-base";

export default function Hello() {
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
    </Box>
  );
}
