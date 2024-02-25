import api from './api';

async function newAppointment(patientCpf:string, patientName:string, birthDate:string, patientPhone:string, doctorSpecialisation:string, doctor_id:string, data_appointment:string){
    try{
        const newAppointment = await api.post('/appointment',{
            patientCpf :patientCpf,
            patientName :patientName,
            birthDate : birthDate,
            patientPhone : patientPhone,

            doctorSpecialisation :doctorSpecialisation,
            doctor_id:doctor_id,
            
            data_appointment:data_appointment
        });
        console.log(newAppointment.data);
        return newAppointment.data
    }catch(error){
        console.log(`Ocorreu um erro - ${error}`);
    }
}

export default newAppointment;