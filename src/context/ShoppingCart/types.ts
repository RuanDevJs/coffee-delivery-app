import { SvgProps } from "react-native-svg";

export interface IShoppingCart {
  _id: string;
  data: {
    productId: string;
    quantity: number;
    size: "114ml" | "140ml" | "227ml";
  };
}

export interface IProducts {
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

export interface IShoppingCartContext {
  shoppingCart: IShoppingCart[];
  loadingShoppingCart: boolean;
  products: IProducts[];
  setNewProductInShoppingCart: (payload: IShoppingCart) => void;
  updateShoppingCart: (payload: IShoppingCart) => void;
  removeFromShoppingCart: (productId: string) => void;
  registerOrderInDB: () => Promise<void>;
}
