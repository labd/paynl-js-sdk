const TransactionStatusPaymentMethod = {
  "properties": {
    "id": {
      "description": "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
      "type": "integer"
    },
    "subId": {
      "description": "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
      "type": "integer"
    }
  },
  "type": "object",
  "title": "TransactionStatusPaymentMethod",
  "x-readme-ref-name": "TransactionStatusPaymentMethod"
} as const;
export default TransactionStatusPaymentMethod
