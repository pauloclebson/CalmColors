// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const { playerName } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.container_img}>
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Bem-vindo, {playerName || 'Jogador'}!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Atividade', { playerName })}
      >
        <Text style={styles.buttonText}>Ir para Atividade</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
  },
  container_img:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, // Ajuste o tamanho da imagem conforme necessário
    height: 200, // Ajuste o tamanho da imagem conforme necessário
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default HomeScreen;
