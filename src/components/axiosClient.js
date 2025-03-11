import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = "https://api.growthyari.com";
export const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosClient.interceptors.request.use(async (request) => {
    try {
        const accessToken = await AsyncStorage.getItem('KEY_ACCESS_TOKEN'); // Get token from AsyncStorage
        console.log('accessToken', accessToken);
        if (accessToken) {
            request.headers["Authorization"] = `Bearer ${accessToken}`; // Set Authorization header
        }
        console.log('Request:', request);
    } catch (error) {
        console.error('Error retrieving access token:', error);
    }
    return request;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);