const TerminalBrand = {
  "properties": {
    "id": {
      "description": "The terminal contract enddate.",
      "type": "integer"
    },
    "name": {
      "description": "The terminal contract enddate.",
      "type": "string"
    },
    "image": {
      "description": "The terminal contract enddate.",
      "type": "string"
    },
    "acquirer": {
      "description": "The terminal acquirer",
      "type": "string"
    },
    "acquirerTid": {
      "description": "The terminal contract enddate.",
      "type": "string"
    },
    "acquirerMid": {
      "description": "The terminal contract number",
      "type": "string"
    },
    "acquirerChecksum": {
      "description": "The terminal contract enddate.",
      "type": "string"
    },
    "paymentTypes": {
      "description": "The terminal payment type.",
      "type": "array",
      "items": {
        "properties": {
          "paymentType": {
            "type": "string"
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
  "title": "TerminalBrand",
  "x-readme-ref-name": "TerminalBrand"
} as const;
export default TerminalBrand
