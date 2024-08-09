import Amount from './Amount.js';

const PatchTransactionsTransactionidRefund = {
  "body": {
    "properties": {
      "amount": Amount,
      "products": {
        "type": "object",
        "additionalProperties": {
          "description": "Key is the ID of the product, value is the quantity",
          "type": "integer"
        }
      },
      "description": {
        "description": "The description of the refund.",
        "type": "string",
        "maxLength": 32,
        "minLength": 1,
        "examples": [
          "The product never got delivered."
        ]
      },
      "processDate": {
        "description": "The ISO date at which this entity will be processed",
        "type": "string",
        "format": "date-time",
        "examples": [
          "2019-01-01T12:00:00+02:00"
        ]
      },
      "vatPercentage": {
        "description": "the vat percentage this refund applies to. Only applicable for amount, not products, and only for AfterPay.",
        "type": "number",
        "format": "float",
        "examples": [
          "21.0"
        ]
      },
      "exchangeUrl": {
        "description": "The URL where we exchange the status of a transaction.",
        "type": "string",
        "format": "uri",
        "examples": [
          "https://demo.pay.nl/exchange.php"
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
  },
  "response": {
    "200": {
      "properties": {
        "orderId": {
          "description": "The orderId of the transaction.",
          "type": "string",
          "examples": [
            "0000000000X00000"
          ]
        },
        "transactionId": {
          "type": "string"
        },
        "description": {
          "description": "Is shown on the statement of the payer.",
          "type": "string",
          "maxLength": 32,
          "minLength": 1,
          "examples": [
            "Example description."
          ]
        },
        "processDate": {
          "description": "The ISO date at which this entity will be processed",
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "examples": [
            "1999-02-15"
          ]
        },
        "amount": Amount,
        "amountRefunded": Amount,
        "refundedTransactions": {
          "type": "array",
          "items": {
            "properties": {
              "amountRefunded": Amount,
              "refund": {
                "properties": {
                  "id": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "createdAt": {
                "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                "type": "string",
                "format": "date-time",
                "readOnly": true,
                "examples": [
                  "2016-06-04T08:15:00+01:00"
                ]
              },
              "createdBy": {
                "description": "The reference to an account or token whom created the entity",
                "type": [
                  "string",
                  "null"
                ],
                "pattern": "^A(T)?(-\\d{4}){2}$",
                "readOnly": true,
                "examples": [
                  "A-1234-4321"
                ]
              }
            },
            "type": "object"
          }
        },
        "createdAt": {
          "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
          "format": "date-time",
          "readOnly": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "createdBy": {
          "description": "The reference to an account or token whom created the entity",
          "type": [
            "string",
            "null"
          ],
          "pattern": "^A(T)?(-\\d{4}){2}$",
          "readOnly": true,
          "examples": [
            "A-1234-4321"
          ]
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PatchTransactionsTransactionidRefund
