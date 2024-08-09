import Address from './Address.js';
import Amount from './Amount.js';
import Company from './Company.js';
import Product from './Product.js';
import Stats from './Stats.js';

const PostVouchersTransaction = {
  "body": {
    "required": [
      "voucher"
    ],
    "properties": {
      "transaction": {
        "required": [
          "serviceId",
          "type",
          "amount",
          "ipAddress"
        ],
        "properties": {
          "type": {
            "description": "Defines the type of the transaction. Possible values are: POS = Point of sale, ECOM",
            "type": "string",
            "enum": [
              "ECOM",
              "POS"
            ],
            "examples": [
              "POS"
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
      "voucher": {
        "required": [
          "cardNumber"
        ],
        "properties": {
          "cardNumber": {
            "description": "The number on your voucher card.",
            "type": "string",
            "examples": [
              "12345678"
            ]
          },
          "pinCode": {
            "description": "Your pincode.",
            "type": "string",
            "examples": [
              "1234"
            ]
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
          },
          "company": Company
        },
        "type": "object"
      },
      "order": {
        "properties": {
          "deliveryDate": {
            "description": "The date of delivery.",
            "type": "string",
            "format": "date",
            "examples": [
              "1999-02-15"
            ]
          },
          "invoiceDate": {
            "description": "The date of the invoice",
            "type": "string",
            "format": "date",
            "examples": [
              "1999-02-15"
            ]
          },
          "deliveryAddress": Address,
          "invoiceAddress": Address,
          "products": {
            "type": "array",
            "items": Product
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
        "id": {
          "description": "The Id of the transaction.",
          "type": "string",
          "examples": [
            "EX-1234-1234-1234"
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
        "manualTransferCode": {
          "description": "Payment reference used to identify manual bank transfers",
          "type": "string",
          "examples": [
            "0000 0000 0000 0000"
          ]
        },
        "orderId": {
          "description": "The orderId of the transaction.",
          "type": "string",
          "examples": [
            "0000000000X00000"
          ]
        },
        "paymentUrl": {
          "description": "The payment URL for this transaction",
          "type": "string",
          "format": "uri"
        },
        "amount": Amount,
        "expire": {
          "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "created": {
          "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
          "format": "date-time",
          "readOnly": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "modified": {
          "description": "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
          "format": "date-time",
          "readOnly": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    },
    "422": {
      "properties": {
        "errors": {
          "properties": {
            "general": {
              "properties": {
                "code": {
                  "description": "The unique code for this error",
                  "type": "string",
                  "examples": [
                    "PAY-3000"
                  ]
                },
                "message": {
                  "description": "The description of the error",
                  "type": "string",
                  "examples": [
                    "This is an invalid giftcard, we are unable to find the giftcard brand."
                  ]
                }
              },
              "type": "object"
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
export default PostVouchersTransaction
