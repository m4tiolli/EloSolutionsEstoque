import { AZUL } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Imagem: {
    width: "80%",
    height: 300,
    objectFit: "fill",
    borderRadius: 5
  },
  MainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AZUL,
    rowGap: 10,
    paddingTop: 30
  },
  Nome: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 23,
  },
  Descricao: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 18,
    width: "90%",
    textAlign: "center",
  },
  Separador: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "80%",
  },
  Titulo: {
    color: "white",
    fontFamily: "Manrope_400Regular",
    fontSize: 17,
  },
  Valor: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 17,
  },
  ViewButtons: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Touchable: {
    backgroundColor: "white",
    width: "40%",
    borderRadius: 5,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  Text: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: 19
  },
});
