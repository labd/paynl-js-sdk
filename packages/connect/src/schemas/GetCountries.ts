import Country from './Country.js';
import Link from './Link.js';

const GetCountries = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "countries": {
          "type": "array",
          "items": Country
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
export default GetCountries
