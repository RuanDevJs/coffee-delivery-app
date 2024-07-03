import { createContext, useContext, useEffect, useState } from "react";
import { IProducts, IShoppingCart, IShoppingCartContext } from "./types";

import { Coffes } from "@services/api";

import { firebaseDatabase } from "@services/firebase";
import * as database from "firebase/database";

import * as Crypto from "expo-crypto";

const ShoppingCartContext = createContext({} as IShoppingCartContext);

export function ShoppingCartProvider({ children }: React.PropsWithChildren) {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([]);
  const [loadingShoppingCart, setLoadingShoppingCart] = useState(true);

  const [products, setProducts] = useState<IProducts[]>([]);

  function setNewProductInShoppingCart(payload: IShoppingCart) {
    setShoppingCart((oldValue) => [...oldValue, { ...payload }]);
  }

  function updateShoppingCart(payload: IShoppingCart) {
    const updatedDataInShoppingCart: IShoppingCart[] = shoppingCart.map(
      (data) => {
        if (data._id === payload._id) {
          return {
            _id: payload._id,
            data: { ...payload.data },
          };
        }
        return data;
      }
    );

    setShoppingCart(updatedDataInShoppingCart);
  }

  function removeFromShoppingCart(productId: string) {
    const updated: IShoppingCart[] = shoppingCart.filter(
      (item) => item._id != productId
    );

    setShoppingCart(updated);
  }

  async function registerOrderInDB() {
    try {
      const orderId = Crypto.randomUUID();
      const databaseRef = database.ref(firebaseDatabase, `/orders/${orderId}`);

      await database.set(databaseRef, {
        ...shoppingCart,
      });

      setShoppingCart([]);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  useEffect(() => {
    function getCoffeesById() {
      const parsedCoffess: IProducts[] = shoppingCart.map((product) => {
        const coffee = Coffes.find(
          (coffee) => coffee._id === product.data.productId
        )!;

        return {
          shoppingCardId: product._id,
          data: {
            productId: coffee._id!,
            category: coffee.category!,
            description: coffee.description!,
            Image: coffee.Image!,
            name: coffee.name!,
            price: coffee.price!,
            quantity: product.data.quantity!,
            size: product.data.size,
          },
        };
      });

      setProducts(parsedCoffess);
    }

    if (shoppingCart.length >= 1 && shoppingCart) {
      getCoffeesById();
    } else {
      setProducts([]);
    }
  }, [shoppingCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        products,
        loadingShoppingCart,
        setNewProductInShoppingCart,
        updateShoppingCart,
        removeFromShoppingCart,
        registerOrderInDB,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const {
    shoppingCart,
    products,
    loadingShoppingCart,
    setNewProductInShoppingCart,
    updateShoppingCart,
    removeFromShoppingCart,
    registerOrderInDB,
  } = useContext(ShoppingCartContext);
  return {
    shoppingCart,
    products,
    loadingShoppingCart,
    setNewProductInShoppingCart,
    updateShoppingCart,
    removeFromShoppingCart,
    registerOrderInDB,
  };
}
