import Logo from "@assets/logo/Logo.svg";
import * as Styled from "./styles";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Styled.Container>
      <Styled.Content>
        <Logo />
        <Styled.Title>Bem Vindo ao {"\n"} Coffee Delivery</Styled.Title>
        <Styled.Description>
          Desfrute de uma experiência única com a rapidez e a qualidade que você
          merece, sem sair de casa.
        </Styled.Description>
        <Styled.Button
          activeOpacity={0.72}
          onPress={() => navigation.navigate("Login")}
        >
          <Styled.ButtonText>Entrar</Styled.ButtonText>
        </Styled.Button>
      </Styled.Content>
      <Styled.Form activeOpacity={0.72}>
        <Styled.ButtonText
          style={{ color: theme.colors.yellow, marginBottom: "auto" }}
          onPress={() => navigation.navigate("Register")}
        >
          Criar minha conta
        </Styled.ButtonText>
      </Styled.Form>
    </Styled.Container>
  );
}
