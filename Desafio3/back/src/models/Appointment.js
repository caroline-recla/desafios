import mongoose from 'mongoose';


const appointmentSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    patient_id:{type:mongoose.Schema.Types.ObjectId, ref:'patient', require:true},
    doctor_id:{type:mongoose.Schema.Types.ObjectId, ref:'doctor', require:true},
    data_appointment:{type:Date}
},{ versionKey: false});


const appointment = mongoose.model("appointment",appointmentSchema);

export default appointment;