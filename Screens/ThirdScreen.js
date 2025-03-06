import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ThirdScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Replace 'logo.png' with the actual name of your image file
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginLeft:185
  },
});
