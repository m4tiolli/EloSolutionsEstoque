import { AZUL } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: AZUL,
    paddingVertical: 20,
    rowGap: 30,
  },
  Logo: {
    width: "80%",
    height: "10%",
    objectFit: "contain",
  },
  Titulo: {
    fontSize: 35,
    color: "white",
    fontFamily: "Manrope_600SemiBold",
  },
  Touchable: {
    backgroundColor: "white",
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
    alignSelf: 'center'
  },
  TouchableText: {
    color: AZUL,
    fontFamily: "Manrope_600SemiBold",
    fontSize: 20,
  },
  Copy: {
    position: "absolute",
    bottom: 20,
    color: "white",
    fontFamily: "Manrope_300Light"
  },
});
