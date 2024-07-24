import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import {
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_600SemiBold,
} from "@expo-google-fonts/manrope";
import { AZUL } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: AZUL },
      }}
    >
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen name="cadastro" options={{ title: "Cadastrar produto" }} />
      <Stack.Screen name="visualizar" options={{ title: "Pesquisar produto" }} />
      <Stack.Screen name="atualizar" options={{ title: "Atualizar produto" }} />
      <Stack.Screen name="remover" options={{ title: "Remover produto", presentation: "modal" }} />
      <Stack.Screen name="ver" options={{ title: "Visualizar produto" }} />
    </Stack>
  );
}
