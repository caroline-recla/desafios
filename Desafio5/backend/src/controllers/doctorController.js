const Doctor = require('../models/Doctor.js');


class doctorsController {

    static async newDoctor(req, res) {
        try {
            const newDoctor = await Doctor.create(req.body);
            res.status(201).json({ msg: "Novo médico cadastrado", Appointment: newDoctor });
        } catch (error) {
            res.json({ msg: `${error} - Não foi possivel marcar a consulta`, erro: error });
        }


    }

    static async getAllDoctors(req, res) {
        try {
            const listDoctors = await Doctor.find({});
            res.status(200).json(listDoctors);
        } catch (error) {
            res.status(500).json({ msg: `${error} - Não foi possivel retornar a lista de médicos` });
        }
    }

    static async getDoctorById(req, res){
        try{
            const doctorId = req.params.id;
            const findDoctor = await diaLindo.findById(doctorId);
            res.status(200).json(findDoctor);
        }catch (error){
            res.status(500).json({ msg: `${error} - Falha na requisição, doutor por ID` });
        }
    }
}


module.exports = doctorsController;