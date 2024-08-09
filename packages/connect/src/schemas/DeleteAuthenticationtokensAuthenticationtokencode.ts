const DeleteAuthenticationtokensAuthenticationtokencode = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "authenticationTokenCode": {
            "type": "string",
            "examples": [
              "AT-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "authenticationTokenCode"
        ]
      }
    ]
  }
} as const;
export default DeleteAuthenticationtokensAuthenticationtokencode
