const Amount = {
  "required": [
    "value"
  ],
  "properties": {
    "value": {
      "description": "The amount in cents.",
      "type": "integer",
      "minimum": 1,
      "examples": [
        10
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
  "type": "object",
  "title": "Amount",
  "x-readme-ref-name": "Amount"
} as const;
export default Amount
