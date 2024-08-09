import BankAccount from './BankAccount.js';

const TurnoverGroup = {
  "required": [
    "code",
    "name",
    "default",
    "description",
    "paymentDescription",
    "merchant",
    "bankAccount",
    "createdAt",
    "createdBy",
    "modifiedAt",
    "modifiedBy",
    "deletedAt",
    "deletedBy"
  ],
  "properties": {
    "code": {
      "type": "string",
      "examples": [
        "CT-1234-4321"
      ]
    },
    "name": {
      "type": "string"
    },
    "default": {
      "type": "boolean"
    },
    "description": {
      "type": "string"
    },
    "paymentDescription": {
      "type": [
        "string",
        "null"
      ]
    },
    "merchant": {
      "required": [
        "code",
        "status",
        "name"
      ],
      "properties": {
        "code": {
          "description": "The merchant id of your company starting with M.",
          "type": "string",
          "examples": [
            "M-1234-4321"
          ]
        },
        "status": {
          "description": "Merchant state",
          "type": "string",
          "examples": [
            "ACTIVE"
          ]
        },
        "name": {
          "description": "The name of your merchant.",
          "type": "string",
          "maxLength": 128,
          "minLength": 2,
          "examples": [
            "CompanyName"
          ]
        }
      },
      "type": "object"
    },
    "bankAccount": {
      "required": [
        "code",
        "status",
        "method",
        "iban"
      ],
      "properties": {
        "code": {
          "description": "The merchant bank account id of your company starting with BA.",
          "type": "string",
          "examples": [
            "BA-1234-4321"
          ]
        },
        "status": {
          "description": "The current check status of the clearing account.",
          "type": "string",
          "examples": [
            "NOT_CHECKED"
          ]
        },
        "method": {
          "description": "The method to add the clearing account. NOTE: Only 'iban' is supported for now!",
          "type": "string",
          "examples": [
            "iban"
          ]
        },
        "iban": BankAccount
      },
      "type": [
        "object",
        "null"
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
  "title": "TurnoverGroup",
  "x-readme-ref-name": "TurnoverGroup"
} as const;
export default TurnoverGroup
