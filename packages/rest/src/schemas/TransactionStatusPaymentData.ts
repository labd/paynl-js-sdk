const TransactionStatusPaymentData = {
  "properties": {
    "method": {
      "description": "Payment method of the transaction.",
      "type": "string"
    },
    "customerKey": {
      "description": "Customer key of the customer from the transaction.",
      "type": "string"
    },
    "customerId": {
      "description": "Customer id of the customer from the transaction.",
      "type": "string"
    },
    "customerName": {
      "description": "Customer name of the customer from the transaction.",
      "type": "string"
    },
    "ipAddress": {
      "description": "Ip address of the customer from the transaction.",
      "type": "string"
    },
    "secureStatus": {
      "description": "Secure status of the transaction.",
      "type": "boolean"
    },
    "paymentVerificationMethod": {
      "type": "integer"
    }
  },
  "type": "object",
  "title": "TransactionStatusPaymentData",
  "x-readme-ref-name": "TransactionStatusPaymentData"
} as const;
export default TransactionStatusPaymentData
