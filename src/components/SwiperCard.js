import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Swiper from "react-native-swiper";

const events = [
    {
        id: "1",
        title: "Rozgar Vs Karobar",
        host: "Hosted by Aman Sharma",
        date: "Wednesday, January 29",
        time: "6:00 PM - 8:00 PM GMT+5:30",
        image: require("../../assets/books.png"),
    },
    {
        id: "2",
        title: "Tech Innovation Summit",
        host: "Hosted by Neha Verma",
        date: "Friday, February 10",
        time: "5:00 PM - 7:30 PM GMT+5:30",
        image: require("../../assets/calendar.png"),
    },
    {
        id: "3",
        title: "AI & Future Trends",
        host: "Hosted by Rahul Gupta",
        date: "Monday, March 15",
        time: "4:00 PM - 6:00 PM GMT+5:30",
        image: require("../../assets/clock.png"),
    },
];

const EventCard = ({ event }) => {
    return (
        <View style={styles.card}>
            <View style={styles.leftContainer}>
                <Text style={styles.upcomingText}>Upcoming Events</Text>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.host}>{event.host}</Text>
                <View style={styles.dateContainer}>
                    <View style={styles.dateBox}>
                        <Text style={styles.dateText}>Jan</Text>
                        <Text style={styles.dateTextBold}>29</Text>
                    </View>
                    <View>
                        <Text style={styles.date}>{event.date}</Text>
                        <Text style={styles.time}>{event.time}</Text>
                    </View>
                </View>
            </View>
            <Image source={event.image} style={styles.eventImage} />
        </View>
    );
};

const SwiperCard = () => {
    return (
        <View style={styles.container}>
            <Swiper showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}
                autoplay={true} autoplayTimeout={2}
            >
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#27442B",
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 10,
        alignItems: "center",
    },
    leftContainer: {
        flex: 1,
        marginRight: 10,
    },
    upcomingText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#F6A600",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    host: {
        fontSize: 14,
        color: "#ddd",
        marginBottom: 8,
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dateBox: {
        backgroundColor: "#ddd",
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    dateText: {
        fontSize: 14,
        color: "#333",
    },
    dateTextBold: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    date: {
        fontSize: 14,
        color: "white",
    },
    time: {
        fontSize: 12,
        color: "#ccc",
    },
    eventImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    dot: {
        backgroundColor: "black",
        width: 6,
        height: 6,
        borderRadius: 3,

    },
    activeDot: {
        backgroundColor: "green",
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});

export default SwiperCard;
