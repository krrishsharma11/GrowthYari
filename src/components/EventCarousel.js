import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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

const PeopleCarousel = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>People You might be interested in !</Text>
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
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        backgroundColor: "#fff",
        marginTop: -20

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
        color: "#fff",
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

export default PeopleCarousel;