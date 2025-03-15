import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { axiosClient } from "./axiosClient";
import { useAnimatedKeyboard } from "react-native-reanimated";

const { width } = Dimensions.get("window");

const url = "auth/v1/interestedPeoples"; // Use relative URL since baseURL is set in axiosClient



let profession = "Lawyer";
let location = "Lives in Delhi";
let image = require("../../assets/girl.png");


const PeopleCarousel = () => {
    const [peoples, setPeoples] = useState([])
    const [loading, setLoading] = useState(false);

    const getPeoples = async () => {
        setLoading(true);

        try {

            const response = await axiosClient.get(url,
            );

            if (response.status === 200) {
                // Extract the posts array from the response

                setPeoples(response.data?.users);
            }
        } catch (error) {
            console.error('Unable to load posts:', error);
            setData(fakeProfiles); // Use fallback data on error
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPeoples();
        console.log("peoples", peoples)
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>People You might be interested in !</Text>
            <FlatList
                data={peoples}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={image} style={styles.image} />
                        <View style={styles.overlay}>
                            <Text style={styles.name}>{item.fullName} </Text>
                            <Text style={styles.profession}>{profession}</Text>
                            <Text style={styles.location}>{location}</Text>
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