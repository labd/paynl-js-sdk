const OrderPaymentMethodPin = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "terminalCode"
  ],
  "title": "Order.PaymentMethod.Pin",
  "x-readme-ref-name": "Order.PaymentMethod.Pin",
  "properties": {
    "terminalCode": {
      "pattern": "^(TH-[0-9]{4}-[0-9]{4})$",
      "type": "string"
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodPin
