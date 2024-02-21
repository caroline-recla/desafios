import { VStack, Text, Box, FormControl, Input, Button, Link } from "native-base";
import { TouchableOpacity } from 'react-native';
import { Title } from "./components/title";

export default function Cadastro() {

    const section = [
        {
            id: 1,
            titulo: 'Insira alguns dados básicos'
        }
    ]

    return (
        <VStack flex={1} alignItems='center' justifyContent='center' p={5} backgroundColor='#ADCFE7' >
            <Text
                fontFamily='sans-serif'
                fontSize='lg'>
                Centro Médico Esperança
            </Text>
            <Title>Cadastro</Title>
            <Box minWidth='400px' margin='50px auto' padding='20px' borderRadius='5px'>
                <FormControl mt={3}>
                    <FormControl.Label>CPF do Funcionário</FormControl.Label>
                    <Input
                        placeholder='Insira seu CPF'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
                    />
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
                    <FormControl.Label>Nome</FormControl.Label>
                    <Input
                        placeholder='Insira seu nome'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
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
                    <FormControl.Label>Confirmar Senha</FormControl.Label>
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
                >
                    Entrar
                </Button>
            </Box>
        </VStack >
    );
}

