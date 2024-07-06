import React, {useContext} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AudioContext } from '../contexts/AudioContext'
import { Ionicons } from '@expo/vector-icons';

export default function WelcomScreen(){
  const { playPauseAudio, isPlaying } = useContext(AudioContext);

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('PlayerInfo');
  };

  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={playPauseAudio}
      >
        <Ionicons name={isPlaying ? "pause" : "play"} size={24} color="white" />
      </TouchableOpacity>
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
    playPauseButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 25,
      marginTop: 50,
    },
  });
