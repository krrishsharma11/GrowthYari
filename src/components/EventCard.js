import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

const EventCard = ({ name, profile, time }) => {
  const [fav, setFav] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.firstContainer}>
        <Image source={profile} style={styles.image} />
        <View>
          <Text style={styles.eventName}>{name}</Text>
          <Text style={styles.eventTime}>{time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.icon} onPress={() => setFav(!fav)}>
        <Icon name="heart" color={fav ? "red" : "white"} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  firstContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 700,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 5,
  },
  eventTime: {
    color: "#A7A7A7",
    fontSize: 13,
    fontWeight: 600,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#2C4735",
  },
});
