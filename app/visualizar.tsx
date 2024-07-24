import CardPesquisa from "@/components/CardPesquisa";
import { styles } from "@/styles/visualizar.styles";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState, useTransition } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

export interface ItemProps {
  id: string;
  nome: string;
  localizacao: string;
  imagem: string;
  numSerie: string;
  notafiscal: string;
  descricao: string;
  patrimonio: string;
}

export default function Visualizar() {
  const [isPending, startTransition] = useTransition();
  const [pesquisa, setPesquisa] = useState("");
  const [items, setItems] = useState<ItemProps[]>([]);
  const [hasPesquisa, setHasPesquisa] = useState(false);
  const [pesquisando, setPesquisando] = useState(false);

  const handlePesquisa = () => {
    if (pesquisando) return;
    setPesquisando(true);
    startTransition(() => {
      axios
        .get("https://www.jsondataai.com/api/WUXAzSE")
        .then((response) => {
          setItems(response.data);
          setHasPesquisa(true);
        })
        .catch(() => {
          setItems([]);
        })
        .finally(() => setPesquisando(false));
    });
  };

  useEffect(() => {
    if (pesquisa.length < 1) {
      setHasPesquisa(false);
    }
  }, [pesquisa]);

  console.log(items);

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ViewSearch}>
        <Text style={styles.TextSearch}>Pesquisar por um produto</Text>
        <TextInput
          style={styles.InputSearch}
          placeholder="Digite aqui..."
          placeholderTextColor={"white"}
          cursorColor={"white"}
          value={pesquisa}
          onChangeText={(search) => {
            if (!pesquisando) setPesquisa(search);
          }}
        />
        <TouchableOpacity
          style={styles.TouchableSearch}
          onPress={handlePesquisa}
        >
          <Feather style={styles.IconSearch} name="search" />
        </TouchableOpacity>
      </View>

      {hasPesquisa &&
        (isPending ? (
          <ActivityIndicator />
        ) : items.length > 0 ? (
          <>
            <Text style={styles.Text}>
              Mostrando resultados para "{pesquisa ?? ""}"
            </Text>
            <FlatList
              style={{ width: "80%", marginTop: 30 }}
              data={items}
              renderItem={({ item }) => <CardPesquisa item={item} />}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={Separator}
            />
          </>
        ) : (
          <Empty />
        ))}
    </View>
  );
}

const Separator = () => {
  return <View style={styles.Separator}></View>;
};

const Empty = () => {
  return (
    <Text
      style={{ color: "white", fontSize: 20, fontFamily: "Manrope_400Regular" }}
    >
      Não há resultados.
    </Text>
  );
};
