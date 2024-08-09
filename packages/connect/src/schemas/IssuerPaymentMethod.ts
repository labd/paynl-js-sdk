const IssuerPaymentMethod = {
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
    "name": {
      "description": "The name of the payment method.",
      "type": "string",
      "examples": [
        "ideal"
      ]
    }
  },
  "type": "object",
  "title": "IssuerPaymentMethod",
  "x-readme-ref-name": "IssuerPaymentMethod"
} as const;
export default IssuerPaymentMethod
