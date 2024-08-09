import Link from './Link.js';
import PaymentMethodsFull from './PaymentMethodsFull.js';

const GetPaymentmethods = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "paymentMethods": {
          "type": "array",
          "items": PaymentMethodsFull
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
export default GetPaymentmethods
