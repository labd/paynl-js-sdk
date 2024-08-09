const Partner = {
  "properties": {
    "code": {
      "type": "string",
      "examples": [
        "M-1234-4321"
      ]
    },
    "name": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "accessToMerchant": {
      "type": "boolean"
    }
  },
  "type": "object",
  "title": "Partner",
  "x-readme-ref-name": "Partner"
} as const;
export default Partner
