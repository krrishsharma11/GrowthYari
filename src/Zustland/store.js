import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Load saved user data from AsyncStorage
const loadUser = async () => {
    const storedUser = await AsyncStorage.getItem('auth-user');
    console.log("Stored User", JSON.parse(storedUser));
    return storedUser ? JSON.parse(storedUser) : null;
};

// Zustand store without middleware
export const useAuthStore = create((set) => ({

    user: loadUser(),

    // Set user and manually persist to AsyncStorage
    setUser: async (userData) => {

        await AsyncStorage.setItem('auth-user', JSON.stringify(userData));
        set({ user: userData });
    },

    // Clear user data and remove from AsyncStorage
    clearUser: async () => {
        await AsyncStorage.removeItem('auth-user');
        set({ user: null });
    },

    // Initialize state from AsyncStorage on app load
    initUser: async () => {
        const userData = await loadUser();
        set({ user: userData });
    },
}));