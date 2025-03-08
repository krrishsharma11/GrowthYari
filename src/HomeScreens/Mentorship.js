import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Expo Icons
import Header from "../components/Header";

const ConnectCard = ({ user }) => {
    return (
        <View style={styles.container}>
            {/* Header with Close Button */}
            <View style={styles.header}>
                <Ionicons name="leaf-outline" size={28} color="white" />
                <TouchableOpacity>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>

            {/* Title */}
            <Text style={styles.title}>Disclaimer!</Text>
            <Text style={styles.subtitle}>To connect with {user.name}</Text>

            {/* Chat & Video Chat Options */}
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionBox}>
                    <Text style={styles.optionText}>Chat</Text>
                    <Text style={styles.price}>₹200 / 5min</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionBox}>
                    <Text style={styles.optionText}>Video Chat</Text>
                    <Text style={styles.price}>₹400 / 5min</Text>
                </TouchableOpacity>
            </View>

            {/* Pay Button */}
            <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>

            {/* Not Now Option */}
            <TouchableOpacity>
                <Text style={styles.notNow}>Not Now</Text>
            </TouchableOpacity>
        </View>
    );
};

// Main App Component
const Mentorship = () => {
    const user = { name: "Anuj Sharma" };

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.screen}>

                <ConnectCard user={user} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EAEAEA",
    },
    container: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        padding: 20,
        elevation: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#1f3d2b",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#333",
        marginBottom: 10,
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 10,
    },
    optionBox: {
        backgroundColor: "#D4E6C3",
        padding: 12,
        borderRadius: 10,
        width: "45%",
        alignItems: "center",
    },
    optionText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 14,
        color: "#555",
    },
    payButton: {
        backgroundColor: "#1f3d2b",
        padding: 12,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
        marginTop: 10,
    },
    payText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    notNow: {
        marginTop: 10,
        fontSize: 14,
        color: "#888",
    },
});

export default Mentorship;
