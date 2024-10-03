import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonPlayPause from '../components/ButtonPlayPause';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Inicia o timer para navegar após 5 segundos (5000ms)
    const timeout = setTimeout(() => {
      navigation.navigate('Inicio');
    }, 8000); // 8000ms = 8 segundos

    // Limpa o timer ao desmontar o componente para evitar erros
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ButtonPlayPause />
      <Image
        source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo ao CalmColors</Text>
      <Text style={styles.subtitle}>Vamos começar nossos desafios!</Text>
      <Text style={styles.subtitle}>Ajude-nos a identificar as formas geométricas corretas!</Text>
      <Text style={styles.subtitle}>Ou então mostre suas habilidades conseguindo achar todas as cartas do nosso jogo da memoria!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#87CEFA',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    width: '70%',
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 14,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
  },
});
