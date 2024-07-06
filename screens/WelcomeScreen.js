import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomScreen(){
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('PlayerInfo');
  };

  return(
    <View style={styles.container}>
       <Image
        source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo ao CalmColors</Text>
      <Text style={styles.subtitle}>Um jogo educativo para o entretenimento do seu filho(a)!</Text>
      <Text style={styles.subtitle}>Ajude a identificar as formas geométricas corretas!</Text>
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Proseguir</Text>
      </TouchableOpacity>

    </View>
  )};

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
      width: '70%'
    },
    button: {
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    image: {
      width: 200, // Ajuste o tamanho da imagem conforme necessário
      height: 200, // Ajuste o tamanho da imagem conforme necessário
      marginBottom: 20,
    },
  });
