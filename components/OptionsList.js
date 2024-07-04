import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

export default function OptionsList({ options, onSelect }) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.optionButton ]}
          onPress={() => onSelect(option.color)}
        >
          <Image source={option.shape} style={styles.image} />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
  },
  optionText: {
    fontSize: 16,
    marginTop: 5,
    alignItems: 'center',
    alignContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 5,
  },
});
