const PatchTransactionsTransactionidTokenize = {
  "body": {
    "properties": {
      "id": {
        "description": "The id of the company's card.",
        "type": "integer",
        "examples": [
          "VY-####-####-####"
        ]
      },
      "token": {
        "description": "The card token of the company.",
        "type": "string",
        "examples": [
          "abcdefghijklmnopqrstuvwxyz123456"
        ]
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "transactionId": {
            "description": "The Id of the transaction.",
            "type": "string",
            "examples": [
              "EX-1234-1234-1234"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "transactionId"
        ]
      }
    ]
  }
} as const;
export default PatchTransactionsTransactionidTokenize
