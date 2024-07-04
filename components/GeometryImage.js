// components/GeometryImage.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = {
  red: require('../assets/red_shape.png'),
  green: require('../assets/green_shape.png'),
  blue: require('../assets/blue_shape.png'),
  yellow: require('../assets/yellow_shape.png'),
};

export default function GeometryImage({ color }) {
  return (
    <View style={styles.container}>
      <Image source={images[color]} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
