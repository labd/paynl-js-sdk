import InvoiceLine from './InvoiceLine.js';

const GetInvoicelines = {
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
            "description": "Indicate which page you want in your result set. If not supplied we will default to page 1"
          },
          "date": {
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
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "Indicate in which period when the transactions are done"
          },
          "processedDate": {
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
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "Indicate for which period you want to retrieve the invoice lines"
          },
          "merchant": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "string",
                "examples": [
                  "M-1234-4321"
                ]
              },
              "neq": {
                "description": "Get results that do not equal the given value",
                "type": "string",
                "examples": [
                  "M-1234-4321"
                ]
              }
            },
            "type": "object",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "If you are a partner you can indicate for which merchants you want to retrieve the invoice lines. If you do not supply a merchant we will return the invoice lines for all your merchants"
          },
          "billingLineType": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "integer",
                "examples": [
                  10
                ]
              }
            },
            "type": "object",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "You can indicate which lineType you want to retrieve. See for more information the BillingLineTypes API (https://developer.pay.nl/reference/get_billinglinetypes)"
          },
          "turnoverGroup": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "integer",
                "examples": [
                  "CT-1234-4321"
                ]
              }
            },
            "type": "object",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "You can indicate for which turnover group you want to retrieve the invoice lines. If not supplied we will return the invoice lines for all turnover groups"
          },
          "state": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "integer",
                "enum": [
                  "OPEN",
                  "PAYABLE",
                  "PAID"
                ],
                "examples": [
                  "PROCESSED"
                ]
              }
            },
            "type": "object",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "A invoice line has a state. By providing a state you will only retrieve invoice lines in that state"
          },
          "invoiceID": {
            "properties": {
              "eq": {
                "description": "Get results that equal the given value",
                "type": "integer",
                "examples": [
                  "INVOICE-12345"
                ]
              }
            },
            "type": "object",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "description": "A invoice line is available on a invoice. By providing a invoice ID you will only retrieve invoice lines for that invoice"
          }
        },
        "required": []
      }
    ]
  },
  "response": {
    "200": {
      "required": [
        "total",
        "count",
        "invoiceLines",
        "_links"
      ],
      "properties": {
        "total": {
          "type": "integer"
        },
        "count": {
          "type": "integer"
        },
        "invoiceLines": {
          "type": "array",
          "items": InvoiceLine
        },
        "_links": {
          "properties": {
            "first": {
              "properties": {
                "href": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                }
              },
              "type": "object"
            },
            "previous": {
              "properties": {
                "href": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                }
              },
              "type": "object"
            },
            "next": {
              "properties": {
                "href": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                }
              },
              "type": "object"
            },
            "last": {
              "properties": {
                "href": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                }
              },
              "type": "object"
            },
            "self": {
              "properties": {
                "href": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                },
                "rel": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
                  ]
                },
                "type": {
                  "description": "",
                  "type": [
                    "string",
                    "null"
                  ],
                  "readOnly": true,
                  "examples": [
                    ""
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
    }
  }
} as const;
export default GetInvoicelines
