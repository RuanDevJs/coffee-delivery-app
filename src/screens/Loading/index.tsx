import Logo from "@assets/logo/Logo.svg";
import * as Styled from "./styles";

export default function Loading() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Logo />
        <Styled.Title>Carregando suas informações...</Styled.Title>
      </Styled.Content>
    </Styled.Container>
  );
}
