import { createStackNavigator } from "@react-navigation/stack";

import Catalog from "@screens/Catalog";
import { Product } from "@screens/Product";
import ShoppingCart from "@screens/ShoppingCart";
import Success from "@screens/Success";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, freezeOnBlur: false }}
    >
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ presentation: "modal" }}
      />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
