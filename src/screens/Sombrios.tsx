import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CardPokemon from '../../components/cardPokemon';

const Sombrios = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadSombrios = async () => {

      const sombriosData = [
        {
          name: 'Nickit',
          image: require('../../assets/nickit.png'),
          type: 'Sombrio',
          hp_maximo: 70,
          moves: ['Snarl', 'Play Rought'],
          fraquezas: ['Lutador', 'Inseto', 'Fada'],
        },
        {
          name: 'Mightyena',
          image: require('../../assets/Mightyena.png'),
          type: 'Sombrio',
          hp_maximo: 110,
          moves: ['Bite', 'Play Rough', 'Ice Fang', 'Crunch'],
          fraquezas: ['Lutador', 'Inseto', 'Fada'],
        },
        {
          name: 'Zorua',
          image: require('../../assets/zorua.png'),
          type: 'Sombrio',
          hp_maximo: 250,
          moves: ['Feint Attack', 'Foul Play', 'Dark Pulse'],
          fraquezas: ['Lutador', 'Inseto', 'Fada'],
        },
      ];

      setPokemons(sombriosData);
    };

    loadSombrios();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemons.map((pokemon, index) => (
        <CardPokemon key={index} {...pokemon} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Sombrios;
