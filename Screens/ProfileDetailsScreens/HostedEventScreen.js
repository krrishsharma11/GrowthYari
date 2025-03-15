import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../../src/components/Header";

const events = [
  {
    id: "1",
    title: "Event title",
    date: "7/12/24",
    maxParticipants: 500,
    totalParticipants: 355,
  },
  {
    id: "2",
    title: "Event title",
    date: "4/12/24",
    maxParticipants: 500,
    totalParticipants: 355,
  },
];

const EventCard = ({ event }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{event.title}</Text>
    <View style={styles.detailsContainer}>
      <View style={styles.detail}>
        <Text style={styles.label}>DATE</Text>
        <Text style={styles.value}>{event.date}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.label}>MAX PARTICIPANTS</Text>
        <Text style={styles.value}>{event.maxParticipants}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.label}>TOTAL PARTICIPANTS</Text>
        <Text style={styles.value}>{event.totalParticipants}</Text>
      </View>
    </View>
    <View style={styles.participantsRow}>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.avatar} />
      ))}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <View style={styles.moreParticipants}>
          <Text style={styles.moreText}>+4</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See details</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const HostedEventScreen = () => {
  const [activeTab, setActiveTab] = useState("Previous Events");

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "900" }}>Hosted Events</Text>
      </View>
      {/* Custom Tab Switcher */}
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setActiveTab("Previous Events")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "Previous Events"
                ? styles.activeTab
                : styles.inactiveTab,
            ]}
          >
            Previous Events
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Create New Events")}>
          <Text
            style={[
              styles.tabText,
              activeTab === "Create New Events"
                ? styles.activeTab
                : styles.inactiveTab,
            ]}
          >
            Create New Events
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderWidth: 0.5, margin: 20, borderColor: "#CBC4C4" }} />

      {/* Content Based on Active Tab */}
      {activeTab === "Previous Events" ? (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventCard event={item} />}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.center}>
          <Text>Create New Events</Text>
        </View>
      )}
    </View>
  );
};

export default HostedEventScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tabButton: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#2F4F4F",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
  },
  activeTabText: {
    color: "#2F4F4F",
  },
  listContainer: { padding: 16 },
  card: {
    backgroundColor: "#E3E8E5",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  detailsContainer: { flexDirection: "row", justifyContent: "space-between" },
  detail: { alignItems: "center" },
  label: { fontSize: 12, color: "#666" },
  value: { fontSize: 14, fontWeight: "bold" },
  participantsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#2F4F4F",
    marginRight: -5,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreParticipants: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#2F4F4F",
    alignItems: "center",
    justifyContent: "center",
  },
  moreText: { color: "#fff", fontWeight: "bold" },
  button: {
    marginTop: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#2F4F4F",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  buttonText: { fontWeight: "bold", color: "#2F4F4F" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
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
