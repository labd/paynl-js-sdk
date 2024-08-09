const OrderPaymentMethodSprayPay = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "initials",
    "firstName",
    "lastName",
    "gender",
    "streetName",
    "houseNumber",
    "postalCode",
    "city",
    "country",
    "email",
    "phoneNumber"
  ],
  "title": "Order.PaymentMethod.SprayPay",
  "x-readme-ref-name": "Order.PaymentMethod.SprayPay",
  "properties": {
    "initials": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "gender": {
      "enum": [
        "FEMALE",
        "MALE"
      ],
      "type": "string"
    },
    "streetName": {
      "type": "string"
    },
    "houseNumber": {
      "type": "string"
    },
    "houseNumberAddition": {
      "maxLength": 255,
      "type": [
        "string",
        "null"
      ]
    },
    "postalCode": {
      "type": "string"
    },
    "city": {
      "type": "string"
    },
    "country": {
      "enum": [
        "NL",
        "BE"
      ],
      "type": "string"
    },
    "email": {
      "format": "email",
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    }
  },
  "items": {
    "type": "string"
  }
} as const;
export default OrderPaymentMethodSprayPay
