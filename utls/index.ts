import envs from "../envs";

export const getCred = (name: keyof typeof envs) =>
  process.env.NODE_ENV === "development" ? envs[name] : process.env[name];

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
