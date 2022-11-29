export * from "./auth";
export * from "./store";
import envs from "../envs";
import Constants from "expo-constants";

export const getCred = (name: keyof typeof envs) =>
  process.env.NODE_ENV === "development"
    ? envs[name]
    : Constants.expoConfig?.extra?.[name] || envs[name];
