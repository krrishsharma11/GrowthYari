import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Expo Icons
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";

const ConnectCard = ({ user }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Header with Close Button */}
            {/* <Image style={{ height: "100", width: "100", position: "absolute", top: 10 }} source={require("../../assets/logo1.png")} /> */}
            <Image source={require("../../assets/paymentHeader.png")} style={styles.image} />
            <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }} onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>

            <View style={{ alignItems: "center" }}>
                {/* Title */}
                <Text style={[styles.title, { position: "absolute", top: -150 }]}>Disclaimer!</Text>
                <Text style={[styles.subtitle, { position: "absolute", top: -90 }]}>To connect with {user.name}</Text>
            </View>




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
            <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentScreen')}>
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
const Payment = () => {
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
        height: 631,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
        padding: 20,
        elevation: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
    image: {
        width: "113%",
        top: -20,

    },

    title: {
        fontSize: 27,
        fontWeight: "500",
        marginTop: 10,
        color: "white"
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 10,
        fontWeight: "500",
        textAlign: "center"
    },

    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 70,
    },
    optionBox: {
        backgroundColor: "#2C4735",
        padding: 12,
        borderRadius: 10,
        width: "45%",
        alignItems: "center",
        height: 148,
        width: 148,
    },
    optionText: {
        fontSize: 24,
        fontWeight: "500",
        color: "white",

    },
    price: {
        fontSize: 20,
        fontWeight: "500",
        color: "white",
        marginTop: 55,
    },
    payButton: {

        backgroundColor: "#1f3d2b",
        padding: 12,
        borderRadius: 30,
        width: "90%",
        alignItems: "center",
        marginTop: 45,

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

export default Payment;
