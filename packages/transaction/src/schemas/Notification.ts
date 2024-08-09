const Notification = {
  "properties": {
    "type": {
      "description": "Use \"push\" for push messages, or \"email\" to send out an email. For more information check the following page: https://paynl.readme.io/reference/accounts-1",
      "type": "string",
      "enum": [
        "push",
        "email"
      ]
    },
    "recipient": {
      "description": "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). For email, provide a valid email address (XXXX@XXXX.XX).",
      "type": "string",
      "examples": [
        "AD-1234-1234"
      ]
    }
  },
  "type": "object",
  "title": "Notification",
  "x-readme-ref-name": "Notification"
} as const;
export default Notification
