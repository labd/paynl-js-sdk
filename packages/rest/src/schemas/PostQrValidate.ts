const PostQrValidate = {
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
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostQrValidate
