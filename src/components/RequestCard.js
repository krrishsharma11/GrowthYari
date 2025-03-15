import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const RequestCard = ({ name, passion, profile }) => {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userPassion}>{passion}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonAccept}>
              <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDecline}>
              <Text style={styles.buttonText}>Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={profile} style={styles.userImage} />
      </View>
    </View>
  );
};

export default RequestCard;

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
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: -20,
    marginTop: 10,
  },
  buttonAccept: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#2C473552",
    borderRadius: 5,
  },
  buttonText: {
    color: "#2C4735",
  },
  buttonDecline: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
