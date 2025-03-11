import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // For the icons

const ThanksScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/Thanks.png')} style={styles.backgroundImage}>
       
      <View style={styles.overlay} /> {/* Overlay for faded color */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('EventScreen')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <FontAwesome name="check-circle" size={80} color="green" />
        </View>
        <Text style={styles.thankYouText}>Thank You</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for the logo
    borderRadius: 50,
    padding: 20,
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C4735',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ThanksScreen;
