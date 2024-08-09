const OrderOutputPayment = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "id": {
      "description": "The unique ID of this payment",
      "type": "string",
      "examples": [
        "2d29c301-c71d-4016-8239-4ee3194a234e"
      ]
    },
    "paymentMethod": {
      "description": "Information of this payments' payment method.",
      "type": "object",
      "deprecated": false,
      "properties": {
        "id": {
          "type": [
            "integer",
            "null"
          ]
        },
        "input": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "customerType": {
      "type": [
        "string",
        "null"
      ]
    },
    "customerKey": {
      "description": "A hashed string identifying the customer itself without exposing sensitive data.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731"
      ]
    },
    "customerId": {
      "description": "The identifier of the customer as known by the payment method. For example the IBAN.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "GB33BUKB20201555555555"
      ]
    },
    "customerName": {
      "description": "The name of the customer as known by the payment method.",
      "type": [
        "string",
        "null"
      ]
    },
    "ipAddress": {
      "description": "The IP Address of the customer that interacted with this payment.",
      "type": [
        "string",
        "null"
      ]
    },
    "secureStatus": {
      "description": "Whether or not the customer was 3DS challenged.",
      "type": "boolean"
    },
    "paymentVerificationMethod": {
      "description": "A numeric id of how this payment was verified.",
      "type": [
        "integer",
        "null"
      ]
    },
    "status": {
      "description": "The status of this payment.",
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
    "currencyAmount": {
      "description": "The amount of this payment in the currency of the order.",
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
    "amount": {
      "description": "The amount of this payment in the currency in which it was processed.",
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
      "description": "The amount of this payment that is authorized.",
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
      "description": "The amount of this payment that is captured.",
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
    "supplierData": {
      "description": "Relevant data returned by the supplier.",
      "type": [
        "array",
        "null"
      ],
      "items": {
        "type": "string"
      }
    }
  },
  "title": "Order.Output.Payment",
  "x-readme-ref-name": "Order.Output.Payment"
} as const;
export default OrderOutputPayment
