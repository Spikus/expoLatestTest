import { AuthCredentials } from "../interface";

export const fetchGoogleUserInfo = async (token: string) => {
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};

export const fetchFaceBookUserInfo = async (token: string) => {
  const response = await fetch(
    "https://graph.facebook.com/v15.0/me?fields=id%2Cname%2Cemail&access_token=" +
      token,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};

export const getUserData = async (
  credentials: AuthCredentials,
  onSuccess: (data: string) => void,
  onError: () => void
): Promise<void> => {
  const { token, provider } = credentials;
  if (!token || !provider) return;

  try {
    const data =
      provider === "Google"
        ? await fetchGoogleUserInfo(token)
        : await fetchFaceBookUserInfo(token);
    if (data.error) {
      onError();
    } else {
      onSuccess(data.email);
    }
  } catch (e) {
    onError();
  }
};
