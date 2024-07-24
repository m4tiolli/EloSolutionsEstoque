import { AZUL, VERMELHO } from "@/constants/Colors";
import { styles } from "@/styles/ver.styles";
import { Link, router, useGlobalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function VerProduto() {
  const { id, nome, descricao, patrimonio, imagem, numSerie, nf, localizacao } =
    useGlobalSearchParams();

  const query = `?id=${id}&nome=${nome}&descricao=${descricao}&patrimonio=${patrimonio}&imagem=${imagem}&numSerie=${numSerie}&nf=${nf}&localizacao=${localizacao}`;

  return (
    <View style={styles.MainContainer}>
      <Image src={imagem as string} style={styles.Imagem} />

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
          onPress={() => router.navigate("/atualizar" + query)}
        >
          <Text style={[styles.Text, { color: AZUL }]}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() => router.navigate("/remover" + query)}
        >
          <Text style={[styles.Text, { color: VERMELHO }]}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
