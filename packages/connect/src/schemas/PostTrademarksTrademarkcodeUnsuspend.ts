const PostTrademarksTrademarkcodeUnsuspend = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "trademarkCode": {
            "description": "An identifier for this trademark",
            "type": "string",
            "examples": [
              "TM-0000-0000"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "trademarkCode"
        ]
      }
    ]
  }
} as const;
export default PostTrademarksTrademarkcodeUnsuspend
