import Header from "./components/Header";
import Footer from "./components/Footer";

import CoffeeIMG from "@assets/coffee/Coffee.png";
import * as Styled from "./styles";

export interface IProduct {
  _id: string;
  data: {
    productId: string;
    quantity: number;
    size: "114ml" | "140ml" | "227ml";
  };
}

export function Product() {
  return (
    <Styled.Container>
      <Header />
      <Styled.Image
        source={CoffeeIMG}
        resizeMode="cover"
        resizeMethod="scale"
      />
      <Footer />
    </Styled.Container>
  );
}
