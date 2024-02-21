import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    cpf:{type:String},
    dataBirth:{type:Data},
    name:{type:String},
    phoneNumber:{type:String},
    appointments:[{type:mongoose.Schema.Types.ObjectId, ref:'appointment', require:true}]
},{ versionKey: false});    


const patient = mongoose.model("patient",patientSchema);

export  { patient, patientSchema} ;