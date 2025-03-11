import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Ionicons } from "@expo/vector-icons"; // Using expo icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
const { width } = Dimensions.get("window");
const profile =
{
    id: "1",
    name: "Ruchi Yadav",
    profession: "Fashion Designer",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    mainImage: require("../../assets/vedio.png"),
    time: "0:40",
}
const peopleData = [
    {
        id: "1",
        name: "Divyam Pathak",
        age: 25,
        profession: "UI/UX Designer",
        location: "Lives in Mumbai",
        image: require("../../assets/girl.png"),
    },
    {
        id: "2",
        name: "Arnav Sharma",
        age: 28,
        profession: "Graphic Designer",
        location: "Lives in Faridabad",
        image: require("../../assets/clock.png"),
    },
    {
        id: "3",
        name: "Aashi Agarawal",
        age: 24,
        profession: "Lawyer",
        location: "Lives in Delhi",
        image: require("../../assets/girl.png"),
    },
];

const YariConnect = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header />
            <View style={{ marginTop: 30 }}>
                <View style={styles.cardVedio}>
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
                    <View style={styles.imageContainerVedio}>
                        <Image source={profile.mainImage} style={styles.mainImageVedio} />
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
                <View>
                    <Text style={{ padding: 20, fontSize: 18, fontWeight: "400", marginTop: 16 }}>More Videos of Anuj</Text>
                    <View style={styles.container}>

                        <FlatList
                            data={peopleData}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Image source={item.image} style={styles.image} />
                                    <View style={styles.overlay}>
                                        <Text style={styles.name}>{item.name} <Text style={styles.age}>{item.age}</Text></Text>
                                        <Text style={styles.profession}>{item.profession}</Text>
                                        <Text style={styles.location}>{item.location}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default YariConnect

const styles = StyleSheet.create({
    cardVedio: {

        borderRadius: 10,
        marginVertical: 10,
        padding: 10,

    },
    header: {
        flexDirection: "row",

    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    nameVedio: {
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
    imageContainerVedio: {
        marginTop: 10,
        position: "relative",
    },
    mainImageVedio: {
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
    container: {
        paddingVertical: 6,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10,
    },
    card: {
        width: width * 0.4,
        height: 220,
        borderRadius: 15,
        overflow: "hidden",
        marginHorizontal: 10,
        backgroundColor: "#ddd",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    overlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },
    age: {
        fontSize: 14,
        color: "#ddd",
    },
    profession: {
        fontSize: 12,
        color: "#ccc",
    },
    location: {
        fontSize: 12,
        color: "#bbb",
    },
});
