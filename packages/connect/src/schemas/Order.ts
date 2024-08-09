import Address from './Address.js';
import Product from './Product.js';

const Order = {
  "type": "object",
  "title": "Order",
  "x-readme-ref-name": "Order",
  "properties": {
    "countryCode": {
      "description": "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
      "type": "string",
      "maxLength": 2,
      "minLength": 2,
      "examples": [
        "NL"
      ]
    },
    "deliveryDate": {
      "description": "The date of delivery.",
      "type": "string",
      "format": "date",
      "examples": [
        "1999-02-15"
      ]
    },
    "invoiceDate": {
      "description": "The date of the invoice",
      "type": "string",
      "format": "date",
      "examples": [
        "1999-02-15"
      ]
    },
    "deliveryAddress": Address,
    "invoiceAddress": Address,
    "products": {
      "type": "array",
      "items": Product
    }
  }
} as const;
export default Order
