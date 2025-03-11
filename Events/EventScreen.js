import React from 'react';
import { ScrollView, View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../src/components/Header';

const EventScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <TextInput style={styles.searchBar} placeholder="Search event." />
      <Text style={styles.heading}>Upcoming Event!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <View style={styles.card}>
          <Image source={require('../assets/Event.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>College Shark Tank</Text>
          <Text style={styles.cardLocation}>New Delhi</Text>
          <Text style={styles.cardDate}>10 February</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EventScreen1')}>
            <Text style={styles.detailsButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Event1.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Growth Bazaar</Text>
          <Text style={styles.cardLocation}>New Delhi</Text>
          <Text style={styles.cardDate}>10 February</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EventScreen2')}>
            <Text style={styles.detailsButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Event4.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Growth Bazaar</Text>
          <Text style={styles.cardLocation}>New Delhi</Text>
          <Text style={styles.cardDate}>10 February</Text>
          <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('EventScreen3')}>
            <Text style={styles.detailsButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.inviteCard}>
        <View style={styles.inviteTextContainer}>
          <Text style={styles.inviteText}>Invite your friends</Text>
          <Text style={styles.inviteSubText}>Get Rs200 for ticket</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>INVITE</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/invite_hand_box.png')} style={styles.inviteImage} resizeMode="contain" />
      </View>
      <Text style={styles.heading}>Events you might be interested in!</Text>
      <View style={styles.eventCard}>
        <Image source={require('../assets/Event1.png')} style={styles.eventImage} resizeMode="contain" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Growth-oke: Sing way to success</Text>
          <Text style={styles.eventLocation}>New Delhi</Text>
          <Text style={styles.eventDate}>12 February</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.eventCard}>
        <Image source={require('../assets/Event.png')} style={styles.eventImage} resizeMode="contain" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>Career Speed Dating: Connect in 60 sec</Text>
          <Text style={styles.eventLocation}>New Delhi</Text>
          <Text style={styles.eventDate}>10 March</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.eventCard}>
        <Image source={require('../assets/Event3.png')} style={styles.eventImage} resizeMode="contain" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventTitle}>The Growth Cafe</Text>
          <Text style={styles.eventLocation}>New Delhi</Text>
          <Text style={styles.eventDate}>10 March</Text>
        </View>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    top: 50,
    left: 16, // Added left position
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#2D394E',
  },
  horizontalScroll: {
    marginBottom: 40,
  },
  card: {
    width: 250,
    marginRight: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  cardLocation: {
    fontSize: 14,
    paddingHorizontal: 8,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  detailsButton: {
    backgroundColor: '#819086',
    borderRadius: 4,
    padding: 8,
    marginTop: 8,
    marginHorizontal: 8,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  inviteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#2C4735',
  },
  inviteTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  inviteText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E68B2F',
    marginBottom: 8,
  },
  inviteSubText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 14,
  },
  inviteImage: {
    width: 180,
    height: 100,
  },
  inviteButton: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 4,
    padding: 8,
  },
  inviteButtonText: {
    color: '#E68B2F',
    fontSize: 14,
    textAlign: 'center',
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  eventImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 16,
  },
  eventDetails: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  eventLocation: {
    fontSize: 14,
    color: '#888',
  },
  eventDate: {
    fontSize: 12,
    color: '#888',
  },
  joinButton: {
    borderRadius: 4,
    padding: 8,
  },
  joinButtonText: {
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default EventScreen;
