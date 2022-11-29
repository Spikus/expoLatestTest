
# Explo last SDK test

Simple application in Expo , managed workflow , application is cross-platform - work both in mobile and web, where user can log in with Google and Facebook. 
There is 2 buttons , where after user authenticates, we display his email.

Project was created for me to test lates EXPO SDK with EAS functionaluty.





## Requirements

To develop applications with Expo, you need two tools. A command-line tool called [Expo CLI](https://docs.expo.dev/get-started/installation/#1-expo-cli) to serve your project, and a mobile client app called [Expo Go](https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and) to open the project on iOS and Android platforms. Additionally, you can use any web browser to run the project on the web.

- Node.js LTS release - Only Node.js LTS releases (even-numbered) are recommended. Node version `16.0.0` supports
- For macOS or Linux users: [Watchman](https://facebook.github.io/watchman/)




## Run Locally

Clone the project

```bash
  git clone https://github.com/Spikus/expoLatestTest
```

Go to the project directory

```bash
  cd expoLatestTest
```

Install dependencies

```bash
  npx expo install
```

Start the server

```bash
  npm run start
```
**Skip if you already logged in yor Expo account**

For setup Environment Variables and deploy you require EXPO [account](https://expo.dev/signup)

To login in your account 

```bash
 npx expo login
```

## Environment Variables

For handling auth used [expo-auth-session](https://docs.expo.dev/versions/latest/sdk/auth-session/), 
To run this project locally, you will need to add the following environment variables to your `./envs.ts`

`FB_CLIENT_ID`
`GOOGLE_GUID_EXPO`
`GOOGLE_GUID_WEB`
`GOOGLE_GUID_ANDROID`


## Deployment

Deploy native app provided by [EAS](https://docs.expo.dev/eas-update/introduction/). 
Before deploy please be sure all environment variables was setup as [secret](https://docs.expo.dev/build-reference/variables/)

```bash
  eas secret:list
```

To build your first build:
```bash
  eas build --platform android
```
## Web Version

To run App in web , please note that for Web tokens keep in session.store

```bash
  npm run web
```


## Acknowledgements

 - [React](https://reactjs.org/)
 - [Typescript](https://www.typescriptlang.org/)
 - [React Native](https://reactnative.dev/)
 - [Expo](https://docs.expo.dev/)
 - [Authentication](https://docs.expo.dev/)
 - [React Navigation](https://reactnavigation.org/)
