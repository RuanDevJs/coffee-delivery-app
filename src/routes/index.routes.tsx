import { useUser } from "@context/User/UserContext";
import AuthRoutes from "./Auth/index.routes";

import PublicRoutes from "./Public/index.routes";
import Loading from "@screens/Loading";

import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  const { authenticatedUser, loadingUser, authWithEmailAndPassword } =
    useUser();
  const isAuthUser = authenticatedUser !== null && authenticatedUser.uid;

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {isAuthUser ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
