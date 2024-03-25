import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Appointment {
  patientCpf: string;
  patientName: string;
  birthDate: string;
  patientPhone: string;
  doctorSpecialisation: string;
  doctorName: string;
}

const AppointmentsList: React.FC<{ appointments: Appointment }> = ({
  appointments,
}) => {
  return (
    <FlatList
      data={appointments}
      keyExtractor={(item) => item.patientName.toString()}
      renderItem={({ item }) => (
        <View style={styles.appointment}>
          <Text>{item.patientName}</Text>
          <Text>{item.patientCpf}</Text>
          <Text>{item.birthDate}</Text>
          <Text>{item.patientPhone}</Text>
          <Text>{item.doctorName}</Text>
          <Text>{item.doctorSpecialisation}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  appointment: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default AppointmentsList;
