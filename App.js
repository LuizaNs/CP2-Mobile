import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import cardPokemon from "./src/components/cardPokemon";
import Fadas from "./src/screens/Fadas"
import Sombrios from "./src/screens/Sombrios"
import Lendarios from "./src/screens/Lendarios"
import Inicial from "./src/screens/Inicial"

const Stack = createStackNavigator()
 
const App = () =>{
 
  return(
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen 
          name=''
          component={TelaInicial}
          options={{headerShown:false}}
        />
<Stack.Screen name='TelaResultado' component={TelaResultado}
          options={{headerShown:false}}
        />
<Stack.Screen name='TelaDetalhes' component={TelaDetalhes}/>
</Stack.Navigator>
</NavigationContainer>
  )
}
 
export default App








