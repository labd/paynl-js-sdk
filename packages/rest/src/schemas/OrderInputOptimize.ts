import OrderInputOptimizeCollectorAccount from './OrderInputOptimizeCollectorAccount.js';
import OrderInputOptimizeCollectorCompany from './OrderInputOptimizeCollectorCompany.js';

const OrderInputOptimize = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "flow": {
      "enum": [
        "fastCheckout"
      ],
      "type": [
        "string",
        "null"
      ]
    },
    "shippingAddress": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "billingAddress": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "contactDetails": {
      "type": [
        "boolean",
        "null"
      ]
    },
    "mcc": {
      "maxLength": 4,
      "type": [
        "string",
        "null"
      ]
    },
    "collectorAccount": {
      "anyOf": [
        OrderInputOptimizeCollectorAccount
      ],
      "nullable": true
    },
    "collectorCompany": {
      "anyOf": [
        OrderInputOptimizeCollectorCompany
      ],
      "nullable": true
    }
  },
  "title": "Order.Input.Optimize",
  "x-readme-ref-name": "Order.Input.Optimize"
} as const;
export default OrderInputOptimize
