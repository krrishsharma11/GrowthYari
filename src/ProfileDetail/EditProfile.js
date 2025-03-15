import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';  // Import the Ionicons
import { MaterialIcons } from '@expo/vector-icons';  // Import MaterialIcons for card icon
import * as ImagePicker from 'expo-image-picker';  // Import ImagePicker from expo-image-picker
import Header from '../components/Header';

const EditScreen = ({ navigation }) => {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedMessageFee, setSelectedMessageFee] = useState('');
    const [selectedAudioFee, setSelectedAudioFee] = useState('');
    const [selectedVideoFee, setSelectedVideoFee] = useState('');
    const [profileImage, setProfileImage] = useState(require('../../assets/girl.png'));  // Default profile image

    const pickImage = async () => {
        // Ask for permission to access the media library
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            Alert.alert("Permission to access camera roll is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage({ uri: result.assets[0].uri });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header style={styles.headericon}/>
            {/* Back Icon */}
            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Edit Profile</Text>
            <View style={styles.profileImageContainer}>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={profileImage} style={styles.profileImage} />
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Full Name" />
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput style={styles.input} placeholder="DD/MM/YYYY" />
            <Text style={styles.label}>Interests</Text>
            <TextInput style={styles.input} placeholder="Interests" />
            <Text style={styles.label}>Short Bio</Text>
            <TextInput style={styles.input} placeholder="Your short bio" multiline />

            {/* Gender */}
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedGender} onValueChange={(itemValue) => setSelectedGender(itemValue)}>
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
            </View>

            {/* Country */}
            <Text style={styles.label}>Country</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedCountry} onValueChange={(itemValue) => setSelectedCountry(itemValue)}>
                    <Picker.Item label="Select Country" value="" />
                    <Picker.Item label="India" value="india" />
                    <Picker.Item label="USA" value="usa" />
                    <Picker.Item label="UK" value="uk" />
                    {/* Add more countries as needed */}
                </Picker>
            </View>

            {/* Language */}
            <Text style={styles.label}>Language</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedLanguage} onValueChange={(itemValue) => setSelectedLanguage(itemValue)}>
                    <Picker.Item label="Select Language" value="" />
                    <Picker.Item label="English" value="english" />
                    <Picker.Item label="Hindi" value="hindi" />
                    <Picker.Item label="Spanish" value="spanish" />
                    {/* Add more languages as needed */}
                </Picker>
            </View>

            {/* Consultancy Fees */}
            <Text style={styles.label}>Set Your Consultancy Fees</Text>
            <Text style={styles.label}>Message</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedMessageFee} onValueChange={(itemValue) => setSelectedMessageFee(itemValue)}>
                    <Picker.Item label="200 Rs" value="200" />
                    <Picker.Item label="300 Rs" value="300" />
                    <Picker.Item label="400 Rs" value="400" />
                    {/* Add more options as needed */}
                </Picker>
            </View>
            <Text style={styles.label}>Audio Call</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedAudioFee} onValueChange={(itemValue) => setSelectedAudioFee(itemValue)}>
                    <Picker.Item label="200 Rs" value="200" />
                    <Picker.Item label="300 Rs" value="300" />
                    <Picker.Item label="400 Rs" value="400" />
                    {/* Add more options as needed */}
                </Picker>
            </View>
            <Text style={styles.label}>Video Call</Text>
            <View style={styles.pickerContainer}>
                <Picker selectedValue={selectedVideoFee} onValueChange={(itemValue) => setSelectedVideoFee(itemValue)}>
                    <Picker.Item label="200 Rs" value="200" />
                    <Picker.Item label="300 Rs" value="300" />
                    <Picker.Item label="400 Rs" value="400" />
                    {/* Add more options as needed */}
                </Picker>
            </View>

            {/* Additional Fields */}
            <Text style={styles.label}>What consultant you want to be?</Text>
            <TextInput style={styles.input} placeholder="Answer" />
            <Text style={styles.label}>What are your fields expertise?</Text>
            <TextInput style={styles.input} placeholder="Answer" />

            {/* Bank Details */}
            <Text style={styles.bankDetailsText}>
                <MaterialIcons name="credit-card" size={20} color="#000" /> Add Bank Details
            </Text>
            <Text style={styles.bankDetailsSubText}>Add new card</Text>
            <Text style={styles.bankDetailsDescription}>Streamline your checkout process by adding a new card for future transactions. Your card information is secured with advanced encryption technology.</Text>
            <View style={styles.separator} />
            <Text style={styles.label}>Card Number</Text>
            <TextInput style={styles.input} placeholder="Card Number" keyboardType="numeric" />
            <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>Expiry Date</Text>
                    <TextInput style={styles.input} placeholder="MM/YY" />
                </View>
                <View style={styles.halfInputContainer}>
                    <Text style={styles.label}>CVV</Text>
                    <TextInput style={styles.input} placeholder="CVV" secureTextEntry={true} keyboardType="numeric" />
                </View>
            </View>
            <Text style={styles.label}>Cardholder's Name</Text>
            <TextInput style={styles.input} placeholder="Cardholder's Name" />
            <View style={styles.row}>
                <TouchableOpacity style={styles.scanCardButton}>
                    <Text style={styles.buttonText}>Scan Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addCardButton}>
                    <Text style={styles.buttonText}>Add Card</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.saveChangesButton}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headericon: {
        marginTop: 20,
    },
    backIcon: {
        position: 'absolute',
        top: 57,
        left: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '700',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#B8BBC2',
        borderRadius: 5,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInputContainer: {
        flex: 0.48,
    },
    scanCardButton: {
        backgroundColor: '#2C4735',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        flex: 0.48,
    },
    addCardButton: {
        backgroundColor: '#2C4735',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        flex: 0.48,
    },
    saveChangesButton: {
        backgroundColor: '#2C4735',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    bankDetailsText: {
        fontSize: 18,
    },
});

export default EditScreen;