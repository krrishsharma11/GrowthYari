import { Image, StyleSheet, View } from "react-native";
import React from "react";

const ContentCard = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
  image: {
    width: 110,
    height: 180,
    borderRadius: 8,
    elevation: 10,
  },
});
