import { StyleSheet, Text, View, Button, Image, TextInput, ImageBackground, TouchableOpacity, Alert, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from "../../navigation";
import { useAutenticacaoContext } from "../../providers/autenticacao";
import { Modalize } from 'react-native-modalize';
import { useState, useRef } from 'react';
import Axios from 'axios';


export default function LojaScreen() {

    const navigation = useNavigation<StackNavigationProp<StackParams, "loja">>();
    const { usuario, setUsuario } = useAutenticacaoContext();

    const modal = useRef<Modalize>();

    const abrir = () => {
        try {
          modal.current?.open();
        } catch (erro) {
          console.log(erro)
        }
      }

    const [ nome, setNome ] = useState('');
    const [ imagem, setImagem ] = useState<null|string>(null);
    const buscar = async () => {
        Axios.get('https://pokeapi.co/api/v2/pokemon/' + nome)
        .then(response => {
            console.log(response.data.sprites.other);
            setImagem(response.data.sprites.other["official-artwork"].front_default);
        })
        .catch(erro => {
            Alert.alert('Erro', 'Pokemon nao encontrado')
        })
    }
    const encomendar = async () => {
        Alert.alert('Encomendado', 'Em breve enviaremos um email para você para confirmar a encomenda')
    }

    

    return(<ImageBackground source={require('../../../assets/pokefigures.jpg')} style={styles.imageback}>
        <View style={[styles.container, {backgroundColor: 'rgba(254,254,218,0.5)'}]}>
            <View style={[styles.header, styles.borderBottom]}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { color: "#362312"} ]}>FIGURAS DISPONÍVEIS</Text>
                    <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#362312"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView>
                <Text style={[styles.text, {margin: 20}]}>EM ALTA</Text>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10}}>
                    <TouchableOpacity onPress={() => navigation.push('comprapika')}>
                        <Image source={require('../../../assets/attackingpikachu.jpeg')} style={styles.image} />
                        <Text style={{ color: "#362312"}}>Pikachu atacante</Text>
                        <Text style={{ color: "#362312"}}>R$ 499,90</Text>
                        <Button title="Comprar" color="#83ba36"/>
                    </TouchableOpacity>
                    
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around', marginBottom: 10}}>
                    <TouchableOpacity onPress={() => navigation.push('comprapika')}>
                        <Image source={require('../../../assets/arceus.jpg')} style={styles.image}/>
                        <Text style={{ color: '#362312'}}>Pokemon Deus Arceus</Text>
                        <Text style={{ color: '#362312'}}>R$ 899,90</Text>
                        <Button title="Comprar" color="#83ba36"/>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={() => navigation.push('comprapika')}>
                        <Image source={require('../../../assets/gigantamaxchari.jpg')} style={styles.image}/>
                        <Text style={{ color: '#362312'}}>Gigantamax Charizard</Text>
                        <Text style={{ color: '#362312'}}>R$ 659,90</Text>
                        <Button title="Comprar" color="#83ba36"/>
                    </TouchableOpacity>
                </View>

                <View style= {{flexDirection: 'column', justifyContent: 'space-around', marginTop: 20}}>
                    <Text style={{ color: '#362312', alignSelf: 'center', fontSize: 20}}>Olá {usuario}, Não encontrou figure do Pokemon que você gostaria?</Text>
                    <Button title="Clique aqui!" color="#1e90ff" onPress={abrir}/>
                    <Modalize
                    adjustToContentHeight
                    childrenStyle={{ height: 600}}
                    ref={modal}>
                        <View>
                            <Text style={styles.textContainer}>Preencha abaixo o Pokemon que você gostaria de encomendar:</Text>
                            <TextInput style={{backgroundColor: '#ffffa1', marginHorizontal: 40, paddingVertical: 5}} onChangeText={setNome} placeholder="Digite o Pokemon aqui:"/>
                            <Button title='Buscar' onPress={buscar} />
                            {imagem && <View style={{alignItems: 'center'}}>
                                <Image style={{width:300, height: 300}} source={{uri:imagem}} />
                            </View>}
                            <Button title='Encomendar' color="#83ba36" onPress={encomendar}/>
                            <Button title="Fechar" color="tomato" onPress={()=> modal.current?.close()}/>
                        </View>
                    </Modalize>

                                        
                </View>
            </ScrollView>

        </View>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },
    header: {
        marginBottom: 8
    },
    imageback:{
        width: '100%',
        height: '100%',
    },
    text:{
        fontSize: 26,
        marginHorizontal: '1%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    borderBottom: {
        borderBottomColor: '#2B1700',
        borderBottomWidth: 2
    },
    image:{
        width: 400,
        height: 250,
        opacity: 1,
        aspectRatio: 1,
        alignSelf: 'center'
    },
})
