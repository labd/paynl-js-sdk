const Country = {
  "properties": {
    "code": {
      "description": "Code of the country",
      "type": "string"
    },
    "isoNumber": {
      "description": "Iso number of the country",
      "type": "integer"
    },
    "name": {
      "description": "Name of the country",
      "type": "string"
    },
    "nationality": {
      "type": [
        "string",
        "null"
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
    "locales": {
      "description": "Country locales",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "phonePrefix": {
      "description": "International phone prefix of country",
      "type": "integer"
    },
    "signupAllowed": {
      "description": "Sign up allowed",
      "type": "boolean"
    },
    "inEU": {
      "description": "Country is in EU",
      "type": "boolean"
    },
    "highRisk": {
      "description": "High Risk country",
      "type": "boolean"
    },
    "ibanLength": {
      "description": "iBan lenght of country",
      "type": "integer"
    },
    "image": {
      "description": "Image of the country flag",
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
  "title": "Country",
  "x-readme-ref-name": "Country"
} as const;
export default Country
