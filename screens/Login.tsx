import React, { FC } from "react";
import { Text } from "react-native";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";

const Login: FC = () => {
  return (
    <>
      <Text> Login </Text>
      <GoogleButton />
      <FacebookButton />
    </>
  );
};

export default Login;
