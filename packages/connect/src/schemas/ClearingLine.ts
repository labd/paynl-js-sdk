import Amount from './Amount.js';

const ClearingLine = {
  "required": [
    "code",
    "merchant",
    "turnoverGroup",
    "clearingLineType",
    "unitType",
    "amount",
    "valueDate",
    "clearingDate",
    "settlementDate",
    "processedDate",
    "state",
    "clearingID"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "merchant": {
      "required": [
        "code",
        "contractPackage"
      ],
      "properties": {
        "code": {
          "description": "The merchant id of your company starting with M.",
          "type": "string",
          "examples": [
            "M-1234-4321"
          ]
        },
        "contractPackage": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "turnoverGroup": {
      "required": [
        "code",
        "name"
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "clearingLineType": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "unitType": {
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "integer"
        },
        "name": {
          "type": "string"
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "amount": Amount,
    "valueDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "clearingDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "settlementDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "processedDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "state": {
      "type": "string",
      "enum": [
        "PROCESSED",
        "CLEARED",
        "SETTLED"
      ],
      "description": "`PROCESSED` `CLEARED` `SETTLED`"
    },
    "clearingID": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "type": "object",
  "title": "ClearingLine",
  "x-readme-ref-name": "ClearingLine"
} as const;
export default ClearingLine
