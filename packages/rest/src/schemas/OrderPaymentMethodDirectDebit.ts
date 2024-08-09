const OrderPaymentMethodDirectDebit = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "firstName",
    "lastName",
    "email",
    "city",
    "iban",
    "bic"
  ],
  "title": "Order.PaymentMethod.DirectDebit",
  "x-readme-ref-name": "Order.PaymentMethod.DirectDebit",
  "properties": {
    "firstName": {
      "type": [
        "string",
        "null"
      ]
    },
    "lastName": {
      "type": [
        "string",
        "null"
      ]
    },
    "email": {
      "format": "email",
      "type": [
        "string",
        "null"
      ]
    },
    "city": {
      "type": [
        "string",
        "null"
      ]
    },
    "iban": {
      "type": [
        "string",
        "null"
      ]
    },
    "bic": {
      "type": [
        "string",
        "null"
      ]
    },
    "permissionGiven": {
      "type": "boolean"
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodDirectDebit
