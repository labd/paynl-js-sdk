import Link from './Link.js';
import PaymentMethodGroups from './PaymentMethodGroups.js';

const GetPaymentmethodgroups = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "paymentMethodGroups": {
          "type": "array",
          "items": PaymentMethodGroups
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
export default GetPaymentmethodgroups
