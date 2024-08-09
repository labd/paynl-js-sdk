const PaymentMethodGroups = {
  "properties": {
    "id": {
      "description": "payment method group id",
      "type": "integer"
    },
    "name": {
      "description": "Payment method group name",
      "type": "string"
    },
    "publicName": {
      "description": "Payment method group public name",
      "type": "string"
    },
    "sequence": {
      "description": "Payment method group sequence number",
      "type": "integer"
    },
    "image": {
      "description": "Payment method group image",
      "type": "string"
    },
    "requiredFields": {
      "description": "The required fields of the payment method.",
      "type": "array",
      "items": {
        "properties": {
          "fieldName": {
            "type": "string"
          },
          "mandatory": {
            "type": "string"
          }
        },
        "type": "object"
      }
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
  "title": "PaymentMethodGroups",
  "x-readme-ref-name": "PaymentMethodGroups"
} as const;
export default PaymentMethodGroups
