import PaymentMethod from './PaymentMethod.js';

const GetServicesServiceidPaymentmethods = {
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
      },
      {
        "type": "object",
        "properties": {
          "country": {
            "description": "The country code consisting of 2 uppercase letters",
            "type": "array",
            "items": {
              "type": "string"
            },
            "examples": [
              "NL",
              "BE"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "paymentMethods": {
          "type": "array",
          "items": PaymentMethod
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetServicesServiceidPaymentmethods
