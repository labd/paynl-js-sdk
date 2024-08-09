import Amount from './Amount.js';
import Company from './Company.js';
import Integration from './Integration.js';
import Notification from './Notification.js';
import Product from './Product.js';
import Stats from './Stats.js';
import TransferData from './TransferData.js';

const PostTransactions = {
  "body": {
    "required": [
      "amount",
      "returnUrl"
    ],
    "properties": {
      "serviceId": {
        "description": "The ID of your service. Required if you authenticate with AT-code/token. You can find the service ID here: https://my.pay.nl/programs/programs",
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
      "expire": {
        "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
        "type": "string",
        "format": "date-time",
        "examples": [
          "2016-06-04T08:15:00+01:00"
        ]
      },
      "returnUrl": {
        "description": "The URL where the payer has to be send to after the payment.",
        "type": "string",
        "format": "uri",
        "examples": [
          "https://demo.pay.nl/complete/"
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
      "amount": Amount,
      "paymentMethod": {
        "properties": {
          "id": {
            "description": "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            "type": "integer",
            "examples": [
              "10"
            ]
          },
          "subId": {
            "description": "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
            "type": "string",
            "examples": [
              "10"
            ]
          }
        },
        "type": "object"
      },
      "integration": Integration,
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
          "countryCode": {
            "description": "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
            "type": "string",
            "maxLength": 2,
            "minLength": 2,
            "examples": [
              "NL"
            ]
          },
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
          "deliveryAddress": {
            "required": [
              "streetName",
              "streetNumber",
              "zipCode",
              "city"
            ],
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
              "streetName": {
                "description": "The name of the street",
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "examples": [
                  "Visitlane"
                ]
              },
              "streetNumber": {
                "description": "The street number",
                "type": "string",
                "maxLength": 32,
                "minLength": 1,
                "examples": [
                  "13"
                ]
              },
              "streetNumberExtension": {
                "description": "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                "type": "string",
                "maxLength": 32,
                "minLength": 1,
                "examples": [
                  "b1"
                ]
              },
              "zipCode": {
                "description": "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                "type": "string",
                "maxLength": 16,
                "minLength": 1,
                "examples": [
                  "5678CD"
                ]
              },
              "city": {
                "description": "The name of a city",
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "examples": [
                  "Amsterdam"
                ]
              },
              "regionCode": {
                "description": "Region code (iso-3166-2)",
                "type": "string",
                "examples": [
                  "ZH"
                ]
              },
              "countryCode": {
                "description": "The country code consisting of 2 uppercase letters",
                "type": "string",
                "maxLength": 2,
                "minLength": 2,
                "examples": [
                  "NL"
                ]
              }
            },
            "type": "object"
          },
          "invoiceAddress": {
            "required": [
              "streetName",
              "streetNumber",
              "zipCode",
              "city"
            ],
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
              "streetName": {
                "description": "The name of the street",
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "examples": [
                  "Visitlane"
                ]
              },
              "streetNumber": {
                "description": "The street number",
                "type": "string",
                "maxLength": 32,
                "minLength": 1,
                "examples": [
                  "13"
                ]
              },
              "streetNumberExtension": {
                "description": "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                "type": "string",
                "maxLength": 32,
                "minLength": 1,
                "examples": [
                  "b1"
                ]
              },
              "zipCode": {
                "description": "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                "type": "string",
                "maxLength": 16,
                "minLength": 1,
                "examples": [
                  "5678CD"
                ]
              },
              "city": {
                "description": "The name of a city",
                "type": "string",
                "maxLength": 128,
                "minLength": 1,
                "examples": [
                  "Amsterdam"
                ]
              },
              "regionCode": {
                "description": "Region code (iso-3166-2)",
                "type": "string",
                "examples": [
                  "ZH"
                ]
              },
              "countryCode": {
                "description": "The country code consisting of 2 uppercase letters",
                "type": "string",
                "maxLength": 2,
                "minLength": 2,
                "examples": [
                  "NL"
                ]
              }
            },
            "type": "object"
          },
          "products": {
            "type": "array",
            "items": Product
          }
        },
        "type": "object"
      },
      "stats": Stats,
      "notification": Notification,
      "transferData": {
        "type": "array",
        "items": TransferData
      }
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
        "statusUrl": {
          "description": "Api url to get status details of the transaction.",
          "type": "string"
        },
        "amount": Amount,
        "uuid": {
          "description": "The uuid of the QR code.",
          "type": "string"
        },
        "hash": {
          "description": "Api url to get status details of the transaction.",
          "type": "string"
        },
        "cancelUrl": {
          "description": "Api url to get status details of the transaction.",
          "type": "string"
        },
        "orderStatusUrl": {
          "description": "Api url to get status details of a pin transaction.",
          "type": "string",
          "examples": [
            "https://domain.com/api/status"
          ]
        },
        "expire": {
          "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "readOnly": true,
          "deprecated": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "expiresAt": {
          "description": "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
          "format": "date-time",
          "readOnly": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "created": {
          "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "readOnly": true,
          "deprecated": true,
          "examples": [
            "2016-06-04T08:15:00+01:00"
          ]
        },
        "createdAt": {
          "description": "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
          "type": "string",
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
        "modified": {
          "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "readOnly": true,
          "deprecated": true,
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
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostTransactions
