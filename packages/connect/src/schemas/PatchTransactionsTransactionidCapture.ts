const PatchTransactionsTransactionidCapture = {
  "body": {
    "properties": {
      "amount": {
        "description": "The amount in cents.",
        "type": "integer",
        "minimum": 1,
        "examples": [
          10
        ]
      },
      "products": {
        "type": "object",
        "additionalProperties": {
          "description": "Key is the ID of the product, value is the quantity",
          "type": "integer"
        }
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
export default PatchTransactionsTransactionidCapture
