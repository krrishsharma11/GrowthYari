import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ConnectionPage from "./pages/ConnectionPage";
import RequestPage from "./pages/RequestPage";
import Header from "../../src/components/Header";

const MyConnectionScreen = () => {
  const [activeTab, setActiveTab] = useState("connected"); // State to track active tab

  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "900" }}>My Connection</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => setActiveTab("connected")}>
            <Text
              style={[
                styles.text,
                activeTab === "connected"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
            >
              Connected
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab("request")}>
            <Text
              style={[
                styles.text,
                activeTab === "request" ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              Request
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ borderWidth: 0.5, margin: 20, borderColor: "#CBC4C4" }}
        />

        <View>
          {/* Conditionally render based on active tab */}
          {activeTab === "connected" ? <ConnectionPage /> : <RequestPage />}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyConnectionScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
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
