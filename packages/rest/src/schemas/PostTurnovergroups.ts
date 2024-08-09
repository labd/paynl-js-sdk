const PostTurnovergroups = {
  "body": {
    "required": [
      "merchantCode",
      "turnoverGroup"
    ],
    "properties": {
      "merchantCode": {
        "description": "The merchant id of your company starting with M.",
        "type": "string",
        "examples": [
          "M-1234-4321"
        ]
      },
      "turnoverGroup": {
        "required": [
          "name",
          "default"
        ],
        "properties": {
          "name": {
            "type": "string",
            "examples": [
              "Standaard"
            ]
          },
          "bankAccountCode": {
            "description": "The merchant bank account id of your company starting with BA.",
            "type": "string",
            "examples": [
              "BA-1234-4321"
            ]
          },
          "default": {
            "type": "boolean",
            "examples": [
              true
            ]
          },
          "description": {
            "type": "string"
          },
          "paymentDescription": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "type": "object"
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostTurnovergroups
