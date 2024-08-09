import LineType from './LineType.js';

const ClearingDataGroup = {
  "required": [
    "id",
    "name",
    "translations",
    "clearingLineTypes",
    "createdAt",
    "modifiedAt",
    "deletedAt"
  ],
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
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
    "clearingLineTypes": {
      "type": "array",
      "items": LineType
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
  "title": "ClearingDataGroup",
  "x-readme-ref-name": "ClearingDataGroup"
} as const;
export default ClearingDataGroup
