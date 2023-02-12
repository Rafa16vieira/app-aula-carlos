import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ConfigScreen from '../screens/config';

import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';

export type StackParams = {
    login: undefined,
    home: undefined
    config: undefined
}

const Stack = createStackNavigator<StackParams>();

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="config" component={ConfigScreen} options={{title: 'Configurações'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}