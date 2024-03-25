import { VStack, Button, Modal, FormControl, Input, List } from "native-base";
import { Title } from "./components/title";
import newAppointment from "./services/newAppointment";
import React, { useState } from "react";

export default function Home() {
  const [appointmentVisible, setAppointmentVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [formValues, setFormValues] = useState({
    patientCpf: "",
    patientName: "",
    birthDate: "",
    patientPhone: "",
    doctorSpecialisation: "",
    doctor_id: "",
    data_appointment: "",
  });

  const {
    patientCpf,
    patientName,
    birthDate,
    patientPhone,
    doctorSpecialisation,
    doctor_id,
    data_appointment,
  } = formValues;

  const handleChange = (name: any, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  async function Appointment() {
    const returnAuthenticate = await newAppointment(
      patientCpf,
      patientName,
      birthDate,
      patientPhone,
      doctorSpecialisation,
      doctor_id,
      data_appointment
    );
    if (returnAuthenticate) {
      console.log("Consulta Marcada");
    } else {
      console.log(`Falha de autenticação`);
    }
  }

  return (
    <>
      <Modal
        isOpen={appointmentVisible}
        onClose={() => setAppointmentVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Nova Consulta</Modal.Header>
          <Modal.Body>
            <FormControl>
              {/*AREA DO PACIENTE*/}
              <FormControl.Label>CPF do Paciente</FormControl.Label>
              <Input
                ref={initialRef}
                value={patientCpf}
                onChangeText={(text) => handleChange("patientCpf", text)}
              />

              <FormControl.Label>Nome do Paciente</FormControl.Label>
              <Input
                ref={initialRef}
                value={patientName}
                onChangeText={(text) => handleChange("patientName", text)}
              />

              <FormControl.Label>
                Data de nascimento do Paciente
              </FormControl.Label>
              <Input
                ref={initialRef}
                value={birthDate}
                onChangeText={(text) => handleChange("birthDate", text)}
              />

              <FormControl.Label>
                Número de celular do Paciente
              </FormControl.Label>
              <Input
                ref={initialRef}
                value={patientPhone}
                onChangeText={(text) => handleChange("patientPhone", text)}
              />

              {/*ÁREA DO MÉDICO*/}
              <FormControl.Label>Especialidade do Médico</FormControl.Label>
              <Input
                ref={initialRef}
                value={doctorSpecialisation}
                onChangeText={(text) =>
                  handleChange("doctorSpecialisation", text)
                }
              />

              <FormControl.Label>Drº:</FormControl.Label>
              <Input
                ref={initialRef}
                value={doctor_id}
                onChangeText={(text) => handleChange("doctor_id", text)}
              />

              {/*APPOINTMENT*/}
              <FormControl.Label>Data da Consulta</FormControl.Label>
              <Input
                ref={initialRef}
                value={data_appointment}
                onChangeText={(text) => handleChange("data_appointment", text)}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setAppointmentVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={() => Appointment()}>Salve</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <VStack space={8} alignItems="center" backgroundColor="#ADCFE7">
        <Title color="black">Bem Vindo</Title>
        <Button
          w="104"
          onPress={() => {
            setAppointmentVisible(!appointmentVisible);
          }}
        ></Button>
      </VStack>
    </>
  );
}
