import OrderInputCompany from './OrderInputCompany.js';

const OrderInputCustomer = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "email": {
      "format": "email",
      "minLength": 1,
      "maxLength": 255,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "johndoe@example.com"
      ]
    },
    "firstname": {
      "minLength": 1,
      "maxLength": 255,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "John"
      ]
    },
    "lastname": {
      "minLength": 1,
      "maxLength": 255,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Doe"
      ]
    },
    "birthDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "examples": [
        "1999-11-22"
      ]
    },
    "gender": {
      "minLength": 1,
      "maxLength": 1,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "O"
      ]
    },
    "phone": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "06-12345678"
      ]
    },
    "locale": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "nl_BE"
      ]
    },
    "ipAddress": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "192.168.0.1"
      ]
    },
    "trust": {
      "type": [
        "integer",
        "null"
      ],
      "examples": [
        1
      ]
    },
    "reference": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Your customer reference"
      ]
    },
    "gaClientId": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "GA1.2.904941809.1556093647"
      ]
    },
    "company": {
      "anyOf": [
        OrderInputCompany
      ],
      "nullable": true
    }
  },
  "title": "Order.Input.Customer",
  "x-readme-ref-name": "Order.Input.Customer"
} as const;
export default OrderInputCustomer
