import { useState } from "react";

import Logo from "@assets/logo/Logo.svg";
import { useTheme } from "styled-components/native";

import Input from "@components/Input";
import Button from "@components/Button";

import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "@context/User/UserContext";

export default function Register() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { registerUserWithEmailAndPassword } = useUser();
  const disabled = email.length >= 5 && password.length >= 5 ? false : true;

  async function handlePress() {
    try {
      await registerUserWithEmailAndPassword({ name, email, password });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      alert("Não foi possível registrar usuário");
    }
  }

  return (
    <Styled.Container>
      <Styled.Heading>
        <Logo />
      </Styled.Heading>
      <Styled.Form>
        <Input
          label="Nome completo"
          placeholder="Ruan Vitor"
          placeholderTextColor={theme.colors["gray-400"]}
          value={name}
          onChangeText={(value) => setName(value)}
        />
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
          text="Criar minha conta"
          disabled={disabled}
          onPress={handlePress}
        />
      </Styled.Form>
      <Styled.Footer>
        <Styled.Link
          activeOpacity={0.32}
          onPress={() => navigation.navigate("Login")}
        >
          <Styled.Text>Login</Styled.Text>
        </Styled.Link>
      </Styled.Footer>
    </Styled.Container>
  );
}
