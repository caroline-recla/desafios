import { VStack, Text, Box, Button, Image } from "native-base";
import { TouchableOpacity } from 'react-native';
import AuthenticateLogin from './services/AuthenticateService';

import { Title } from "./components/title";
import {InputText} from './components/InputText'
import { useState } from "react";

export default function Login({ navigation }: any) {

    const [employeeCode, setEmployeeCode] = useState('');
    const [password, setPassword] = useState('');

    async function authenticateLogin(){
        const returnAuthenticate = await AuthenticateLogin(employeeCode,password);
        if(returnAuthenticate){
            navigation.replace('Home')
        }else{
            console.log(`Falha de autenticação`);
        }
    }

    return (
        <VStack flex={1} alignItems='center' justifyContent='center' p={5} backgroundColor='#ADCFE7' >
            <Image
                source={require('./assets/logoClinica.png')}
                style={{ width: 200, height: 200 }} 
            />
            <Title>Login</Title>
            <Box minWidth='400px' margin='50px auto' padding='10px' borderRadius='5px'>
                <InputText
                    label="Código funcionário"
                    placeholder="Insira seu Código de Funcionário"
                    value={employeeCode}
                    onChangeText={setEmployeeCode}
                />
                <InputText
                    label="Senha"
                    placeholder="Insira sua senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <Button
                    w="100%"
                    bg="blue.800"
                    mt={10}
                    borderRadius="lg"
                    onPress={authenticateLogin}
                >
                    Entrar
                </Button>
            </Box>
            <Box maxWidth='400px' flexDirection="row" justifyContent="center">
                <Text>Não possui conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Resgiter')}>
                    <Text color='blue.500'>
                        Cadastre-se aqui
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack >
    );
}

