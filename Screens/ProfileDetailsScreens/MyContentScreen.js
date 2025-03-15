import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import ContentCard from "../../src/components/ContentCard";
import Header from "../../src/components/Header";

// Define the types for the images
const eventImages = {
  "event1.png": require("../../assets/Event.png"),
  "event2.png": require("../../assets/Event1.png"),
  "event3.png": require("../../assets/Event3.png"),
  "event4.png": require("../../assets/Event4.png"),
  "event5.png": require("../../assets/Event5.png"),
  "event6.png": require("../../assets/Event6.png"),
  "event7.png": require("../../assets/Event1.png"),
  "event8.png": require("../../assets/Event3.png"),
  "event9.png": require("../../assets/Event5.png"),
};

const personImages = {
  "person-image.jpg": require("../../assets/person-image.jpg"),
  "person-image2.jpg": require("../../assets/Profile.png"),
  "person-image3.jpg": require("../../assets/Profile1.png"),
  "person-image4.jpg": require("../../assets/person-image.jpg"),
  "person-image5.jpg": require("../../assets/Profile.png"),
  "person-image6.jpg": require("../../assets/Profile1.png"),
  "person-image7.jpg": require("../../assets/person-image.jpg"),
  "person-image8.jpg": require("../../assets/Profile.png"),
  "person-image9.jpg": require("../../assets/Profile1.png"),
};

const MyContentScreen = () => {
  const [selectedTab, setSelectedTab] = useState("videos"); // Fixed useState syntax

  // Arrays of video and photo data
  const videoData = [
    { image: "event1.png" },
    { image: "event2.png" },
    { image: "event3.png" },
    { image: "event4.png" },
    { image: "event5.png" },
    { image: "event6.png" },
    { image: "event7.png" },
    { image: "event8.png" },
    { image: "event9.png" },
  ];

  const photoData = [
    { image: "person-image.jpg" },
    { image: "person-image2.jpg" },
    { image: "person-image3.jpg" },
    { image: "person-image4.jpg" },
    { image: "person-image5.jpg" },
    { image: "person-image6.jpg" },
    { image: "person-image7.jpg" },
    { image: "person-image8.jpg" },
    { image: "person-image9.jpg" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <Header />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "900" }}>My Content</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => setSelectedTab("videos")}>
            <Text
              style={[
                styles.text,
                selectedTab === "videos"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
            >
              Videos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("photos")}>
            <Text
              style={[
                styles.text,
                selectedTab === "photos"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
            >
              Photos
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ borderWidth: 0.5, margin: 20, borderColor: "#CBC4C4" }}
        />

        {/* Conditional rendering based on the selected tab */}
        <View>
          {selectedTab === "videos" ? (
            <View style={styles.grid}>
              {videoData.map((item, index) => (
                <ContentCard key={index} image={eventImages[item.image]} />
              ))}
            </View>
          ) : (
            <View style={styles.grid}>
              {photoData.map((item, index) => (
                <ContentCard key={index} image={personImages[item.image]} />
              ))}
            </View>
          )}
        </View>
        {/* <View>
          <Image source={require("../../assets/Event.png")} />
        </View> */}
      </ScrollView>
    </View>
  );
};

export default MyContentScreen;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  activeTab: {
    color: "#000",
  },
  inactiveTab: {
    color: "#CBC4C4",
  },
  grid: {
    margin: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
