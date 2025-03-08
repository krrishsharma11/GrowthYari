import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetail = ({ name = "Yash" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello {name},</Text>
            <Text style={styles.subText}>Welcome to GrowthYari !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    greeting: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subText: {
        fontSize: 16,
        color: "#444",
    },
});

export default UserDetail;
