import api from './api';

async function newEmployee(cpf:string, employeeCode:string,name:string, password:string, confirmpassword:string){
    try{
        const newRegister = await api.post('/auth/register',{
            cpf :cpf,
            employeeCode :employeeCode,
            name : name,
            password :password,
            confirmpassword :confirmpassword
        });
        console.log(newRegister.data);
        return newRegister.data
    }catch(error){
        console.log(`Ocorreu um erro - ${error}`);
    }
}

export default newEmployee;