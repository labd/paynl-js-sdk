import Amount from './Amount.js';
import Stats from './Stats.js';

const PostPayoutClearing = {
  "body": {
    "required": [
      "transaction",
      "payment"
    ],
    "properties": {
      "transaction": {
        "required": [
          "type",
          "serviceId",
          "amount"
        ],
        "properties": {
          "serviceId": {
            "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            "type": "string",
            "examples": [
              "SL-####-####"
            ]
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
          "reference": {
            "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
            "type": "string",
            "maxLength": 64,
            "minLength": 1,
            "pattern": "^[a-zA-Z0-9]{1,64}$",
            "examples": [
              "12345XXY0123"
            ]
          },
          "exchangeUrl": {
            "description": "The URL where we exchange the status of a transaction.",
            "type": "string",
            "format": "uri",
            "examples": [
              "https://demo.pay.nl/exchange.php"
            ]
          },
          "amount": Amount
        },
        "type": "object"
      },
      "stats": Stats
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
      "properties": {
        "transaction": {
          "properties": {
            "id": {
              "description": "The Id of the transaction.",
              "type": "string",
              "examples": [
                "EX-1234-1234-1234"
              ]
            },
            "orderId": {
              "description": "The orderId of the transaction.",
              "type": "string",
              "examples": [
                "0000000000X00000"
              ]
            },
            "serviceId": {
              "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
              "type": "string",
              "examples": [
                "SL-####-####"
              ]
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
            "reference": {
              "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
              "type": "string",
              "maxLength": 64,
              "minLength": 1,
              "pattern": "^[a-zA-Z0-9]{1,64}$",
              "examples": [
                "12345XXY0123"
              ]
            },
            "amount": Amount,
            "createdAt": {
              "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
              "type": "string",
              "format": "date-time",
              "readOnly": true,
              "examples": [
                "2016-06-04T08:15:00+01:00"
              ]
            },
            "modifiedAt": {
              "description": "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
              "type": "string",
              "format": "date-time",
              "readOnly": true,
              "examples": [
                "2016-06-04T08:15:00+01:00"
              ]
            }
          },
          "type": "object"
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostPayoutClearing
