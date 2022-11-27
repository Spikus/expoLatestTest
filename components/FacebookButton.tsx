import { FC, useEffect } from "react";
import { ResponseType } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { Button } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const clientId = "1307790229972303";

const FacebookButton: FC = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId,
    responseType: ResponseType.Code,
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
      title="Login By Facebook"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default FacebookButton;
