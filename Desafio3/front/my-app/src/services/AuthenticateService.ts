import api from './api';

async function AuthenticateLogin(employeeCode:string, password:string){
    if(!employeeCode || !password){
        return null
    }
    try{
        const returnLogin = await api.post('/auth/login',{
            employeeCode,
            password
        });
        console.log(returnLogin.data);
        return returnLogin.data
    }catch(error){
        console.log(`Ocorreu um erro - ${error}`);
    }
}


export default AuthenticateLogin