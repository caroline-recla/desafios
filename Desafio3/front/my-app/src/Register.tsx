import { VStack, Text, Box, FormControl, Input, Button, Alert } from "native-base";
import { Title } from "./components/title";
import { useState } from "react";
import newEmployee from "./services/NewEmployee";

export default function Cadastro() {

    

    const [formValues, setFormValues] = useState({
        cpf: '',
        employeeCode: '',
        name: '',
        password: '',
        confirmpassword:''
    });

    const { cpf, employeeCode, name, password, confirmpassword } = formValues;

    const handleChange = (name: any, value: any) => {
        setFormValues({ ...formValues, [name]: value });
    };

    async function NewEmployee(){
        const returnAuthenticate = await newEmployee(cpf,employeeCode,name, password, confirmpassword);
        if(returnAuthenticate){
            console.log("Usuário Cadastrado");
        }else{
            console.log(`Falha de autenticação`);
        }
    }
   
    
   
    return <>
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
                        value={cpf}
                        onChangeText={text => handleChange('cpf', text)}
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
                        value={employeeCode}
                        onChangeText={text => handleChange('employeeCode', text)}

                    />
                    <FormControl.Label>Nome</FormControl.Label>
                    <Input
                        placeholder='Insira seu nome'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
                        value={name}
                        onChangeText={text => handleChange('name', text)}
                    />
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        placeholder='Insira sua senha'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
                        secureTextEntry
                        value={password}
                        onChangeText={text => handleChange('password', text)}
                    />
                    <FormControl.Label>Confirmar Senha</FormControl.Label>
                    <Input
                        placeholder='Insira sua senha'
                        size='lg'
                        w="100%"
                        borderRadius='lg'
                        bgColor='gray.100'
                        shadow={3}
                        secureTextEntry
                        value={confirmpassword}
                        onChangeText={text => handleChange('confirmpassword', text)}
                    />
                </FormControl>
                <Button
                    w="100%"
                    bg="blue.800"
                    mt={10}
                    borderRadius="lg"
                    onPress={() => NewEmployee()}
                >
                    Entrar
                </Button>
            </Box>
        </VStack >
    </>;
}

