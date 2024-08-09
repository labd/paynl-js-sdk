import IssuerPaymentMethod from './IssuerPaymentMethod.js';

const Issuer = {
  "properties": {
    "id": {
      "description": "The identifier for this issuer",
      "type": "integer",
      "examples": [
        "1"
      ]
    },
    "code": {
      "description": "A code for this issuer",
      "type": "string",
      "examples": [
        "PB-0000-0000"
      ]
    },
    "name": {
      "description": "The issuer name.",
      "type": "string"
    },
    "bic": {
      "description": "The Bank Identifier Code.",
      "type": "string"
    },
    "issuerId": {
      "description": "ID of the issuer.",
      "type": "string"
    },
    "available": {
      "description": "Is available.",
      "type": "boolean"
    },
    "status": {
      "description": "Status.\n\n`active` `inactive`",
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    },
    "image": {
      "description": "Image of the integration.",
      "type": "string"
    },
    "paymentMethod": IssuerPaymentMethod,
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
  "title": "Issuer",
  "x-readme-ref-name": "Issuer"
} as const;
export default Issuer
