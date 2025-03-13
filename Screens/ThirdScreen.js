import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

export default function ThirdScreen() {
  const navigation = useNavigation();


  useEffect(() => {


    setTimeout(() => {
      navigation.navigate('LoginScreen', { animation: 'none' });
    }, 2000);
  }, []);



  return (
    <Animated.View style={styles.container}>
      <View style={{ right: -100 }}>
        <Image
          source={require('../assets/logo.png')} // Replace with actual path
          style={[styles.logo]}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
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
  },
});
