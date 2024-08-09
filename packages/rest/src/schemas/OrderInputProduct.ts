import OrderInputAmount from './OrderInputAmount.js';

const OrderInputProduct = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "id": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "123b123h1239"
      ]
    },
    "description": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Pair of socks"
      ]
    },
    "type": {
      "description": "The type of product. \n\n             More information can be found here: https://paynl.readme.io/reference/producttypes",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "ARTICLE"
      ]
    },
    "price": {
      "anyOf": [
        OrderInputAmount
      ],
      "nullable": true
    },
    "quantity": {
      "type": [
        "number",
        "null"
      ],
      "examples": [
        1
      ]
    },
    "vatPercentage": {
      "type": [
        "number",
        "null"
      ],
      "examples": [
        21
      ]
    }
  },
  "title": "Order.Input.Product",
  "x-readme-ref-name": "Order.Input.Product"
} as const;
export default OrderInputProduct
