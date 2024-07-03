import Ilustration from "@assets/ilustration/Illustration.svg";
import Button from "@components/Button";

import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Success() {
  const navigate = useNavigation();

  return (
    <Styled.Container>
      <Styled.Ilustration>
        <Ilustration />
      </Styled.Ilustration>
      <Styled.Wrap>
        <Styled.Title>Uhu! Pedido confirmado</Styled.Title>
        <Styled.Description>
          Agora é só aguardar que logo o café {"\n"}chegará até você!
        </Styled.Description>
        <Styled.Button
          activeOpacity={0.72}
          onPress={() => navigate.navigate("Catalog")}
        >
          <Styled.ButtonTitle>ir pra a home</Styled.ButtonTitle>
        </Styled.Button>
      </Styled.Wrap>
    </Styled.Container>
  );
}
