import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import CardPokemon from './cardPokemon';

const Lendarios = (props) =>{

  const azelf = {
    name: "Azelf",
    image: require("../../assets/Azelf.png"),
    type: "Psíquico",
    hp_maximo: 70,
    moves: ["Confusion", "Future Sight"],
    weaknesses: ["Inseto", "Fantasma", "Sombrio"],
  };

  const jirachi = {
    name: "Jirachi",
    image: require("../../assets/Jirachi.png"), 
    type: "Psíquico",
    hp_maximo: 80,
    moves: ["Confusion", "Doom Desire"],
    weaknesses: ["Terrestre", "Fantasma", "Fogo", "Sombrio"],
  };

  const suicune = {
    name: "Suicune",
    image: require("../../assets/suicune.png"), 
    type: "Água",
    hp_maximo: 210,
    moves: ["Snarl", "Hydro Pump", "Ice Fang"],
    weaknesses: ["Grama", "Elétrico"],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardPokemon {...azelf} />
      <CardPokemon {...jirachi} />
      <CardPokemon {...suicune} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Lendarios;