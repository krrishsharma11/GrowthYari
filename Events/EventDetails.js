// EventDetails.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EventDetails = ({ route }) => {
    
  const { eventTitle, eventLocation, eventDate } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{eventTitle}</Text>
      <Text style={styles.location}>{eventLocation}</Text>
      <Text style={styles.date}>{eventDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  location: {
    fontSize: 18,
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
});

export default EventDetails;
