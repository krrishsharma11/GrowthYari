import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // For the icons
import Header from '../src/components/Header';


const ProgramCard = ({ image, title, date, members }) => (
   
  
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDate}>{date}</Text>
    <View style={styles.cardMembers}>
      <FontAwesome name="user-circle" size={24} color="#888" />
      <Text style={styles.cardMembersText}>+{members} Members joined</Text>
    </View>
    <TouchableOpacity style={styles.cardButton} onPress={() => {}}>
      <Text style={styles.cardButtonText}>Register for event</Text>
    </TouchableOpacity>
  </View>
);

const ProgramScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Header/>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Programs</Text>
      <ProgramCard
        image={require('../assets/Event5.png')}
        title="Young Leaders Campaign"
        date="12-15 April 2025"
        members="5m"
      />
      <ProgramCard
        image={require('../assets/Event6.png')}
        title="Future Innovators"
        date="20-23 May 2025"
        members="3m"
      />
      <ProgramCard
        image={require('../assets/Event5.png')}
        title="Tech Pioneers"
        date="5-8 June 2025"
        members="4m"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 250, // Increased height to 250
    resizeMode: 'contain', // Changed to 'contain' to display the full image
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cardDate: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  cardMembers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardMembersText: {
    fontSize: 16,
    marginLeft: 10,
  },
  cardButton: {
    backgroundColor: '#2C4735',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProgramScreen;
