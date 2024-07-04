// screens/ActivityScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

export default function ActivityScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleComplete = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      {/* Adicione a lógica da atividade aqui */}
      <Button title="Complete Activity" onPress={handleComplete} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Great job!</Text>
          <Button
            title="Close"
            onPress={() => {
              setModalVisible(!modalVisible);
              navigation.navigate('Home');
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
