import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GeometryImage from '../components/GeometryImage';
import OptionsList from '../components/OptionsList';
import ButtonPlayPause from '../components/ButtonPlayPause';
import ResultModalActivity from '../components/ResultModalActivity';
import BackButton from '../components/BackButton';

const geometries = [
  { color: 'red', label: 'Triângulo', shape: require('../assets/imgs_figuras/triangulo.png') },
  { color: 'green', label: 'Quadrado', shape: require('../assets/imgs_figuras/quadrado.png') },
  { color: 'blue', label: 'Círculo', shape: require('../assets/imgs_figuras/circulo.png') },
  { color: 'yellow', label: 'Estrela', shape: require('../assets/imgs_figuras/estrela.png') },
  { color: 'rosa', label: 'Losango', shape: require('../assets/imgs_figuras/losango.png') },
  { color: 'lilas', label: 'Coração', shape: require('../assets/imgs_figuras/coracao.png') },
  { color: 'laranja', label: 'Diamante', shape: require('../assets/imgs_figuras/diamante.png') },
  { color: 'bege', label: 'Hexagono', shape: require('../assets/imgs_figuras/hexagono.png') },
];

export default function ActivityScreen() {
  const [currentColor, setCurrentColor] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    chooseRandomColor();
  }, []);

  const chooseRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * geometries.length);
    setCurrentColor(geometries[randomIndex].color);
  };

  const [selectedColor, setSelectedColor] = useState(''); // Novo estado para armazenar a figura selecionada

  const handleSelectGeometry = (selectedColor) => {
    if (finished) {
      return;
    }

    setSelectedColor(selectedColor); // Atualiza o estado da figura selecionada

    if (selectedColor === currentColor) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    chooseRandomColor();
  };

  const handleFinishActivity = () => {
    setModalVisible(true);
    setFinished(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setFinished(false); // Resetar o estado de finalização
    setCurrentColor(''); // Resetar a cor atual para reiniciar a atividade
    navigation.navigate('Inicio'); // Navegar de volta para a tela inicial
  };

  return (
    <View style={styles.container2}>
      <ButtonPlayPause />
      <View style={styles.container_img}>
      <BackButton />
      <ButtonPlayPause />
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Qual é a figura correta?</Text>
        <GeometryImage
        color={currentColor} />

        <View style={styles.container3}>
          <OptionsList
          options={geometries}
          onSelect={handleSelectGeometry}
          selectedColor={selectedColor} // Passa a cor selecionada para destacar
          />

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>Acertos: {correctAnswers}</Text>
          <Text style={styles.resultText}>Erros: {wrongAnswers}</Text>
        </View>
        {!finished && (
          <TouchableOpacity style={styles.button} onPress={handleFinishActivity}>
            <Text style={styles.buttonText}>Finalizar Atividade</Text>
          </TouchableOpacity>
        )}
        <ResultModalActivity
          visible={modalVisible}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          onClose={handleCloseModal}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2:{
    flex: 1,
    backgroundColor: '#87CEFA',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3:{
    paddingTop: 20,
    backgroundColor: '#52BEFA',
    width: '100%',
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  resultsContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resultText: {
    padding: 5,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container_img:{
    alignItems: 'center',
  },
  image: {
    width: 150, // Ajuste o tamanho da imagem conforme necessário
    height: 150, // Ajuste o tamanho da imagem conforme necessário
    marginTop: 100,
  },
});
