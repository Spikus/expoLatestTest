import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { ColorSchemeName } from "react-native";
import AuthRouter from "./AuthRouter";

const Navigation: FC<{ colorScheme: ColorSchemeName }> = ({ colorScheme }) => (
  <NavigationContainer
    theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
  >
    <AuthRouter />
  </NavigationContainer>
);

export default Navigation;
