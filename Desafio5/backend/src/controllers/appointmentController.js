const { DataTypes } = require("sequelize");
const Appointment = require("../models/Appointment.js");
class appointmentController {
  static async newAppointment(req, res) {
    console.log("teste: ", req.body);

    const {
      patient_cpf,
      patient_name,
      patient_birthDate,
      patient_phone,
      doctor_specialisation,
      doctor_name,
    } = req.body;

    const createdAppointment = await Appointment.create({
      patient_cpf,
      patient_name,
      patient_birthDate,
      patient_phone,
      doctor_specialisation,
      doctor_name,
      createdAt: Date.now(),
    });

    try {
      createdAppointment;
      res.status(201).json({
        msg: "Nova consulta marcada",
        Appointment: createdAppointment,
      });
    } catch (error) {
      res.json({
        msg: `${error} - Não foi possivel marcar a consulta`,
        erro: error,
      });
    }
  }

  //list Appointment
  static async getAllAppointments(req, res) {
    try {
      const listAppointments = await Appointment.findAll();
      res.status(200).json(listAppointments);
    } catch (error) {
      res.status(500).json({
        msg: `${error} - Não foi possivel retornar a lista de consultas`,
      });
    }
  }

  //appointment by id
  static async getAppointmentById(req, res) {
    try {
      const appointmentId = req.params.id;
      const findAppointment = await Appointment.findById(appointmentId);
      res.status(200).json(findAppointment);
    } catch (error) {
      res
        .status(500)
        .json({ msg: `${error} - Falha na requisição de consulta específica` });
    }
  }

  //updateAppointment
  static async updateAppointment(req, res) {
    try {
      const appointmentId = req.params.id;
      await Appointment.findByIdAndUpdate(appointmentId, req.body);
      res.status(200).json({ msg: "Registro de paciente atualizado" });
    } catch (error) {
      res.status(500).json({
        msg: `${error} - falha na requisição de atualização de consulta`,
      });
    }
  }

  //deleteAppointment
  static async deleteAppointment(req, res) {
    try {
      const appointmentId = req.params.id;
      await Appointment.findByIdAndDelete(appointmentId);
      res.status(200).json("Consulta excluído");
    } catch (error) {
      res.status(500).json({ msg: `${error} - Falha na exclusão de consulta` });
    }
  }
}

module.exports = appointmentController;
