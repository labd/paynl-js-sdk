const MerchantMinimal = {
  "required": [
    "code",
    "name",
    "status"
  ],
  "properties": {
    "code": {
      "description": "The merchant id of your company starting with M.",
      "type": "string",
      "examples": [
        "M-1234-4321"
      ]
    },
    "name": {
      "description": "The name of your merchant.",
      "type": "string",
      "maxLength": 128,
      "minLength": 2,
      "examples": [
        "CompanyName"
      ]
    },
    "status": {
      "description": "Merchant state",
      "type": "string",
      "examples": [
        "ACTIVE"
      ]
    }
  },
  "type": "object",
  "title": "MerchantMinimal",
  "x-readme-ref-name": "MerchantMinimal"
} as const;
export default MerchantMinimal
