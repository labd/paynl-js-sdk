import Directdebit from './Directdebit.js';
import Mandate from './Mandate.js';

const GetDirectdebitsIncassoorderid = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "incassoOrderId": {
            "description": "The direct debit identifier.",
            "type": "string",
            "examples": [
              "IL-####-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "incassoOrderId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "mandate": Mandate,
        "directdebits": {
          "type": "array",
          "items": Directdebit
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetDirectdebitsIncassoorderid
