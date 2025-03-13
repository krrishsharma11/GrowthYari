import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function FirstScreen() {
  const navigation = useNavigation();
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withTiming(50, { duration: 1500 }); // Expands over 1.5s

    setTimeout(() => {
      navigation.navigate('ThirdScreen');
    }, 2000); // Delay to transition after animation
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dot, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 100, // Ensures it expands as a circle
    backgroundColor: '#2C4735',
  },
});
