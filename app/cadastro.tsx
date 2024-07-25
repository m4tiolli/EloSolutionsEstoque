import { styles } from "@/styles/cadastro.styles";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AZUL } from "@/constants/Colors";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function Cadastro() {
  const [disabled, setDisabled] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const [valNome, setValNome] = useState("");
  const [valDescricao, setValDescricao] = useState("");
  const [valPatrimonio, setValPatrimonio] = useState("");
  const [valNumeroSerie, setValNumeroSerie] = useState("");
  const [valLocalizacao, setValLocalizacao] = useState("");
  const [valNotaFiscal, setValNotaFiscal] = useState("");

  const pickImage = async () => {
    const cameraRollStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (cameraRollStatus.status !== "granted") {
      alert("Precisamos das permissões do app!");
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const captureImage = async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraStatus.status !== "granted") {
      alert("Precisamos das permissões do app!");
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (
      valNome.length < 1 ||
      valDescricao.length < 1 ||
      valPatrimonio.length < 1 ||
      valNumeroSerie.length < 1 ||
      valLocalizacao.length < 1 ||
      valNotaFiscal.length < 1 ||
      !image
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    valNome,
    valDescricao,
    valPatrimonio,
    valNumeroSerie,
    valLocalizacao,
    valNotaFiscal,
    image,
  ]);

  const clearValues = () => {
    setValNome("");
    setValDescricao("");
    setValPatrimonio("");
    setValNumeroSerie("");
    setValLocalizacao("");
    setValNotaFiscal("");
    setImage(null);
  };

  const handleCadastrar = async () => {
    const fileType = (image as string).split(".").pop();

    const data = {
      nome: valNome,
      descricao: valDescricao,
      patrimonio: valPatrimonio,
      numSerie: valNumeroSerie,
      notafiscal: valNotaFiscal,
      localizacao: valLocalizacao,
      imagem: (fileType as string),
    };

    try {
      await axios.post(`${process.env.EXPO_PUBLIC_URL_BASE}/produtos`, data);
      alert("Item cadastrado com sucesso!");
      clearValues();
    } catch (erro) {
      console.error(erro);
      alert("Erro ao cadastrar o item");
    }
  };

  return (
    <ScrollView
      style={{ width: "100%", paddingBottom: 10, backgroundColor: AZUL }}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }}
    >
      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Nome</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valNome}
          onChangeText={(text) => setValNome(text.toUpperCase())}
        />
      </View>

      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Descrição</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valDescricao}
          onChangeText={(text) => setValDescricao(text.toUpperCase())}
        />
      </View>

      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Patrimônio</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valPatrimonio}
          onChangeText={(text) => setValPatrimonio(text.toUpperCase())}
        />
      </View>

      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Número de série</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valNumeroSerie}
          onChangeText={(text) => setValNumeroSerie(text.toUpperCase())}
        />
      </View>

      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Localização</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valLocalizacao}
          onChangeText={(text) => setValLocalizacao(text.toUpperCase())}
        />
      </View>

      <View style={styles.ViewInput}>
        <Text style={styles.TextInput}>Nota Fiscal</Text>
        <TextInput
          style={styles.Input}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          autoCapitalize={"characters"}
          value={valNotaFiscal}
          onChangeText={(text) => setValNotaFiscal(text.toUpperCase())}
        />
      </View>

      {!image && (
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.TouchableAnexar}
            onPress={captureImage}
          >
            <Text style={styles.TextAnexar}>Tirar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchableAnexar} onPress={pickImage}>
            <Text style={styles.TextAnexar}>Escolher foto</Text>
          </TouchableOpacity>
        </View>
      )}

      {image && (
        <View style={styles.ViewImage}>
          <TouchableOpacity style={styles.EditTouchable} onPress={pickImage}>
            <Feather name="edit-3" style={styles.EditIcon} />
          </TouchableOpacity>
          <Image
            source={{ uri: image as string }}
            style={styles.PreviewImage}
          />
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.TouchableEnviar,
          disabled ? { opacity: 0.4 } : { opacity: 1 },
        ]}
        disabled={disabled}
        onPress={handleCadastrar}
      >
        <Text style={styles.TextEnviar}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
