import Authorisationgroup from './Authorisationgroup.js';
import Link from './Link.js';

const GetAuthorisationgroups = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "authorisationGroups": {
          "type": "array",
          "items": Authorisationgroup
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
export default GetAuthorisationgroups
