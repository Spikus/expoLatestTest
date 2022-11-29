import { Dispatch, SetStateAction } from "react";

type Provider = "Google" | "Facebook";

export type AuthCredentials = {
  provider?: Provider;
  token?: string;
};

export type EngineContextType = {
  clearContextAnsStore: () => void;
  setContextAnsStore: (data: AuthCredentials) => void;
  isAuthorized: boolean;
  userEmail: string;
  isLoaded: boolean;
};
