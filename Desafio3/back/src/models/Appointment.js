import mongoose from 'mongoose';


const appointmentSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    patientCpf:{type:String, require:true},
    patientName:{type:String, require:true},
    birthDate:{type:String, require:true},
    patientPhone:{type:String, require:true},

    doctorSpecialisation:{type:String, require:true},
    doctor_id:{type:String, require:true},
    
    data_appointment:{type:Date}
},{ versionKey: false});


const appointment = mongoose.model("appointment",appointmentSchema);

export default {appointment, appointmentSchema};