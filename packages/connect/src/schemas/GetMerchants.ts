import Merchant from './Merchant.js';

const GetMerchants = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "merchants": {
          "type": "array",
          "items": Merchant
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetMerchants
