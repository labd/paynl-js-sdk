const OrderPaymentMethodIDeal = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "title": "Order.PaymentMethod.iDEAL",
  "x-readme-ref-name": "Order.PaymentMethod.iDEAL",
  "properties": {
    "issuerId": {
      "description": "The ID (4 = ING) or the BIC code of the issuer, required for integrations with iDEAL 1.0",
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
export default OrderPaymentMethodIDeal
