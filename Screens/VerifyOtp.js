import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOtp = ({ navigation, route }) => {
  // Update to have 6 input fields instead of 4
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  // Extract email from navigation params
  useEffect(() => {
    if (route.params?.userEmail) {
      setEmail(route.params?.userEmail);
      console.log("Email received:", route.params?.userEmail);
    } else {
      console.log("No email received in params");
    }
  }, [route.params]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = async () => {
    // Join the OTP array into a string
    const otpString = otp.join('');

    // Basic validation
    if (otpString.length !== 6) {
      Alert.alert('Error', 'Please enter the complete 6-digit OTP');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Email information is missing');
      return;
    }

    setLoading(true);

    try {
      // Log the request payload
      console.log('Verifying OTP with payload:', { email, otp: otpString });

      // Call the verifyOtp API with email and OTP
      const response = await axios.post('https://api.growthyari.com/auth/v1/verifyOtp', {
        email: email,
        otp: otpString
      });

      console.log('OTP verification response:', response.data);

      // Handle successful verification
      if (response.data && response.status === 200) {
        await AsyncStorage.setItem('login', 'true');
        await AsyncStorage.setItem('KEY_ACCESS_TOKEN', response.data.userToken);
        Alert.alert(
          'Success',
          'OTP verified successfully!',
          [{ text: 'OK', onPress: () => navigation.navigate('interest') }]
        );
      }
    } catch (error) {
      console.error('OTP verification error:', error);

      // Display error message
      const errorMessage = error.response?.data?.message || 'Invalid OTP. Please try again.';
      Alert.alert('Verification Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      Alert.alert('Error', 'Email information is missing');
      return;
    }

    try {
      const response = await axios.post('https://api.growthyari.com/auth/v1/sendOtp', {
        email: email
      });

      Alert.alert('Success', 'OTP has been resent to your email');
    } catch (error) {
      console.error('Resend OTP error:', error);
      Alert.alert('Failed', 'Could not resend OTP. Please try again.');
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={handleBackPress}>
        <Text style={styles.backArrowText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the verification code we just sent to {email}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => inputRefs.current[index] = ref}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.verifyButton, loading && styles.disabledButton]}
        onPress={handleVerify}
        disabled={loading}
      >
        <Text style={styles.verifyButtonText}>{loading ? 'Verifying...' : 'Verify'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResendOtp}>
        <Text style={styles.resendOtpText}>Resend OTP</Text>
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
  backArrow: {
    marginBottom: 20,
    marginTop: 28
  },
  backArrowText: {
    fontSize: 24,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
    color: '#1A1C1E'
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 90,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: '#2E3A59',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: '#7f8fa6',
    opacity: 0.7
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resendOtpText: {
    color: '#2E3A59',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default VerifyOtp;