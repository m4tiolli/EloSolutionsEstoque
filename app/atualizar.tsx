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
  const [valImagem, setValImagem] = useState(imagem as string);
  const [valNumSerie, setValNumSerie] = useState(numSerie as string);
  const [valNf, setValNf] = useState(nf as string);
  const [valLocalizacao, setValLocalizacao] = useState(localizacao as string);

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

    console.log(result);

    if (!result.canceled) {
      setValImagem(result.assets[0].uri);
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

    console.log(result);

    if (!result.canceled) {
      setValImagem(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const getImagem = async () => {
      const res = await AsyncStorage.getItem("imagem")
      setValImagem(res as string)
    }
    getImagem()
  }, [])

  const handleUpdate = async () => {
    const fileType = (valImagem as string).split(".").pop();

    const data = {
      nome: valNome,
      descricao: valDescricao,
      patrimonio: valPatrimonio,
      numSerie: valNumSerie,
      notafiscal: valNf,
      localizacao: valLocalizacao,
      imagem: fileType as string,
    };

    try {
      await axios.put(
        `${process.env.EXPO_PUBLIC_URL_BASE}/produtos/${id}`,
        data
      );
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
      !valImagem
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });

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

      {!valImagem && (
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

      {valImagem && (
        <View style={styles.ViewImage}>
          <TouchableOpacity style={styles.EditTouchable} onPress={pickImage}>
            <Feather name="edit-3" style={styles.EditIcon} />
          </TouchableOpacity>
          <Image
            source={{ uri: valImagem as string }}
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
        <Text style={styles.TextEnviar}>Atualizar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
