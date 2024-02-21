import { NativeBaseProvider, StatusBar } from 'native-base';

import { THEMES } from './src/styles/themes';
import Routes from './src/Routes';
import { useEffect } from 'react';
import api from './src/services/api'

export default function App() {

  useEffect(() => {
    async function DadosReturn(){
      const resultado = await api.get('/appointment')
      console.log(resultado.data)
      console.log('teste base')
    }
    DadosReturn()
  }, [])

  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[200]} />
     <Routes/>
    </NativeBaseProvider>
  );
}
