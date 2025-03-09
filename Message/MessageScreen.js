import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const messages = [
  {
    id: '1',
    name: 'Athalia Putri',
    message: 'Good Morning, your answer for...',
    date: 'Today',
    image: require('../assets/Profile.png'),  // Updated to use PNG image
  },
  {
    id: '2',
    name: 'Raki Devon',
    message: 'How is it going?',
    date: '17/6',
    image: require('../assets/Profile1.png'),  // Updated to use PNG image
  },
  {
    id: '3',
    name: 'Erlan Sadewa',
    message: 'Aight, noted',
    date: '17/6',
    image: require('../assets/Profile.png'),  // Updated to use PNG image
  },
  {
    id: '4',
    name: 'Athalia Putri',
    message: 'Good Morning, your answer for...',
    date: 'Today',
    image: require('../assets/Profile1.png'),  // Updated to use PNG image
  },
  {
    id: '5',
    name: 'Raki Devon',
    message: 'How is it going?',
    date: '17/6',
    image: require('../assets/Profile.png'),  // Updated to use PNG image
  },
];

const MessageScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Ionicons name="filter" size={24} color="black" style={styles.filterIcon} />
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MessageScreen1')}>
            <View style={styles.messageCard}>
              <Image source={item.image} style={styles.profileImage} />
              <View style={styles.messageText}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message}>{item.message}</Text>
              </View>
              <View style={styles.messageInfo}>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 110,
    borderRadius: 45,
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  filterIcon: {
    marginLeft: 10,
    marginRight: 15,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    marginLeft: 12,
    marginRight: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageText: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#888',
  },
  messageInfo: {
    alignItems: 'flex-end',
  },
  date: {
    color: '#888',
  },
  unreadBadge: {
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
  },
  unreadCount: {
    color: '#fff',
  },
});

export default MessageScreen;
