import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import Navigation from "./navigation";
import React from "react";
import { AuthProvider } from "./context/auth";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
