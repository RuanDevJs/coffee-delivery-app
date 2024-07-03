import Tag from "../Tag";

import { CoffeeProps } from "@services/api";
import { useRoute } from "@react-navigation/native";

import * as Styled from "./styles";
import { ArrowLeft, ShoppingCart } from "phosphor-react-native";
import { useTheme } from "styled-components/native";
import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";

interface IParams {
  product: CoffeeProps;
}

export default function Header() {
  const theme = useTheme();
  const { products } = useShoppingCart();
  const { product } = useRoute().params as IParams;

  return (
    <Styled.Container>
      <Styled.Navigator>
        <ArrowLeft
          size={32}
          color={theme.colors["gray-900"]}
          weight="regular"
        />
        <Styled.ShoppingCart>
          <ShoppingCart
            size={32}
            color={theme.colors["purple"]}
            weight="fill"
          />
          <Styled.Length activeOpacity={0.72}>
            <Styled.LengthText>{products.length}</Styled.LengthText>
          </Styled.Length>
        </Styled.ShoppingCart>
      </Styled.Navigator>
      <Styled.Content>
        <Styled.Catalog>
          {product.category?.map((tag) => {
            return <Tag text={tag} key={tag} />;
          })}
        </Styled.Catalog>
        <Styled.Heading>
          <Styled.Title>{product.name}</Styled.Title>
          <Styled.Price>R$ {product.price?.toFixed(2)}</Styled.Price>
        </Styled.Heading>
        <Styled.Wrap>
          <Styled.Description>{product.description}</Styled.Description>
        </Styled.Wrap>
      </Styled.Content>
    </Styled.Container>
  );
}
