const PostClearingaccountsClearingaccountcodeUndelete = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "clearingAccountCode": {
            "description": "The merchant bank account id of your company starting with BA.",
            "type": "string",
            "examples": [
              "BA-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "clearingAccountCode"
        ]
      }
    ]
  }
} as const;
export default PostClearingaccountsClearingaccountcodeUndelete
