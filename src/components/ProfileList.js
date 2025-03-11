import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using expo icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/core";
const fakeProfiles = [
    {
        id: "1",
        name: "Ruchi Yadav",
        profession: "Fashion Designer",
        profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
        mainImage: require("../../assets/girl.png"),
        time: "0:40",
    },
    {
        id: "2",
        name: "Jay Rajput",
        profession: "Architecture",
        profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
        mainImage: require("../../assets/girl.png"),
        time: "0:50",
    },
    {
        id: "3",
        name: "Aditi Sharma",
        profession: "Marketing Manager",
        profilePic: "https://randomuser.me/api/portraits/men/35.jpg",
        mainImage: require("../../assets/girl.png"),
        time: "1:10",
    },
];

const ProfileCard = ({ profile }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            {/* Profile Header */}
            <View style={styles.header}>
                <Image source={{ uri: profile.profilePic }} style={styles.profilePic} />
                <View  >
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.profession}>{profile.profession}</Text>
                </View>
                <View style={{ position: "absolute", right: 0 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                        <Text style={styles.connect}>Connect</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {/* Main Image */}
            <View style={styles.imageContainer}>
                <Image source={profile.mainImage} style={styles.mainImage} />
                <View style={styles.timerOverlay}>
                    <Text style={styles.timerText}>{profile.time}</Text>
                </View>
            </View>

            {/* Action Icons */}
            <View style={styles.actions}>
                <Ionicons name="heart-circle-outline" size={30} color="black" />
                <MaterialCommunityIcons name="send-circle-outline" size={30} color="black" />
            </View>
        </View>
    );
};

const ProfileList = () => {
    return (
        <FlatList
            data={fakeProfiles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProfileCard profile={item} />}
        />
    );
};

const styles = StyleSheet.create({
    card: {

        borderRadius: 10,
        marginVertical: 10,
        padding: 10,

    },
    header: {
        flexDirection: "row",
        flex: 1,

    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,

    },
    profession: {
        color: "gray",
        fontSize: 12,
    },
    connect: {
        color: "blue",
        fontWeight: "bold",
    },
    imageContainer: {
        marginTop: 10,
        position: "relative",
    },
    mainImage: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        resizeMode: "contain"

    },
    timerOverlay: {
        position: "absolute",
        top: 5,
        right: 5,

        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    timerText: {
        color: "black",
        fontSize: 12,
    },
    actions: {
        flexDirection: "row",
        padding: 20,
        gap: 8,
        paddingVertical: 8,
    },
});

export default ProfileList;
