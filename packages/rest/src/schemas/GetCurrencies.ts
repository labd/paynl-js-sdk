import Currency from './Currency.js';
import Link from './Link.js';

const GetCurrencies = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "currencies": {
          "type": "array",
          "items": Currency
        },
        "_links": {
          "type": "array",
          "items": Link
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetCurrencies
