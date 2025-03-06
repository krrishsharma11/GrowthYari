import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import the FontAwesome icon from Expo

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseContainer}>
        <View style={styles.ellipse}></View>
        <View style={styles.ellipse}></View>
        <View style={styles.ellipse}></View>
      </View>
      <Image source={require('../assets/girl.png')} style={styles.girlImage} />
      <Image source={require('../assets/logo1.png')} style={styles.logoImage} />
      <Image source={require('../assets/clock.png')} style={styles.clockImage} />
      <Image source={require('../assets/pieChart.png')} style={styles.pieChartImage} />
      <Image source={require('../assets/calendar.png')} style={styles.calendarImage} />
      <Image source={require('../assets/flowerPot.png')} style={styles.flowerPotImage} />
      <Image source={require('../assets/books.png')} style={styles.booksImage} />
      
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Welcome to</Text>
        <Text style={styles.title}>GrowthYari</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogIn1Screen')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#fff" style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  ellipseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  ellipse: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  girlImage: {
    width: 264.7616882324219,
    height: 306.3908996582031,
    resizeMode: 'contain',
    marginLeft: 25,
  },
  logoImage: {
    position: 'absolute',
    bottom: 450, // Adjust this value to position the logo over the girl's legs
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  clockImage: {
    position: 'absolute',
    top: 70,
    left: 40,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  pieChartImage: {
    position: 'absolute',
    top: 200,
    right: 330,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  calendarImage: {
    position: 'absolute',
    top: 100,
    right: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  flowerPotImage: {
    position: 'absolute',
    top: 320,
    left: 5,
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  booksImage: {
    position: 'absolute',
    top: 240,
    right: 20,
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title1: {
    fontSize: 28,
    fontWeight: '400',
    top: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    marginVertical: 10,
    marginBottom: 30,
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#2C4735',
    borderRadius: 29,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row', // Make the button content row-oriented
    alignItems: 'center', // Center the icon and text vertically
    width: '80%',
    padding: 15,
    backgroundColor: '#4285F4',
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: 10,
  },
  googleIcon: {
    marginRight: 10, // Add some space between the icon and text
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
