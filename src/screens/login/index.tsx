import { View, Text, TextInput, StyleSheet, Button, Vibration, Image } from 'react-native';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup'
import { color } from '@rneui/base';

export function Login() {

  const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);

  const tempo = 1000;
  
  const handleLogin = async ({email, senha}:any) => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    if (email.trim() == 'teste@teste.com' && senha.trim() == '123456') 
      setResultado('logado')
    else{
      Vibration.vibrate([10 * tempo]),
      setResultado('falhou')
    }
  }


  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      justifyContent: 'center'
    },
    textInput: {
      backgroundColor: '#b4b4b4',
      padding: 2,
      marginVertical: 5
    },
    fail: {
      textAlign:'center',
      color: 'red'
    },
    success: {
      textAlign:'center',
      color: 'green'
    }
  });

  return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#909090'}}>
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', senha: ''}}
        validationSchema={Yup.object().shape({
          email: Yup.string().required('Informe o email').email('E-mail não válido'),
          senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa ter ao menos 6 caracteres')
        })}
        onSubmit={handleLogin}>
        {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <>
            <Text>Login</Text>
            <TextInput  placeholder='Digite seu email' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('email')}/>
            { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
            <TextInput  placeholder='Digite sua senha' onBlur={handleBlur('email')} style={styles.textInput} onChangeText={handleChange('senha')} secureTextEntry/>
            { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}
            <Button title="Logar" onPress={() => handleSubmit()} disabled={isSubmitting} color={'#000'} />

            { resultado == 'logado' && <Text style={styles.success}>Logado com sucesso</Text>}
            { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorreto</Text>}
          </>
        )}
      </Formik>
    </View>  
  </View>)



}






