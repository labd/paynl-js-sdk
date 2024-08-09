import OrderOutputCheckoutDataCompany from './OrderOutputCheckoutDataCompany.js';

const OrderOutputCheckoutData = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "customer": {
      "description": "The customer provided by the supplier",
      "type": "object",
      "deprecated": false,
      "properties": {
        "email": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "johndoe@example.com"
          ]
        },
        "firstname": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "John"
          ]
        },
        "lastname": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Doe"
          ]
        },
        "dateOfBirth": {
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
        "reference": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Cstmr12"
          ]
        },
        "company": {
          "anyOf": [
            OrderOutputCheckoutDataCompany
          ],
          "nullable": true
        }
      }
    },
    "billingAddress": {
      "readOnly": true,
      "description": "The billing address provided by the supplier",
      "type": "object",
      "deprecated": false,
      "properties": {
        "firstName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "John"
          ]
        },
        "lastName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Doe"
          ]
        },
        "streetName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Curieweg"
          ]
        },
        "streetNumber": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "19"
          ]
        },
        "streetNumberAddition": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "C"
          ]
        },
        "zipCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "3208 KJ"
          ]
        },
        "city": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Spijkenisse"
          ]
        },
        "countryCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "NL"
          ]
        },
        "regionCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "nl-ZH"
          ]
        }
      }
    },
    "shippingAddress": {
      "description": "The delivery address provided by the supplier",
      "type": "object",
      "deprecated": false,
      "properties": {
        "firstName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "John"
          ]
        },
        "lastName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Doe"
          ]
        },
        "streetName": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Curieweg"
          ]
        },
        "streetNumber": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "19"
          ]
        },
        "streetNumberAddition": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "C"
          ]
        },
        "zipCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "3208 KJ"
          ]
        },
        "city": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "Spijkenisse"
          ]
        },
        "countryCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "NL"
          ]
        },
        "regionCode": {
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "nl-ZH"
          ]
        }
      }
    }
  },
  "title": "Order.Output.CheckoutData",
  "x-readme-ref-name": "Order.Output.CheckoutData"
} as const;
export default OrderOutputCheckoutData
