import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../src/components/Header";
import UpcomingEventsPage from "./pages/UpcomingEventsPage";
import PreviousEventsPage from "./pages/PreviousEventsPage";

const MyEventsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming"); // Fixed useState syntax
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
          <Text style={{ fontSize: 25, fontWeight: "900" }}>Events</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => setSelectedTab("upcoming")}>
            <Text
              style={[
                styles.text,
                selectedTab === "upcoming"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
            >
              Upcoming Events
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("previous")}>
            <Text
              style={[
                styles.text,
                selectedTab === "previous"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
            >
              Previous Events
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ borderWidth: 0.5, margin: 20, borderColor: "#CBC4C4" }}
        />
        <View>
          {selectedTab === "upcoming" ? (
            <UpcomingEventsPage />
          ) : (
            <PreviousEventsPage />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyEventsScreen;

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
});
