import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Integrantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Integrantes</Text>
      <View style={styles.member}>
        <Text style={styles.name}>Luiza Nunnes</Text>
        <Text style={styles.role}>RM: 99768</Text>
      </View>
      <View style={styles.member}>
        <Text style={styles.name}>Pamella Schimalesky</Text>
        <Text style={styles.role}>RM: 551600</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  member: {
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: 'gray',
  },
});