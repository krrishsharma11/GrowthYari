import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const InfoCard = ({ title, description, image }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
        margin: 10,
        width: 250, // Adjust width as needed
    },
    image: {
        width: '100%',
        height: 150, // Adjust height as needed
        resizeMode: 'cover',
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
});

export default InfoCard;