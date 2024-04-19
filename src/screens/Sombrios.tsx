import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";


const Lendarios = (props) =>{

  const nickit = {
    name: "Nickit",
    image: require("../../assets/nickit.png"),
    type: "Sombrio",
    hp_maximo: 70,
    moves: ["Snarl", "Play Rought"],
    weaknesses: ["Lutador", "Inseto", "Fada"],
  };

  const mightyena = {
    name: "Mightyena",
    image: require("../../assets/Mightyena.png"), 
    type: "Sombrio",
    hp_maximo: 110,
    moves: ["Bite", "Play Rough", "Ice Fang", "Crunch"],
    weaknesses: ["Lutador", "Inseto", "Fada"],
  };

  const zorua = {
    name: "Zorua",
    image: require("../../assets/zorua.png"), 
    type: "Sombrio",
    hp_maximo: 250,
    moves: ["Feint Attack", "Foul Play", "Dark Pulse"],
    weaknesses: ["Lutador", "Inseto", "Fada"],
  };

}