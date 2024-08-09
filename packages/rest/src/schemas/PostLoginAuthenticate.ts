import LoginSession from './LoginSession.js';

const PostLoginAuthenticate = {
  "body": {
    "required": [
      "login",
      "account"
    ],
    "properties": {
      "login": {
        "required": [
          "inactivityExpire",
          "internalId",
          "deviceId",
          "userAgent"
        ],
        "properties": {
          "inactivityExpire": {
            "type": "integer",
            "examples": [
              1800
            ]
          },
          "internalId": {
            "type": "string",
            "examples": [
              "John Doe's Bakery"
            ]
          },
          "deviceId": {
            "type": "string",
            "examples": [
              "ec81b928b5f7b945cbe1ad97927867a564131eaa"
            ]
          },
          "ipAddress": {
            "type": "string",
            "examples": [
              "213.126.82.230"
            ]
          },
          "userAgent": {
            "type": "string",
            "examples": [
              "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5732837501202812829 t1236787695256497497"
            ]
          }
        },
        "type": "object"
      },
      "account": {
        "required": [
          "licenseCode",
          "label",
          "languageId",
          "logoutRedirectUrl"
        ],
        "properties": {
          "licenseCode": {
            "type": "string",
            "examples": [
              "AL-1234-4321"
            ]
          },
          "label": {
            "type": "string",
            "examples": [
              "John Doe"
            ]
          },
          "languageId": {
            "type": "string",
            "examples": [
              "nl_NL"
            ]
          },
          "logoutRedirectUrl": {
            "type": "string",
            "examples": [
              "https://mijn.3rdparty.nl"
            ]
          }
        },
        "type": "object"
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
      "properties": {
        "session": LoginSession
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostLoginAuthenticate
