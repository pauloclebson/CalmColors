// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
  const { playerName } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {playerName || 'Jogador'}!</Text>
      <Button
        title="Ir para Atividade"
        onPress={() => navigation.navigate('Atividade', {playerName})}
      />
    </View>
  );
};

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
  subtitle: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default HomeScreen;
