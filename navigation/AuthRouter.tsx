import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC, useContext } from "react";
import { AuthContext } from "../context/auth";
import Logged from "../screens/Logged";
import Login from "../screens/Login";

type RootStackParamList = {
  Login: undefined;
  Logged: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthRouter: FC = () => {
  const { isAuthorized, isLoaded } = useContext(AuthContext);
  if (!isLoaded) return null;

  return (
    <Stack.Navigator>
      {isAuthorized ? (
        <Stack.Screen name="Logged" component={Logged} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AuthRouter;
