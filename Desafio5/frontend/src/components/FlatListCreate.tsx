import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { StyleSheet } from "react-native";

const FlatListCreate = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    fontFamily: "body",
    fontWeight: "600",
    fontStyle: "italic",
  },
  telaHome: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ADCFE7",
  },
  appointment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    width: 100,
    margin: 10,
    padding: 5,
    alignContent: "flex-end",
  },
  viewAppointment: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    padding: 10,
  },
  lista: {
    width: "100%",
    gap: 40,
    margin: 10,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 20,
  },
  consulta: {
    display: "flex",
    alignContent: "space-between",
  },
});
export default FlatListCreate;
