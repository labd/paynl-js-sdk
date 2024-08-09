import PaymentProfile from './PaymentProfile.js';

const PaymentMethodsFull = {
  "properties": {
    "id": {
      "description": "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
      "type": "integer"
    },
    "name": {
      "description": "The name of the payment method.",
      "type": "string"
    },
    "description": {
      "description": "The description of the payment method.",
      "type": "string"
    },
    "sequence": {
      "description": "The sequence of the payment method.",
      "type": "integer"
    },
    "public": {
      "description": "Public status of the payment method.",
      "type": "boolean"
    },
    "status": {
      "description": "Active status of payment method.",
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
      "type": "string"
    },
    "paymentProfiles": {
      "description": "The payment profiles of the payment method.",
      "type": "array",
      "items": PaymentProfile
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
      "description": "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
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
  "title": "PaymentMethodsFull",
  "x-readme-ref-name": "PaymentMethodsFull"
} as const;
export default PaymentMethodsFull
