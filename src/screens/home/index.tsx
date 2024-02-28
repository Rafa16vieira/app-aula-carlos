import { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from "../../navigation";
import { useAutenticacaoContext } from "../../providers/autenticacao";

export default function HomeScreen() {

    
    const navigation = useNavigation<StackNavigationProp<StackParams, "home">>();
    const { usuario, setUsuario } = useAutenticacaoContext();

    return (<View style={styles.container}>
        <Text>Bem vindo, {usuario}!</Text>
        <Text>a pokefigure, maior loja de figures de pokemon do Brasil</Text>
        <Text>aproveite para adquirir ou encomendar as mais exclusivas!</Text>
        

        <Button title="Loja" color="#3A1F04" onPress={() => navigation.push('loja')} />
        <Button title="Configurações" color="grey" onPress={() => navigation.push('config')} />
        <Button title="SAIR" color="#7C4700" onPress={() => { 
            setUsuario(null)
            navigation.reset({index: 0, routes: [{name: 'login'}]})
        }} />
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: '#ffffa1'
    }
});