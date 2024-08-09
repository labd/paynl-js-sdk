const PaymentProfile = {
  "properties": {
    "id": {
      "description": "The payment profile identifier.",
      "type": "integer"
    },
    "name": {
      "description": "The name of the payment profile.",
      "type": "string"
    },
    "publicName": {
      "description": "Public name of the payment method",
      "type": "string"
    },
    "public": {
      "description": "Check if payment method is public",
      "type": "boolean"
    },
    "selectable": {
      "description": "check if payment method is selectable",
      "type": "boolean"
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
      "type": "string"
    },
    "issuers": {
      "description": "Issuers linked to payment method",
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "type": "object"
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "properties": {
          "code": {
            "description": "The category (code) identifier",
            "type": "string",
            "examples": [
              "CY-1234-4321"
            ]
          },
          "name": {
            "description": "The category name.",
            "type": "string",
            "examples": [
              "Digitale diensten gambling (kansspelen)"
            ]
          }
        },
        "type": "object"
      }
    },
    "paymentMethodGroup": {
      "description": "Payment method group where payment method is assigned to",
      "type": "string"
    },
    "paymentType": {
      "description": "Payment type",
      "type": "string"
    },
    "createdAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "modifiedAt": {
      "description": "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "deletedAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    }
  },
  "type": "object",
  "title": "PaymentProfile",
  "x-readme-ref-name": "PaymentProfile"
} as const;
export default PaymentProfile
