import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import axios from "axios";

export default function DetailPost(props) {
  const title = props.route.params.title;
  const body = props.route.params.body;
  const id = props.route.params.id;

  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComment();
  }, []);

  function getComment() {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => {
        setComment(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  }

  const _renderItem = ({ item }) => {
    return (
      <ListItem key={item.id.toString()} bottomDivider>
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>{title.email}</ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {`${item.name} | ${item.body}`}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        {title}
      </Text>
      <Text style={{ marginTop: 20 }}>{body}</Text>
      <Text style={{ marginTop: 20, color: "gray" }}>Comments</Text>
      <FlatList
        data={comment}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 16,
    display: "flex",
  },
});
