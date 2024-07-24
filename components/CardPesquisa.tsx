import { ItemProps } from "@/app/visualizar";
import { styles } from "@/styles/CardPesquisa.styles";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CardPesquisaProps {
  item: ItemProps;
}

const CardPesquisa = ({ item }: CardPesquisaProps) => {
  const query = `/ver?id=${item.ID}&nome=${item.nome}&descricao=${item.descricao}&patrimonio=${item.patrimonio}&imagem=${item.imagem}&numSerie=${item.numSerie}&nf=${item.nf}&localizacao=${item.localizacao}`;

  return (
    <TouchableOpacity
      style={styles.MainContainer}
      onPress={() => router.navigate(query)}
    >
      <Image src={item.imagem} style={styles.Imagem} />
      <View style={styles.ViewDados}>
        <Text style={styles.Titulo} numberOfLines={1}>
          {item.nome}
        </Text>
        <Text style={styles.Serie} numberOfLines={1}>
          {item.numSerie}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardPesquisa;
