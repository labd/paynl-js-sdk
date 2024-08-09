import Partner from './Partner.js';

const GetPartners = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "partners": {
          "type": "array",
          "items": Partner
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetPartners
