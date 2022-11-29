module.exports = ({ config }) => {
    return {
        ...config,
        extra: {
            "eas": {
                "projectId": "8a52ac3e-19a2-4d7c-93ff-eef6174295d0"
            },
            FB_CLIENT_ID: process.env.FB_CLIENT_ID,
            GOOGLE_GUID_EXPO: process.env.GOOGLE_GUID_EXPO,
            GOOGLE_GUID_WEB: process.env.GOOGLE_GUID_WEB,
          },
    }
}
  