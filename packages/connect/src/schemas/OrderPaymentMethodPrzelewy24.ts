const OrderPaymentMethodPrzelewy24 = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "email"
  ],
  "title": "Order.PaymentMethod.Przelewy24",
  "x-readme-ref-name": "Order.PaymentMethod.Przelewy24",
  "properties": {
    "email": {
      "format": "email",
      "type": "string"
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodPrzelewy24
