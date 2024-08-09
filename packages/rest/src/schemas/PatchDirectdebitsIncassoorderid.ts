import Amount from './Amount.js';
import BankAccount from './BankAccount.js';
import Directdebit from './Directdebit.js';
import Interval from './Interval.js';
import Mandate from './Mandate.js';
import Stats from './Stats.js';

const PatchDirectdebitsIncassoorderid = {
  "body": {
    "required": [
      "amount"
    ],
    "properties": {
      "description": {
        "description": "The description of the direct debit.",
        "type": "string",
        "maxLength": 32
      },
      "processDate": {
        "description": "The ISO date at which this entity will be processed",
        "type": "string",
        "format": "date-time",
        "examples": [
          "2019-01-01T12:00:00+02:00"
        ]
      },
      "customer": {
        "properties": {
          "ip": {
            "description": "An ip address",
            "type": "string",
            "examples": [
              "213.126.82.230"
            ]
          },
          "email": {
            "description": "An email address.",
            "type": "string",
            "format": "email",
            "examples": [
              "sandbox@pay.nl"
            ]
          },
          "bankAccount": BankAccount
        },
        "type": "object"
      },
      "amount": Amount,
      "interval": Interval,
      "stats": Stats
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "incassoOrderId": {
            "description": "The direct debit identifier.",
            "type": "string",
            "examples": [
              "IL-####-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "incassoOrderId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "mandate": Mandate,
        "directdebits": {
          "type": "array",
          "items": Directdebit
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PatchDirectdebitsIncassoorderid
