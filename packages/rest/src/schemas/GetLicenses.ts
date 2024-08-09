import PersonLicense from './PersonLicense.js';

const GetLicenses = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "merchant": {
            "description": "The merchant id of your company starting with M.",
            "type": "string",
            "examples": [
              "M-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "merchant"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "total": {
          "type": "integer"
        },
        "licenses": {
          "type": "array",
          "items": PersonLicense
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetLicenses
