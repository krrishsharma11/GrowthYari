import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../Zustland/store";
import { useNavigation } from "@react-navigation/core";

const handleLogout = async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("login");
};
const ProfileScreen = () => {
  const { user, initUser } = useAuthStore();
  useEffect(() => {
    initUser();
    console.log("our data", user?.user);
  }, []);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/girl.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.user?.fullName}</Text>
        <Text style={styles.title}>UX/UI Designer</Text>
      </View>

      {/* Buttons List */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.goto)}
          >
            <Ionicons name={item.icon} size={24} color="#008080" />
            <Text style={styles.menuText}>{item.label}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleLogout()}>
        <Text style={{ color: "red", fontWeight: "bold" }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Menu Items Data
const menuItems = [
  { label: "My Connection", icon: "people", goto: "MyConnectionScreen" },
  { label: "Content Gallery", icon: "images", goto: "MyContentScreen" },
  { label: "Events", icon: "calendar", goto: "MyEventsScreen" },
  {
    label: "Hosted Events",
    icon: "calendar-outline",
    goto: "HostedEventScreen",
  },
  { label: "Want to earn money", icon: "cash", goto: "MyContentScreen" },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },

  // Header
  header: {
    backgroundColor: "#004D40",
    paddingVertical: 30,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFF",
  },
  name: { fontSize: 22, fontWeight: "bold", color: "#FFF", marginTop: 10 },
  title: { fontSize: 16, color: "#B2DFDB" },

  // Menu Items
  menuContainer: { marginTop: 20 },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  menuText: { flex: 1, fontSize: 18, marginLeft: 15, color: "#333" },
});

export default ProfileScreen;
