// AudioControlButton.js
import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AudioContext } from '../contexts/AudioContext';

const ButtonPlayPause = () => {
  const { playPauseAudio, isPlaying } = useContext(AudioContext);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={playPauseAudio}
    >
      <Ionicons name={isPlaying ? "pause" : "play"} size={24} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 25,
    marginTop: 45,
  },
});

export default ButtonPlayPause;
