import $Package from './$Package.js';
import Link from './Link.js';

const GetPackages = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "packages": {
          "type": "array",
          "items": $Package
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
export default GetPackages
