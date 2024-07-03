import { useState } from "react";
import { useTheme } from "styled-components/native";

import { MagnifyingGlass, MapPin, ShoppingCart } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import * as Styled from "./styles";
import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";

export default function Heading() {
  const { products } = useShoppingCart();
  const [isFocus, setIsFocus] = useState(false);
  const theme = useTheme();

  const navigate = useNavigation();

  return (
    <Styled.Background>
      <Styled.Container>
        <Styled.Heading>
          <Styled.Left>
            <MapPin color={theme.colors.purple} size={32} weight="fill" />
            <Styled.Text>Belo Horizonte, Minas Gerais</Styled.Text>
          </Styled.Left>
          <Styled.Right onPress={() => navigate.navigate("ShoppingCart")}>
            <ShoppingCart color={theme.colors.yellow} size={32} weight="fill" />
            {products && products.length ? (
              <Styled.ShoppingCartLength>
                <Styled.Length>{products.length}</Styled.Length>
              </Styled.ShoppingCartLength>
            ) : null}
          </Styled.Right>
        </Styled.Heading>
        <Styled.Form>
          <Styled.Title>
            Encontre o café perfeito para qualquer hora do dia
          </Styled.Title>
          <Styled.Label>
            <MagnifyingGlass
              color={isFocus ? theme.colors.yellow : theme.colors["gray-400"]}
              size={32}
              weight="regular"
            />
            <Styled.Input
              placeholder="Pesquisar"
              placeholderTextColor={theme.colors["gray-300"]}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </Styled.Label>
        </Styled.Form>
      </Styled.Container>
    </Styled.Background>
  );
}
