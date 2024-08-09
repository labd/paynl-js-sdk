import Amount from './Amount.js';
import Stats from './Stats.js';

const PostServicesServiceidPaymentlink = {
  "body": {
    "description": "Create a PaymentLink",
    "required": [
      "securityMode",
      "language",
      "amount",
      "amountMin"
    ],
    "properties": {
      "securityMode": {
        "description": "0: URL, amount and variables can be changed\n1: Amount is fixed. URL and variables can be changed\n2: Pre filled variable can be changed. Amount is fixed\n3: URL, amount and variables are fixed. Only empty variables can be filled",
        "type": "integer",
        "enum": [
          0,
          1,
          2,
          3
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
      },
      "language": {
        "description": "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the hostedPaymentPageLanguageAvailable flag is set to 'True'",
        "type": "string",
        "examples": [
          "nl_NL"
        ]
      },
      "amount": Amount,
      "amountMin": Amount,
      "stats": Stats
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "serviceId": {
            "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            "type": "string",
            "examples": [
              "SL-####-####"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  }
} as const;
export default PostServicesServiceidPaymentlink
