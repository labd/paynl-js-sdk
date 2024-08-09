const OrderInputNotification = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "type": {
      "enum": [
        "push",
        "email"
      ],
      "description": "Use \"push\" for push messages, or \"email\" to send out an email.\n                      For more information check the following page: https://paynl.readme.io/reference/accounts-1",
      "type": [
        "string",
        "null"
      ]
    },
    "recipient": {
      "description": "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). \n        For email, provide a valid email address (XXXX@XXXX.XX).",
      "type": [
        "string",
        "null"
      ]
    }
  },
  "title": "Order.Input.Notification",
  "x-readme-ref-name": "Order.Input.Notification"
} as const;
export default OrderInputNotification
