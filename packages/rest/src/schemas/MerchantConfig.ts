const MerchantConfig = {
  "properties": {
    "code": {
      "description": "The merchant id of your company starting with M.",
      "type": "string",
      "examples": [
        "M-####-####"
      ]
    },
    "status": {
      "description": "Merchant state",
      "type": "string"
    },
    "name": {
      "description": "The name of your merchant.",
      "type": "string",
      "maxLength": 128,
      "minLength": 2,
      "examples": [
        "CompanyName"
      ]
    }
  },
  "type": "object",
  "title": "MerchantConfig",
  "x-readme-ref-name": "MerchantConfig"
} as const;
export default MerchantConfig
