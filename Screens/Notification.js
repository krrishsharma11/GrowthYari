import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import Ionicons from '@expo/vector-icons/Ionicons';
const notifications = [
    {
        id: "1",
        type: "request",
        name: "Ashwin Bose",
        message: "is requesting to attend your event.",
        time: "2m",
        avatar: require("../assets/Profile.png"),
        buttons: ["Accept", "Decline"],
    },
    {
        id: "2",
        type: "like",
        name: "Patrick",
        message: "liked your reel.",
        time: "8h",
        avatar: require("../assets/Profile1.png"),
    },
    {
        id: "3",
        type: "question",
        name: "New Question from Patrick",
        message: "Importance of competitive research in UI/UX Designing.",
        time: "14h",
        avatar: require("../assets/Profile.png"),
        buttons: ["Accept"],
    },
    {
        id: "4",
        type: "file",
        name: "Samantha",
        message: "has shared a file with you",
        time: "14h",
        avatar: require("../assets/Profile1.png"),
        file: { name: "Demo File.pdf", size: "2.2 MB" },
    },
    {
        id: "5",
        type: "comment",
        name: "Steve and 8 others",
        message: "added comments on Design Assets - Smart Tags file",
        time: "15h",
        avatar: require("../assets/Profile.png"),
    },
];

export default function NotificationScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: "white", marginTop: 20 }}>
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, marginTop: 30 }}>Notification</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", padding: 10, borderRadius: 10, marginBottom: 10 }}>
                        <Image source={item.avatar} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.name} <Text style={{ fontWeight: "normal" }}>{item.message}</Text></Text>
                            {item.file && (
                                <TouchableOpacity style={{ marginTop: 5, backgroundColor: "#e6f7ff", padding: 5, borderRadius: 5 }}>
                                    <Text style={{ color: "#007bff" }}>{item.file.name} {item.file.size}</Text>
                                </TouchableOpacity>
                            )}
                            {item.buttons && (
                                <View style={{ flexDirection: "row", marginTop: 5 }}>
                                    {item.buttons.map((btn, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{ backgroundColor: index === 0 ? "#4CAF50" : "#ccc", padding: 5, borderRadius: 5, marginRight: 5 }}
                                        >
                                            <Text style={{ color: "white" }}>{btn}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}
                        </View>
                        <Text style={{ color: "gray", fontSize: 12 }}>{item.time}</Text>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <MaterialIcons name="more-vert" size={20} color="gray" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}