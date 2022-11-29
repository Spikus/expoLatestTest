export * from "./auth";
export * from "./store";
import envs from "../envs";

export const getCred = (name: keyof typeof envs) =>
  process.env.NODE_ENV === "development" ? envs[name] : process.env[name];
