import React, { FC, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AuthContext } from "../context/auth";
import { useTheme } from "@react-navigation/native";
import LogoutButton from "../components/LogoutButton";

const Logged: FC = () => {
  const { userEmail } = useContext(AuthContext);
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <Text style={{ color: colors.text }}>{userEmail}</Text>
      <LogoutButton />
    </View>
  );
};

export default Logged;

const style = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
