import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";


const Lendarios = (props) =>{

  const sylveon = {
    name: "Sylveon",
    image: require("../../assets/Sylveon.png"),
    type: "Fada",
    hp_maximo: 310,
    moves: ["Charm", "Dazzling Gleam"],
    weaknesses: ["Veneno", "Aço"],
  };

  const mawile = {
    name: "Mawile",
    image: require("../../assets/Mawile.png"), 
    type: "Fada e Aço",
    hp_maximo : 260,
    moves: ["Fairy Wind", "Play Rough", "Ice Fang"],
    weaknesses: ["Terrestre", "Fogo"],
  };

  const primarina = {
    name: "Primarina",
    image: require("../../assets/primarina.png"), 
    type: "Fada e Água",
    hp_maximo: 250,
    moves: ["Charm", "Hydro Pump", "Psychic"],
    weaknesses: ["Grama", "Elétrico", "Veneno"],
  };

}