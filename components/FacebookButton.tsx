import { FC, useContext, useEffect } from "react";
import { ResponseType } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AuthContext } from "../context/auth";
import { getCred } from "../utls";

WebBrowser.maybeCompleteAuthSession();

const FacebookButton: FC = () => {
  const { setCredentials } = useContext(AuthContext);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: getCred('FB_CLIENT_ID'),
    responseType: ResponseType.Token,
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
    
      setCredentials({
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
      style={{ fontFamily: "Roboto" }}
      onPress={() => {
        promptAsync();
      }}
    >
      Login with Facebook
    </FontAwesome.Button>
  );
};

export default FacebookButton;
