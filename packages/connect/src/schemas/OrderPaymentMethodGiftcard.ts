const OrderPaymentMethodGiftcard = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "cardNumber"
  ],
  "title": "Order.PaymentMethod.Giftcard",
  "x-readme-ref-name": "Order.PaymentMethod.Giftcard",
  "properties": {
    "cardNumber": {
      "minLength": 10,
      "description": "The card number of the Giftcard",
      "type": "string",
      "examples": [
        "6064363019"
      ]
    },
    "pincode": {
      "minLength": 5,
      "maxLength": 6,
      "description": "The pin code of the Giftcard",
      "type": "string",
      "examples": [
        "123456"
      ]
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodGiftcard
