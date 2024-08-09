import Amount from './Amount.js';
import Stats from './Stats.js';

const PostPayout = {
  "body": {
    "required": [
      "transaction",
      "payment"
    ],
    "properties": {
      "transaction": {
        "required": [
          "type",
          "serviceId",
          "amount"
        ],
        "properties": {
          "type": {
            "description": "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction",
            "type": "string",
            "enum": [
              "MIT",
              "CIT"
            ],
            "examples": [
              "CIT"
            ]
          },
          "serviceId": {
            "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            "type": "string",
            "examples": [
              "SL-####-####"
            ]
          },
          "description": {
            "description": "Is shown on the statement of the payer.",
            "type": "string",
            "maxLength": 32,
            "minLength": 1,
            "examples": [
              "Example description."
            ]
          },
          "reference": {
            "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
            "type": "string",
            "maxLength": 64,
            "minLength": 1,
            "pattern": "^[a-zA-Z0-9]{1,64}$",
            "examples": [
              "12345XXY0123"
            ]
          },
          "exchangeUrl": {
            "description": "The URL where we exchange the status of a transaction.",
            "type": "string",
            "format": "uri",
            "examples": [
              "https://demo.pay.nl/exchange.php"
            ]
          },
          "amount": Amount
        },
        "type": "object"
      },
      "payment": {
        "required": [
          "method",
          "iban"
        ],
        "properties": {
          "method": {
            "description": "The method",
            "type": "string",
            "enum": [
              "iban"
            ],
            "examples": [
              "iban"
            ]
          },
          "iban": {
            "required": [
              "number",
              "holder"
            ],
            "properties": {
              "number": {
                "description": "The International Bank Account Number (IBAN).",
                "type": "string",
                "examples": [
                  "NL69INGB0123456789"
                ]
              },
              "bic": {
                "description": "Business Identifier Codes (BIC/SWIFT).",
                "type": "string",
                "examples": [
                  "INGBNL2A"
                ]
              },
              "holder": {
                "description": "The owner of the bank account.",
                "type": "string",
                "maxLength": 64,
                "minLength": 1,
                "examples": [
                  "John Doe"
                ]
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      },
      "customer": {
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
          "ipAddress": {
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
            "description": "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
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
          }
        },
        "type": "object"
      },
      "stats": Stats
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
      "properties": {
        "transaction": {
          "properties": {
            "id": {
              "description": "The Id of the transaction.",
              "type": "string",
              "examples": [
                "EX-1234-1234-1234"
              ]
            },
            "orderId": {
              "description": "The orderId of the transaction.",
              "type": "string",
              "examples": [
                "0000000000X00000"
              ]
            },
            "serviceId": {
              "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
              "type": "string",
              "examples": [
                "SL-####-####"
              ]
            },
            "description": {
              "description": "Is shown on the statement of the payer.",
              "type": "string",
              "maxLength": 32,
              "minLength": 1,
              "examples": [
                "Example description."
              ]
            },
            "reference": {
              "description": "The merchant identification of this transaction. This field only allows alphanumeric characters",
              "type": "string",
              "maxLength": 64,
              "minLength": 1,
              "pattern": "^[a-zA-Z0-9]{1,64}$",
              "examples": [
                "12345XXY0123"
              ]
            },
            "amount": Amount,
            "createdAt": {
              "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
              "type": "string",
              "format": "date-time",
              "readOnly": true,
              "examples": [
                "2016-06-04T08:15:00+01:00"
              ]
            },
            "modifiedAt": {
              "description": "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
              "type": "string",
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
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostPayout
