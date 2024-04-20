import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import CardPokemon from '../../components/cardPokemon';

const Lendarios = (props) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const loadLendariosData = async () => {
      const lendariosData = [
        {
          name: 'Azelf',
          image: require('../../assets/Azelf.png'),
          type: 'Psíquico',
          hp_maximo: 70,
          moves: ['Confusion', 'Future Sight'],
          weaknesses: ['Inseto', 'Fantasma', 'Sombrio'],
        },
        {
          name: 'Jirachi',
          image: require('../../assets/Jirachi.png'),
          type: 'Psíquico',
          hp_maximo: 80,
          moves: ['Confusion', 'Doom Desire'],
          weaknesses: ['Terrestre', 'Fantasma', 'Fogo', 'Sombrio'],
        },
        {
          name: 'Suicune',
          image: require('../../assets/suicune.png'),
          type: 'Água',
          hp_maximo: 210,
          moves: ['Snarl', 'Hydro Pump', 'Ice Fang'],
          weaknesses: ['Grama', 'Elétrico'],
        },
      ];

      setPokemonData(lendariosData);
    };

   
    loadLendariosData();
  }, []); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemonData.map((pokemon) => (
        <CardPokemon key={pokemon.name} {...pokemon} />
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

export default Lendarios;
