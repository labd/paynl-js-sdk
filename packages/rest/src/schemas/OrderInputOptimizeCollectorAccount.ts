import OrderInputOptimizeCollectorAccountIban from './OrderInputOptimizeCollectorAccountIban.js';

const OrderInputOptimizeCollectorAccount = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "method": {
      "enum": [
        "iban"
      ],
      "type": "string"
    },
    "iban": {
      "anyOf": [
        OrderInputOptimizeCollectorAccountIban
      ],
      "nullable": true
    }
  },
  "title": "Order.Input.Optimize.CollectorAccount",
  "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount"
} as const;
export default OrderInputOptimizeCollectorAccount
