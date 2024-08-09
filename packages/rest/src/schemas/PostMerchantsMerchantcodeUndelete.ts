import BankAccount from './BankAccount.js';
import ContactMethod from './ContactMethod.js';
import Location from './Location.js';

const PostMerchantsMerchantcodeUndelete = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "merchantCode": {
            "description": "The merchant id of your company starting with M.",
            "type": "string",
            "examples": [
              "M-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "merchantCode"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "description": "Merchant",
      "properties": {
        "merchant": {
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
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "trademarks": {
              "items": {
                "properties": {
                  "code": {
                    "description": "An identifier for this trademark",
                    "type": "string",
                    "examples": [
                      "TM-0000-0000"
                    ]
                  },
                  "type": {
                    "type": "string"
                  },
                  "name": {
                    "description": "A registered trademark name.",
                    "type": "string"
                  },
                  "status": {
                    "description": "Status of the trademark.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "licenses": {
              "items": {
                "properties": {
                  "code": {
                    "type": "string",
                    "examples": [
                      "AL-1234-4321"
                    ]
                  },
                  "name": {
                    "type": "string"
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
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "service": {
              "properties": {
                "code": {
                  "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                  "type": "string",
                  "examples": [
                    "SL-####-####"
                  ]
                },
                "secret": {
                  "description": "The unique reference for this service.",
                  "type": "string",
                  "examples": [
                    "bade123abf124124abefa311b"
                  ]
                },
                "name": {
                  "description": "The name of your service.",
                  "type": "string",
                  "examples": [
                    "My first service!"
                  ]
                },
                "description": {
                  "description": "The description of the service.",
                  "type": "string"
                },
                "categoryCode": {
                  "description": "The category (code) identifier",
                  "type": "string",
                  "examples": [
                    "CY-1234-4321"
                  ]
                },
                "integrationCode": {
                  "type": "string",
                  "examples": [
                    "PV-1234-4321"
                  ]
                },
                "publication": {
                  "type": "string"
                }
              },
              "type": "object"
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
          "type": "object"
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostMerchantsMerchantcodeUndelete
