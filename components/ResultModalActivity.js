// components/ResultModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ResultModalActivity({visible, correctAnswers, wrongAnswers, onClose, playerName }) {
  let showCongratulations;

  if (correctAnswers > wrongAnswers) {
    showCongratulations = "Parabéns! Você foi excelente!";
  } else if (correctAnswers < wrongAnswers) {
    showCongratulations = "Que pena, você teve mais erros do que acertos, tente novamente!";
  } else {
    showCongratulations = "Empate! Tente novamente para melhorar seu desempenho!";
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{showCongratulations}</Text>
          <Text style={styles.modalText}>Respostas corretas: {correctAnswers}</Text>
          <Text style={styles.modalText}>Respostas erradas: {wrongAnswers}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
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
