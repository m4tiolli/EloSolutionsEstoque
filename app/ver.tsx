import { AZUL, VERMELHO } from "@/constants/Colors";
import { styles } from "@/styles/ver.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function VerProduto() {
  var { id, nome, descricao, patrimonio, numSerie, nf, localizacao } =
    useGlobalSearchParams();
  const [imagem, setImagem] = useState<string>();
  useEffect(() => {
    const getImagem = async () => {
      const res = await AsyncStorage.getItem("imagem");
      setImagem(res as string);
    };
    getImagem();
  }, []);

  useEffect(() => {
    const getDadosNovos = async () => {
      const res = await AsyncStorage.getItem("dadosNovos");
      if (res) {
        const r = JSON.parse(res as string);
        nome = r.nome;
        descricao = r.descricao;
        setImagem(r.imagem);
        patrimonio = r.patrimonio
        numSerie = r.numSerie
        nf = r.notafiscal
        localizacao = r.localizacao
      }
    };
    getDadosNovos()
  });

  return (
    <View style={styles.MainContainer}>
      <Image
        source={{ uri: "data:image/jpeg;base64," + imagem }} // Assumindo que a imagem está em base64
        style={styles.Imagem}
      />

      <Text style={styles.Nome}>{nome}</Text>

      <Text style={styles.Descricao}>{descricao}</Text>

      <View style={styles.Separador}>
        <Text style={styles.Titulo}>Patrimônio: </Text>
        <Text style={styles.Valor}>{patrimonio}</Text>
      </View>

      <View style={styles.Separador}>
        <Text style={styles.Titulo}>Número de série: </Text>
        <Text style={styles.Valor}>{numSerie}</Text>
      </View>

      <View style={styles.Separador}>
        <Text style={styles.Titulo}>Nota fiscal: </Text>
        <Text style={styles.Valor}>{nf}</Text>
      </View>

      <View style={styles.Separador}>
        <Text style={styles.Titulo}>Localização: </Text>
        <Text style={styles.Valor}>{localizacao}</Text>
      </View>

      <View style={styles.ViewButtons}>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() =>
            router.navigate(
              `/atualizar?id=${id}&nome=${nome}&descricao=${descricao}&patrimonio=${patrimonio}&numSerie=${numSerie}&nf=${nf}&localizacao=${localizacao}`
            )
          }
        >
          <Text style={[styles.Text, { color: AZUL }]}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() => router.navigate(`/remover?id=${id}&nome=${nome}`)}
        >
          <Text style={[styles.Text, { color: VERMELHO }]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
