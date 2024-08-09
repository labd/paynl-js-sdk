import Link from './Link.js';

const GetPaymentverificationmethods = {
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "paymentVerificationMethods": {
          "type": "array",
          "items": {
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
            "type": "object"
          }
        },
        "_links": {
          "type": "array",
          "items": Link
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetPaymentverificationmethods
