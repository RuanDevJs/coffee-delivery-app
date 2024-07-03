import { createStackNavigator } from "@react-navigation/stack";

import Loading from "@screens/Loading";
import Login from "@screens/Login";
import Register from "@screens/Register";
import Welcome from "@screens/Welcome";

const Stack = createStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, freezeOnBlur: false }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
}
