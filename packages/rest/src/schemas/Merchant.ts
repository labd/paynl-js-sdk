import BankAccount from './BankAccount.js';
import Category from './Category.js';
import ContactMethod from './ContactMethod.js';
import Location from './Location.js';
import Partner from './Partner.js';
import Person from './Person.js';
import Trademark from './Trademark.js';
import WebsiteUrl from './WebsiteUrl.js';

const Merchant = {
  "properties": {
    "code": {
      "description": "The merchant id of your company starting with M.",
      "type": "string",
      "examples": [
        "M-1234-4321"
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
    },
    "publicName": {
      "description": "The public name of your merchant.",
      "type": "string",
      "examples": [
        "CompanyName"
      ]
    },
    "boardingStatus": {
      "description": "The status of the boarding process for this merchant.\n\n`REGISTERED` `ONBOARDING` `ACCEPTED` `SUSPENDED` `OFFBOARDED`",
      "type": "string",
      "enum": [
        "REGISTERED",
        "ONBOARDING",
        "ACCEPTED",
        "SUSPENDED",
        "OFFBOARDED"
      ],
      "examples": [
        "REGISTERED"
      ]
    },
    "status": {
      "description": "Merchant state",
      "type": "string",
      "examples": [
        "ACTIVE"
      ]
    },
    "payoutStatus": {
      "description": "Merchant payout state\n\n`ENABLED` `DISABLED`",
      "type": "string",
      "enum": [
        "ENABLED",
        "DISABLED"
      ],
      "examples": [
        "Enabled"
      ]
    },
    "coc": {
      "description": "Your Chamber of commerce registration number. This format differs per country.",
      "type": "string",
      "examples": [
        "12345678"
      ]
    },
    "vat": {
      "description": "Value added tax identification number (VAT identification number).",
      "type": "string",
      "examples": [
        "NL807960147B01"
      ]
    },
    "companyTypeId": {
      "description": "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
      "type": "string",
      "examples": [
        "1"
      ]
    },
    "countryCode": {
      "description": "The country code consisting of 2 uppercase letters",
      "type": "string",
      "examples": [
        "NL"
      ]
    },
    "contractLanguage": {
      "description": "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
      "type": "string",
      "examples": [
        "nl_NL"
      ]
    },
    "contractPackage": {
      "type": "string"
    },
    "accountManager": {
      "description": "The email address of the active account manager.",
      "type": "string",
      "examples": [
        "account.manager@pay.nl"
      ]
    },
    "website": {
      "description": "The website.",
      "type": "string",
      "format": "uri",
      "examples": [
        "https://www.my-website.com"
      ]
    },
    "categories": {
      "type": "array",
      "items": Category
    },
    "integrations": {
      "type": "array",
      "items": {
        "properties": {
          "code": {
            "description": "The plugin identifier.",
            "type": "string",
            "examples": [
              "PL-3010-1000"
            ]
          },
          "name": {
            "type": "string"
          }
        },
        "type": "object"
      }
    },
    "clearingAccounts": {
      "type": "array",
      "items": {
        "required": [
          "code",
          "status",
          "method",
          "iban"
        ],
        "properties": {
          "code": {
            "type": "string"
          },
          "status": {
            "type": "string",
            "enum": [
              "APPROVED",
              "DENIED",
              "NOT_CHECKED"
            ],
            "description": "`APPROVED` `DENIED` `NOT_CHECKED`"
          },
          "method": {
            "type": "string",
            "enum": [
              "iban"
            ],
            "description": "`iban`"
          },
          "iban": BankAccount
        },
        "type": "object"
      }
    },
    "postalAddress": Location,
    "visitAddress": Location,
    "contactMethods": {
      "type": "array",
      "items": ContactMethod
    },
    "authenticationTokens": {
      "type": "array",
      "items": {
        "properties": {
          "authenticationTokens": {
            "type": "string"
          }
        },
        "type": "object"
      }
    },
    "trademarks": {
      "type": "array",
      "items": Trademark
    },
    "licenses": {
      "type": "array",
      "items": Person
    },
    "services": {
      "type": "array",
      "items": {
        "properties": {
          "code": {
            "type": "string"
          },
          "secret": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "status": {
            "type": "string"
          },
          "category": {
            "properties": {
              "code": {
                "description": "The category (code) identifier",
                "type": "string",
                "maxLength": 40,
                "pattern": "^[A-Z]{1,2}(-\\d{4}){2,}$",
                "examples": [
                  "CY-1234-4321"
                ]
              },
              "name": {
                "description": "The category name.",
                "type": "string",
                "examples": [
                  "Digitale diensten gambling (kansspelen)"
                ]
              }
            },
            "type": "object"
          },
          "integration": {
            "properties": {
              "code": {
                "description": "The plugin identifier.",
                "type": "string",
                "examples": [
                  "PL-3010-1000"
                ]
              },
              "name": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "website": {
            "description": "The website URL.",
            "type": "string",
            "examples": [
              "https://www.pay.nl"
            ]
          },
          "urls": {
            "type": "array",
            "items": WebsiteUrl
          }
        },
        "type": "object"
      }
    },
    "partner": {
      "type": "array",
      "items": Partner
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
    "acceptedAt": {
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
    "suspendedAt": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "suspendedBy": {
      "description": "SUSPENDED_BY_DESCRIPTION",
      "type": [
        "string",
        "null"
      ],
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
    },
    "reviewedAt": {
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
    "nextReviewDate": {
      "type": "string",
      "format": "date-time"
    }
  },
  "type": "object",
  "title": "Merchant",
  "x-readme-ref-name": "Merchant"
} as const;
export default Merchant
