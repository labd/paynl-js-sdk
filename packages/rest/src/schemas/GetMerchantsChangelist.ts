import Merchant from './Merchant.js';

const GetMerchantsChangelist = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "default": 100,
            "maximum": 100,
            "minimum": 1,
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "Limit the returned records. If not supplied we will default to 100 records"
          },
          "page": {
            "type": "integer",
            "default": 1,
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "Limit the returned records. If not supplied we will default to 100 records"
          },
          "modifiedAt": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "string",
                "format": "date",
                "examples": [
                  "1999-02-15"
                ]
              },
              "gt": {
                "description": "Get results that are greater than the given value",
                "type": "string",
                "format": "date",
                "examples": [
                  "1999-02-15"
                ]
              },
              "gte": {
                "description": "Get results that are greater than or equal to the given value",
                "type": "string",
                "format": "date",
                "examples": [
                  "1999-02-15"
                ]
              },
              "lt": {
                "description": "Get results that are less than the given value",
                "type": "string",
                "format": "date",
                "examples": [
                  "1999-02-15"
                ]
              },
              "lte": {
                "description": "Get results that are less than or equal to the given value",
                "type": "string",
                "format": "date",
                "examples": [
                  "1999-02-15"
                ]
              }
            },
            "type": "object",
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
        "count": {
          "type": "integer"
        },
        "merchants": {
          "type": "array",
          "items": Merchant
        }
      },
      "type": "object",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetMerchantsChangelist
