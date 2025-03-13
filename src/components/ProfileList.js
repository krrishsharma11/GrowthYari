import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using expo icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/core";
import { axiosClient } from "./axiosClient"; // Import the custom axios client

const url = "/auth/v1/posts"; // Use relative URL since baseURL is set in axiosClient
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
                <Image source={{ uri: profile.mediaUrl[0] }} style={styles.profilePic} />
                <View>
                    <Text style={styles.name}>{profile.userId.fullName}</Text>
                    <Text style={styles.profession}>{profile.category}</Text>
                </View>
                <View style={{ position: "absolute", right: 0 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                        <Text style={styles.connect}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main Image */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: profile.mediaUrl[0] }} style={styles.mainImage} />

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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllPosts = async () => {
        setLoading(true);

        try {

            const response = await axiosClient.get(url,
            );

            if (response.data && response.status === 200) {
                // Extract the posts array from the response
                if (response.data.posts && Array.isArray(response.data.posts)) {

                    setData(response.data.posts); // Set the posts array to state
                } else {
                    console.warn("Unexpected data format - posts array not found:", response.data);
                    setData(fakeProfiles); // Use fallback data if API format is unexpected
                }
            }
        } catch (error) {
            console.error('Unable to load posts:', error);
            setData(fakeProfiles); // Use fallback data on error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2C4735" />
                <Text style={styles.loadingText}>Loading posts...</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <ProfileCard profile={item} />}
            ListEmptyComponent={
                <Text style={styles.emptyText}>No posts available</Text>
            }
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
        resizeMode: "contain",
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
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
    },
    emptyText: {
        textAlign: 'center',
        padding: 20,
        color: '#666',
    },
});

export default ProfileList;