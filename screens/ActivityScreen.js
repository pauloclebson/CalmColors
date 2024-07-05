import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import GeometryImage from '../components/GeometryImage';
import OptionsList from '../components/OptionsList';
import ResultModal from '../components/ResultModal';

const geometries = [
  { color: 'red', label: 'Triângulo', shape: require('../assets/red_shape.png') },
  { color: 'green', label: 'Quadrado', shape: require('../assets/green_shape.png') },
  { color: 'blue', label: 'Círculo', shape: require('../assets/blue_shape.png') },
  { color: 'yellow', label: 'Estrela', shape: require('../assets/yellow_shape.png') },
];

export default function ActivityScreen() {
  const [currentColor, setCurrentColor] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [finished, setFinished] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute()
  const navigation = useNavigation();
  const { playerName } = route.params;

  useEffect(() => {
    chooseRandomColor();
  }, []);

  const chooseRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * geometries.length);
    setCurrentColor(geometries[randomIndex].color);
  };

  const handleSelectGeometry = (selectedColor) => {
    if (finished) {
      Alert.alert('Atividade Finalizada!', 'Você já finalizou esta atividade.');
      return;
    }

    if (selectedColor === currentColor) {
      setCorrectAnswers(correctAnswers + 1);
      Alert.alert('Parabéns!', 'Você acertou!');
    } else {
      setWrongAnswers(wrongAnswers + 1);
      Alert.alert('Ops!', 'Tente novamente.');
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
    navigation.navigate('PlayerInfo'); // Navegar de volta para a tela inicial
  };

  return (
    <View style={styles.container2}>
      <View style={styles.container_img}>
        <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Qual é a figura correta?</Text>
        <GeometryImage color={currentColor} />
        <OptionsList options={geometries} onSelect={handleSelectGeometry} />
        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>Acertos: {correctAnswers}</Text>
          <Text style={styles.resultText}>Erros: {wrongAnswers}</Text>
        </View>
        {!finished && (
          <TouchableOpacity style={styles.button} onPress={handleFinishActivity}>
            <Text style={styles.buttonText}>Finalizar Atividade</Text>
          </TouchableOpacity>
        )}
        <ResultModal
          visible={modalVisible}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          onClose={handleCloseModal}
          playerName={playerName}
        />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultsContainer: {
    marginVertical: 20,
  },
  resultText: {
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
  container_img:{
    alignItems: 'center',
  },
  image: {
    width: 150, // Ajuste o tamanho da imagem conforme necessário
    height: 150, // Ajuste o tamanho da imagem conforme necessário
    margin: 50,
  }
});
