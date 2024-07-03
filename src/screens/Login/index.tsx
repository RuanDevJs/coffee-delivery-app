import { useState } from "react";

import Logo from "@assets/logo/Logo.svg";
import { useTheme } from "styled-components/native";

import Input from "@components/Input";
import Button from "@components/Button";

import { useUser } from "@context/User/UserContext";

import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const { authWithEmailAndPassword } = useUser();
  const navigation = useNavigation();
  const theme = useTheme();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loadingData, setLoadingData] = useState(false);

  const disabled = email.length >= 5 && password.length >= 5 ? false : true;

  async function handlePress() {
    setLoadingData(true);
    try {
      await authWithEmailAndPassword({
        email,
        password,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoadingData(false);
    }
  }

  return (
    <Styled.Container>
      <Styled.Heading>
        <Logo />
      </Styled.Heading>
      <Styled.Form>
        <Input
          label="Endereço de E-mail"
          placeholder="ruanvitor@gmail.com"
          placeholderTextColor={theme.colors["gray-400"]}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          label="Senha"
          placeholder="**************"
          placeholderTextColor={theme.colors["gray-400"]}
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          text="Entrar"
          loading={loadingData}
          disabled={disabled || loadingData}
          onPress={handlePress}
        />
      </Styled.Form>
      <Styled.Footer>
        <Styled.Link
          activeOpacity={0.32}
          onPress={() => navigation.navigate("Register")}
        >
          <Styled.Text>Criar minha conta</Styled.Text>
        </Styled.Link>
      </Styled.Footer>
    </Styled.Container>
  );
}
