import { ItemProps } from "@/app/visualizar";
import { styles } from "@/styles/CardPesquisa.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CardPesquisaProps {
  item: ItemProps;
}

const CardPesquisa = ({ item }: CardPesquisaProps) => {
  const defineItems = async () => {
    await AsyncStorage.setItem("imagem", item.imagem);
    router.navigate(query);
  };

  // Use apenas identificadores e dados essenciais na URL
  const query = `/ver?id=${item._id}&nome=${item.nome}&descricao=${item.descricao}&patrimonio=${item.patrimonio}&numSerie=${item.numSerie}&nf=${item.notafiscal}&localizacao=${item.localizacao}`;

  return (
    <TouchableOpacity style={styles.MainContainer} onPress={defineItems}>
      <Image source={{ uri: 'data:image/jpeg;base64,' + item.imagem }} style={styles.Imagem} />
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
