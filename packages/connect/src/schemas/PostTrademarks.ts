const PostTrademarks = {
  "body": {
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "description": "A registered trademark name.",
        "type": "string"
      },
      "merchantCode": {
        "description": "The merchant id of your company starting with M.",
        "type": "string",
        "examples": [
          "M-1234-4321"
        ]
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default PostTrademarks
