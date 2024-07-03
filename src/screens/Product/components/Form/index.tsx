import { useState } from "react";

import { Minus, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import { useNavigation, useRoute } from "@react-navigation/native";

import * as Crypto from "expo-crypto";
import * as Styled from "./styles";
import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";

interface IParams {
  product: {
    _id: string;
  };
}

type ISize = "114ml" | "140ml" | "227ml";
interface IProps {
  selectedSize: ISize | null;
}

export default function Form({ selectedSize }: IProps) {
  const navigate = useNavigation();
  const params = useRoute().params as IParams;

  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);

  const validation = quantity >= 1 && selectedSize !== null;
  const { setNewProductInShoppingCart } = useShoppingCart();

  function handlePress() {
    if (validation) {
      const newProduct = {
        _id: Crypto.randomUUID(),
        data: {
          productId: params.product._id,
          quantity: quantity,
          size: selectedSize,
        },
      };
      setNewProductInShoppingCart(newProduct);
    }

    navigate.navigate("ShoppingCart");
  }

  function handleAddQuantity() {
    setQuantity((oldValue) => oldValue + 1);
  }

  function handleRemoveQuantity() {
    setQuantity((oldValue) => {
      if (oldValue <= 1) return 1;
      return oldValue - 1;
    });
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Quantity>
          <Styled.TouchableOpacity onPress={handleRemoveQuantity}>
            <Minus size={18} color={theme.colors.purple} weight="bold" />
          </Styled.TouchableOpacity>
          <Styled.Center>
            <Styled.QuantityText>{quantity}</Styled.QuantityText>
          </Styled.Center>
          <Styled.TouchableOpacity onPress={handleAddQuantity}>
            <Plus size={18} color={theme.colors.purple} weight="bold" />
          </Styled.TouchableOpacity>
        </Styled.Quantity>
        {/* @ts-ignore */}
        <Styled.Button
          onPress={handlePress}
          disabled={validation ? false : true}
        >
          <Styled.ButtonText>Adicionar</Styled.ButtonText>
        </Styled.Button>
      </Styled.Content>
    </Styled.Container>
  );
}
