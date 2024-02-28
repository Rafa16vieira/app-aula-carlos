import { createStackNavigator } from '@react-navigation/stack';
import { FavoritosScreen } from '../screens/favoritos';
//import { LojaScreen } from '../screens/loja';

const Stack = createStackNavigator();

export function FavoritosNavegacao() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="favoritos" component={FavoritosScreen} />
        </Stack.Navigator>
    )
}