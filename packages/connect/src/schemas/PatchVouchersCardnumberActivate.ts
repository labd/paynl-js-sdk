import Amount from './Amount.js';

const PatchVouchersCardnumberActivate = {
  "body": {
    "required": [
      "pinCode",
      "posId"
    ],
    "properties": {
      "pinCode": {
        "description": "Your pincode.",
        "type": "string",
        "examples": [
          "1234"
        ]
      },
      "posId": {
        "description": "The ID of the point of sale device.",
        "type": "string",
        "examples": [
          "1234567"
        ]
      },
      "amount": Amount
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
  }
} as const;
export default PatchVouchersCardnumberActivate
