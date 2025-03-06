import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // Import the FontAwesome and Entypo icons from Expo

const SignUpScreen = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [birthDate, setBirthDate] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Entypo name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Create an Account</Text>
      
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Full Name" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <Text style={styles.label}>Birth Date</Text>
      <View style={styles.birthDateContainer}>
        <TextInput
          style={styles.birthDateInput}
          placeholder="Birth Date"
          value={birthDate}
          onChangeText={setBirthDate}
        />
        <TouchableOpacity style={styles.calendarIcon}>
          <FontAwesome name="calendar" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" />

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

      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesome name="google" size={20} color="#fff" style={styles.googleIcon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In.</Text>
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
  backButton: {
    marginBottom: 20,
    marginTop:40
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1A1C1E',
    marginLeft: 10,
    marginTop: 15,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  birthDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  birthDateInput: {
    flex: 1,
    height: 50,
  },
  calendarIcon: {
    marginLeft: 10,
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
  signUpButton: {
    height: 50,
    backgroundColor: '#2C4735',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
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
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    marginRight: 10,
    color: 'blue',
  },
  googleButtonText: {
    color: '#1A1C1E',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: '#4285F4',
  },
});

export default SignUpScreen;
