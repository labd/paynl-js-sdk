const Category = {
  "properties": {
    "code": {
      "description": "The category (code) identifier",
      "type": "string",
      "maxLength": 40,
      "pattern": "^[A-Z]{1,2}(-\\d{4}){2,}$",
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
    },
    "description": {
      "description": "The category's description.",
      "type": "string",
      "examples": [
        "Kansspelen"
      ]
    },
    "sequence": {
      "description": "The sequence of the category.",
      "type": "integer"
    },
    "available": {
      "description": "The category's availability.",
      "type": "boolean"
    },
    "initialMCC": {
      "description": "The initial MCC of the category.",
      "type": [
        "integer",
        "null"
      ],
      "examples": [
        "General Contractors-Residential and Commercial"
      ]
    },
    "initialRiskCategory": {
      "description": "The initial risk category of the category.",
      "type": "string",
      "examples": [
        "Low risk"
      ]
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
    "paymentMethods": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "description": "The payment profile identifier.",
            "type": "integer",
            "examples": [
              "1630"
            ]
          },
          "name": {
            "description": "The name of the payment profile.",
            "type": "string",
            "examples": [
              "Pin (Maestro)"
            ]
          }
        },
        "type": "object"
      }
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
  "title": "Category",
  "x-readme-ref-name": "Category"
} as const;
export default Category
