const OrderInputAmount = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "value"
  ],
  "properties": {
    "value": {
      "description": "The amount in cents. Є1.50 becomes 150",
      "type": "integer",
      "examples": [
        1
      ]
    },
    "currency": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "EUR"
      ]
    }
  },
  "title": "Order.Input.Amount",
  "x-readme-ref-name": "Order.Input.Amount"
} as const;
export default OrderInputAmount
