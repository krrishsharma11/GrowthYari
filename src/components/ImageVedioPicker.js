import React, { useEffect, useState } from 'react';
import { Button, Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { axiosClient } from './axiosClient';
import * as FileSystem from 'expo-file-system';
const url = "/auth/v1/uploadMedia"
export default function ImageVideoPicker() {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        pickMedia();
    }, [])
    const uploadMedia = async () => {
        if (!selectedMedia) {
            Alert.alert('No media selected', 'Please select a media file to upload.');
            return;
        }

        setLoading(true);

        try {
            const fileUri = selectedMedia;
            const fileName = fileUri.split('/').pop();
            const fileType = fileName.split('.').pop();

            const formData = new FormData();
            formData.append('file', {
                uri: fileUri,
                name: fileName,
                type: `video/${fileType}`, // Adjust the type based on the file type
            });

            const response = await axiosClient.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response);

            if (response.status === 200) {
                console.log("Media uploaded successfully");
            }
        } catch (error) {
            console.error('Unable to upload media:', error);
        } finally {
            setLoading(false);
        }
    }

    const pickMedia = async () => {
        // Request permission to access media library
        console.log("Requesting permission");
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permission Required',
                'Sorry, we need camera roll permissions to make this work!',
                [
                    { text: 'No', onPress: () => console.log('Permission denied'), style: 'cancel' },
                    { text: 'Yes', onPress: async () => await ImagePicker.requestMediaLibraryPermissionsAsync() }
                ]
            );
            return;
        }

        // Let the user pick an image or video
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['videos'], // Use MediaTypeOptions.All to allow both photos and videos
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            setSelectedMedia(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {selectedMedia && <Image source={{ uri: selectedMedia }} style={{ width: "90%", height: "90%" }} resizeMode='contain' />}
            <TouchableOpacity style={StyleSheet.button} onPress={uploadMedia}>
                <Text style={StyleSheet.buttonText}>
                    Upload Media
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2E3A59',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },

})