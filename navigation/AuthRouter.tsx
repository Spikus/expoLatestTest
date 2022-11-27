import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import Logged from "../screens/Logged";
import Login from "../screens/Login";

type RootStackParamList = {
  Login: undefined;
  Logged: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthRouter: FC = () => {
  const isLogged = false;
  return (
    <Stack.Navigator>
      {isLogged ? (
        <Stack.Screen name="Logged" component={Logged} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default AuthRouter;
