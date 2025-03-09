import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  {
    id: '1',
    type: 'image',
    content: require('../assets/cat.png'),  // Cat image at the top
  },
  {
    id: '2',
    type: 'text',
    content: 'Lets talk about your question regarding pet care.',
    time: '16:46',
  },
  {
    id: '3',
    type: 'text',
    content: 'In what span of time they should come...',
    time: '16:46',
    sender: 'You',
  },
  {
    id: '4',
    type: 'text',
    content: 'Of course, let me know if you\'re on your way',
    time: '16:46',
  },
  {
    id: '5',
    type: 'text',
    content: 'K, I\'m on my way',
    time: '16:50',
    sender: 'K',
  },
  {
    id: '6',
    type: 'audio',
    content: '0:20',
    time: '09:13',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
  {
    id: '7',
    type: 'text',
    content: 'Good morning, did you sleep well?',
    time: '09:45',
  },
];

const MessageScreen1 = () => {
  const renderItem = ({ item }) => {
    if (item.type === 'image') {
      return <Image source={item.content} style={{ width: '90%', height: 150, marginTop: 120, marginLeft: 15 }} />;
    } else if (item.type === 'text') {
      return (
        <View style={[styles.messageContainer, item.sender ? styles.messageSent : styles.messageReceived]}>
          <Text style={styles.messageText}>{item.content}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      );
    } else if (item.type === 'audio') {
      return (
        <View style={[styles.messageContainer, styles.messageReceived]}>
          <Ionicons name="play-circle" size={20} color="green" />
          <Text style={styles.audioText}>{item.content}</Text>
          <Text style={styles.messageTime}>{item.time}</Text>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Ionicons name="add" size={24} color="gray" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
        />
        <TouchableOpacity>
          <Ionicons name="send" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  messageSent: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  messageReceived: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF',
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 10,
    color: 'gray',
    alignSelf: 'flex-end',
  },
  audioText: {
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});

export default MessageScreen1;
