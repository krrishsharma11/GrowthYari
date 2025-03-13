import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Alert, Modal } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // Import the FontAwesome and Entypo icons from Expo
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const SignUpScreen = ({ navigation }) => {
  const [birthDate, setBirthDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDateChange = (date) => {
    setBirthDate(moment(date).format('YYYY-MM-DD'));
    setShowCalendar(false);
  };

  const handleSignUp = async () => {
    // Basic validation
    if (!fullName || !email || !phoneNumber || !birthDate) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://api.growthyari.com/auth/v1/signup', {
        fullName: fullName,
        email: email,
        phone: phoneNumber,
        birthDate: birthDate,
      });

      console.log('Signup response:', response.data);

      // Handle successful signup
      if (response.data && response.status === 200) {
        Alert.alert(
          'Success',
          'Please check your email for verification.',
        );
        console.log("SuccessFull");
        navigation.navigate('VerifyOtp', { userEmail: email });
      }

    } catch (error) {
      console.error('Signup error:', error);

      // Display error message
      const errorMessage = error.response?.data?.message || 'Something went wrong. Please try again.';
      Alert.alert('Signup Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('LoginScreen')}>
            <Entypo name="chevron-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.heading}>Create an Account</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Full Name" onChangeText={(text) => setFullName(text)} />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => setEmail(text)} />

          <Text style={styles.label}>Birth Date</Text>
          <View style={styles.birthDateContainer}>
            <TextInput
              style={styles.birthDateInput}
              placeholder="Birth Date"
              value={birthDate}
              editable={false} // Make the text input read-only
            />
            <TouchableOpacity style={styles.calendarIcon} onPress={() => setShowCalendar(true)}>
              <FontAwesome name="calendar" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Phone Number" keyboardType="phone-pad" onChangeText={(text) => setPhoneNumber(text)} />

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>Or</Text>
          <TouchableOpacity style={styles.googleButton}>
            <FontAwesome name="google" size={20} color="#fff" style={styles.googleIcon} />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText} onPress={() => navigation.navigate('LogIn1Screen')}>Already have an account? Log In.</Text>
          </TouchableOpacity>

          <Modal visible={showCalendar} animationType="slide" transparent={false}>
            <View style={styles.calendarModal}>
              <CalendarPicker onDateChange={onDateChange} />
              <TouchableOpacity style={styles.closeButton} onPress={() => setShowCalendar(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    marginTop: 40
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
    padding: 8
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: '#EFF0F6',
    borderRadius: 5,
    borderWidth: 2,
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
  calendarModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 253, 253, 0.5)',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#4285F4',
    fontSize: 16,
  },
});

export default SignUpScreen;