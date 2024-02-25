import api from './api'


async function AllAppointment() {
    try {
        const getAllAppointment = await api.get('/appointment' )
        console.log(getAllAppointment.data);
        return getAllAppointment.data
    }catch(error){
        console.log(`Ocorreu um erro - ${error}`);
    }
}


export default AllAppointment