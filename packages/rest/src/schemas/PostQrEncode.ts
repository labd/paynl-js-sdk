import Amount from './Amount.js';

const PostQrEncode = {
  "body": {
    "required": [
      "serviceId",
      "secret",
      "amount",
      "reference"
    ],
    "properties": {
      "serviceId": {
        "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
        "type": "string",
        "examples": [
          "SL-####-####"
        ]
      },
      "secret": {
        "description": "The secret of the QR code.",
        "type": "string",
        "format": "byte",
        "maxLength": 40,
        "minLength": 40,
        "examples": [
          "secret"
        ]
      },
      "amount": Amount,
      "reference": {
        "description": "The reference of the QR code.",
        "type": "string",
        "examples": [
          "123456"
        ]
      },
      "padChar": {
        "description": "The padding character.",
        "type": "string",
        "maxLength": 1,
        "minLength": 1,
        "pattern": "^[a-zA-Z0-9]{1}$",
        "examples": [
          "a"
        ]
      },
      "referenceType": {
        "description": "The reference type of the QR code. Must be one of the following values: string, hex.",
        "type": "string",
        "enum": [
          "string",
          "hex"
        ],
        "examples": [
          "string"
        ]
      },
      "paymentMethod": {
        "properties": {
          "id": {
            "type": "integer",
            "enum": [
              10,
              436
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
export default PostQrEncode
