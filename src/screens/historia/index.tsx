import { View, Text, ImageBackground, StyleSheet } from 'react-native';


const image = {uri: 'historia/provador-VR.png'};

export function História() {
  return (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Inserção de Logo da empresa aqui.{"\n"}{"\n"}</Text>
      <Text>Essa é a Fashion AI, empresa responsável pela criação do fAIshion, software que renderiza uma imagem do usuário e integra com uma imagem de uma roupa escolhida por ele, gerando uma imagem digitalizada do usuário usando essa roupa.</Text>
    </ImageBackground>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  }
})
