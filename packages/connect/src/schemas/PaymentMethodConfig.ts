const PaymentMethodConfig = {
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "description": "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
      "type": "integer",
      "examples": [
        "10"
      ]
    },
    "name": {
      "description": "The name of the payment method.",
      "type": "string",
      "examples": [
        "ideal"
      ]
    },
    "description": {
      "type": "string"
    },
    "translations": {
      "description": "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
      "type": [
        "object",
        "null"
      ],
      "uniqueItems": true,
      "additionalProperties": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "examples": [
        "\n    \"translations\": {\n      \"name\": {\n        ...\n      },\n      \"description\": {\n        ...\n      }\n    }\n"
      ]
    },
    "image": {
      "description": "The image of the payment method.",
      "type": "string",
      "examples": [
        "https://admin.pay.nl/images/payment_profiles/10.gif"
      ]
    },
    "options": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "description": "The ID of the issuer.",
            "type": "integer",
            "examples": [
              2
            ]
          },
          "name": {
            "description": "The name of the issuer.",
            "type": "string",
            "examples": [
              "Rabobank"
            ]
          },
          "image": {
            "description": "The image of the issuer.",
            "type": "string",
            "examples": [
              "/issuers/4.svg"
            ]
          }
        },
        "type": "object"
      }
    },
    "settings": {
      "type": "array",
      "items": {
        "properties": {
          "key": {
            "description": "The name of the setting.",
            "type": "string"
          },
          "value": {
            "description": "The value of the setting.",
            "type": "string"
          }
        },
        "type": "object"
      }
    },
    "minAmount": {
      "description": "The minimum amount in cents in order to use this payment_method.",
      "type": "integer",
      "examples": [
        100
      ]
    },
    "maxAmount": {
      "description": "The maximum amount in cents which is allowed for this payment_method.",
      "type": "integer",
      "examples": [
        100000
      ]
    }
  },
  "type": "object",
  "title": "PaymentMethodConfig",
  "x-readme-ref-name": "PaymentMethodConfig"
} as const;
export default PaymentMethodConfig
