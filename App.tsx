import { NavegacaoPrincipal } from './src/navigation';
import { AutenticacaoProvider } from './src/providers/autenticacao';
import { initializeApp } from '@firebase/app';
//import { firebaseConfig } from '././src/config/firebase-config';



export default function App() {
  //initializeApp(firebaseConfig)

  return (
    <AutenticacaoProvider>
      <NavegacaoPrincipal/>
    </AutenticacaoProvider>
  );
}
