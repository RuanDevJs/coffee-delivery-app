import { TouchableOpacityProps } from "react-native";

import { Minus, Plus, Trash } from "phosphor-react-native";
import { Swipeable } from "react-native-gesture-handler";

import { useTheme } from "styled-components/native";

import Remove from "../Remove";
import { SvgProps } from "react-native-svg";

import * as Styled from "./styles";
import { useState } from "react";
import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";

interface IProps {
  shoppingCardId: string;
  data: {
    productId: string;
    name: string;
    description: string;
    category: string[];
    Image: React.FC<SvgProps>;
    price: number;
    quantity: number;
    size: "114ml" | "140ml" | "227ml";
  };
}

type UpdateQuantityType = "add" | "remove";

export default function Coffee({ data, shoppingCardId }: IProps) {
  const theme = useTheme();
  const { shoppingCart, updateShoppingCart, removeFromShoppingCart } =
    useShoppingCart();

  function addQuantity() {
    updateShoppingCart({
      _id: shoppingCardId,
      data: {
        productId: data.productId,
        quantity: data.quantity + 1,
        size: data.size,
      },
    });
  }

  function removeQuantity() {
    if (data.quantity > 1) {
      updateShoppingCart({
        _id: shoppingCardId,
        data: {
          productId: data.productId,
          quantity: data.quantity - 1,
          size: data.size,
        },
      });
    } else {
      updateShoppingCart({
        _id: shoppingCardId,
        data: {
          productId: data.productId,
          quantity: 1,
          size: data.size,
        },
      });
    }
  }

  function updateQuantity(type: UpdateQuantityType) {
    type === "add" ? addQuantity() : removeQuantity();
  }

  function handleRenderLeftActions() {
    removeFromShoppingCart(shoppingCardId);
  }

  return (
    <Swipeable
      renderLeftActions={() =>
        Remove({ onPress: () => handleRenderLeftActions() })
      }
    >
      <Styled.Container>
        <Styled.Content>
          {<data.Image />}
          <Styled.Wrap>
            <Styled.Heading>
              <Styled.Title>{data.name}</Styled.Title>
              <Styled.Price>
                R$ {(data.price * data.quantity).toFixed(2).replace(".", ",")}
              </Styled.Price>
            </Styled.Heading>
            <Styled.Description>{data.description}</Styled.Description>
            <Styled.Footer>
              <Styled.Quantity>
                <Styled.TouchableOpacity
                  onPress={() => updateQuantity("remove")}
                >
                  <Minus color={theme.colors.purple} weight="bold" />
                </Styled.TouchableOpacity>
                <Styled.TouchableOpacity>
                  <Styled.QuantityTotal>{data.quantity}</Styled.QuantityTotal>
                </Styled.TouchableOpacity>
                <Styled.TouchableOpacity onPress={() => updateQuantity("add")}>
                  <Plus color={theme.colors.purple} weight="bold" />
                </Styled.TouchableOpacity>
              </Styled.Quantity>
              <Styled.Button
                onPress={() => removeFromShoppingCart(shoppingCardId)}
              >
                <Trash color={theme.colors.purple} weight="regular" />
              </Styled.Button>
            </Styled.Footer>
          </Styled.Wrap>
        </Styled.Content>
      </Styled.Container>
    </Swipeable>
  );
}
