import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";

const Login: FC = () => {
  return (
    <View style={style.container}>
      <View style={style.body}>
        <GoogleButton />
        <FacebookButton />
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: 200,
    height: 100,
    justifyContent: "space-around",
  },
});
