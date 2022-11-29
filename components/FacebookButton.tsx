import { FC, useContext, useEffect } from "react";
import { ResponseType } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AuthContext } from "../context/auth";
import { getCred } from "../utils";

WebBrowser.maybeCompleteAuthSession();

const FacebookButton: FC = () => {
  const { setContextAnsStore } = useContext(AuthContext);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: getCred("FB_CLIENT_ID"),
    responseType: ResponseType.Token,
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      setContextAnsStore({
        token: response.authentication.accessToken,
        provider: "Facebook",
      });
    }
  }, [response]);

  return (
    <FontAwesome.Button
      name="facebook"
      backgroundColor="#4285F4"
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    >
      Login with Facebook
    </FontAwesome.Button>
  );
};

export default FacebookButton;
