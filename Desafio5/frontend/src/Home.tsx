import {
  VStack,
  Button,
  Modal,
  FormControl,
  Input,
  Text,
  View,
  FlatList,
  HStack,
  ScrollView,
  Icon,
} from "native-base";
import { StyleSheet } from "react-native";
import { Title } from "./components/title";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import newAppointment from "./services/newAppointment";
import React, { useEffect, useRef, useState } from "react";
import api from "./services/api";
import AlertCreateAppointment from "./components/AlertCreateAppointment";
import FlatListCreate from "./components/FlatListCreate";

interface FormData {
  patientCpf: string;
  patientName: string;
  birthDate: string;
  patientPhone: string;
  doctorSpecialisation: string;
  doctorName: string;
}

export default function Home() {
  const [appointmentVisible, setAppointmentVisible] = React.useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [showAlert, setShowAlert] = useState(false);

  const [formValues, setFormValues] = useState({
    patientCpf: " ",
    patientName: " ",
    birthDate: " ",
    patientPhone: " ",
    doctorSpecialisation: " ",
    doctorName: " ",
  });

  // const handleOpenModal = () => {
  //   setIsOpen(true);
  //   setFormValues({
  //     patientCpf: " ",
  //     patientName: " ",
  //     birthDate: " ",
  //     patientPhone: " ",
  //     doctorSpecialisation: " ",
  //     doctorName: " ",
  //   });
  // };

  const {
    patientCpf,
    patientName,
    birthDate,
    patientPhone,
    doctorSpecialisation,
    doctorName,
  } = formValues;

  const handleChange = (name: any, value: any) => {
    setFormValues({ ...formValues, [name]: value });
  };

  async function AppointmentNew() {
    const returnAuthenticate = await newAppointment(
      patientCpf,
      patientName,
      birthDate,
      patientPhone,
      doctorSpecialisation,
      doctorName
    );
    if (returnAuthenticate) {
      console.log("Consulta Marcada");
      setShowAlert(true);
    } else {
      console.log(`Falha de autenticação`);
    }
  }

  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const searchAppointments = async () => {
      try {
        const response = await api.get("/list-appointment");
        console.log(response.data);
        setAppointments(response.data);
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
      }
    };

    searchAppointments();
  }, []);

  const renderAppointmentItem = ({ item }: any) => (
    <View
      style={{ borderBottomWidth: 1, borderBottomColor: "#fff", padding: 10 }}
    >
      <HStack>
        <VStack>
          <Text>Nome Paciente: {item.patientName}</Text>
          <Text>CPF Paciente: {item.patientCpf}</Text>
          <Text>Data Nascimento: {item.birthDate}</Text>
        </VStack>
        <VStack paddingLeft={10}>
          <Text>Telefone Paciente: {item.patientPhone}</Text>
          <Text>Doutor: {item.doctorName}</Text>
          <Text>Especialidade do Doutor: {item.doctorSpecialisation}</Text>
        </VStack>
      </HStack>
    </View>
  );

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

              <FormControl.Label>Data de Nascimento</FormControl.Label>
              <Input
                ref={initialRef}
                value={birthDate}
                onChangeText={(text) => handleChange("birthDate", text)}
              />

              <FormControl.Label>Telefone do Paciente</FormControl.Label>
              <Input
                ref={initialRef}
                value={patientPhone}
                onChangeText={(text) => handleChange("patientPhone", text)}
              />
            </FormControl>

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
              value={doctorName}
              onChangeText={(text) => handleChange("doctorName", text)}
            />
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
              <Button onPress={() => AppointmentNew()}>Salve</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <View style={FlatListCreate.telaHome}>
        <View
          alignItems="right"
          backgroundColor="#ADCFE7"
          alignContent={"center"}
          borderColor={"white"}
        >
          <HStack>
            <Title
              color="white"
              alignItems="left"
              margin={"10px"}
              font-family="Soft Sans Serif 7"
            >
              Bem Vindo ao Gerenciamento de Consultas do Hospital Esperança
            </Title>
            <Button
              alignContent="flex-start"
              margin="10px"
              marginLeft={"100px"}
              padding="5px"
              borderRadius={"50px"}
              maxWidth="100px"
              maxHeight="100px"
              onPress={() => {
                setAppointmentVisible(!appointmentVisible);
              }}
            >
              Nova Consulta
            </Button>
          </HStack>
        </View>

        <View
          style={{
            flex: 1,
            padding: 20,
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          {showAlert && <AlertCreateAppointment message={"Consulta Marcada"} />}
          <ScrollView width="95%">
            <FlatList
              width="100%"
              alignContent="center"
              data={appointments}
              renderItem={({ item }: any) => (
                <View style={FlatListCreate.viewAppointment}>
                  <HStack style={FlatListCreate.lista}>
                    <VStack style={FlatListCreate.consulta}>
                      <Text>Nome Paciente: {item.patient_name}</Text>
                      <Text>CPF Paciente: {item.patient_cpf}</Text>
                      <Text>Data Nascimento: {item.patient_birthDate}</Text>
                    </VStack>
                    <VStack style={FlatListCreate.consulta}>
                      <Text>Telefone Paciente: {item.patient_phone}</Text>
                      <Text>Doutor: {item.doctor_name}</Text>
                      <Text>
                        Especialidade do Doutor: {item.doctor_specialisation}
                      </Text>
                    </VStack>
                  </HStack>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
