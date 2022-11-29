import * as SplashScreen from "expo-splash-screen";
import React, {
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  FC,
  useEffect,
  useCallback,
} from "react";
import { AuthCredentials, EngineContextType } from "../interface";
import {
  getValueFromStore,
  getUserData,
  clearValueFromStore,
  saveToStore,
} from "../utils";

const STORE_KEY = "access_credentials";
const initContext = {
  setContextAnsStore: ({}) => null,
  clearContextAnsStore: () => null,
  isAuthorized: false,
  userEmail: "",
  isLoaded: false,
};

export const AuthContext = createContext<EngineContextType>(initContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [credentials, setCredentials] = useState<AuthCredentials>({});
  const [userEmail, setEmail] = useState<string>("");
  const [isLoaded, setLoaded] = useState<boolean>(false);

  const isAuthorized = useMemo(
    () => Boolean(credentials.provider),
    [credentials]
  );

  const clearContextAnsStore = () => {
    setCredentials({});
    clearValueFromStore(STORE_KEY);
  };

  const setContextAnsStore = (credentials: AuthCredentials) => {
    setCredentials(credentials);
    saveToStore(STORE_KEY, JSON.stringify(credentials));
  };

  const init = useCallback(async () => {
    try {
      const accessCredentials = await getValueFromStore(STORE_KEY);
      if (accessCredentials) {
        setCredentials(JSON.parse(accessCredentials));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoaded(true);
      SplashScreen.hideAsync();
    }
  }, []);

  useEffect(() => {
    if (credentials.token) {
      getUserData(credentials, setEmail, clearContextAnsStore);
    }
  }, [credentials.token]);

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        clearContextAnsStore,
        setContextAnsStore,
        isAuthorized,
        userEmail,
        isLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
