const Patient = require("../models/Patient.js");

class patientController {
  static async newPatient(req, res) {
    const { cpf, dataBirth, name, phoneNumber } = req.body;

    const newPatient = await Patient.create({
      cpf,
      dataBirth,
      name,
      phoneNumber,
    });

    patientExist = await Patient.findOne({ where: newPatient.cpf });
    if (patientExist) {
      res.status(400).json({ msg: "paciente já existente" });
    }

    try {
      newPatient;
      res
        .status(201)
        .json({ msg: "Nova Paciente Registrado", Patient: createdPatient });
    } catch (error) {
      res.json({
        msg: `${error} - Não foi possivel marcar a consulta`,
        erro: error,
      });
    }
  }

  //list Patient
  static async getAllPatient(req, res) {
    try {
      const listPatient = await Patient.findAll();
      res.status(200).json(listPatient);
    } catch (error) {
      res.status(500).json({
        msg: `${error} - Não foi possivel retornar a lista de Pacientes`,
      });
    }
  }

  //appointment by id
  static async getPatientById(req, res) {
    try {
      const patientId = req.params.id;
      const findPatient = await Patient.findById(patientId);
      res.status(200).json(findPatient);
    } catch (error) {
      res
        .status(500)
        .json({ msg: `${error} - Falha na requisição de consulta específica` });
    }
  }

  static async getPatientByCpf(req, res) {
    try {
      const patientCpf = req.body;
      console.log(patientCpf.cpf);
      const findPatient = await Patient.findAll({
        raw: true,
        where: { cpf: patientCpf.cpf },
      });
      console.log(findPatient);
      res.status(200).json(findPatient);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: `${error} - Falha na requisição de Paciente específico` });
    }
  }

  //updateAppointment
  static async updatePatient(req, res) {
    try {
      const patientId = req.params.id;
      await Patient.findByIdAndUpdate(patientId, req.body);
      res.status(200).json({ msg: "Registro de paciente atualizado" });
    } catch (error) {
      res.status(500).json({
        msg: `${error} - falha na requisição de atualização de Paciente`,
      });
    }
  }

  //deleteAppointment
  static async deletePatient(req, res) {
    try {
      const patientId = req.params.id;
      await Patient.findByIdAndDelete(patientId);
      res.status(200).json("Paciente excluído");
    } catch (error) {
      res.status(500).json({ msg: `${error} - Falha na exclusão de paciente` });
    }
  }
}

module.exports = patientController;
