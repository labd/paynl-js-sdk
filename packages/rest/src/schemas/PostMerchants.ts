import BankAccount from './BankAccount.js';
import ContactMethod from './ContactMethod.js';
import Location from './Location.js';

const PostMerchants = {
  "body": {
    "required": [
      "merchant"
    ],
    "properties": {
      "partner": {
        "required": [
          "referralProfileCode"
        ],
        "properties": {
          "connectionType": {
            "description": "Indicate which type of partner agreement you have with us",
            "type": "string",
            "enum": [
              "BP",
              "ALLIANCE",
              "ISO",
              "FI",
              "SP"
            ],
            "examples": [
              "BP"
            ]
          },
          "referralProfileCode": {
            "description": "Indicate under which package you want to create a merchant. You can retrieve a list of available package by calling Packages API endpoint (see: https://developer.pay.nl/reference/get_packages )",
            "type": "string",
            "examples": [
              "CP-1234-4321"
            ]
          },
          "accessToMerchant": {
            "description": "Indicate if you want to have access to the merchant. Only applicable for connectionType BP and ISO. An alliance always have access to their submerchants",
            "type": [
              "boolean",
              "null"
            ],
            "examples": [
              true
            ]
          }
        },
        "type": "object"
      },
      "merchant": {
        "required": [
          "name",
          "coc",
          "companyTypeId",
          "countryCode",
          "contractLanguage",
          "visitAddress",
          "authenticationTokens",
          "persons"
        ],
        "properties": {
          "name": {
            "description": "The name of your merchant.",
            "type": "string",
            "maxLength": 128,
            "minLength": 2,
            "examples": [
              "CompanyName"
            ]
          },
          "publicName": {
            "description": "The public name of your merchant.",
            "type": "string",
            "examples": [
              "CompanyName"
            ]
          },
          "coc": {
            "description": "Your Chamber of commerce registration number. This format differs per country.",
            "type": "string",
            "examples": [
              "12345678"
            ]
          },
          "vat": {
            "description": "Value added tax identification number (VAT identification number).",
            "type": "string",
            "examples": [
              "NL807960147B01"
            ]
          },
          "companyTypeId": {
            "description": "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
            "type": "string",
            "examples": [
              "1"
            ]
          },
          "countryCode": {
            "description": "The country code consisting of 2 uppercase letters",
            "type": "string",
            "examples": [
              "NL"
            ]
          },
          "contractLanguage": {
            "description": "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
            "type": "string",
            "examples": [
              "nl_NL"
            ]
          },
          "clearingAccounts": {
            "type": "array",
            "items": {
              "properties": {
                "method": {
                  "type": "string",
                  "examples": [
                    "iban"
                  ]
                },
                "iban": {
                  "properties": {
                    "iban": {
                      "type": "string",
                      "examples": [
                        "NL64INGB1782371249"
                      ]
                    },
                    "bic": {
                      "type": "string",
                      "examples": [
                        "INGBNL2A"
                      ]
                    },
                    "owner": {
                      "type": "string",
                      "examples": [
                        "John Doe"
                      ]
                    }
                  },
                  "type": "object"
                }
              },
              "type": "object"
            }
          },
          "visitAddress": {
            "required": [
              "streetName",
              "streetNumber",
              "zipCode",
              "city"
            ],
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
          "authenticationTokens": {
            "type": "array",
            "items": {
              "required": [
                "description",
                "authorisation"
              ],
              "properties": {
                "description": {
                  "type": "string",
                  "examples": [
                    "Default token"
                  ]
                },
                "authorisation": {
                  "description": "Specify which kind of authorisation is applicable for the token.\n\nall: all merchant rights\nspecified: specify which authorisation groups should be enabled from the token. At least one authorisation group (in the authorisationGroups array) is mandatory",
                  "type": "string",
                  "enum": [
                    "all",
                    "specified"
                  ],
                  "examples": [
                    "specified"
                  ]
                },
                "authorisationGroups": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "examples": [
                      "AG-1234-4321"
                    ]
                  }
                },
                "ipFilter": {
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": [
                        "DENY_FROM_ALL"
                      ],
                      "examples": [
                        "DENY_FROM_ALL"
                      ]
                    },
                    "exceptionList": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "examples": [
                          "213.126.82.230"
                        ]
                      }
                    }
                  },
                  "type": "object"
                }
              },
              "type": "object"
            }
          },
          "persons": {
            "type": "array",
            "items": {
              "required": [
                "firstName",
                "lastName",
                "platform"
              ],
              "properties": {
                "gender": {
                  "type": "string",
                  "enum": [
                    "M",
                    "F"
                  ],
                  "examples": [
                    "M"
                  ]
                },
                "firstName": {
                  "description": "The forename (also known as a given name, Christian name or a first name).",
                  "type": [
                    "string",
                    "null"
                  ],
                  "maxLength": 64,
                  "minLength": 1,
                  "examples": [
                    "John"
                  ]
                },
                "lastName": {
                  "description": "The surname (also known as a family name or a last name).",
                  "type": "string",
                  "maxLength": 128,
                  "minLength": 1,
                  "examples": [
                    "Doe"
                  ]
                },
                "email": {
                  "description": "An email address.",
                  "type": "string",
                  "format": "email",
                  "examples": [
                    "sandbox@pay.nl"
                  ]
                },
                "language": {
                  "type": "string",
                  "examples": [
                    "nl_NL"
                  ]
                },
                "phone": {
                  "description": "The subject's phone number. Optionally prepended with a + and country code",
                  "type": "string",
                  "examples": [
                    "0031612345678"
                  ]
                },
                "newsletter": {
                  "type": "boolean",
                  "examples": [
                    true
                  ]
                },
                "visitAddress": {
                  "required": [
                    "streetName",
                    "streetNumber",
                    "zipCode",
                    "city"
                  ],
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
                "notificationGroup": {
                  "properties": {
                    "technical": {
                      "type": "boolean",
                      "examples": [
                        true
                      ]
                    },
                    "financial": {
                      "type": "boolean",
                      "examples": [
                        true
                      ]
                    },
                    "operations": {
                      "type": "boolean",
                      "examples": [
                        true
                      ]
                    }
                  },
                  "type": "object"
                },
                "complianceData": {
                  "properties": {
                    "dateOfBirth": {
                      "description": "Date of birth of the person.",
                      "type": "string",
                      "format": "date-time",
                      "examples": [
                        "1999-12-12"
                      ]
                    },
                    "nationality": {
                      "description": "Nationality of the person.",
                      "type": "string",
                      "examples": [
                        "NL"
                      ]
                    },
                    "authorizedToSign": {
                      "description": "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
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
                      "description": "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
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
                "platform": {
                  "required": [
                    "authorisation"
                  ],
                  "properties": {
                    "loginAccount": {
                      "type": "boolean",
                      "examples": [
                        true
                      ]
                    },
                    "loginTpa": {
                      "type": "boolean",
                      "examples": [
                        true
                      ]
                    },
                    "authorisation": {
                      "type": "string",
                      "enum": [
                        "all",
                        "specified"
                      ],
                      "examples": [
                        "all"
                      ]
                    },
                    "authorisationGroups": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "examples": [
                          "AG-1234-4321"
                        ]
                      }
                    }
                  },
                  "type": "object"
                }
              },
              "type": "object"
            }
          },
          "service": {
            "required": [
              "name",
              "description",
              "categoryCode",
              "integrationCode",
              "publication"
            ],
            "properties": {
              "name": {
                "description": "The name of your service.",
                "type": "string",
                "examples": [
                  "My first service!"
                ]
              },
              "description": {
                "description": "The description of the service.",
                "type": "string",
                "examples": [
                  "Sells children's clothing"
                ]
              },
              "categoryCode": {
                "type": "string",
                "examples": [
                  "CY-1234-4321"
                ]
              },
              "integrationCode": {
                "type": "string",
                "examples": [
                  "PV-1234-4321"
                ]
              },
              "publication": {
                "type": "string",
                "examples": [
                  "through cashboard"
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
  },
  "response": {
    "201": {
      "description": "Basic Merchant",
      "properties": {
        "merchant": {
          "properties": {
            "code": {
              "description": "The merchant id of your company starting with M.",
              "type": "string",
              "examples": [
                "M-1234-4321"
              ]
            },
            "status": {
              "description": "Merchant state",
              "type": "string",
              "examples": [
                "ACTIVE"
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
            },
            "publicName": {
              "description": "The public name of your merchant.",
              "type": "string",
              "examples": [
                "CompanyName"
              ]
            },
            "clearingAccounts": {
              "type": "array",
              "items": {
                "required": [
                  "code",
                  "status",
                  "method",
                  "iban"
                ],
                "properties": {
                  "code": {
                    "type": "string"
                  },
                  "status": {
                    "type": "string",
                    "enum": [
                      "APPROVED",
                      "DENIED",
                      "NOT_CHECKED"
                    ],
                    "description": "`APPROVED` `DENIED` `NOT_CHECKED`"
                  },
                  "method": {
                    "type": "string",
                    "enum": [
                      "iban"
                    ],
                    "description": "`iban`"
                  },
                  "iban": BankAccount
                },
                "type": "object"
              }
            },
            "postalAddress": Location,
            "visitAddress": Location,
            "contactMethods": {
              "type": "array",
              "items": ContactMethod
            },
            "authenticationTokens": {
              "items": {
                "properties": {
                  "code": {
                    "type": "string"
                  },
                  "secret": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "trademarks": {
              "items": {
                "properties": {
                  "code": {
                    "description": "An identifier for this trademark",
                    "type": "string",
                    "examples": [
                      "TM-0000-0000"
                    ]
                  },
                  "type": {
                    "type": "string"
                  },
                  "name": {
                    "description": "A registered trademark name.",
                    "type": "string"
                  },
                  "status": {
                    "description": "Status of the trademark.",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "licenses": {
              "items": {
                "properties": {
                  "code": {
                    "type": "string",
                    "examples": [
                      "AL-1234-4321"
                    ]
                  },
                  "name": {
                    "type": "string"
                  },
                  "language": {
                    "description": "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages\n\n`NL` `EN` `DE` `FR` `IT` `ES`",
                    "type": "string",
                    "enum": [
                      "NL",
                      "EN",
                      "DE",
                      "FR",
                      "IT",
                      "ES"
                    ],
                    "examples": [
                      "NL"
                    ]
                  }
                },
                "type": "object"
              },
              "type": "array"
            },
            "service": {
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
                "name": {
                  "description": "The name of your service.",
                  "type": "string",
                  "examples": [
                    "My first service!"
                  ]
                },
                "description": {
                  "description": "The description of the service.",
                  "type": "string"
                },
                "categoryCode": {
                  "description": "The category (code) identifier",
                  "type": "string",
                  "examples": [
                    "CY-1234-4321"
                  ]
                },
                "integrationCode": {
                  "type": "string",
                  "examples": [
                    "PV-1234-4321"
                  ]
                },
                "publication": {
                  "type": "string"
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
export default PostMerchants
