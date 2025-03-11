import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/core";
import axios from "axios";

export default function InterestsScreen() {
    const [interestData, setInterestData] = useState([]);
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const toggleSelection = (id) => {
        setSelectedInterests((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const getAndSearchInterest = async () => {
        setLoading(true);

        try {
            console.log("Fetching interests data...");
            const response = await axios.get("http://api.growthyari.com/auth/v1/interests?search=Web");

            if (response.data && response.status === 200) {
                console.log("Interests data received:", response.data);

                // Fix: Extract the interests array from the response
                // The data is nested in an "interests" property
                if (response.data.interests && Array.isArray(response.data.interests)) {
                    setInterestData(response.data.interests);
                    console.log("Processed interests data:", response.data.interests);
                } else {
                    console.warn("Unexpected data format - interests array not found:", response.data);
                    setInterestData([]);
                }
            }
        } catch (error) {
            console.error('Unable to load interest:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAndSearchInterest();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, padding: 20, backgroundColor: "white", marginTop: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-sharp" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: "absolute", right: 0 }} onPress={() => navigation.navigate("BottomTabNavigator")}>
                        <Text style={{ fontSize: 16 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>Interests</Text>
                <Text style={{ color: "gray", marginBottom: 20 }}>
                    Pick things you'd like to see in your feed
                </Text>
                <TextInput
                    placeholder="Search keywords"
                    style={{ padding: 10, borderWidth: 1, borderColor: "#ddd", borderRadius: 10, marginBottom: 20 }}
                />

                {loading ? (
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                        <ActivityIndicator size="large" color="#2C4735" />
                        <Text style={{ marginTop: 10 }}>Loading interests...</Text>
                    </View>
                ) : (
                    <FlatList
                        data={interestData}
                        keyExtractor={(item) => (item._id ? item._id.toString() : Math.random().toString())}
                        numColumns={3}
                        ListEmptyComponent={() => (
                            <Text style={{ textAlign: 'center', padding: 20 }}>No interests found</Text>
                        )}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    margin: 5,
                                    padding: 10,
                                    backgroundColor: selectedInterests.includes(item._id) ? "#e6f7ff" : "#f9f9f9",
                                    borderRadius: 10,
                                    borderWidth: selectedInterests.includes(item._id) ? 2 : 0,
                                    borderColor: "#007bff",
                                }}
                                onPress={() => toggleSelection(item._id)}
                            >
                                <Image source={require("../assets/webDesign.png")} style={{ width: 60, height: 60, borderRadius: 10 }} />
                                <Text style={{ textAlign: "center", marginTop: 5 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}

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