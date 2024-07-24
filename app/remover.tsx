import { AZUL, VERMELHO } from "@/constants/Colors";
import { styles } from "@/styles/ver.styles";
import axios from "axios";
import { router, useGlobalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Remover = () => {
  const { id, nome } =
    useGlobalSearchParams();

  const handleDelete = () => {
    axios
      .delete(process.env.URL_BASE + "/" + id)
      .then(() => alert("Item deletado com sucesso!"))
      .then(() => router.back())
      .catch((err) => console.error(err));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: AZUL,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      >
        <Text style={[styles.Text, { color: AZUL }]}>
          Você está prestes a deletar o item {nome}
        </Text>
        <View style={styles.ViewButtons}>
          <TouchableOpacity
            style={[styles.Touchable, { borderWidth: 1, borderColor: AZUL }]}
            onPress={() => router.back()}
          >
            <Text style={[styles.Text, { color: AZUL }]}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Touchable, { borderWidth: 1, borderColor: AZUL }]}
            onPress={handleDelete}
          >
            <Text style={[styles.Text, { color: VERMELHO }]}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Remover;
