import OrderInputAddress from './OrderInputAddress.js';
import OrderInputProduct from './OrderInputProduct.js';

const OrderInputOrder = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "countryCode": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL"
      ]
    },
    "deliveryDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "examples": [
        "2023-12-24"
      ]
    },
    "invoiceDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "examples": [
        "2023-12-24"
      ]
    },
    "deliveryAddress": {
      "anyOf": [
        OrderInputAddress
      ],
      "nullable": true
    },
    "invoiceAddress": {
      "anyOf": [
        OrderInputAddress
      ],
      "nullable": true
    },
    "products": {
      "items": {
        "anyOf": [
          OrderInputProduct
        ]
      },
      "type": "array"
    }
  },
  "title": "Order.Input.Order",
  "x-readme-ref-name": "Order.Input.Order"
} as const;
export default OrderInputOrder
