import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";


const Lendarios = (props) =>{

  const azelf = {
    name: "Azelf",
    image: require("./assets/Azelf.png"),
    type: "Psíquico",
    hp: 70,
    moves: ["Confusion", "Future Sight"],
    weaknesses: ["Inseto", "Fantasma", "Sombrio"],
  };

  const jirachi = {
    name: "Jirachi",
    image: require("./assets/Jirachi.png"), 
    type: "Psíquico",
    hp: 80,
    moves: ["Confusion", "Doom Desire"],
    weaknesses: ["Terrestre", "Fantasma", "Fogo", "Sombrio"],
  };

  const suicune = {
    name: "Suicune",
    image: require("../../assets/suicune.png"), 
    type: "Água",
    hp: 210,
    moves: ["Snarl", "Hydro Pump", "Ice Fang"],
    weaknesses: ["Grama", "Elétrico"],
  };

}