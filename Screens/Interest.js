import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/core";

const interestsData = [
    { id: 1, name: "UI/UX Design", image: require("../assets/development.png") },
    { id: 2, name: "Graphic Design", image: require("../assets/graphicDesign.png") },
    { id: 3, name: "Web Design", image: require("../assets/uiXdesign.png") },
    { id: 4, name: "Development", image: require("../assets/webDesign.png") },
    { id: 5, name: "Data Science", image: require("../assets/development.png") },
    { id: 6, name: "Content Writing", image: require("../assets/development.png") },
    { id: 7, name: "UI/UX Design", image: require("../assets/development.png") },
    { id: 8, name: "Graphic Design", image: require("../assets/graphicDesign.png") },
    { id: 9, name: "Web Design", image: require("../assets/uiXdesign.png") },
    { id: 10, name: "Development", image: require("../assets/webDesign.png") },
    { id: 11, name: "Data Science", image: require("../assets/development.png") },
    { id: 12, name: "Content Writing", image: require("../assets/development.png") },

];

export default function InterestsScreen() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const navigation = useNavigation();
    const toggleSelection = (id) => {
        setSelectedInterests((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, padding: 20, backgroundColor: "white", marginTop: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={() => navigation.navigate("BottomTabNavigator")}>
                        <Text style={{ fontSize: 16 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Interests</Text>
                <Text style={{ color: "gray", marginBottom: 20 }}>
                    Pick things you’d like to see in your feed
                </Text>
                <TextInput
                    placeholder="Search keywords"
                    style={{ padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 20 }}
                />
                <FlatList
                    data={interestsData}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: "center",
                                margin: 5,
                                padding: 10,
                                backgroundColor: selectedInterests.includes(item.id) ? "#e6f7ff" : "#f9f9f9",
                                borderRadius: 10,
                                borderWidth: selectedInterests.includes(item.id) ? 2 : 0,
                                borderColor: "#007bff",
                            }}
                            onPress={() => toggleSelection(item.id)}
                        >
                            <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 10 }} />
                            <Text style={{ textAlign: "center", marginTop: 5 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: "#2C4735",
                        padding: 15,


                        borderRadius: 70,
                        alignItems: "center",
                        marginTop: 20,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.navigate("BottomTabNavigator")}
                >
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                        {selectedInterests.length} of 10 Selected
                    </Text>
                    <Ionicons name="arrow-forward" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
