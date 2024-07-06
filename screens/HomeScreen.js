// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ButtonPlayPause from '../components/ButtonPlayPause';


const HomeScreen = ({ route, navigation }) => {
  const { playerName } = route.params || {};

  return (
    <View style={styles.container}>
       <ButtonPlayPause />
      <View style={styles.container_img}>
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Olá, {playerName || 'Jogador'}, escolha a atividade?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Atividade', { playerName })}
      >
        <Text style={styles.buttonText}>Acerte a imagem</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Memory', { playerName })}
      >
        <Text style={styles.buttonText}>Jogo da memória</Text>
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '70%'
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
