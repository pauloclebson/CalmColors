// AudioContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sons/splash.mp3'), // Substitua pelo caminho do seu áudio
        { shouldPlay: true, isLooping: true }
      );
      setSound(sound);
      setIsPlaying(true);
    };

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync(); // Descarrega o áudio quando o componente é desmontado
      }
    };
  }, []);

  const playPauseAudio = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ playPauseAudio, isPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};
