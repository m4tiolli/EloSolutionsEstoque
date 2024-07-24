import { AZUL, VERMELHO } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ViewInput: {
    width: "80%",
    backgroundColor: AZUL,
    position: "relative",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  TextInput: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 15,
    left: 5,
    position: "absolute",
    backgroundColor: AZUL,
    top: -12,
    paddingHorizontal: 3,
  },
  Input: {
    color: "white",
    fontFamily: "Manrope_400Regular",
    height: 40,
  },
  TextAnexar: {
    color: AZUL,
    fontFamily: "Manrope_600SemiBold",
  },
  TouchableAnexar: {
    backgroundColor: "white",
    width: "45%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 20
  },
  PreviewImage: {
    width: "100%",
    objectFit: "cover",
    height: 220,
    borderRadius: 5
  },
  ViewImage: {
    width: "80%",
    position: "relative",
    marginVertical: 10,
  },
  TouchableEnviar: {
    backgroundColor: VERMELHO,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 5,
  },
  TextEnviar: {
    fontFamily: "Manrope_600SemiBold",
    color: "white",
    fontSize: 20,
  },
  EditIcon: {
    fontSize: 30,
    color: AZUL
  },
  EditTouchable: {
    backgroundColor: "white",
    padding: 5,
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
  },
});
