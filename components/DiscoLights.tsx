import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const DiscoLights: React.FC = () => {
  const [color, setColor] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateColors = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(color, {
            toValue: 1,
            duration: 250, // Tüm renkler arasında geçiş süresi (ms)
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    animateColors();
  }, [color]);

  const backgroundColor = color.interpolate({
    inputRange: [0, 0.14, 0.28, 0.42, 0.56, 0.70, 0.84, 1],
    outputRange: [
      '#FF0000',
      '#FF7F00',
      '#FFFF00',
      '#00FF00',
      '#0000FF',
      '#4B0082',
      '#8B00FF',
      '#FF00FF',
    ],
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DiscoLights;
