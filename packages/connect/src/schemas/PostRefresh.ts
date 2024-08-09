const PostRefresh = {
  "body": {
    "required": [
      "refreshToken"
    ],
    "properties": {
      "refreshToken": {
        "description": "Token used to exchange for new ones",
        "type": "string",
        "examples": [
          "5fe027d96cded0c92b2337d4068a336dc41b956683a501c95d4896d9cb9f1103dc0b6d3388f17c1ef6a578ed9aa3c9d1c133355e9d9a4fa5dbb53d22e0aba0dc"
        ]
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "200": {
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostRefresh
