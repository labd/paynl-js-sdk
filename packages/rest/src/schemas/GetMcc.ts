import Link from './Link.js';
import Mcc from './Mcc.js';

const GetMcc = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "mccs": {
          "type": "array",
          "items": Mcc
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
export default GetMcc
