const OrderPaymentMethodPayByBank = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "issuer",
    "country"
  ],
  "title": "Order.PaymentMethod.PayByBank",
  "x-readme-ref-name": "Order.PaymentMethod.PayByBank",
  "properties": {
    "issuer": {
      "type": [
        "string",
        "null"
      ]
    },
    "country": {
      "type": [
        "string",
        "null"
      ]
    },
    "debtorIban": {
      "minLength": 1,
      "type": [
        "string",
        "null"
      ]
    },
    "psuId": {
      "minLength": 1,
      "type": [
        "string",
        "null"
      ]
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodPayByBank
