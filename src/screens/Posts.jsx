import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import axios from "axios";

export default function Posts(props) {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("Error fetching data!");
        setIsLoading(false);
      });
  };

  const _renderItem = ({ item }) => {
    return (
      <ListItem
        onPress={() => props.navigation.navigate("Detail Post", item)}
        key={item.id.toString()}
        bottomDivider
      >
        <Avatar
          rounded
          title={item.title.slice(0, 2)}
          containerStyle={{ backgroundColor: "black" }}
        />
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.title}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>{item.body}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        data={post}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={getPost}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});
