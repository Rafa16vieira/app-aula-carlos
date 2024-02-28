import { Button, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BackgroundImage } from "@rneui/base";

export function FavoritosScreen() {

    const navegacao = useNavigation<any>();

    return (<View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#909090' }}>
        <Text>Não há favoritos selecionados.</Text>
        <Button title="Adicionar" onPress={() => navegacao.navigate('Loja')} color={'#000'}/>
    </View>)
}