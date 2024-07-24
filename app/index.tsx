import { styles } from "../styles/index.styles";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo-white.png";
import { router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Image source={logo} style={styles.Logo} />
      <Text style={styles.Titulo}>Controle de estoque</Text>

      <TouchableOpacity
        style={styles.Touchable}
        onPress={() => router.navigate("/cadastro")}
      >
        <Text style={styles.TouchableText}>Cadastrar produto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Touchable}
        onPress={() => router.navigate("/visualizar")}
      >
        <Text style={styles.TouchableText}>Visualizar produto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Touchable}
        onPress={() => router.navigate("/visualizar")}
      >
        <Text style={styles.TouchableText}>Atualizar produto</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Touchable}
        onPress={() => router.navigate("/visualizar")}
      >
        <Text style={styles.TouchableText}>Remover produto</Text>
      </TouchableOpacity>

      <Text style={styles.Copy}>2024 © Todos os direitos reservados</Text>
    </SafeAreaView>
  );
}
