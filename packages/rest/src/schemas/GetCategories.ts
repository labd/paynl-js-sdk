import Category from './Category.js';
import Link from './Link.js';

const GetCategories = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "categories": {
          "type": "array",
          "items": Category
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
export default GetCategories
