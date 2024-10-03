// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ButtonPlayPause from '../components/ButtonPlayPause';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ButtonPlayPause />
      <View style={styles.container_img}>
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>

      <View style={styles.test}>
      <View style={styles.gamesContainer}>
        <TouchableOpacity
          style={styles.gameButton}
          onPress={() => navigation.navigate('Atividade')} // Navegação para o jogo "Acerte a imagem"
        >
          <Image
            source={require('../assets/yellow_shape.png')} // Imagem do jogo "Acerte a imagem"
            style={styles.gameImage}
          />
          <Text style={styles.gameText}>Jogo das Figuras</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gameButton}
          onPress={() => navigation.navigate('Memory')} // Navegação para o jogo "Jogo da memória"
        >
          <Image
            source={require('../assets/jogo_memoria.jpg')} // Imagem do jogo "Jogo da memória"
            style={styles.gameImage}
          />
          <Text style={styles.gameText}>Jogo da Memória</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEFA',
  },
  test: {
   alignItems: 'center',
   justifyContent:'center',
   width: '100%',
   height: '50%',
  },

  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, // Ajuste o tamanho da imagem conforme necessário
    height: 200, // Ajuste o tamanho da imagem conforme necessário
  },
  gamesContainer: {
    flexDirection: 'row', // Alinha as imagens em linha
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%', // Ajuste para ocupar toda a largura da tela
    paddingHorizontal: 20, // Espaçamento horizontal
    // marginTop: 125, // Espaço entre o título e os jogos
  },
  gameButton: {
    alignItems: 'center', // Centraliza o conteúdo dentro do botão
    margin: 10, // Espaçamento entre os botões
  },
  gameImage: {
    width: 100, // Ajuste o tamanho da imagem do jogo conforme necessário
    height: 100, // Ajuste o tamanho da imagem do jogo conforme necessário
    marginBottom: 10, // Espaço entre a imagem e o texto
  },
  gameText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
