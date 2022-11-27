import { FC, useEffect } from "react";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const expoClientId =
  "362044681365-5k61olbd7ige5vjhkhhbkue80n0vjs36.apps.googleusercontent.com";
const webClientId =
  "362044681365-tdqn9a2kbg7lqoaehvndm8ercfjf9olo.apps.googleusercontent.com";

const GoogleButton: FC = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId,
    webClientId,
  });

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);
  return (
    <Button
      disabled={!request}
      title="Login By Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default GoogleButton;
