import { AZUL } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 100,
    flexDirection: "row",
    columnGap: 10
  },
  Imagem: {
    width: "35%",
    height: "95%",
    objectFit: "cover",
    borderRadius: 3
  },
  ViewDados: {
    width: "60%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    rowGap: 5
  },
  Titulo: {
    fontFamily: "Manrope_600SemiBold",
    color: AZUL,
    fontSize: 18
  },
  Serie: {
    fontFamily: "Manrope_400Regular",
    color: AZUL,
  }
});
