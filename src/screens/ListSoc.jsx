import React from "react";
import { Box, FlatList, Pressable, Text } from "native-base";

const SocMed = [
  "Netflix",
  "Facebook",
  "Twitter",
  "Instagram",
  "YouTube",
  "Tinder",
  "BBM",
  "Snapchat",
  "Kaskus",
  "Pixiv",
];

export default function ListSoc({ navigation }) {
  const handlePress = (value) => {
    navigation.navigate("Detail Social", { value });
  };

  return (
    <Box
      safeArea
      bg="primary.800"
      justifyContent="center"
      alignItems="center"
      p={10}
    >
      <FlatList
        data={SocMed}
        renderItem={({ item }) => (
          <Pressable onPress={() => handlePress(item)}>
            <Text
              fontFamily="body"
              fontWeight={400}
              fontStyle="italic"
              fontSize={30}
              margin={5}
            >
              {item}
            </Text>
          </Pressable>
        )}
      />
    </Box>
  );
}
