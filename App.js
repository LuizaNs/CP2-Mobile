import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fadas from './src/screens/Fadas';
import Sombrios from './src/screens/Sombrios';
import Lendarios from './src/screens/Lendarios';
import PaginaInicial from './src/screens/Inicial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={PaginaInicial} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Fadas" component={Fadas} options={{ title: 'Página de Fadas' }} />
        <Stack.Screen name="Sombrios" component={Sombrios} options={{ title: 'Página de Sombrios' }} />
        <Stack.Screen name="Lendarios" component={Lendarios} options={{ title: 'Página de Lendários' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}