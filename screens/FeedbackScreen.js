// screens/FeedbackScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FeedbackScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Great job!</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
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
});
