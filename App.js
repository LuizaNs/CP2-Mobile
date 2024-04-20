import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Fadas from './src/screens/Fadas';
import Sombrios from './src/screens/Sombrios';
import Lendarios from './src/screens/Lendarios';
import Inicial from './src/screens/Inicial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name='Inicial' component={Inicial} />
        <Stack.Screen name='Fadas' component={Fadas} />
        <Stack.Screen name='Sombrios' component={Sombrios} />
        <Stack.Screen name='Lendarios' component={Lendarios}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
