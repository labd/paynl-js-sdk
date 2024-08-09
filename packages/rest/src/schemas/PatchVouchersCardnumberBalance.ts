const PatchVouchersCardnumberBalance = {
  "body": {
    "required": [
      "pinCode"
    ],
    "properties": {
      "pinCode": {
        "description": "Your pincode.",
        "type": "string",
        "examples": [
          "1234"
        ]
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "cardNumber": {
            "description": "The number on your voucher card.",
            "type": "string",
            "examples": [
              "12345678"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "cardNumber"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "balance": {
          "type": "integer"
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PatchVouchersCardnumberBalance
