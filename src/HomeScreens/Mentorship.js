import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InforCard";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";

export default function Mentorship() {
  const navigation = useNavigation();
  const infoCards = [
    {
      title: "Rojgar Karobar",
      description: "Generate Your Equal Share For Just 300 INR",
      image: require("../../assets/rozgar.png"), // Replace with your actual image path
    },
    {
      title: "Pitch Your Innovative Idea",
      description: "Pitch your ideas to the sharks and get recognition, mentorship, and investment.",
      image: require("../../assets/background.png"), // Replace with your actual image path
    },
    {
      title: "GrowthYari Community",
      description: "Join our community and grow with like-minded individuals.",
      image: require("../../assets/rozgar.png"), // Replace with your actual image path
    },
  ];
     
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#f5f5f5", borderRadius: 10, padding: 8, marginBottom: 15 }}>
        <FontAwesome name="search" size={20} color="gray" style={{ marginRight: 5 }} />
        <TextInput placeholder="Search keywords" style={{ flex: 1 }} />
      </View>

      {/* Banner Section */}
      <View style={{ backgroundColor: "#2d6a4f", borderRadius: 10, padding: 15, marginBottom: 15 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Grow together, succeed together</Text>
        <Text style={{ color: "white", marginBottom: 10 }}>Connect, share, and grow with like-minded individuals.</Text>
        <TouchableOpacity style={{ backgroundColor: "white", padding: 8, borderRadius: 5, alignSelf: "flex-start" }}>
          <Text style={{ color: "#2d6a4f", fontWeight: "bold" }}>Expert Advice</Text>
        </TouchableOpacity>
      </View>

      {/* Know More About Us */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Know More About Us</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProgramScreen')}>
          <View style={{ borderColor: "grey", borderWidth: 2, backgroundColor: "#2C47350F", alignItems: "center", padding: 10, borderRadius: 10, flex: 1, marginRight: 5 }}>
            <FontAwesome name="book" size={30} color="orange" />
            <Text>Programs</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EventScreen')}>
          <View style={{ borderColor: "grey", borderWidth: 2, backgroundColor: "#2C47350F", alignItems: "center", padding: 10, borderRadius: 10, flex: 1, marginRight: 5 }}>
            <FontAwesome name="calendar" size={30} color="red" />
            <Text>Events & Hackathons</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ borderColor: "grey", borderWidth: 2, backgroundColor: "#2C47350F", alignItems: "center", padding: 10, borderRadius: 10, flex: 1 }}>
            <FontAwesome name="users" size={30} color="green" />
            <Text>Communities</Text>
          </View>
        </TouchableOpacity>
      </View>


      {/* Cutting-Edge AI Tools */}
      <View style={{ backgroundColor: "#2d6a4f", padding: 15, borderRadius: 10, marginBottom: 15 }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Cutting-Edge AI Tools</Text>
        <Text style={{ color: "white" }}>Empowering communities with AI-driven learning platforms.</Text>
        <TouchableOpacity style={{ backgroundColor: "white", padding: 8, borderRadius: 5, alignSelf: "flex-start", marginTop: 10 }}>
          <Text style={{ color: "#2d6a4f", fontWeight: "bold" }}>Join Community</Text>
        </TouchableOpacity>
      </View>

      {/* Mentorship Section */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Explore your Personalized Mentorship</Text>
      <View style={{ flexDirection: "row", marginBottom: 15, justifyContent: "space-evenly" }}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/Profile.png")} style={{ width: 70, height: 70, borderRadius: 35 }} />
          <Text>Aisa Rehman</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/Profile1.png")} style={{ width: 70, height: 70, borderRadius: 35 }} />
          <Text>Kuldeep Deshmukh</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/Profile.png")} style={{ width: 70, height: 70, borderRadius: 35 }} />
          <Text>Rohan Sharma</Text>
        </View>
      </View>
      {/* Info Cards Section */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Featured Programs</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {infoCards.map((card, index) => (
          <InfoCard key={index} title={card.title} description={card.description} image={card.image} />
        ))}
      </ScrollView>

    </ScrollView >
  );
}