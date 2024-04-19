import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Fadas" onPress={() => navigation.navigate('Fadas')} />
      <Button title="Sombrios" onPress={() => navigation.navigate('Sombrios')} />
      <Button title="Lendários" onPress={() => navigation.navigate('Lendarios')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});