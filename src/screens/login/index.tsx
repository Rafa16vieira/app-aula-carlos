import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from "../../navigation";

export default function LoginScreen() {
    
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const navigation = useNavigation<StackNavigationProp<StackParams, "login">>();

    const handleLogin = async () => {
        if (email == 'teste@teste.com' && senha == '123456') {
            //Manda para outra tela sem botão de voltar
            navigation.reset({index: 0, routes: [{name: 'home'}]}); 
        } else
            Alert.alert('Erro', 'Login ou senha incorreta!')
    }

    return (<View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput onChangeText={setEmail} style={[styles.input, styles.borderBottom]} placeholder="EMAIL:"/>
        <TextInput onChangeText={setSenha}  style={styles.input} secureTextEntry placeholder="SENHA:"/>
        <Button title="Logar" onPress={handleLogin}/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },
    header: {
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'white',
        padding: 5
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
});