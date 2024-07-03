import { useState } from "react";

import Form from "../Form";
import * as Styled from "./styles";

type Select = "114ml" | "140ml" | "227ml";

export default function Footer() {
  const [selected, setSelected] = useState<Select | null>(null);

  function handleSetSelected(value: Select) {
    setSelected(value);
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Label>Selecione o tamanho:</Styled.Label>
        <Styled.Wrap>
          <Styled.Select
            activeOpacity={0.72}
            onPress={() => handleSetSelected("114ml")}
            active={selected === "114ml"}
          >
            <Styled.SelectText active={selected === "114ml"}>
              114ml
            </Styled.SelectText>
          </Styled.Select>
          <Styled.Select
            activeOpacity={0.72}
            onPress={() => handleSetSelected("140ml")}
            active={selected === "140ml"}
          >
            <Styled.SelectText active={selected === "140ml"}>
              140ml
            </Styled.SelectText>
          </Styled.Select>
          <Styled.Select
            activeOpacity={0.72}
            onPress={() => handleSetSelected("227ml")}
            active={selected === "227ml"}
          >
            <Styled.SelectText active={selected === "227ml"}>
              227ml
            </Styled.SelectText>
          </Styled.Select>
        </Styled.Wrap>
      </Styled.Content>
      <Form selectedSize={selected} />
    </Styled.Container>
  );
}
