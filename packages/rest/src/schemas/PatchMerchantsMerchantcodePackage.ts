const PatchMerchantsMerchantcodePackage = {
  "body": {
    "required": [
      "referralProfileCode"
    ],
    "properties": {
      "referralProfileCode": {
        "type": "string",
        "examples": [
          "CP-1234-4321"
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
          "merchantCode": {
            "description": "The merchant id of your company starting with M.",
            "type": "string",
            "examples": [
              "M-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "merchantCode"
        ]
      }
    ]
  }
} as const;
export default PatchMerchantsMerchantcodePackage
