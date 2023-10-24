import { View, Text, TextInput, StyleSheet, ToastAndroid, Button, Vibration, Image, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export function App() {

  const modal = useRef<Modalize>();

  const confirmaFoto = () => {
    ToastAndroid.show('Foto enviada', ToastAndroid.LONG);
    modal.current?.close();
    Vibration.vibrate()
  }

  const abrir = () => {
    try {
      modal.current?.open();
    } catch (erro) {
      console.log(erro)
    }
  }



  const [ status, requestPermission ] = ImagePicker.useCameraPermissions();

  const [ imagem, setImagem ] = useState<null|string>(null)

  const abrirCamera = async () => {
    //Avalia se tem permissão
    if (!status?.granted) {
      //Solicita permissão
      const resposta = await requestPermission();
      if (!resposta.granted) {
        return; //Permissão não foi dada.
      }
    }

    const foto = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: true,
      quality: 1,
      aspect: [1, 1],
      allowsMultipleSelection: false,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });
    
    if (!foto.canceled)
      setImagem('data:image/jpg;base64,' + foto.assets[0].base64)
  }

  return (
    <View style={styles.container}>
      <Text>Bem vindo a loja da Fashion AI, no momento estamos realizando reparos para melhor os atender, contamos com a paciência e a calma de todos os nossos clientes. {"\n"}{"\n"}Em breve estaremos de volta. {"\n"}{"\n"}Pressione o botão para identificar produtos que você deseja adquirir quando nossa loja voltar.{"\n"}{"\n"}</Text>
      
        <Button title="ENVIAR FOTO" onPress={abrir} />
        <Modalize 
        adjustToContentHeight
        childrenStyle={{ height:600 }}
        ref={modal}
      >
        <View>
          <Text style={styles.container}>Envio de foto</Text>
          
            <Button title="TIRAR FOTO" onPress={abrirCamera}/>
            { imagem && <Image source={{uri: imagem}} style={{width: 300, height: 300}}/>}
            
          

          <Button title="Enviar" color="green" onPress={confirmaFoto}/>

          <Button title="Cancelar" color="tomato" onPress={() => {
            Alert.alert('Cancelar', 'Deseja realmente cancelar a compra?', [
              { text: 'Sim', onPress: ()=> modal.current?.close()},
              { text: 'Não'}
            ])  
            
          }} />
        </View>
      </Modalize>
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  }
})

