import { useShoppingCart } from "@context/ShoppingCart/ShoppintCartContext";
import * as Styled from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const { products, registerOrderInDB } = useShoppingCart();
  const navigate = useNavigation();

  const validate = products && products.length >= 1 ? false : true;

  const parsedQuantityAndTotal = products.map((item) => {
    return {
      quantity: item.data.quantity,
      total: item.data.price * item.data.quantity,
    };
  });

  const totalPrice = parsedQuantityAndTotal.reduce((acc, item) => {
    acc += item.total;
    return acc;
  }, 0);

  async function handleRegisterOrderInDB() {
    await registerOrderInDB();
    navigate.navigate("Success");
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>Carrinho</Styled.Title>
        <Styled.Price>
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </Styled.Price>
      </Styled.Content>
      <Styled.Button
        activeOpacity={0.72}
        disabled={validate}
        onPress={handleRegisterOrderInDB}
      >
        <Styled.ButtonText>confirmar pedido</Styled.ButtonText>
      </Styled.Button>
    </Styled.Container>
  );
}
