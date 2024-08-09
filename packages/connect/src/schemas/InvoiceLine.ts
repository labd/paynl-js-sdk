import FinanceTransactionLine from './FinanceTransactionLine.js';

const InvoiceLine = {
  "required": [
    "code",
    "merchant",
    "turnoverGroup",
    "billingLineType",
    "unitType",
    "amount",
    "vatPercentage",
    "date",
    "valueDate",
    "paymentDate",
    "processedDate",
    "state",
    "invoiceID"
  ],
  "properties": {
    "code": {
      "type": "string"
    },
    "merchant": {
      "description": "The corresponding merchant for the invoice line",
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
          "description": "The merchant's package type",
          "type": "string",
          "examples": [
            "Business"
          ]
        }
      },
      "type": "object"
    },
    "turnoverGroup": {
      "description": "The turnover group for the invoice line",
      "required": [
        "code",
        "name"
      ],
      "properties": {
        "code": {
          "description": "The turnover group code",
          "type": "string",
          "examples": [
            "CT-1234-4321"
          ]
        },
        "name": {
          "description": "The turnover group name",
          "type": "string",
          "examples": [
            "Ecommerce"
          ]
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "billingLineType": {
      "description": "The type of billing used for the invoice, c.q. payment method",
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "description": "ID of the billing type",
          "type": "integer",
          "examples": [
            "706"
          ]
        },
        "name": {
          "description": "The name for the corresponding billing type",
          "type": "string",
          "examples": [
            "Visa Mastercard"
          ]
        }
      },
      "type": [
        "object",
        "null"
      ]
    },
    "volume": {
      "description": "The volume of the invoice line",
      "properties": {
        "amount": {
          "description": "Amount of the volume as decimal",
          "type": "number",
          "examples": [
            "3.80"
          ]
        },
        "currency": {
          "description": "The currency in ISO-4217 format.",
          "type": "string",
          "examples": [
            "EUR"
          ]
        }
      },
      "type": "object"
    },
    "totalCosts": {
      "description": "The total costs per invoice line",
      "type": "array",
      "items": {
        "properties": {
          "totalCosts": {
            "description": "$totalCosts",
            "properties": {
              "type": {
                "description": "The type of total costs",
                "type": "string",
                "examples": [
                  "BUY"
                ]
              },
              "totalCosts": {
                "description": "The total costs amount as decimal",
                "type": "number",
                "examples": [
                  "0.23"
                ]
              },
              "currency": {
                "description": "The currency in ISO-4217 format.",
                "type": "string",
                "examples": [
                  "EUR"
                ]
              }
            },
            "type": "object"
          }
        },
        "type": "object"
      }
    },
    "transactions": {
      "type": "integer"
    },
    "payers": {
      "type": "integer"
    },
    "vatPercentage": {
      "type": "number"
    },
    "date": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "valueDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "paymentDate": {
      "type": [
        "string",
        "null"
      ],
      "format": "date"
    },
    "state": {
      "type": [
        "string",
        "null"
      ],
      "enum": [
        "OPEN",
        "PAYABLE",
        "PAID"
      ],
      "description": "`OPEN` `PAYABLE` `PAID`"
    },
    "invoiceID": {
      "type": [
        "string",
        "null"
      ]
    },
    "lines": {
      "type": "array",
      "items": FinanceTransactionLine
    }
  },
  "type": "object",
  "title": "InvoiceLine",
  "x-readme-ref-name": "InvoiceLine"
} as const;
export default InvoiceLine
