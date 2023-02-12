import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from 'react';

export default function ConfigScreen() {

    const [ email, setEmail ] = useState('');

    const trocarEmail = async () => {

    }

    return (<View>
        <Text>Configuração!</Text>

        <TextInput onChangeText={setEmail} placeholder="Informe seu novo email" />
        <Button title="Trocar email" onPress={trocarEmail}/> 

    </View>)
}
const styles = StyleSheet.create({
    
});