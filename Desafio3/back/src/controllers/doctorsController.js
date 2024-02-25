import Doctor from '../models/Doctor.js';


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
}


export default doctorsController;