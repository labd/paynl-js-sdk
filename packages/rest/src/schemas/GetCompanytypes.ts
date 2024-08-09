import CompanyType from './CompanyType.js';
import Link from './Link.js';

const GetCompanytypes = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "companyTypes": {
          "type": "array",
          "items": CompanyType
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
export default GetCompanytypes
