import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons'; // Import the Entypo and FontAwesome icons from Expo

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LogIn1Screen')}>
        <Entypo name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.heading}>Log in</Text>
      <Text style={styles.subheading}>Please enter your phone number</Text>
      
      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />
       
      </View>


      <View>
      <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked ? (
            <FontAwesome name="check-square" size={24} color="black" />
          ) : (
            <FontAwesome name="square-o" size={24} color="black" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Remember this device</Text>
      </View>



      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('VerifyOtp')}>
        <Text style={styles.submitButtonText}>Get OTP </Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or</Text>
      
      <TouchableOpacity style={styles.emailButton} onPress={() => navigation.navigate('EmailOtp')}>
        <Text style={styles.emailButtonText}>Get OTP via Email</Text>
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
    marginTop:45
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1A1C1E',
    
    marginTop: 15,
  },
  subheading:{
    fontSize:20,
    fontWeight:'300',
    marginBottom:40,
    
  },
  label: {
    fontSize: 14,
    color: 'Grays/Black',
    marginBottom: 10,
    marginTop:25
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    color:'#2C4735'
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  checkboxContainer: {
    marginLeft: 10,
    color:'#2C4735'
  },
  checkboxLabel: {
    marginLeft: 35,
    fontSize: 14,
    color: '#000000',
    marginBottom:12,
    bottom:23
  },
  submitButton: {
    height: 50,
    backgroundColor: '#2C4735',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color:'#6C7278',
    padding:8
  },
  emailButton: {
    height: 50,
    borderColor:'#2C4735',
    borderRadius:5,
    borderWidth:2,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  emailButtonText: {
    color: '#1A1C1E',
    fontSize: 18,
  },
});

export default OtpScreen;
