import Issuer from './Issuer.js';
import Link from './Link.js';

const GetIssuers = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "issuers": {
          "type": "array",
          "items": Issuer
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
export default GetIssuers
