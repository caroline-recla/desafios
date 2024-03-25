import ListAppointments from "./ListAppointments";

async function AllAppointments() {
  try {
    const getAllAppointment = await ListAppointments();
    console.log(getAllAppointment.data);
    return getAllAppointment.data;
  } catch (error) {
    console.log(`Ocorreu um erro - ${error}`);
  }
}

export default AllAppointments;
