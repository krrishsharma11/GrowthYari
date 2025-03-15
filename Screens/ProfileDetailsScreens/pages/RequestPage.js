import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import RequestCard from "../../../src/components/RequestCard";

// Correctly map image sources
const imageMap = {
  "person-image.jpg": require("../../../assets/person-image.jpg"),
  "person-image2.jpg": require("../../../assets/Profile.png"),
  "person-image3.jpg": require("../../../assets/Profile1.png"),
};

const connectionData = [
  {
    name: "Divyam",
    location: "Mumbai",
    profile: "person-image.jpg",
    passion: "UI/UX Designer",
  },
  {
    name: "Shivani",
    location: "Delhi",
    profile: "person-image2.jpg",
    passion: "Web Developer",
  },
  {
    name: "Aryan",
    location: "Bangalore",
    profile: "person-image3.jpg",
    passion: "Data Scientist",
  },
  {
    name: "Neha",
    location: "Pune",
    profile: "person-image.jpg",
    passion: "Graphic Designer",
  },
  {
    name: "Rohan",
    location: "Chennai",
    profile: "person-image2.jpg",
    passion: "App Developer",
  },
  {
    name: "Priya",
    location: "Hyderabad",
    profile: "person-image3.jpg",
    passion: "Product Manager",
  },
];

const RequestPage = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        >
          {connectionData.map((item, index) => (
            <RequestCard
              key={index}
              name={item.name}
              profile={imageMap[item.profile]} // Correctly maps images
              passion={item.passion}
              style={styles.card} // Add style to apply margin
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RequestPage;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    marginVertical: 10,
  },
  card: {
    marginBottom: 10, // Add margin between each card
  },
});
