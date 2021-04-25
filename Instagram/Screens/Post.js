import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Avatar } from "react-native-paper";

const Post = ({ username, caption, uri }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 5 }}>
        <Avatar.Image source={require("../assets/pic.png")} size={50} />
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginLeft: 5,
              color: "white",
            }}
          >
            {username}
          </Text>
          <Text style={{ fontSize: 13, marginLeft: 5, color: "white" }}>
            Location Pune,Maharashtra
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 300,
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderColor: "#191919",
        }}
      >
        <Image source={{ uri }} style={styles.img} resizeMode="cover" />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
          {username}
        </Text>
        <Text style={{ fontSize: 17, color: "white" }}> : {caption}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: "black",
  },

  img: {
    width: "100%",
    height: 252,
    height: "100%",
  },
});
