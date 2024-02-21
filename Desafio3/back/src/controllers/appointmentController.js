import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";

class appointmentController {

    //crud appointment
    static async newAppointment(req, res) {
        try {
            const newAppointment = await Appointment.create(req.body);
            res.status(201).json({ msg: "Nova consulta marcada", Appointment: newAppointment });
        } catch (error) {
            res.json({ msg: `${error} - Não foi possivel marcar a consulta`, erro: error });
        }
    }

    //list Appointment
    static async getAllAppointments(req, res) {
        try {
            const listAppointments = await Appointment.find({});
            res.status(200).send('lista de consultas').json(listAppointments);
        } catch (error) {
            res.status(500).json({ msg: `${error} - Não foi possivel retornar a lista de consultas` });
        }
    }

    //appointment by id
    static async getAppointmentById(req, res) {
        try {
            const appointmentId = req.params.id;
            const findAppointment = await Appointment.findById(appointmentId);

            res.status.json(findAppointment);
        } catch (error) {
            res.status(500).json({ msg: `${error} - Falha na requisição de consulta específica` });
        };
    };

    //updateAppointment
    static async updateAppointment(req,res){
        try{
            const appointmentId = req.params.id;
            await Appointment.findByIdAndUpdate(appointmentId,req.body);
            res.status(200).json({msg:'Livro atualizado'});
            
        }catch(error){
            res.status(500).json({msg:`${error} - falha na requisição de atualização de consulta`})
        }
    }

    //deleteAppointment
    static async deleteAppointment(req,res){
        try{
            const appointmentId = req.params.id;
            await Appointment.findByIdAndDelete(appointmentId);
            res.status(200).json('Livro excluído');
        }catch(error){
            res.status(500).json({msg:`${error} - Falha na exclusão de consulta`});
        };
    };

    //filter by params
    
};


export default appointmentController;