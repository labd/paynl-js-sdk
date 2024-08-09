const FinanceTransactionLine = {
  "properties": {
    "code": {
      "type": "string"
    },
    "type": {
      "description": "The type of invoice line. Can either be SELL or BUY.\n\n`BUY` `SELL`",
      "type": "string",
      "enum": [
        "BUY",
        "SELL"
      ]
    },
    "unitType": {
      "description": "The specification for the unit's type",
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "description": "The unit type ID",
          "type": "integer",
          "examples": [
            "12"
          ]
        },
        "name": {
          "description": "The unit type's name",
          "type": "string",
          "examples": [
            "percentage"
          ]
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "amount": {
      "type": "number"
    },
    "costs": {
      "description": "The costs revue per financial transaction with the corresponding currency",
      "properties": {
        "revenue": {
          "description": "The revenue for the costs as a decimal (/float)",
          "type": "number",
          "examples": [
            "23.45"
          ]
        },
        "currency": {
          "description": "The currency in ISO-4217 format.",
          "type": "string",
          "examples": [
            "EUR"
          ]
        }
      },
      "type": "object"
    },
    "processedDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    }
  },
  "type": "object",
  "title": "FinanceTransactionLine",
  "x-readme-ref-name": "FinanceTransactionLine"
} as const;
export default FinanceTransactionLine
