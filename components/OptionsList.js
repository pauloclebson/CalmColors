import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function OptionsList({ options, onSelect, selectedColor }) {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.color}
          onPress={() => onSelect(option.color)}
          style={[
            styles.optionItem,
            selectedColor === option.color && styles.selectedItem, // Aplica estilo quando selecionado
          ]}
        >
          <Image source={option.shape} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  optionItem: {
    borderWidth: 2,
    borderColor: 'transparent', // Borda padrão transparente
    padding: 10,
    borderRadius: 10,
  },
  selectedItem: {
    borderColor: 'blue', // Borda destacada para a figura selecionada
  },
  image: {
    width: 80,
    height: 80,
  },
});
