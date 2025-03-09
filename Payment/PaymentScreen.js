import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image , StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const PaymentScreen = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showUPIDetails, setShowUPIDetails] = useState(false);
  const [saveDetails, setSaveDetails] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header1}> Payment </Text>
        <Text style={styles.header}>Select Payment Method</Text>
        <View style={styles.optionContainer}>
          <TouchableOpacity style={styles.option} onPress={() => setShowCardDetails(!showCardDetails)}>
            <MaterialIcons name="credit-card" size={24} color="black" />
            <Text style={styles.optionText}>Debit / Credit Card</Text>
            <MaterialIcons name={showCardDetails ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
          </TouchableOpacity>
          {showCardDetails && (
            <View style={styles.cardDetails}>
              <Text>Card Number</Text>
              <TextInput placeholder="Card Number" style={styles.input} />
              <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                  <Text>CVV/CVC No.</Text>
                  <TextInput placeholder="CVV/CVC No." style={styles.inputHalf} />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text>Valid Thru</Text>
                  <TextInput placeholder="Valid Thru" style={styles.inputHalf} />
                </View>
              </View>
              <Text>Full Name</Text>
              <TextInput placeholder="Full Name" style={styles.input} />
              <View style={styles.saveDetails}>
                <TouchableOpacity onPress={() => setSaveDetails(!saveDetails)} style={styles.checkbox}>
                  {saveDetails ? <MaterialIcons name="check-box" size={24} color="black" /> : <MaterialIcons name="check-box-outline-blank" size={24} color="black" />}
                </TouchableOpacity>
                <Text style={styles.saveDetailsText}>Save details for future</Text>
              </View>
              <TouchableOpacity style={styles.otpButton} onPress={() => navigation.navigate('ThankyouScreen')}>
                <Text style={styles.otpButtonText}>Send OTP</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.option} onPress={() => setShowUPIDetails(!showUPIDetails)}>
            <FontAwesome name="rupee" size={24} color="black" />
            <Text style={styles.optionText}>UPI</Text>
            <MaterialIcons name={showUPIDetails ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={24} color="black" />
          </TouchableOpacity>
          {showUPIDetails && (
            <View style={styles.upiDetails}>
              <View style={styles.iconRow}>
                <FontAwesome name="google" size={24} color="black" />
                <View style={styles.paytmIconRow}>
                  <Text style={{ color: '#06306F', fontSize: 20, fontWeight: '800' }}>P</Text>
                  <Text style={{ color: '#06306F', fontSize: 20, fontWeight: '800' }}>a</Text>
                  <Text style={{ color: '#06306F', fontSize: 20, fontWeight: '800' }}>y</Text>
                  <Text style={{ color: '#02B9EF', fontSize: 20, fontWeight: '800' }}>t</Text>
                  <Text style={{ color: '#02B9EF', fontSize: 20, fontWeight: '800' }}>m</Text>
                </View>
                <Image source={require('../assets/phonepe.png')} style={styles.upiImage} />
                <Image source={require('../assets/amazonpay.png')} style={styles.upiImage} />
              </View>
              <View style={styles.separator}>
                <Text>or</Text>
              </View>
              <View style={styles.inputRow}>
                <TextInput placeholder="UPI ID" style={styles.input} />
                <TouchableOpacity style={styles.verifyButton}>
                  <Text style={styles.verifyButtonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <TouchableOpacity style={styles.option}>
            <FontAwesome name="bank" size={24} color="black" />
            <Text style={styles.optionText}>Net Banking</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <FontAwesome name="paypal" size={24} color="black" />
            <Text style={styles.optionText}>Paypal</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    marginTop:32
  },
  header1:{
    textAlign:'center',
    top:70,
    color:'#1F2024',
    fontWeight:'600',
    fontSize:25
  },
  header: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
    textAlign: 'left',
    marginTop:120,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor:'#2C47350F',
    marginBottom:20//Add margin between cards
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  cardDetails: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#2C4735',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '75%',

  },
  inputHalf: {
    borderWidth: 1,
    borderColor: '#2C4735',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  saveDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  saveDetailsText: {
    marginLeft: 10,
  },
  upiDetails: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  paytmIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  upiImage: {
    width: 24,
    height: 24,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  verifyButton: {
    backgroundColor: '#2C4735',
    padding: 10,
    borderRadius: 28,
    height:50,
    width:80,
    marginLeft:10,
    bottom:4
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft:10,
    marginTop:5
  },
  otpButton: {
    backgroundColor: '#2C4735',
    padding: 10,
    borderRadius: 28,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default PaymentScreen;
