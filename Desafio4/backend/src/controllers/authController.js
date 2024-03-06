const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee.js');

class authController {
    static async registerWithToken(req, res) {
        const { cpf, employeeCode, name, password, confirmpassword } = req.body;

        if (!cpf) {
            return res.status(400).json({ msg: "CPF do funcionário é obrigatório" });
        };
        if (!employeeCode) {
            return res.status(400).json({ msg: "Código do funcionário é obrigatório!" });
        };
        if (!name) {
            return res.status(400).json({ msg: "Nome do Funcionário é obrigatório." });
        }
        if (!password) {
            return res.status(400).json({ msg: "Senha Obrigatória" });
        }
        if (!confirmpassword) {
            return res.status(400).json({ msg: "Senha Obrigatória!" });
        }


        if (!password == confirmpassword) {
            return res.statsu(400).json({ msg: "Senhas não correspondem" });
        }

        // try {
        //     const employeeCodeExist = await Employee.findOne({ where: { employeeCode: employeeCode } })
        //     const employeeCpfExist = await Employee.findOne({ where: { cpf: cpf } });

        //     if (employeeCodeExist || employeeCpfExist) {
        //         res.status(400).json({ msg: "Funcionário já cadastrado" });
        //     }
        // }catch(error){
        //     res.status(500).json({ msg: "Erro ao tentar comparar funcionário no banco." })
        // }

        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        const newEmployee = Employee.create({ cpf, employeeCode, name, password: passwordHash, createdAt: Date.now() });

        try {
            newEmployee;
            res.status(201).json({ msg: "Novo Funcionário Criado com Sucesso!", newEmployee });

        } catch (error) {
            res.status(500).json({ msg: `Erro ao cadastrar novo funcionário. ${error}` })
        }
    }

    static async loginEmployee(req, res) {
        const { employeeCode, password } = req.body;

        if (!employeeCode) {
            res.status(400).json({ msg: "Código do funcionário obrigatório." });
        }
        if (!password) {
            res.status(400).json({ msg: "Senha obrigatória" });
        }

        const employeeExist = await Employee.findOne({ where: { employeeCode: employeeCode } });

        if (!employeeExist) {
            res.status(404).json({ msg: "Funcionário não encontrado" });
        }

        const checkPassword = bcrypt.compare(password, employeeExist.password);

        if (!checkPassword) {
            return res.status(400).json({ msg: "Senha Incorreta" });
        }


        try {
            const secret = process.env.SECRET;
            const token = jwt.sign({ id: Employee._id}, secret);

            res.status(201).json({ msg: "Autenticação Realizada com sucesso!", token });
        } catch (error) {
            res.status(500).json({ msg: "Erro de login" , error});
        }
    }

    static async privateRouterById(req, res) {
        const id = req.params.id;

        try {
            const employeeCheckExists = await Employee.findById(id, "-passaword");

            if (!employeeCheckExists) {
                res.status(404).json({ msg: "Funcionário não encontrado!" });
            }

            res.status(200).json({ Employee: employeeCheckExists });

        } catch (error) {
            res.status(500).json({ msg: "Erro no servidor, tente novamente!" });
        }

    }

    static async tokenCheck(req, res, next) {
        const headerAuth = req.headers['authorization'];
        const token = headerAuth && headerAuth.split(' ')[1];

        if (!token) {
            return res.status(401).json({ msg: "Acesso Negado!" });
        };

        try {
            const secret = process.env.SECRET;
            jwt.verify(token, secret);
            next();
        } catch (error) {
            res.status(400).json({ msg: "Token inválido" });
        }
    }
}

module.exports = authController;