import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuthStore } from "../Zustland/store";

const UserDetail = () => {
    const { user, initUser } = useAuthStore();
    useEffect(() => {
        initUser()
        console.log(user);

    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello {user?.user?.fullName},</Text>
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
