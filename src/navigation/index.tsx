import { NavigationContainer } from '@react-navigation/native';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from '../screens/login';
import { História } from '../screens/historia';
import { MaterialIcons } from '@expo/vector-icons';
import { FavoritosNavegacao } from './favoritos';
const Tab = createBottomTabNavigator();

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: '#000000',
                tabBarInactiveBackgroundColor: '#494848',
                tabBarActiveTintColor: '#494848'
            }}>
                <Tab.Screen name="tela1" component={História} options={{
                    tabBarLabel:'Início',
                    tabBarIcon:(btn)=> <MaterialIcons name="home" size={30} color={(btn.focused ? '#494848' : '#000000')} />
                }}/>
                <Tab.Screen name="tela2" component={FavoritosNavegacao} options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon:(btn)=> <MaterialIcons name="star" size={30} color={(btn.focused ? '#494848' : '#000000')}  />
                }}/>
                <Tab.Screen name="tela3" component={Login} options={{
                    tabBarLabel:'Ajustes',
                    tabBarIcon:(btn)=> <MaterialIcons name="settings" size={30} color={(btn.focused ? '#494848' : '#000000')}  />
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}