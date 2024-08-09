import Amount from './Amount.js';

const PostTransactionsTransactionidRecurring = {
  "body": {
    "properties": {
      "amount": Amount,
      "description": {
        "description": "Is shown on the statement of the payer.",
        "type": "string",
        "maxLength": 32,
        "minLength": 1,
        "examples": [
          "Example description."
        ]
      },
      "extra1": {
        "description": "The first free value which can be tracked in the stats.",
        "type": "string",
        "maxLength": 64,
        "minLength": 1,
        "examples": [
          "Customer 6985615"
        ]
      },
      "extra2": {
        "description": "The second free value which can be tracked in the stats.",
        "type": "string",
        "maxLength": 64,
        "minLength": 1,
        "examples": [
          "Invoice 21.3695"
        ]
      },
      "extra3": {
        "description": "The third free value which can be tracked in the stats.",
        "type": "string",
        "maxLength": 64,
        "minLength": 1,
        "examples": [
          "Shop Amsterdam"
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
export default PostTransactionsTransactionidRecurring
