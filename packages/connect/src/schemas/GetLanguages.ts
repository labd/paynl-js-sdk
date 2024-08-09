import Language from './Language.js';
import Link from './Link.js';

const GetLanguages = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "languages": {
          "type": "array",
          "items": Language
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
export default GetLanguages
