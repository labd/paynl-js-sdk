import Address from './Address.js';
import ComplianceData from './ComplianceData.js';
import Document from './Document.js';

const PersonComplianceMinimal = {
  "title": "PersonComplianceMinimal",
  "x-readme-ref-name": "PersonComplianceMinimal",
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "examples": [
        "AL-1234-4321"
      ]
    },
    "secret": {
      "type": "string",
      "examples": [
        "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
      ]
    },
    "name": {
      "type": "string"
    },
    "firstName": {
      "description": "The forename (also known as a given name, Christian name or a first name).",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "John"
      ]
    },
    "lastName": {
      "description": "The surname (also known as a family name or a last name).",
      "type": "string",
      "maxLength": 128,
      "minLength": 1,
      "examples": [
        "Doe"
      ]
    },
    "email": {
      "description": "An email address.",
      "type": "string",
      "format": "email",
      "examples": [
        "sandbox@pay.nl"
      ]
    },
    "language": {
      "description": "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages\n\n`NL` `EN` `DE` `FR` `IT` `ES`",
      "type": "string",
      "enum": [
        "NL",
        "EN",
        "DE",
        "FR",
        "IT",
        "ES"
      ],
      "examples": [
        "NL"
      ]
    },
    "visitAddress": Address,
    "complianceData": ComplianceData,
    "documents": Document,
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
    "acceptedAt": {
      "description": "The date and time an account was accepted.",
      "type": [
        "string",
        "null"
      ],
      "pattern": "^A(T)?(-\\d{4}){2}$",
      "readOnly": true,
      "examples": [
        "2023-11-01T10:19:25+01:00"
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
  }
} as const;
export default PersonComplianceMinimal
