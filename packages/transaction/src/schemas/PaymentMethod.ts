const PaymentMethod = {
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "description": "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
      "type": "integer",
      "examples": [
        "10"
      ]
    },
    "subId": {
      "description": "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
      "type": "string",
      "examples": [
        "10"
      ]
    },
    "name": {
      "description": "The name of the payment method.",
      "type": "string",
      "examples": [
        "ideal"
      ]
    }
  },
  "type": "object",
  "title": "PaymentMethod",
  "x-readme-ref-name": "PaymentMethod"
} as const;
export default PaymentMethod
