// screens/PlayerInfoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PlayerInfoScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const handlePress = () => {
    // Aqui você pode adicionar a lógica para salvar os dados ou navegar para outra tela
    navigation.navigate('Inicio', { playerName: name});
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_img}>
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#87CEFA',
  },
  container_img:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,

    marginBottom: 8,
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, // Ajuste o tamanho da imagem conforme necessário
    height: 200, // Ajuste o tamanho da imagem conforme necessário
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    width: '50%',
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

export default PlayerInfoScreen;
