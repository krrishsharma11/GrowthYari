import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // Import the FontAwesome and Entypo icons from Expo

const LogIn1Screen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo1.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>GrowthYari</Text>
      </View>
      <Text style={styles.heading}>Log in to your Account</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" defaultValue="xyz@gmail.com" />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Entypo name={passwordVisible ? 'eye-with-line' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#fff" style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUpText}>Don't have an account? Sign Up.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginTop:42
  },
  logoText: {
    marginTop:42,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 48,
    color:'#1A1C1E',
    marginLeft:10,
    marginTop:15
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#2C4735',
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#2C4735',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    padding:8
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor:'#EFF0F6',
    borderRadius:5,
    borderWidth:2,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:12
  },
  googleIcon: {
    marginRight: 10,
    color:'blue'
  },
  googleButtonText: {
    color: '#1A1C1E',
    fontSize: 16,
  },
  signUpText: {
    textAlign: 'center',
    color: '#4285F4',
  },
});

export default LogIn1Screen;
