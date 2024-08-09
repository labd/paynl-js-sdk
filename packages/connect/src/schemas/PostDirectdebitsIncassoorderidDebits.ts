import Amount from './Amount.js';
import Directdebit from './Directdebit.js';
import Mandate from './Mandate.js';
import Stats from './Stats.js';

const PostDirectdebitsIncassoorderidDebits = {
  "body": {
    "required": [
      "amount"
    ],
    "properties": {
      "isLastOrder": {
        "description": "Indicate whether this is the last direct debit for this mandateId.",
        "type": "boolean"
      },
      "description": {
        "description": "The description of the direct debit.",
        "type": "string"
      },
      "processDate": {
        "description": "The ISO date at which this entity will be processed",
        "type": "string",
        "format": "date-time",
        "examples": [
          "2019-01-01T12:00:00+02:00"
        ]
      },
      "amount": Amount,
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
export default PostDirectdebitsIncassoorderidDebits
