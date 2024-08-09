import Document from './Document.js';
import MerchantMinimal from './MerchantMinimal.js';
import NotificationGroup from './NotificationGroup.js';
import Platform from './Platform.js';

const PostLicenses = {
  "body": {
    "required": [
      "person"
    ],
    "properties": {
      "merchantCode": {
        "description": "The merchant id of your company starting with M.",
        "type": "string",
        "examples": [
          "M-1234-4321"
        ]
      },
      "person": {
        "properties": {
          "name": {
            "type": "string",
            "examples": [
              "John Doe"
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
            "type": "string",
            "examples": [
              "nl_NL"
            ]
          },
          "phone": {
            "description": "The subject's phone number. Optionally prepended with a + and country code",
            "type": "string",
            "examples": [
              "0031612345678"
            ]
          },
          "newsletter": {
            "type": "boolean"
          },
          "gender": {
            "type": "string",
            "enum": [
              "M",
              "F"
            ],
            "examples": [
              "M"
            ]
          },
          "visitAddress": {
            "required": [
              "streetName",
              "streetNumber",
              "zipCode",
              "city",
              "countryCode"
            ],
            "properties": {
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
          "notificationGroup": {
            "properties": {
              "technical": {
                "type": "boolean"
              },
              "financial": {
                "type": "boolean"
              },
              "operations": {
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "platform": {
            "properties": {
              "loginAccount": {
                "type": "boolean",
                "examples": [
                  true
                ]
              },
              "loginTpa": {
                "type": "boolean"
              },
              "authorisation": {
                "type": "string",
                "enum": [
                  "all",
                  "specified"
                ],
                "examples": [
                  "all"
                ]
              },
              "authorisationGroups": {
                "type": "array",
                "items": {
                  "type": "string",
                  "examples": [
                    "AG-1234-4321"
                  ]
                }
              }
            },
            "type": "object"
          },
          "complianceData": {
            "properties": {
              "pep": {
                "description": "Indicate if the person is a Politically Exposed Person (PEP).",
                "type": "boolean",
                "examples": [
                  "true"
                ]
              },
              "pepDescription": {
                "description": "Describe in your own words why this person is a PEP.",
                "type": "string",
                "examples": [
                  "The person is active as an alderman in the municipality where he lives."
                ]
              },
              "authorizedToSign": {
                "description": "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                "type": "string",
                "enum": [
                  "no",
                  "alone",
                  "shared"
                ],
                "examples": [
                  "shared"
                ]
              },
              "dateOfBirth": {
                "description": "Date of birth of the person.",
                "type": "string",
                "format": "date-time",
                "examples": [
                  "1999-12-12"
                ]
              },
              "nationality": {
                "description": "Nationality of the person.",
                "type": "string",
                "examples": [
                  "NL"
                ]
              },
              "ubo": {
                "description": "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                "type": "string",
                "enum": [
                  "no",
                  "direct",
                  "indirect",
                  "pseudo"
                ],
                "examples": [
                  "direct"
                ]
              },
              "uboPercentage": {
                "description": "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                "type": "integer",
                "examples": [
                  "25"
                ]
              },
              "relationshipDescription": {
                "description": "Describe in your own words the relation the person has with this company.",
                "type": "string",
                "examples": [
                  "John Doe of test company"
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
  },
  "response": {
    "201": {
      "properties": {
        "code": {
          "description": "License code.",
          "type": "string",
          "examples": [
            "AL-1234-4321"
          ]
        },
        "name": {
          "description": "Name of the license.",
          "type": "string",
          "examples": [
            "John Doe"
          ]
        },
        "language": {
          "description": "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
          "type": "string",
          "examples": [
            "NL"
          ]
        },
        "notificationGroup": NotificationGroup,
        "platform": Platform,
        "merchant": MerchantMinimal,
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
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostLicenses
