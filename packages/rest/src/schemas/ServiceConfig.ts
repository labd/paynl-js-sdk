import Layout from './Layout.js';
import MerchantConfig from './MerchantConfig.js';
import PaymentMethodConfig from './PaymentMethodConfig.js';
import ServiceConfigCategory from './ServiceConfigCategory.js';
import TradeName from './TradeName.js';
import TurnOverGroup from './TurnOverGroup.js';

const ServiceConfig = {
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
    "testMode": {
      "description": "Indicates if the service is in testmode or not, possible values: false or true",
      "type": "boolean"
    },
    "name": {
      "description": "The name of your service.",
      "type": "string",
      "examples": [
        "My first service!"
      ]
    },
    "translations": {
      "description": "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
      "type": [
        "object",
        "null"
      ],
      "uniqueItems": true,
      "additionalProperties": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "examples": [
        "\n    \"translations\": {\n      \"name\": {\n        ...\n      },\n      \"description\": {\n        ...\n      }\n    }\n"
      ]
    },
    "status": {
      "description": "The state of the service",
      "type": "string"
    },
    "merchant": {
      "items": MerchantConfig,
      "type": [
        "array",
        "null"
      ]
    },
    "category": {
      "nullable": true,
      "oneOf": [
        ServiceConfigCategory
      ]
    },
    "mcc": {
      "type": [
        "integer",
        "null"
      ]
    },
    "turnOverGroup": {
      "nullable": true,
      "oneOf": [
        TurnOverGroup
      ]
    },
    "layout": {
      "nullable": true,
      "oneOf": [
        Layout
      ]
    },
    "tradeName": {
      "nullable": true,
      "oneOf": [
        TradeName
      ]
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
    },
    "checkoutOptions": {
      "type": "array",
      "items": {
        "properties": {
          "tag": {
            "description": "The tag of the checkout option.",
            "type": "string",
            "examples": [
              "PM_10"
            ]
          },
          "name": {
            "description": "The name of the checkout option.",
            "type": "string",
            "examples": [
              "iDEAL"
            ]
          },
          "translations": {
            "description": "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            "type": [
              "object",
              "null"
            ],
            "uniqueItems": true,
            "additionalProperties": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "examples": [
              "\n    \"translations\": {\n      \"name\": {\n        ...\n      },\n      \"description\": {\n        ...\n      }\n    }\n"
            ]
          },
          "image": {
            "description": "The image of the checkout option.",
            "type": "string",
            "examples": [
              "/payment_methods/1.svg"
            ]
          },
          "paymentMethods": {
            "type": "array",
            "items": PaymentMethodConfig
          }
        },
        "type": "object"
      }
    },
    "checkoutSequence": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": true
      }
    },
    "checkoutTexts": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": true
      }
    },
    "encryptionKeys": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": true
      }
    },
    "tguList": {
      "type": "array",
      "items": {
        "properties": {
          "ID": {
            "type": "integer"
          },
          "share": {
            "type": "integer"
          },
          "domain": {
            "type": "string"
          },
          "status": {
            "type": "string"
          }
        },
        "type": "object"
      }
    }
  },
  "type": "object",
  "title": "ServiceConfig",
  "x-readme-ref-name": "ServiceConfig"
} as const;
export default ServiceConfig
