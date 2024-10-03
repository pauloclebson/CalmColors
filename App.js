// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import SplashScreen from './screens/SplashScreen';
import WelcomScreen from './screens/WelcomeScreen';
import MemoryGameScreen from './screens/MemoryGameScreen';

import { AudioProvider } from './contexts/AudioContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Memory" component={MemoryGameScreen} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Inicio" component={HomeScreen} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Atividade" component={ActivityScreen} options={{ gestureEnabled: false }} />
          <Stack.Screen name="Welcome" component={WelcomScreen} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
}
