import BillingDataGroup from './BillingDataGroup.js';
import Link from './Link.js';

const GetBillinglinetypes = {
  "response": {
    "200": {
      "required": [
        "total",
        "billingDataGroups",
        "_links"
      ],
      "properties": {
        "total": {
          "type": "integer"
        },
        "billingDataGroups": {
          "type": "array",
          "items": BillingDataGroup
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
export default GetBillinglinetypes
