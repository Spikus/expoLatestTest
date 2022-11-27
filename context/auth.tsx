import React, {
  createContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  FC,
  useEffect,
  useCallback,
} from "react";
import { fetchGoogleUserInfo, fetchFaceBookUserInfo } from "../utls";

type Provider = "Google" | "Facebook";
type AuthCredentials = {
  provider?: Provider;
  token?: string;
};

type EngineContextType = {
  setCredentials: Dispatch<SetStateAction<AuthCredentials>>;
  isLoaded: boolean;
  isAuthorized: boolean;
  userEmail?: string;
};

const initContext = {
  setCredentials: () => null,
  isLoaded: false,
  isAuthorized: false,
};

export const AuthContext = createContext<EngineContextType>(initContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [credentials, setCredentials] = useState<AuthCredentials>({});
  const [userEmail, setEmail] = useState<string | undefined>();
  const isLoaded = useMemo(() => false, []);
  const isAuthorized = useMemo(
    () => Boolean(credentials.provider),
    [credentials]
  );

  const getDataFromUser = useCallback(async () => {
    const { token, provider } = credentials;
    if (!token || !provider) return false;

    try {
      const data =
        provider === "Google"
          ? await fetchGoogleUserInfo(token)
          : await fetchFaceBookUserInfo(token);
      console.log({data})
      if (data.error) {
        setCredentials({});
      } else {
        setEmail(data.email);
      }
    } catch (e) {
      setCredentials({});
    }
  }, [credentials]);

  useEffect(() => {
    if (credentials.token) {
      getDataFromUser();
    }
  }, [credentials.token]);

  return (
    <AuthContext.Provider
      value={{
        isLoaded,
        isAuthorized,
        setCredentials,
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
