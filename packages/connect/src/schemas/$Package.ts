const $Package = {
  "properties": {
    "code": {
      "description": "Code of the package.",
      "type": "string"
    },
    "name": {
      "description": "Name of the package.",
      "type": "string"
    },
    "description": {
      "description": "Description of the package.",
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
    "partnerType": {
      "description": "Parter types linked to the package.",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "connectionTypeOnRegistration": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "ALLIANCE",
        "BP",
        "ISO",
        "PARTNER"
      ],
      "description": "`ALLIANCE` `BP` `ISO` `PARTNER`"
    },
    "actionCode": {
      "description": "Action code linked to the package.",
      "type": "string"
    },
    "actionCodeValidUntil": {
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
    },
    "contractPackage": {
      "description": "The contract package where this package is linked to.",
      "type": "string"
    },
    "monthlyFee": {
      "description": "Monthly Fee of the package.",
      "type": "integer"
    },
    "discountPercentage": {
      "description": "Discount percentage of the package.",
      "type": "integer"
    },
    "public": {
      "description": "If it is an public package.",
      "type": "boolean"
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
  "title": "Package",
  "x-readme-ref-name": "Package"
} as const;
export default $Package
