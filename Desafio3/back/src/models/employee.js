import mongoose from 'mongoose';


const employeeSchema = new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId},
    cpf:{type:String},
    employeeCode:{type:Number, require:true},
    name:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
},{ versionKey: false});


const employee = mongoose.model("employee",employeeSchema);

export default employee;