// screens/MemoryGameScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MemoryGame from '../components/MemoryGame';
import ResultModalMemory from '../components/ResultModalMemory';
import { useNavigation } from '@react-navigation/native';
import ButtonPlayPause from '../components/ButtonPlayPause';
import BackButton from '../components/BackButton';

export default function MemoryGameScreen({ route }) {
  const { playerName } = route.params;  // Pega o nome do jogador da rota
  const [modalVisible, setModalVisible] = useState(false); // Controla a visibilidade do modal
  const [results, setResults] = useState({ correctAnswers: 0, wrongAnswers: 0 }); // Estado para armazenar acertos e erros

  const navigation = useNavigation();

  const handleFinish = () => {
    setResults(prevResults => ({
      correctAnswers: prevResults.correctAnswers + 1,
      wrongAnswers: prevResults.wrongAnswers
    }));
    setModalVisible(true); // Exibe o modal quando o jogo terminar
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Fecha o modal
    navigation.navigate('Inicio'); // Navega para a tela PlayerInfo
  };

  return (
    <View style={styles.container}>
      <ButtonPlayPause />
      <BackButton />
      <View style={styles.container_img}>
        <Image source={require('../assets/calm.png')} style={styles.image} />
      <Text style={styles.title}>Jogo da Memória</Text>
      </View>
      <MemoryGame onFinish={handleFinish} />
      <ResultModalMemory
        visible={modalVisible}
        correctAnswers={results.correctAnswers}
        wrongAnswers={results.wrongAnswers}
        onClose={handleCloseModal}
        playerName={playerName}  // Passa o nome do jogador para o modal
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#87CEFA',
  },
  container_img:{
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});
