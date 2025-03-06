import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FirstScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SecondScreen');
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2C4735',
  },
});
