import Link from './Link.js';

const Balance = {
  "required": [
    "_links",
    "balance",
    "costs",
    "invoices",
    "lastClearing",
    "nextClearing"
  ],
  "type": "object",
  "title": "Balance",
  "x-readme-ref-name": "Balance",
  "properties": {
    "balance": {
      "required": [
        "amount",
        "currency"
      ],
      "type": "object",
      "properties": {
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "invoices": {
      "required": [
        "amount",
        "currency"
      ],
      "type": [
        "object",
        "null"
      ],
      "properties": {
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "costs": {
      "required": [
        "amount",
        "currency"
      ],
      "type": [
        "object",
        "null"
      ],
      "properties": {
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "availableBalance": {
      "required": [
        "amount",
        "currency"
      ],
      "type": [
        "object",
        "null"
      ],
      "properties": {
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        },
        "turnoverGroups": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "amount": {
                "type": "integer"
              },
              "currency": {
                "type": "string"
              }
            }
          }
        }
      }
    },
    "nextClearing": {
      "required": [
        "state",
        "date",
        "amount",
        "currency"
      ],
      "type": "object",
      "properties": {
        "state": {
          "type": "string"
        },
        "date": {
          "type": [
            "integer",
            "null"
          ],
          "format": "date"
        },
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "lastClearing": {
      "required": [
        "date",
        "amount",
        "currency"
      ],
      "type": "object",
      "properties": {
        "date": {
          "type": [
            "integer",
            "null"
          ],
          "format": "date"
        },
        "amount": {
          "type": "integer"
        },
        "currency": {
          "type": "string"
        }
      }
    },
    "_links": {
      "type": "array",
      "items": Link
    }
  }
} as const;
export default Balance
