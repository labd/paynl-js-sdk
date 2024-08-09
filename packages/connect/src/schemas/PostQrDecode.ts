const PostQrDecode = {
  "body": {
    "required": [
      "uuid",
      "secret"
    ],
    "properties": {
      "uuid": {
        "description": "The uuid of the QR code.",
        "type": "string",
        "maxLength": 36,
        "minLength": 36,
        "examples": [
          "1234-5678-1234-5678"
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
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostQrDecode
