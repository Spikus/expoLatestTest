import { FC, useContext } from "react";
import { AuthContext } from "../context/auth";
import Ionicons from "@expo/vector-icons/Ionicons";

const LogoutButton: FC = () => {
  const { clearContextAnsStore } = useContext(AuthContext);

  return (
    <Ionicons.Button
      name="log-out"
      backgroundColor="#4285F4"
      onPress={clearContextAnsStore}
    >
      Logout
    </Ionicons.Button>
  );
};

export default LogoutButton;
