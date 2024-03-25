import api from "./api";

async function newAppointment(
  patientCpf: string,
  patientName: string,
  birthDate: string,
  patientPhone: string,
  doctorSpecialisation: string,
  doctorName: string
) {
  try {
    const newAppointment = await api.post("/new-appointment", {
      patient_cpf: patientCpf,
      patient_name: patientName,
      patient_birthDate: birthDate,
      patient_phone: patientPhone,

      doctor_specialisation: doctorSpecialisation,
      doctor_name: doctorName,
    });
    console.log(newAppointment.data);
    return newAppointment.data;
  } catch (error) {
    console.log(`Ocorreu um erro - ${error}`);
  }
}

export default newAppointment;
