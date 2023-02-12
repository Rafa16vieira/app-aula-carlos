import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from "../../navigation";

export default function HomeScreen() {
    
    const navigation = useNavigation<StackNavigationProp<StackParams, "home">>();

    return (<View>
        <Text>Bem vindo, FULANO!</Text>

        <Button title="Abrir Configurações" onPress={() => navigation.push('config')} />
        <Button title="SAIR" color="tomato" onPress={() => navigation.reset({index: 0, routes: [{name: 'login'}]})} />
    </View>)
}
const styles = StyleSheet.create({
    
});