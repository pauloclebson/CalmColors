import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import ButtonPlayPause from './ButtonPlayPause';
import BackButton from './BackButton';

const cards = [
  { id: 1, image: require('../assets/imgs_memoria/cavalo.png'), matched: false },
  { id: 2, image: require('../assets/imgs_memoria/cavalo.png'), matched: false },
  { id: 3, image: require('../assets/imgs_memoria/cachorro.png'), matched: false },
  { id: 4, image: require('../assets/imgs_memoria/cachorro.png'), matched: false },
  { id: 5, image: require('../assets/imgs_memoria/pato.png'), matched: false },
  { id: 6, image: require('../assets/imgs_memoria/pato.png'), matched: false },
  { id: 7, image: require('../assets/imgs_memoria/galinha.png'), matched: false },
  { id: 8, image: require('../assets/imgs_memoria/galinha.png'), matched: false },
  { id: 9, image: require('../assets/imgs_memoria/girafa.png'), matched: false },
  { id: 10, image: require('../assets/imgs_memoria/girafa.png'), matched: false },
  { id: 11, image: require('../assets/imgs_memoria/baleia.png'), matched: false },
  { id: 12, image: require('../assets/imgs_memoria/baleia.png'), matched: false },
  { id: 13, image: require('../assets/imgs_memoria/gato.png'), matched: false },
  { id: 14, image: require('../assets/imgs_memoria/gato.png'), matched: false },
  { id: 15, image: require('../assets/imgs_memoria/macaco.png'), matched: false },
  { id: 16, image: require('../assets/imgs_memoria/macaco.png'), matched: false },
  { id: 17, image: require('../assets/imgs_memoria/leao.png'), matched: false },
  { id: 18, image: require('../assets/imgs_memoria/leao.png'), matched: false },
  { id: 19, image: require('../assets/imgs_memoria/elefante.png'), matched: false },
  { id: 20, image: require('../assets/imgs_memoria/elefante.png'), matched: false },
];

const shuffleCards = () => {
  let shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.map(card => ({ ...card, matched: false }));
};

const MemoryGame = ({ onFinish }) => {
  const [shuffledCards, setShuffledCards] = useState(shuffleCards());
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      onFinish();
    }
  }, [matchedPairs]);

  const handleCardPress = (index) => {
    if (selectedCards.length === 2 || shuffledCards[index].matched) {
      return;
    }

    let newSelectedCards = [...selectedCards, index];

    if (newSelectedCards.length === 2) {
      const [firstIndex, secondIndex] = newSelectedCards;
      if (shuffledCards[firstIndex].image === shuffledCards[secondIndex].image) {
        let newShuffledCards = [...shuffledCards];
        newShuffledCards[firstIndex].matched = true;
        newShuffledCards[secondIndex].matched = true;
        setShuffledCards(newShuffledCards);
        setMatchedPairs(matchedPairs + 1);
      }

      setSelectedCards(newSelectedCards);

      setTimeout(() => setSelectedCards([]), 1000);
    } else {
      setSelectedCards(newSelectedCards);
    }
  };

  const renderCard = (card, index) => {
    const isFlipped = selectedCards.includes(index) || card.matched;
    return (
      <TouchableOpacity
        key={index}
        style={[styles.card, isFlipped && styles.flippedCard]}
        onPress={() => handleCardPress(index)}
        disabled={isFlipped}
      >
        {isFlipped ? (
        <Image source={card.image} style={styles.cardImage} />
      ) : (
        <ImageBackground
          source={require('../assets/calm.png')} // Imagem para o verso da carta
          style={styles.cardBack}
        />
      )}
      </TouchableOpacity>
    );
  };

  const { width } = Dimensions.get('window');
  const cardSize = (width - 40) / 4; // Calcula o tamanho para 4 colunas, deixando uma margem de 10 para os lados


  return (
    <View style={styles.container1}>
      <ButtonPlayPause />
      <BackButton />
      <View>
        <Image
          source={require('../assets/calm.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>Jogo da Memória</Text>

        <View style={styles.container}>
          {shuffledCards.map((card, index) => renderCard(card, index))}
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  card: {
    width: '22%', // Ajuste a largura para caber 4 cartas por linha
    margin: 5,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  cardBack: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray', // Cor de fundo do verso da carta
    borderRadius: 10,
  },
  flippedCard: {
    backgroundColor: 'transparent', // Tornar o fundo transparente quando a carta for virada
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain', // Ajuste a imagem para cobrir o cartão de maneira proporcional
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
});


export default MemoryGame;
