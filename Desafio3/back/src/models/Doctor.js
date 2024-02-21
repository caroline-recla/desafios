import mongoose from 'mongoose';


const doctorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String },
    specialization: { type: String },
    appointment:{type: mongoose.Schema.Types.ObjectId, ref:'Appointment', require:true}
}, { versionKey: false });


const doctor = mongoose.model("doctor", doctorSchema);

export default {doctor, doctorSchema};