import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/index";

import Loading from "@screens/Loading";

import Routes from "@routes/index.routes";
import { UserProvier } from "@context/User/UserContext";

import { ShoppingCartProvider } from "@context/ShoppingCart/ShoppintCartContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <UserProvier>
        <ShoppingCartProvider>
          <Routes />
          <StatusBar style="dark" translucent />
        </ShoppingCartProvider>
      </UserProvier>
    </ThemeProvider>
  );
}
