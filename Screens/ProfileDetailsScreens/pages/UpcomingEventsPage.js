import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import EventCard from "../../../src/components/EventCard";

const UpcomingEventsPage = () => {
  // Correctly map image sources
  const imageMap = {
    "event1.png": require("../../../assets/Event.png"),
    "event2.png": require("../../../assets/Event1.png"),
    "event3.png": require("../../../assets/Event3.png"),
    "event4.png": require("../../../assets/Event4.png"),
    "event5.png": require("../../../assets/Event5.png"),
    "event6.png": require("../../../assets/Event6.png"),
  };

  const eventData = [
    {
      name: "College Shark Tank",
      profile: "event1.png",
      time: "29 Jan . 7PM",
    },
    {
      name: "Growth Bazaar",
      profile: "event2.png",
      time: "12 Feb. 10PM",
    },
    {
      name: "Career Cosplay",
      profile: "event3.png",
      time: "18 Feb. 11AM",
    },
    {
      name: "Growthy-oke",
      profile: "event4.png",
      time: "28 Feb. 7PM",
    },
    {
      name: "Career Speed Datin",
      profile: "event5.png",
      time: "12 March . 10PM",
    },
    {
      name: "The Growth Cafe",
      profile: "event6.png",
      time: "18 March . 11AM",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Upcoming Events</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      >
        {eventData.map((item, index) => (
          <EventCard
            key={index}
            name={item.name}
            profile={imageMap[item.profile]} // Correctly maps images
            time={item.time}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingEventsPage;

const styles = StyleSheet.create({
  title1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    margin: 30,
  },
  flatListContainer: {
    marginTop: 10,
  },
});
