import api from "./api";

async function ListAppointments() {
  try {
    const getListAppointments = await api.get("/list-appointment");
    console.log(getListAppointments.data);
    return getListAppointments.data;
  } catch (error) {
    console.log(`Ocorreu um erro - ${error}`);
  }
}

export default ListAppointments;
