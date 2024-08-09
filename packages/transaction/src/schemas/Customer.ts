import BankAccount from './BankAccount.js';
import Company from './Company.js';

const Customer = {
  "properties": {
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
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Doe"
      ]
    },
    "type": {
      "description": "Either B for business or C for consumer.\n\n`B` `C`",
      "type": "string",
      "enum": [
        "B",
        "C"
      ]
    },
    "ip": {
      "description": "An ip address",
      "type": "string",
      "examples": [
        "213.126.82.230"
      ]
    },
    "birthDate": {
      "description": "Date of birth as defined in ISO-8601.",
      "type": "string",
      "format": "date",
      "examples": [
        "1999-02-15"
      ]
    },
    "gender": {
      "description": "The subject's gender. Choose either M for male or F for female.",
      "type": "string",
      "examples": [
        "M"
      ]
    },
    "phone": {
      "description": "The subject's phone number. Optionally prepended with a + and country code",
      "type": "string",
      "examples": [
        "0031612345678"
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
    "trust": {
      "description": "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
      "type": "integer",
      "maximum": 10,
      "minimum": -10,
      "examples": [
        -5
      ]
    },
    "reference": {
      "description": "Unique reference of the payer. This field only allows alphanumeric characters.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "pattern": "^[a-zA-Z0-9]{1,64}$",
      "examples": [
        "NL87654321"
      ]
    },
    "bankAccount": BankAccount,
    "company": Company
  },
  "type": "object",
  "title": "Customer",
  "x-readme-ref-name": "Customer"
} as const;
export default Customer
