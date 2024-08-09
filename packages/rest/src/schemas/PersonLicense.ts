import Document from './Document.js';
import MerchantMinimal from './MerchantMinimal.js';
import NotificationGroup from './NotificationGroup.js';
import Platform from './Platform.js';

const PersonLicense = {
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
    "complianceData": {
      "properties": {
        "authorizedToSign": {
          "description": "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)\n\n`no` `alone` `shared`",
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
        "ubo": {
          "description": "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest\n\n`no` `direct` `indirect` `pseudo`",
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
    },
    "notificationGroup": NotificationGroup,
    "merchant": MerchantMinimal,
    "platform": Platform,
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
  "title": "PersonLicense",
  "x-readme-ref-name": "PersonLicense"
} as const;
export default PersonLicense
