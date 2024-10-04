// components/GeometryImage.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const images = {
  red: require('../assets/imgs_figuras/triangulo.png'),
  green: require('../assets/imgs_figuras/quadrado.png'),
  blue: require('../assets/imgs_figuras/circulo.png'),
  yellow: require('../assets/imgs_figuras/estrela.png'),
  rosa: require('../assets/imgs_figuras/losango.png'),
  lilas: require('../assets/imgs_figuras/coracao.png'),
  laranja: require('../assets/imgs_figuras/diamante.png'),
  bege: require('../assets/imgs_figuras/hexagono.png'),
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
    marginBottom: 2,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
