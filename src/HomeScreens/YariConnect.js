import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Ionicons } from "@expo/vector-icons"; // Using expo icons

const profile =
{
    id: "1",
    name: "Ruchi Yadav",
    profession: "Fashion Designer",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    mainImage: require("../../assets/vedio.png"),
    time: "0:40",
}


const YariConnect = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View>
                <View style={styles.card}>
                    {/* Profile Header */}
                    <View style={styles.header}>
                        <Image source={{ uri: profile.profilePic }} style={styles.profilePic} />
                        <View>
                            <Text style={styles.name}>{profile.name}</Text>
                            <Text style={styles.profession}>{profile.profession}</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.connect}>Connect</Text>
                        </TouchableOpacity>
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
                        <Ionicons name="heart-outline" size={22} color="black" />
                        <Ionicons name="chatbubble-outline" size={22} color="black" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default YariConnect

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
        width: "100%",
    },
    mainImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        resizeMode: "contain"
    },
    timerOverlay: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    timerText: {
        color: "white",
        fontSize: 12,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 8,
    },
});