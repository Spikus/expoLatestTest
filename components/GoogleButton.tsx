import { FC, useContext, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthContext } from "../context/auth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getCred } from "../utls";

WebBrowser.maybeCompleteAuthSession();

const GoogleButton: FC = () => {
  const { setCredentials } = useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: getCred('GOOGLE_GUID_EXPO'),
    webClientId: getCred('GOOGLE_GUID_WEB'),
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      setCredentials({
        token: response.authentication.accessToken,
        provider: "Google",
      });
    }
  }, [response]);

  return (
    <FontAwesome.Button
      name="google"
      backgroundColor="#4285F4"
      disabled={!request}
      style={{ fontFamily: "Roboto" }}
      onPress={() => {
        promptAsync();
      }}
    >
      Login with Google
    </FontAwesome.Button>
  );
};

export default GoogleButton;
