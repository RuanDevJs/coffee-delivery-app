import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Header from "./components/Header";
import Coffee from "./components/Coffee";
import Footer from "./components/Footer";

import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";

import * as Styled from "./styles";
import { FlatList } from "react-native";
import { ShoppingCartSimple } from "phosphor-react-native";
import { Device } from "@utils/device";

export default function ShoppingCart() {
  const navigation = useNavigation();
  const theme = useTheme();

  const { products } = useShoppingCart();

  return (
    <Styled.Container>
      <Header />
      <Styled.Products>
        <FlatList
          data={products}
          keyExtractor={(item, index) => `$index-${index}`}
          renderItem={({ item }) => {
            if (item.data === undefined) return null;

            return (
              <Coffee data={item.data} shoppingCardId={item.shoppingCardId} />
            );
          }}
          ListEmptyComponent={() => (
            <Styled.ListEmpty>
              <ShoppingCartSimple
                size={Device.width * 0.32}
                color={theme.colors["gray-600"]}
              />
              <Styled.Title>Adicione um café no seu carrinho</Styled.Title>
            </Styled.ListEmpty>
          )}
        />
      </Styled.Products>
      <Footer />
    </Styled.Container>
  );
}
