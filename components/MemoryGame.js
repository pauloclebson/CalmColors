// components/MemoryGame.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const cards = [
  { id: 1, color: 'red', matched: false },
  { id: 2, color: 'red', matched: false },
  { id: 3, color: 'green', matched: false },
  { id: 4, color: 'green', matched: false },
  { id: 5, color: 'blue', matched: false },
  { id: 6, color: 'blue', matched: false },
  { id: 7, color: 'yellow', matched: false },
  { id: 8, color: 'yellow', matched: false },
  { id: 9, color: 'pink', matched: false },
  { id: 10, color: 'pink', matched: false },
  { id: 11, color: 'white', matched: false },
  { id: 12, color: 'white', matched: false },
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
    if (selectedCards.length === 2) {
      return;
    }

    let newSelectedCards = [...selectedCards, index];

    if (newSelectedCards.length === 2) {
      const [firstIndex, secondIndex] = newSelectedCards;
      if (shuffledCards[firstIndex].color === shuffledCards[secondIndex].color) {
        let newShuffledCards = [...shuffledCards];
        newShuffledCards[firstIndex].matched = true;
        newShuffledCards[secondIndex].matched = true;
        setShuffledCards(newShuffledCards);
        setMatchedPairs(matchedPairs + 1);
      }

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
        style={[styles.card, isFlipped && { backgroundColor: card.color }]}
        onPress={() => handleCardPress(index)}
        disabled={isFlipped}
      >
        <Text style={styles.cardText}>{isFlipped ? card.color : '?'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container1}>
      <View>
      <Image
          source={require('../assets/calm.png')} // Ajuste o caminho da imagem conforme necessário
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
  container1:{
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',

  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '25,33%',
    margin: 10,
    aspectRatio: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },

  image: {
    width: 150, // Ajuste o tamanho da imagem conforme necessário
    height: 150, // Ajuste o tamanho da imagem conforme necessário
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
