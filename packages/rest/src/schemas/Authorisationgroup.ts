const Authorisationgroup = {
  "properties": {
    "code": {
      "description": "Authorisation group identifier",
      "type": "string",
      "examples": [
        "AG-1234-4321"
      ]
    },
    "name": {
      "description": "Name of the authorisation group",
      "type": "string",
      "examples": [
        "John Doe"
      ]
    },
    "description": {
      "description": "Description of the authorisation group",
      "type": "string",
      "examples": [
        "John Doe of test company"
      ]
    },
    "purpose": {
      "properties": {
        "account": {
          "type": "boolean",
          "examples": [
            true
          ]
        },
        "token": {
          "type": "boolean",
          "examples": [
            true
          ]
        },
        "relation": {
          "type": "boolean",
          "examples": [
            true
          ]
        },
        "merchant": {
          "type": "boolean",
          "examples": [
            true
          ]
        }
      },
      "type": "object"
    },
    "public": {
      "description": "Indicate if the authorisation group is public",
      "type": "boolean",
      "examples": [
        true
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
    "createdBy": {
      "description": "The reference to an account or token whom created the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
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
    "modifiedBy": {
      "description": "The reference to an account or token whom modified the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
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
    },
    "deletedBy": {
      "description": "The reference to an account or token whom deleted the entity",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "A-1234-4321"
      ]
    }
  },
  "type": "object",
  "title": "Authorisationgroup",
  "x-readme-ref-name": "Authorisationgroup"
} as const;
export default Authorisationgroup
