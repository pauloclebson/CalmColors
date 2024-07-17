// screens/MemoryGameScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MemoryGame from '../components/MemoryGame';
import ResultModalMemory from '../components/ResultModalMemory';
import { useNavigation } from '@react-navigation/native';


export default function MemoryGameScreen({ route }) {
  const { playerName } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [results, setResults] = useState({ correctAnswers: 0, wrongAnswers: 0 });

  const navigation = useNavigation();

  const handleFinish = () => {
    setResults({ correctAnswers: results.correctAnswers + 1, wrongAnswers: results.wrongAnswers });
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('PlayerInfo');
  };

  return (
    <View style={styles.container}>
      <MemoryGame onFinish={handleFinish} />
      <ResultModalMemory
        visible={modalVisible}
        correctAnswers={results.correctAnswers}
        wrongAnswers={results.wrongAnswers}
        onClose={handleCloseModal}
        playerName={playerName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
});
