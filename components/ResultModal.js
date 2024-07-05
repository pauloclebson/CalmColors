// components/ResultModal.js
import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ResultModal({visible, correctAnswers, wrongAnswers, onClose, playerName }) {
  const showCongratulations = correctAnswers > wrongAnswers;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Resultado da Atividade</Text>
          {showCongratulations ? (
            <Text style={styles.modalText}>Parabéns, {playerName}! Você foi excelente!</Text>

          ) : (
            <Text style={styles.modalText}>Que pena, {playerName}, você teve mais erros do que acertos, tente novamente!</Text>
          )}
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
