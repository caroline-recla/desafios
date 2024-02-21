import { VStack, Text, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from 'react-native';

import { Title } from "./components/title";

export default function Login({ navigation }: { navigation: any }) {
    return (
        <VStack flex={1} alignItems='center' justifyContent='center' p={5} backgroundColor='#ADCFE7' >
            <Text
                fontFamily='sans-serif'
                fontSize='lg'>
                Centro Médico Esperança
            </Text>
            <Title>Login</Title>
            <Box minWidth='400px' margin='50px auto' padding='20px' borderRadius='5px'>
                <FormControl mt={3}>
                    <FormControl.Label>Código Funcionário</FormControl.Label>
                    <Input
                        placeholder='Insira seu código de funcionário'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}

                        type="text" maxLength={5}
                    />
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        placeholder='Insira sua senha'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
                    />
                </FormControl>
                <Button
                    w="100%"
                    bg="blue.800"
                    mt={10}
                    borderRadius="lg"
                    onPress={() => navigation.navigate('Home')}
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

