import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useAssets } from 'expo-asset';
import { MaterialIcons } from '@expo/vector-icons';

const ThankyouScreen = () => {
  const [assets] = useAssets([require('../assets/background.png')]);

  if (!assets) {
    return null; // Render nothing or a loading indicator if assets aren't loaded yet
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={assets[0]} style={styles.backgroundImage} imageStyle={styles.backgroundImageStyle}>
        <View style={styles.overlay}>
          <Text style={styles.thankYouText}>Thank you</Text>
          <View style={styles.logoContainer}>
            <View style={styles.greenLogo}>
              <MaterialIcons name="check" size={60} color="#fff" style={styles.whiteTick} />
            </View>
          </View>
          <Text style={styles.successText}>Payment was</Text>
          <Text style={styles.successText}>Successful</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  backgroundImageStyle: {
    resizeMode: 'contain', // Adjusted to contain
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent overlay for fading effect
  },
  thankYouText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2C4735', // Green color
    marginBottom: 20,
    bottom:100
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#2C4735', // Green color for the logo
  },
  greenLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#2C4735',
    borderRadius: 50,
  },
  whiteTick: {
    position: 'absolute',
  },
  successText: {
    fontSize: 40,
    color: '#2C4735', // Green color
    fontWeight:'600',
    marginLeft:20,
    top:100
  },
});

export default ThankyouScreen;
