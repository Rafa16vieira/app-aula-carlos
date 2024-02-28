import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParams } from "../../navigation";
import { useAutenticacaoContext } from "../../providers/autenticacao";
//import { doc, setDoc, getDocs, query, where, collection, getFirestore } from '@firebase/firestore';



export default function LoginScreen() {


    //const db = getFirestore();


    
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const navigation = useNavigation<StackNavigationProp<StackParams, "login">>();
    const  { setUsuario } = useAutenticacaoContext();

    const handleLogin = async () => {

        //const q = query(collection(db, 'usuarios'), where('email', '==', {email}), where('senha', '==', {senha}));
        //getDocs(q).then(resultados => {
          //  resultados.forEach(doc => {
            //    setUsuario(email);
              //  navigation.reset({index: 0, routes: [{name: 'home'}]});
            //})
            //})
            if (email == 'teste@teste.com' && senha == '123456') {
                setUsuario(email);
                //Manda para outra tela sem botão de voltar
                navigation.reset({index: 0, routes: [{name: 'home'}]}); 
            } else
                Alert.alert('Erro', 'Login ou senha incorreta!')
        }

    return (<View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput onChangeText={setEmail} style={[styles.input, styles.borderBottom]} placeholder="EMAIL: (teste@teste.com)"/>
        <TextInput onChangeText={setSenha}  style={styles.input} secureTextEntry placeholder="SENHA: (123456)"/>
        <Button title="Logar" color="#2B1700" onPress={handleLogin}/>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20,
        backgroundColor: '#ffffa1'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2B1700'
    },
    input: {
        backgroundColor: '#fefeda',
        padding: 5
    },
    borderBottom: {
        borderBottomColor: '#2B1700',
        borderBottomWidth: 2
    }
});

