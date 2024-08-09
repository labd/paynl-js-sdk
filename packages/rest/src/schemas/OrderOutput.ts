import OrderOutputCheckoutData from './OrderOutputCheckoutData.js';
import OrderOutputPayment from './OrderOutputPayment.js';

const OrderOutput = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "id": {
      "description": "The unique identifier of your order.",
      "type": "string",
      "examples": [
        "655b2da5-5223-8f32-1aee-737862302XXX"
      ]
    },
    "serviceId": {
      "description": "The Service ID used for creating this order",
      "type": "string",
      "examples": [
        "SL-1234-1234"
      ]
    },
    "description": {
      "description": "The description given for this order.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Instore Terminal Order #27"
      ]
    },
    "reference": {
      "description": "The reference given for this order.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "REF1234"
      ]
    },
    "manualTransferCode": {
      "description": "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
      "type": "string",
      "examples": [
        "1234 1234 1234 1234"
      ]
    },
    "orderId": {
      "description": "The order ID as you would see it within the PAY. platform.",
      "type": "string",
      "examples": [
        "52305407020X2325"
      ]
    },
    "uuid": {
      "description": "The UUID that can be used to create a QR code for this order.",
      "type": "string",
      "examples": [
        "ad0e7378-6230-2325-5230-5407020a2XXX"
      ]
    },
    "customerKey": {
      "readOnly": true,
      "description": "An identifier for the customer",
      "type": [
        "string",
        "null"
      ]
    },
    "status": {
      "description": "The status of the order.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "code": {
          "description": "The numeric status code.",
          "type": [
            "integer",
            "null"
          ],
          "examples": [
            20
          ]
        },
        "action": {
          "description": "The human readable status string",
          "type": [
            "string",
            "null"
          ],
          "examples": [
            "PENDING"
          ]
        }
      }
    },
    "receipt": {
      "readOnly": true,
      "description": "Base64 encoded string of the receipt for this order when it's paid.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "<base64 string>"
      ]
    },
    "integration": {
      "description": "Information about your integration.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "test": {
          "description": "Whether this order was created in Test Mode, defaults to false.",
          "type": "boolean"
        }
      }
    },
    "amount": {
      "description": "The amount for this order.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "value": {
          "type": "integer",
          "examples": [
            1
          ]
        },
        "currency": {
          "type": "string",
          "examples": [
            "EUR"
          ]
        }
      }
    },
    "authorizedAmount": {
      "description": "The amount of the order that is authorized.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "value": {
          "type": "integer",
          "examples": [
            1
          ]
        },
        "currency": {
          "type": "string",
          "examples": [
            "EUR"
          ]
        }
      }
    },
    "capturedAmount": {
      "description": "The amount of the order that is captured.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "value": {
          "type": "integer",
          "examples": [
            1
          ]
        },
        "currency": {
          "type": "string",
          "examples": [
            "EUR"
          ]
        }
      }
    },
    "checkoutData": {
      "anyOf": [
        OrderOutputCheckoutData
      ],
      "readOnly": true,
      "description": "Standardized customer data provided by the supplier",
      "nullable": true
    },
    "payments": {
      "items": OrderOutputPayment,
      "readOnly": true,
      "description": "The payments that are linked to this order.",
      "type": "array"
    },
    "createdAt": {
      "description": "The date-time at which this order was created in our system.",
      "type": "string",
      "format": "date-time"
    },
    "createdBy": {
      "description": "The API token or Service ID that created this order.",
      "type": [
        "string",
        "null"
      ]
    },
    "modifiedAt": {
      "description": "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "modifiedBy": {
      "description": "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
      "type": [
        "string",
        "null"
      ]
    },
    "expiresAt": {
      "description": "The date-time at which this order expires.",
      "type": "string",
      "format": "date-time"
    },
    "completedAt": {
      "description": "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "links": {
      "readOnly": true,
      "description": "The links that can be used to interact with this order.",
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    }
  },
  "title": "Order.Output",
  "x-readme-ref-name": "Order.Output"
} as const;
export default OrderOutput
