const OrderInputOptimizeCollectorAccountIban = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "iban",
    "bic",
    "owner"
  ],
  "properties": {
    "iban": {
      "type": "string"
    },
    "bic": {
      "type": "string"
    },
    "owner": {
      "type": "string"
    }
  },
  "title": "Order.Input.Optimize.CollectorAccount.Iban",
  "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
} as const;
export default OrderInputOptimizeCollectorAccountIban
