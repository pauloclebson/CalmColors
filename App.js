// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ActivityScreen from './screens/ActivityScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import PlayerInfoScreen from './screens/PlayerInfoScreen';
import SplashScreen from './screens/SplashScreen';
import WelcomScreen from './screens/WelcomeScreen';
import { AudioProvider } from './contexts/AudioContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="PlayerInfo" component={PlayerInfoScreen} options={{ title: 'Informações do Jogador' }} />
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Atividade" component={ActivityScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="Welcome" component={WelcomScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AudioProvider>
  );
}
