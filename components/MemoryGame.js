import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';


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

// Função para embaralhar as cartas
const shuffleCards = () => {
  let shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.map(card => ({ ...card, matched: false }));
};

const MemoryGame = ({ onFinish }) => {
  const [shuffledCards, setShuffledCards] = useState(shuffleCards()); // Embaralha as cartas
  const [selectedCards, setSelectedCards] = useState([]); // Armazena cartas selecionadas
  const [matchedPairs, setMatchedPairs] = useState(0); // Contador de pares correspondentes

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {  // Verifica se todos os pares foram encontrados
      onFinish();  // Chama a função de finalização quando o jogo terminar
    }
  }, [matchedPairs]);

  const handleCardPress = (index) => {
    if (selectedCards.length === 2 || shuffledCards[index].matched) {
      return;  // Não permite selecionar mais de duas cartas ou cartas já encontradas
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
      setTimeout(() => setSelectedCards([]), 1000); // Desvira as cartas após 1 segundo
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
            source={require('../assets/calm.png')}  // Imagem do verso da carta
            style={styles.cardBack}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        {shuffledCards.map((card, index) => renderCard(card, index))}
      </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '22%',
    margin: 5,
    aspectRatio: 1,
    borderRadius: 10,
  },
  cardBack: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  flippedCard: {
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
});

export default MemoryGame;
