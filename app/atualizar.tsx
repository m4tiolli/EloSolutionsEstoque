import { styles } from "@/styles/cadastro.styles";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AZUL } from "@/constants/Colors";
import { router, useGlobalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Atualizar() {
  const [disabled, setDisabled] = useState(true);
  const { id, nome, descricao, patrimonio, imagem, numSerie, nf, localizacao } =
    useGlobalSearchParams();
  const [valNome, setValNome] = useState(nome as string);
  const [valDescricao, setValDescricao] = useState(descricao as string);
  const [valPatrimonio, setValPatrimonio] = useState(patrimonio as string);
  const [valImagem, setValImagem] = useState<ImagePicker.ImagePickerAsset>();
  const [imagemSalva, setImagemSalva] = useState<string>("");
  const [valNumSerie, setValNumSerie] = useState(numSerie as string);
  const [valNf, setValNf] = useState(nf as string);
  const [valLocalizacao, setValLocalizacao] = useState(localizacao as string);
  const [loading, setLoading] = useState(false);

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
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled) {
      setImagemSalva("");
      setValImagem(result.assets[0]);
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
      quality: 0.7,
      base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      setImagemSalva("");
      setValImagem(result.assets[0]);
    }
  };

  useEffect(() => {
    const getImagem = async () => {
      const res = await AsyncStorage.getItem("imagem");
      if (res) {
        setImagemSalva("data:image/jpeg;base64," + res);
      }
    };
    getImagem();
  }, []);

  const handleUpdate = async () => {
    setDisabled(true);
    setLoading(true);
    const data = {
      nome: valNome,
      descricao: valDescricao,
      patrimonio: valPatrimonio,
      numSerie: valNumSerie,
      notafiscal: valNf,
      localizacao: valLocalizacao,
      imagem: valImagem?.base64,
    };
    await AsyncStorage.setItem("dadosNovos", JSON.stringify(data))

    try {
      await axios
        .put(`${process.env.EXPO_PUBLIC_URL_BASE}/produtos/${id}`, data)
        .then(() => setLoading(false));
      alert("Item atualizado com sucesso!");
      router.back();
    } catch (erro) {
      console.error(erro);
      alert("Erro ao atualizar o item");
    }
  };

  useEffect(() => {
    if (
      valNome.length < 1 ||
      valDescricao.length < 1 ||
      valPatrimonio.length < 1 ||
      valNumSerie.length < 1 ||
      valLocalizacao.length < 1 ||
      valNf.length < 1 ||
      (!valImagem && !imagemSalva)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [
    valNome,
    valDescricao,
    valPatrimonio,
    valNumSerie,
    valLocalizacao,
    valNf,
    valImagem,
    imagemSalva,
  ]);

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
          value={valNumSerie}
          onChangeText={(text) => setValNumSerie(text.toUpperCase())}
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
          value={valNf}
          onChangeText={(text) => setValNf(text.toUpperCase())}
        />
      </View>

      {!valImagem && !imagemSalva && (
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

      {(valImagem || imagemSalva) && (
        <View style={styles.ViewImage}>
          <TouchableOpacity style={styles.EditTouchable} onPress={pickImage}>
            <Feather name="edit-3" style={styles.EditIcon} />
          </TouchableOpacity>
          <Image
            source={{ uri: valImagem?.uri ?? imagemSalva }}
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
        onPress={handleUpdate}
      >
        <Text style={styles.TextEnviar}>
          {loading ? (
            <ActivityIndicator size={"large"} color={"white"} />
          ) : (
            "Atualizar"
          )}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
