import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ConnectionCard = ({ name, passion, profile }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userPassion}>{passion}</Text>
      </View>
      <Image source={profile} style={styles.userImage} />
    </View>
  );
};

export default ConnectionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#2C47352B",
    width: 330,
    height: 130,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#2C4735",
    borderRadius: 8,
    marginVertical: 10,
  },
  userName: {
    fontSize: 20,
  },
  userPassion: {
    fontSize: 15,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
