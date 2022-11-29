import { FC, useContext, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { AuthContext } from "../context/auth";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { getCred } from "../utils";

WebBrowser.maybeCompleteAuthSession();

const GoogleButton: FC = () => {
  const { setContextAnsStore } = useContext(AuthContext);
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: getCred('GOOGLE_GUID_EXPO'),
    webClientId: getCred('GOOGLE_GUID_WEB'),
    androidClientId: getCred('GOOGLE_GUID_ANDROID')
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.accessToken) {
      setContextAnsStore({
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
      onPress={() => {
        promptAsync();
      }}
    >
      Login with Google
    </FontAwesome.Button>
  );
};

export default GoogleButton;
