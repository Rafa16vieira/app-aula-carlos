import { createContext, useContext, useState } from 'react';

export const AutenticacaoContext = createContext<{usuario?:any, setUsuario?: any}>({});

export function AutenticacaoProvider(props:any) {
    
    const [ usuario, setUsuario ] = useState<null|string>(null);

    return (<AutenticacaoContext.Provider value={{usuario, setUsuario}}>
        {props.children}
    </AutenticacaoContext.Provider>)
}

export const useAutenticacaoContext = () => useContext(AutenticacaoContext)