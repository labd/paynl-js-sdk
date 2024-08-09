import TerminalBrand from './TerminalBrand.js';
import TerminalSupplier from './TerminalSupplier.js';

const PostTerminalsTerminalcodeUndelete = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "terminalCode": {
            "description": "The terminal identifier.",
            "type": "string",
            "examples": [
              "TH-1234-1234"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "terminalCode"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "properties": {
        "code": {
          "description": "The terminal identifier.",
          "type": "string",
          "examples": [
            "TH-1234-1234"
          ]
        },
        "name": {
          "description": "The name of the terminal.",
          "type": "string",
          "examples": [
            "Terminal Shop."
          ]
        },
        "attribution": {
          "description": "The terminal attribution.",
          "type": "string",
          "examples": [
            "PAY.nl* CompanyName"
          ]
        },
        "status": {
          "description": "The current status of the terminal.",
          "type": "string",
          "examples": [
            "ACTIVE"
          ]
        },
        "connectionStatus": {
          "description": "The current connection status of the terminal.",
          "type": "string",
          "examples": [
            "ONLINE"
          ]
        },
        "merchant": {
          "properties": {
            "code": {
              "description": "The merchant id of your company starting with M.",
              "type": "string",
              "examples": [
                "M-1234-4321"
              ]
            },
            "name": {
              "description": "The name of your merchant.",
              "type": "string",
              "maxLength": 128,
              "minLength": 2,
              "examples": [
                "CompanyName"
              ]
            }
          },
          "type": "object"
        },
        "service": {
          "properties": {
            "id": {
              "description": "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
              "type": "string",
              "examples": [
                "SL-####-####"
              ]
            },
            "name": {
              "description": "The name of your service.",
              "type": "string",
              "examples": [
                "My first service!"
              ]
            }
          },
          "type": "object"
        },
        "description": {
          "description": "The terminal description.",
          "type": "string"
        },
        "terminalType": {
          "description": "The terminal type.",
          "type": "string"
        },
        "supplier": TerminalSupplier,
        "ecrProtocol": {
          "description": "The ECR protocol.",
          "type": "string",
          "examples": [
            "WEB"
          ]
        },
        "contractStartDate": {
          "description": "The terminal contract startdate.",
          "type": "string",
          "format": "date-time"
        },
        "contractEndDate": {
          "description": "The terminal contract enddate.",
          "type": "string",
          "format": "date-time"
        },
        "paymentTypes": {
          "description": "The terminal payment type.",
          "type": "array",
          "items": {
            "properties": {
              "paymentType": {
                "type": "string"
              }
            },
            "type": "object"
          }
        },
        "terminalBrands": TerminalBrand,
        "location": {
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
export default PostTerminalsTerminalcodeUndelete
