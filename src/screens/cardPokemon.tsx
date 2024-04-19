import { View, Text, StyleSheet, Image } from "react-native";
import { Platform } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "Fada":
      return { borderColor: "#f095e4", emoji: "𓍢ִ໋🌷͙֒" };
    case "Fada e Aço":
      return { borderColor: "#b486b2", emoji: "🌷͙⚙️" };
    case "Fada e Água":
      return { borderColor: "#826cd1", emoji: "🌷💧" };
    case "Sombrio":
      return { borderColor: "#32253a", emoji: "☪" };
    case "Água":
      return { borderColor: "#63bcf8", emoji: "💧" };
    case "Psíquico":
      return { borderColor: "#ee6e6e", emoji: "🔮" };
  }
};

export default function cardPokemon({
  name,
  image,
  type,
  hp_maximo,
  moves,
  weaknesses,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️HP: {hp_maximo}</Text>
      </View>

      <Image
        source={image}
        accessibilityLabel={`${name} Pokemon`}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 12,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});