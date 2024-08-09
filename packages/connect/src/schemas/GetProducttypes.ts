import Link from './Link.js';
import ProductType from './ProductType.js';

const GetProducttypes = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "productTypes": {
          "type": "array",
          "items": ProductType
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
export default GetProducttypes
