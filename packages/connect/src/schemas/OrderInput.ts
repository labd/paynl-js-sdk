import OrderInputAmount from './OrderInputAmount.js';
import OrderInputCustomer from './OrderInputCustomer.js';
import OrderInputIntegration from './OrderInputIntegration.js';
import OrderInputNotification from './OrderInputNotification.js';
import OrderInputOptimize from './OrderInputOptimize.js';
import OrderInputOrder from './OrderInputOrder.js';
import OrderInputPaymentMethod from './OrderInputPaymentMethod.js';
import OrderInputStats from './OrderInputStats.js';

const OrderInput = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "required": [
    "serviceId",
    "amount"
  ],
  "properties": {
    "serviceId": {
      "minLength": 12,
      "maxLength": 12,
      "pattern": "^(SL-[0-9]{4}-[0-9]{4})$",
      "type": "string",
      "description": "Unique service location identifier",
      "examples": [
        "SL-1234-1234"
      ]
    },
    "description": {
      "description": "Is shown on the statement of the payer.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Order Description"
      ]
    },
    "reference": {
      "description": "The merchant identification of this transaction. \n This field only allows alphanumeric characters",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "REF1234"
      ]
    },
    "expire": {
      "description": "The time at which this order expires. Must be in ATOM (ISO-8601) notation.",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "examples": [
        "1999-11-22T13:37:00+01:00"
      ]
    },
    "returnUrl": {
      "description": "The URL where the payer will be sent to after the payment.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "https://demo.pay.nl/start/return.php"
      ]
    },
    "exchangeUrl": {
      "description": "The URL where we exchange the status of a transaction.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "https://pay.nl/exchange"
      ]
    },
    "amount": OrderInputAmount,
    "paymentMethod": {
      "anyOf": [
        OrderInputPaymentMethod
      ],
      "nullable": true
    },
    "integration": {
      "anyOf": [
        OrderInputIntegration
      ],
      "nullable": true
    },
    "optimize": {
      "anyOf": [
        OrderInputOptimize
      ],
      "nullable": true
    },
    "customer": {
      "anyOf": [
        OrderInputCustomer
      ],
      "nullable": true
    },
    "order": {
      "anyOf": [
        OrderInputOrder
      ],
      "nullable": true
    },
    "notification": {
      "anyOf": [
        OrderInputNotification
      ],
      "nullable": true
    },
    "stats": {
      "anyOf": [
        OrderInputStats
      ],
      "nullable": true
    },
    "transferData": {
      "type": [
        "object",
        "null"
      ],
      "additionalProperties": {
        "type": "string"
      }
    }
  },
  "title": "Order.Input",
  "x-readme-ref-name": "Order.Input"
} as const;
export default OrderInput
