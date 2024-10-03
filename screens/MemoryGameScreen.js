// screens/MemoryGameScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import MemoryGame from '../components/MemoryGame';
import ResultModalMemory from '../components/ResultModalMemory';
import { useNavigation } from '@react-navigation/native';

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
    <View>
      <MemoryGame onFinish={handleFinish} />  {/* Passa o handleFinish para o MemoryGame */}
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
