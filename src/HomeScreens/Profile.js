import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../Zustland/store';

const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('login');
}

const ProfileScreen = ({ navigation }) => {
    const { user, initUser } = useAuthStore();
    useEffect(() => {
        initUser()
        console.log("our data", user?.user);
    }, [])

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require("../../assets/girl.png")}
                        style={styles.avatar}
                    />
                    
                </View>
                <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('EditProfile')}>
                        <Ionicons name="pencil" size={24} color="#fff" />
                    </TouchableOpacity>
            </View>

            {/* Name and Title Section */}
            <View style={styles.nameTitleContainer}>
                <Text style={styles.name}>{user?.user?.fullName}</Text>
                <Text style={styles.title}>UX/UI Designer</Text>
            </View>

            {/* Buttons List */}
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <Ionicons name={item.icon} size={24} color="#2C4735" />
                        <Text style={styles.menuText}>{item.label}</Text>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleLogout()}>
                <Ionicons name="log-out-outline" size={24} color="#2C4735" />
                <Text style={[styles.menuText, { color: "#2C4735" }]}>Log Out</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="#2C4735"
                />
            </TouchableOpacity>
        </View>
    );
};

// Menu Items Data
const menuItems = [
    { label: "My Connection", icon: "people" },
    { label: "Content Gallery", icon: "images" },
    { label: "Events", icon: "calendar" },
    { label: "Hosted Events", icon: "calendar-outline" },
    { label: "Want to earn money", icon: "cash" },
];

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F5F5F5" },

    // Header
    header: {
        backgroundColor: "#004D40",
        paddingVertical: 95,
        alignItems: "center",
        position: 'relative',
    },
    avatarContainer: {
        position: 'absolute',
        top: 132,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#FFF",
        backgroundColor: "#004D40",
    },
    avatar: { width: 100, height: 100, borderRadius: 50 },
    editIcon: {
        position: 'absolute',
        bottom: 12,
        
        right: 20,
        
        borderRadius: 12,
        padding: 2,
    },
    nameTitleContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    name: { fontSize: 22, fontWeight: "bold", color: "#333" },
    title: { fontSize: 20, color: "#008080" , backgroundColor:"#2C473545", borderColor:'#2C473545', borderWidth:1, padding:5, borderRadius:5},

    // Menu Items
    menuContainer: { marginTop: 20 },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3
    },
    menuText: { flex: 1, fontSize: 18, marginLeft: 15, color: "#333" },
});

export default ProfileScreen;
