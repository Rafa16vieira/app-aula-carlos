import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState } from 'react';
import { useAutenticacaoContext } from "../../providers/autenticacao";

export default function ConfigScreen() {

    const { setUsuario, usuario } = useAutenticacaoContext();
    const [ email, setEmail ] = useState(usuario);

    const trocarEmail = async () => {
        setUsuario(email)
    }

    return (<View>
        <Text>Configuração!</Text>

        <TextInput value={email} onChangeText={setEmail} placeholder="Informe seu novo email" />
        <Button title="Trocar email" onPress={trocarEmail}/> 

    </View>)
}
const styles = StyleSheet.create({
    
});