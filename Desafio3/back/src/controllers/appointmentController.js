import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";
import Doctor from '../models/Doctor.js'

class appointmentController {

    //crud appointment
    static async newAppointment(req, res) {
        const newAppointment = req.body;

        try {
            const AppointmentFull = { ...newAppointment}
            const createdAppointment = await Appointment.appointment.create(AppointmentFull);
            res.status(201).json({ msg: "Nova consulta marcada", Appointment: createdAppointment });
        } catch (error) {
            res.json({ msg: `${error} - Não foi possivel marcar a consulta`, erro: error });
        }
    }

    //list Appointment
    static async getAllAppointments(req, res) {
        try {
            const listAppointments = await Appointment.appointment.find({});
            res.status(200).json(listAppointments);
        } catch (error) {
            res.status(500).json({ msg: `${error} - Não foi possivel retornar a lista de consultas` });
        }
    }

    //appointment by id
    static async getAppointmentById(req, res) {
        try {
            const appointmentId = req.params.id;
            const findAppointment = await Appointment.appointment.findById(appointmentId);
            res.status(200).json(findAppointment);
        } catch (error) {
            res.status(500).json({ msg: `${error} - Falha na requisição de consulta específica` });
        };
    };

    //updateAppointment
    static async updateAppointment(req,res){
        try{
            const appointmentId = req.params.id;
            await Appointment.appointment.findByIdAndUpdate(appointmentId,req.body);
            res.status(200).json({msg:'Registro de paciente atualizado'});
            
        }catch(error){
            res.status(500).json({msg:`${error} - falha na requisição de atualização de consulta`})
        }
    }

    //deleteAppointment
    static async deleteAppointment(req,res){
        try{
            const appointmentId = req.params.id;
            await Appointment.appointment.findByIdAndDelete(appointmentId);
            res.status(200).json('Consulta excluído');
        }catch(error){
            res.status(500).json({msg:`${error} - Falha na exclusão de consulta`});
        };
    };

    //filter by params
    
};


export default appointmentController;