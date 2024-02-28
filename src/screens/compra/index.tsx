import { StyleSheet, Text, View, Button, Image,  ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParams } from "../../navigation";
import { useAutenticacaoContext } from "../../providers/autenticacao";

export default function CompraPikaScreen() {

    const navigation = useNavigation<StackNavigationProp<StackParams, "comprapika">>();
    const { usuario } = useAutenticacaoContext();

    return(<ImageBackground source={require('../../../assets/attackingpikachu.jpeg')} style={[styles.imageback]}>
        <View style={[styles.container, {backgroundColor: 'rgba(254,254,218,0.5)'}]}>

            <ScrollView>
                <Text style={styles.text}>PIKACHU em posição de ataque</Text>

                <View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                    <Image source={require('../../../assets/attackingpikachu.jpeg')} style={[{borderRadius: 20}, styles.image]}/>
                    <Text style={{ fontSize: 20, color: "#664238"}}>Action figure do pikachu em posição de ataque</Text>
                    <Text style={{ fontSize: 18, color: "#ffffa1"}}>R$ 499,90</Text>                
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 15, color: "tomato"}}>Últimas unidades disponíveis.</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Button title="Comprar" color="#83ba36" onPress={() => navigation.push('loja')}/>
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
        height: '100%'
    },
    image:{
        width: 400,
        height: 400
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
})