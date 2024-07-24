import { AZUL } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: AZUL,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 30
  },
  ViewSearch: {
    width: "80%",
    backgroundColor: AZUL,
    position: "relative",
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 8,
    paddingHorizontal: 8,
    display: "flex",
    justifyContent: "center",
  },
  TextSearch: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 15,
    left: 5,
    position: "absolute",
    backgroundColor: AZUL,
    top: -12,
    paddingHorizontal: 3,
  },
  InputSearch: {
    color: "white",
    fontFamily: "Manrope_400Regular",
    height: 40,
  },
  TouchableSearch: {
    position: "absolute",
    right: 0,
    backgroundColor: "white",
    height: "100%",
    width: "15%",
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  IconSearch: {
    color: AZUL,
    fontSize: 30
  },
  Text: {
    color: "white",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 20,
    paddingTop: 25
  },
  Separator: {
    width: "100%",
    height: 0,
    backgroundColor: "white",
    marginVertical: 10,
  },
});
