import { ArrowLeft } from "phosphor-react-native";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigate = useNavigation();
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Button onPress={() => navigate.goBack()}>
          <ArrowLeft size={25} weight="bold" color="#403937" />
        </Styled.Button>
        <Styled.Title>Carrinho</Styled.Title>
      </Styled.Content>
    </Styled.Container>
  );
}
