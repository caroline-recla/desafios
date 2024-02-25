import Employee from "../models/Employee.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class employeeController {
    //create 
    static async registerEmployee(req, res) {
        try {
            const newEmployee = await Employee.create(req.body);
            res.status(201).json({ message: "Funcionário Cadastrado.", Employee: newEmployee });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar novo funcionário` })
        };
    };


    static async getEmployeeById(req, res) {
        try {

            const employeeFound = await Employee.find(req.params.id);
            if (!Employee) {
                return res.status(404).json({ error: 'Employee not found!' });
            }
            res.status(200).json(employeeFound);

        } catch (error) {

            res.status(500).json({ msg: `${error.message} - error: error.message` });

        };
    };


    // register-user
    static async registerWithToken(req, res) {
        const { cpf, employeeCode, name, password, confirmpassword } = req.body;

        if (!cpf) {
            return res.status(422).json({ msg: "CPF do funcionnário é obrigatório" });
        };
        if (!employeeCode) {
            return res.status(422).json({ msg: "Código do funcionário é obrigatório!" });
        };
        if (!name) {
            return res.status(422).json({ msg: "Nome do Funcionário é obrigatório." });
        }
        if (!password) {
            return res.status(422).json({ msg: "Senha Obrigatória" });
        }
        if (!confirmpassword) {
            return res.status(422).json({ msg: "Senha Obrigatória!" });
        }


        if (!password == confirmpassword) {
            return res.statsu(422).json({ msg: "Senhas não coreespondem" });
        }



        const employeeCodeExist = await Employee.findOne({ employeeCode: employeeCode });
        const employeeCpfExist = await Employee.findOne({ cpf: cpf });

        if (!employeeCodeExist || !employeeCpfExist) {
            res.status(422).json({ msg: "Funcionário já cadastrado" });
        }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);

        const NewEmployee = new Employee({
            cpf,
            employeeCode,
            name,
            password: passwordHash,
        })

        try {
            NewEmployee.save();
            res.status(201).json({ msg: "Novo Funcionário Criado com Sucesso!" })
        } catch (error) {
            res.status(500).json({ msg: "Aconteceu algo no servidor, tente novamente." })
        }
    }

    static async loginEmployee(req, res) {
        const { employeeCode, password } = req.body;

        if (!employeeCode) {
            res.status(422).json({ msg: "Código do funcionário obrigatório." });
        }
        if (!password) {
            res.status(422).json({ msg: "Senha obrigatória" });
        }

        const employeeExist = await Employee.findOne({ employeeCode: employeeCode });

        if (!employeeExist) {
            res.status(404).json({ msg: "Funcionário não encontrado" });
        }

        const checkPassword = bcrypt.compare(password, employeeExist.password);

        if (!checkPassword) {
            return res.status(422).json({ msg: "Senha Incorreta" });
        }

        try {
            const secret = process.env.SECRET;

            const token = jwt.sign(
                {id: Employee._id},secret
            );

            res.status(200).json({msg:"Autenticação Realizada com sucesso!",token});
        } catch (error) {
            res.status(500).json({ msg: "Erro no servidor, tente novamente mais tarde!" })
        }
    }

    static async privateRouterById(req,res) {
        const id = req.params.id;

        try{
            const employeeCheckExists = await Employee.findById(id, "-passaword");
    
            if(!employeeCheckExists){
                res.status(404).json({msg:"Funcionário não encontrado!"});
            }
    
            res.status(200).json({Employee : employeeCheckExists});

        }catch(error){
            res.status(500).json({msg:"Erro no servidor, tente novamente!"});
        }

    }

    static async tokenCheck(req,res, next) {
        const headerAuth = req.headers['authorization'];
        const token = headerAuth && headerAuth.split(' ')[1];

        if(!token){
            return res.status(401).json({msg:"Acesso Negado!"});
        };

        try{
            const secret = process.env.SECRET;
            jwt.verify(token,secret);
            next();
        }catch(error){
            res.status(400).json({msg:"Token inválido"});
        }
    }
};



export default employeeController;