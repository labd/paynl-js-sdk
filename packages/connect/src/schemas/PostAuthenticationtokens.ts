const PostAuthenticationtokens = {
  "body": {
    "required": [
      "merchantCode",
      "authenticationToken"
    ],
    "properties": {
      "merchantCode": {
        "description": "The merchant id of your company starting with M.",
        "type": "string",
        "examples": [
          "M-1234-4321"
        ]
      },
      "authenticationToken": {
        "required": [
          "description",
          "authorisation",
          "authorisationGroups"
        ],
        "properties": {
          "description": {
            "type": "string",
            "examples": [
              "Default token"
            ]
          },
          "authorisation": {
            "description": "Specify which kind of authorisation is applicable for the token.\n\nall: all merchant rights\nspecified: specify which authorisation groups should be enabled from the token. At least one authorisation group (in the authorisationGroups array) is mandatory",
            "type": "string",
            "enum": [
              "all",
              "specified"
            ],
            "examples": [
              "specified"
            ]
          },
          "authorisationGroups": {
            "type": "array",
            "items": {
              "type": "string",
              "examples": [
                "AG-1234-4321"
              ]
            }
          },
          "ipFilter": {
            "properties": {
              "type": {
                "type": "string",
                "enum": [
                  "DENY_FROM_ALL"
                ]
              },
              "exceptionList": {
                "type": "array",
                "items": {
                  "type": "string",
                  "examples": [
                    "213.126.82.230"
                  ]
                }
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostAuthenticationtokens
