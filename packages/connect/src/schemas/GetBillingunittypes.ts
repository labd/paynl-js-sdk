import BillingUnitType from './BillingUnitType.js';
import Link from './Link.js';

const GetBillingunittypes = {
  "response": {
    "200": {
      "required": [
        "total",
        "billingUnitTypes",
        "_links"
      ],
      "properties": {
        "total": {
          "type": "integer"
        },
        "billingUnitTypes": {
          "type": "array",
          "items": BillingUnitType
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
export default GetBillingunittypes
