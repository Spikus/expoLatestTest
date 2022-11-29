import * as SecureStore from "expo-secure-store";

export const saveToStore = async (key: string, value: string) =>
  await SecureStore.setItemAsync(key, value);

export const getValueFromStore = async (key: string) =>
  await SecureStore.getItemAsync(key);

export const clearValueFromStore = async (key: string) =>
  await SecureStore.deleteItemAsync(key);
