const LoginSession = {
  "properties": {
    "sessionCode": {
      "type": "string",
      "examples": [
        "LA-1234-4321"
      ]
    },
    "handshake": {
      "type": "string",
      "examples": [
        "agftj386jdfjk3489dsfdf824dff"
      ]
    },
    "internalId": {
      "type": "string",
      "examples": [
        "John Doe's Bakery"
      ]
    },
    "licenseCode": {
      "type": "string",
      "examples": [
        "AL-1234-4321"
      ]
    },
    "redirectUrl": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "https://dashboard.bakery.com"
      ]
    }
  },
  "type": "object",
  "title": "LoginSession",
  "x-readme-ref-name": "LoginSession"
} as const;
export default LoginSession
