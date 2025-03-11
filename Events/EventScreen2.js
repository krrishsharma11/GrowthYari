import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Make sure you have @expo/vector-icons installed
import { FontAwesome } from '@expo/vector-icons'; // For the profile icon
import Header from '../src/components/Header';

const EventScreen2 = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    Alert.alert("Registration", "You have successfully registered for the event!");
  };

  return (
    <ScrollView style={styles.container}>
        <Header/>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={require('../assets/Event1.png')} style={styles.image} />
      <Text style={styles.title}>College Shark Tank</Text>
      <Text style={styles.subtitle}>Wednesday, January 29</Text>
      <Text style={styles.subtitle}>6:00 PM - 8:00 PM GMT + 5:30</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Registration</Text>
        <View style={styles.profileContainer}>
          <FontAwesome name="user-circle" size={24} color="#888" />
          <Text style={styles.cardSubtitle}>Approval Required</Text>
        </View>
        <Text style={styles.cardText}>Your registration is subject to approval by host.</Text>
        <View style={styles.separator} />
        <Text style={styles.cardText}>Welcome to join the event, please register below.</Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('ThanksScreen')}>
          <Text style={styles.registerButtonText}>Register for event</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 20,
    borderColor: '#2C4735',
    borderWidth: 2,
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 15,
    marginVertical: 1,
    textAlign: 'left',
    color: '#555',
  },
  card: {
    backgroundColor: '#F0EBEB',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cardSubtitle: {
    fontSize: 18,
    color: '#888',
    marginLeft: 8,
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#888',
    marginVertical: 10,
  },
  registerButton: {
    backgroundColor: '#2C4735',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EventScreen2;
