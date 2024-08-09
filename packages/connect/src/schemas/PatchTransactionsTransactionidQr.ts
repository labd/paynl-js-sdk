const PatchTransactionsTransactionidQr = {
  "body": {
    "required": [
      "contents"
    ],
    "properties": {
      "contents": {
        "description": "The qr contents as a base64 string.",
        "type": "string",
        "examples": [
          "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAADAFBM..."
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
export default PatchTransactionsTransactionidQr
