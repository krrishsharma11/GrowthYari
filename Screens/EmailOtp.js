import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'; // Import the Entypo and FontAwesome icons from Expo

const EmailOtpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('xyz@gmail.com');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LogIn1Screen')}>
        <Entypo name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Log in</Text>
      <Text style={styles.instruction}>Please enter your email</Text>
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(!isChecked)}>
        <FontAwesome name={isChecked ? "check-square" : "square-o"} size={24} color="black" />
        <Text style={styles.checkboxLabel}>Keep me signed in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.getOtpButton}>
        <Text style={styles.getOtpButtonText}>Get OTP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.getOtpWithNumberButton} onPress={() => navigation.navigate('OtpScreen')}>
        <Text style={styles.getOtpWithNumberButtonText}>Get OTP with number</Text>
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
    marginTop:30
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
    color: '#1A1C1E',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
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
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  getOtpButton: {
    height: 50,
    backgroundColor: '#2C4735',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  getOtpButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  getOtpWithNumberButton: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#2C4735',
    borderWidth: 1,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  getOtpWithNumberButtonText: {
    color: '#2C4735',
    fontSize: 18,
  },
});

export default EmailOtpScreen;
