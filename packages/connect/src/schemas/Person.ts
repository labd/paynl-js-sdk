import Address from './Address.js';
import ComplianceDataPerson from './ComplianceDataPerson.js';

const Person = {
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
    "accountCode": {
      "type": "string",
      "examples": [
        "A-1234-4321"
      ]
    },
    "firstName": {
      "description": "The forename (also known as a given name, Christian name or a first name).",
      "type": [
        "string",
        "null"
      ],
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
    "phone": {
      "description": "The subject's phone number. Optionally prepended with a + and country code",
      "type": "string",
      "examples": [
        "0031612345678"
      ]
    },
    "visitAddress": Address,
    "complianceData": ComplianceDataPerson
  },
  "type": "object",
  "title": "Person",
  "x-readme-ref-name": "Person"
} as const;
export default Person
