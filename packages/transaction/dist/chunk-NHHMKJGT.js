// src/sdk.ts
import APICore from "@readme/api-core";

// openapi.json
var openapi_default = {
  openapi: "3.0.0",
  info: {
    title: "PAY. Transaction Gateway Unit API's",
    description: "A restful journey to your payments.",
    termsOfService: "https://www.pay.nl/en/terms-conditions",
    contact: {
      email: "support@pay.nl"
    },
    version: "v2.0"
  },
  servers: [
    {
      url: "https://rest.pay.nl/v2",
      description: "PAY. API server"
    },
    {
      url: "https://rest.letspay.nl/v2"
    },
    {
      url: "https://rest.fasterpay.nl/v2"
    },
    {
      url: "https://rest.premium-pay.nl/v2"
    },
    {
      url: "https://rest.letspin.nl/v2"
    },
    {
      url: "https://rest.achterelkebetaling.nl/v2"
    }
  ],
  paths: {
    "/transactions/{transactionId}": {
      get: {
        tags: [
          "Transactions"
        ],
        summary: "Transaction:Info",
        description: "Get all detailed information of a transaction. You can use the EX code or the order ID to retrieve the detailed transaction information",
        parameters: [
          {
            name: "transactionId",
            in: "path",
            required: true,
            schema: {
              description: "The Id of the transaction.",
              type: "string",
              example: "EX-1234-1234-1234"
            }
          }
        ],
        responses: {
          "200": {
            description: "Ok.",
            content: {
              "application/json": {
                schema: {
                  required: [
                    "serviceId",
                    "amount",
                    "returnUrl"
                  ],
                  properties: {
                    id: {
                      description: "The Id of the transaction.",
                      type: "string",
                      example: "EX-1234-1234-1234"
                    },
                    serviceId: {
                      description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                      type: "string",
                      example: "SL-####-####"
                    },
                    description: {
                      description: "Is shown on the statement of the payer.",
                      type: "string",
                      maxLength: 32,
                      minLength: 1,
                      example: "Example description."
                    },
                    reference: {
                      description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      pattern: "^[a-zA-Z0-9]{1,64}$",
                      example: "12345XXY0123"
                    },
                    manualTransferCode: {
                      description: "Payment reference used to identify manual bank transfers",
                      type: "string",
                      example: "0000 0000 0000 0000"
                    },
                    orderId: {
                      description: "The orderId of the transaction.",
                      type: "string",
                      example: "0000000000X00000"
                    },
                    ipAddress: {
                      description: "An ip address",
                      type: "string",
                      example: "213.126.82.230"
                    },
                    exchangeUrl: {
                      description: "The URL where we exchange the status of a transaction.",
                      type: "string",
                      format: "uri",
                      example: "https://demo.pay.nl/exchange.php"
                    },
                    returnUrl: {
                      description: "The URL where the payer has to be send to after the payment.",
                      type: "string",
                      format: "uri",
                      example: "https://demo.pay.nl/complete/"
                    },
                    paymentUrl: {
                      description: "The payment URL for this transaction",
                      type: "string",
                      format: "uri"
                    },
                    amount: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    expire: {
                      description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    created: {
                      description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    modified: {
                      description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    amountConverted: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    amountPaid: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    amountRefunded: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    paymentMethod: {
                      required: [
                        "id"
                      ],
                      properties: {
                        id: {
                          description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                          type: "integer",
                          example: "10"
                        },
                        subId: {
                          description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                          type: "string",
                          example: "10"
                        },
                        name: {
                          description: "The name of the payment method.",
                          type: "string",
                          example: "ideal"
                        }
                      },
                      type: "object",
                      title: "PaymentMethod",
                      "x-readme-ref-name": "PaymentMethod"
                    },
                    status: {
                      properties: {
                        code: {
                          description: "The status code.",
                          type: "integer"
                        },
                        action: {
                          description: "The state in which the transaction resides",
                          type: "string",
                          example: "PAID"
                        },
                        phase: {
                          description: "The current phase in the transaction state",
                          type: "string",
                          example: "APPROVED"
                        }
                      },
                      type: "object",
                      title: "Status",
                      "x-readme-ref-name": "Status"
                    },
                    integration: {
                      properties: {
                        testMode: {
                          description: "Indicates if the service is in testmode or not, possible values: false or true",
                          type: "boolean"
                        }
                      },
                      type: "object",
                      title: "Integration",
                      "x-readme-ref-name": "Integration"
                    },
                    customer: {
                      properties: {
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        type: {
                          description: "Either B for business or C for consumer.",
                          type: "string",
                          enum: [
                            "B",
                            "C"
                          ]
                        },
                        ip: {
                          description: "An ip address",
                          type: "string",
                          example: "213.126.82.230"
                        },
                        birthDate: {
                          description: "Date of birth as defined in ISO-8601.",
                          type: "string",
                          format: "date",
                          example: "1999-02-15"
                        },
                        gender: {
                          description: "The subject's gender. Choose either M for male or F for female.",
                          type: "string",
                          example: "M"
                        },
                        phone: {
                          description: "The subject's phone number. Optionally prepended with a + and country code",
                          type: "string",
                          example: "0031612345678"
                        },
                        email: {
                          description: "An email address.",
                          type: "string",
                          format: "email",
                          example: "sandbox@pay.nl"
                        },
                        language: {
                          description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                          type: "string",
                          enum: [
                            "NL",
                            "EN",
                            "DE",
                            "FR",
                            "IT",
                            "ES"
                          ],
                          example: "NL"
                        },
                        trust: {
                          description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                          type: "integer",
                          maximum: 10,
                          minimum: -10,
                          example: -5
                        },
                        reference: {
                          description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          pattern: "^[a-zA-Z0-9]{1,64}$",
                          example: "NL87654321"
                        },
                        bankAccount: {
                          required: [
                            "iban",
                            "bic",
                            "owner"
                          ],
                          properties: {
                            iban: {
                              description: "The International Bank Account Number (IBAN).",
                              type: "string",
                              example: "NL69INGB0123456789"
                            },
                            bic: {
                              description: "Business Identifier Codes (BIC/SWIFT).",
                              type: "string",
                              example: "INGBNL2A"
                            },
                            owner: {
                              description: "The owner of the bank account.",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John Doe"
                            }
                          },
                          type: "object",
                          title: "BankAccount",
                          "x-readme-ref-name": "BankAccount"
                        },
                        company: {
                          properties: {
                            name: {
                              description: "The name of your merchant.",
                              type: "string",
                              example: "CompanyName"
                            },
                            coc: {
                              description: "Your Chamber of commerce registration number. This format differs per country.",
                              type: "string",
                              example: "12345678"
                            },
                            vat: {
                              description: "Value added tax identification number (VAT identification number).",
                              type: "string",
                              example: "NL807960147B01"
                            },
                            countryCode: {
                              description: "The country code consisting of 2 uppercase letters",
                              type: "string",
                              example: "NL"
                            }
                          },
                          type: "object",
                          title: "Company",
                          "x-readme-ref-name": "Company"
                        }
                      },
                      type: "object",
                      title: "Customer",
                      "x-readme-ref-name": "Customer"
                    },
                    order: {
                      properties: {
                        countryCode: {
                          description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        },
                        deliveryDate: {
                          description: "The date of delivery.",
                          type: "string",
                          format: "date",
                          example: "1999-02-15"
                        },
                        invoiceDate: {
                          description: "The date of the invoice",
                          type: "string",
                          format: "date",
                          example: "1999-02-15"
                        },
                        deliveryAddress: {
                          properties: {
                            code: {
                              type: "string"
                            },
                            firstName: {
                              description: "The forename (also known as a given name, Christian name or a first name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John"
                            },
                            lastName: {
                              description: "The surname (also known as a family name or a last name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "Doe"
                            },
                            streetName: {
                              description: "The name of the street",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Visitlane"
                            },
                            streetNumber: {
                              description: "The street number",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "13"
                            },
                            streetNumberExtension: {
                              description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "b1"
                            },
                            zipCode: {
                              description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                              type: "string",
                              maxLength: 16,
                              minLength: 1,
                              example: "5678CD"
                            },
                            city: {
                              description: "The name of a city",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Amsterdam"
                            },
                            regionCode: {
                              description: "Region code (iso-3166-2)",
                              type: "string",
                              example: "ZH"
                            },
                            countryCode: {
                              description: "The country code consisting of 2 uppercase letters",
                              type: "string",
                              maxLength: 2,
                              minLength: 2,
                              example: "NL"
                            }
                          },
                          type: "object",
                          title: "Address",
                          "x-readme-ref-name": "Address"
                        },
                        invoiceAddress: {
                          properties: {
                            code: {
                              type: "string"
                            },
                            firstName: {
                              description: "The forename (also known as a given name, Christian name or a first name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John"
                            },
                            lastName: {
                              description: "The surname (also known as a family name or a last name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "Doe"
                            },
                            streetName: {
                              description: "The name of the street",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Visitlane"
                            },
                            streetNumber: {
                              description: "The street number",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "13"
                            },
                            streetNumberExtension: {
                              description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "b1"
                            },
                            zipCode: {
                              description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                              type: "string",
                              maxLength: 16,
                              minLength: 1,
                              example: "5678CD"
                            },
                            city: {
                              description: "The name of a city",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Amsterdam"
                            },
                            regionCode: {
                              description: "Region code (iso-3166-2)",
                              type: "string",
                              example: "ZH"
                            },
                            countryCode: {
                              description: "The country code consisting of 2 uppercase letters",
                              type: "string",
                              maxLength: 2,
                              minLength: 2,
                              example: "NL"
                            }
                          },
                          type: "object",
                          title: "Address",
                          "x-readme-ref-name": "Address"
                        },
                        products: {
                          type: "array",
                          items: {
                            properties: {
                              id: {
                                description: "The product identifier.",
                                type: "string",
                                example: "TEST_01"
                              },
                              description: {
                                description: "The description of the product.",
                                type: "string",
                                example: "Some product description"
                              },
                              type: {
                                description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                                type: "string",
                                enum: [
                                  "shipping",
                                  "article",
                                  "discount",
                                  "rounding",
                                  "handling",
                                  "payment",
                                  "credit",
                                  "giftcard",
                                  "emoney",
                                  "crypto"
                                ]
                              },
                              price: {
                                properties: {
                                  value: {
                                    description: "The amount in cents.",
                                    type: "integer",
                                    minimum: 1,
                                    example: 10
                                  }
                                },
                                type: "object"
                              },
                              quantity: {
                                description: "The quantity.",
                                type: "number",
                                format: "float"
                              },
                              vatCode: {
                                description: "The VAT code to use.",
                                type: "string",
                                enum: [
                                  "N",
                                  "H",
                                  "L"
                                ]
                              }
                            },
                            type: "object",
                            title: "Product",
                            "x-readme-ref-name": "Product"
                          }
                        }
                      },
                      type: "object",
                      title: "Order",
                      "x-readme-ref-name": "Order"
                    },
                    stats: {
                      properties: {
                        info: {
                          description: "The used info code which can be tracked in the stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Campagne 99"
                        },
                        tool: {
                          description: "The used tool code which can be tracked in the stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Google"
                        },
                        object: {
                          description: "The object which can be tracked in stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1
                        },
                        extra1: {
                          description: "The first free value which can be tracked in the stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Customer 6985615"
                        },
                        extra2: {
                          description: "The second free value which can be tracked in the stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Invoice 21.3695"
                        },
                        extra3: {
                          description: "The third free value which can be tracked in the stats.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Shop Amsterdam"
                        },
                        domainId: {
                          description: "The ID of the duplicate content URL",
                          type: "string",
                          example: "WU-####-####"
                        }
                      },
                      type: "object",
                      title: "Stats",
                      "x-readme-ref-name": "Stats"
                    },
                    type: {
                      description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM",
                      type: "string",
                      enum: [
                        "POS",
                        "ECOM",
                        "CIT",
                        "MIT",
                        "MOTO"
                      ]
                    },
                    transferData: {
                      type: "array",
                      items: {
                        properties: {
                          name: {
                            description: "The name of the variable to be tracked in the transaction.",
                            type: "string",
                            example: "stat1"
                          },
                          value: {
                            description: "The value of the variable to be tracked in the transaction.",
                            type: "string",
                            example: "ab8827dfc"
                          }
                        },
                        type: "object",
                        title: "TransferData",
                        "x-readme-ref-name": "TransferData"
                      },
                      xml: {
                        name: "transferData",
                        wrapped: true
                      }
                    }
                  },
                  type: "object",
                  xml: {
                    name: "transaction"
                  },
                  title: "Transaction",
                  "x-readme-ref-name": "Transaction"
                },
                examples: {
                  success: {
                    summary: "Transaction Full",
                    value: {
                      id: "EX-0171-7899-4460",
                      orderId: "1234567891X33ce1",
                      serviceCode: "SL-4878-2340",
                      description: "Example description",
                      reference: "12345XXY0123",
                      ipAddress: "86.83.126.161",
                      amount: {
                        value: 10,
                        currency: "EUR"
                      },
                      amountConverted: {
                        value: 10,
                        currency: "EUR"
                      },
                      amountPaid: {
                        value: 0,
                        currency: "EUR"
                      },
                      amountRefunded: {
                        value: 0,
                        currency: "EUR"
                      },
                      status: {
                        code: 100,
                        action: "PAID",
                        phase: "SUCCESS"
                      },
                      paymentData: {
                        method: "iban",
                        customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
                        customerId: "NL91ABNA0417164300",
                        customerName: "John Doe",
                        ipAddress: "213.126.82.230",
                        secureStatus: false,
                        paymentVerificationMethod: 16,
                        iban: {
                          iban: "NL69INGB0123456789",
                          bic: "INGBNL2A",
                          owner: "John Doe"
                        }
                      },
                      paymentMethod: {
                        id: 10,
                        subId: 3,
                        name: "iDEAL"
                      },
                      customer: {
                        firstName: "John",
                        lastName: "Doe",
                        type: "B",
                        birthDate: "1999-02-15",
                        language: "NL",
                        gender: "M",
                        phone: "0031612345678",
                        email: "sandbox@pay.nl",
                        trust: 0,
                        reference: "NL87654321",
                        bankAccount: {
                          iban: "NL69INGB0123456789",
                          bic: "INGBNL2A",
                          owner: "John Doe"
                        },
                        company: {
                          name: "CompanyName",
                          coc: "12345678",
                          vat: "NL0123456789",
                          countryCode: "NL"
                        }
                      },
                      order: {
                        countryCode: "NL",
                        deliveryDate: "2022-12-30",
                        invoiceDate: "2022-12-30",
                        deliveryAddress: {
                          firstName: "John",
                          lastName: "Doe",
                          streetName: "Deliverylane",
                          streetNumber: 70,
                          streetNumberExtension: "A",
                          zipCode: "5678CD",
                          city: "Amsterdam",
                          regionCode: "NH",
                          countryCode: "NL"
                        },
                        invoiceAddress: {
                          firstName: "Samanta",
                          lastName: "Doe - Jones",
                          streetName: "Invoicestreet",
                          streetNumber: 2,
                          streetNumberExtension: "B",
                          zipCode: "5211",
                          city: "London",
                          regionCode: "LND",
                          countryCode: "UK"
                        },
                        products: [
                          {
                            id: "Telefoon",
                            type: "article",
                            description: "iPhone 12 Pro",
                            price: {
                              value: 5,
                              currency: "EUR"
                            },
                            quantity: 1,
                            vatCode: "H"
                          },
                          {
                            id: "TV",
                            type: "article",
                            description: "Samsung TV",
                            price: {
                              value: 5,
                              currency: "EUR"
                            },
                            quantity: 1,
                            vatCode: "H"
                          }
                        ]
                      },
                      stats: {
                        info: "",
                        tool: "",
                        object: "",
                        extra1: "76908",
                        extra2: "",
                        extra3: "",
                        domainId: null
                      },
                      transferData: [],
                      expiresAt: "2021-09-04T12:14:01+02:00",
                      createdAt: "2021-09-04T12:14:01+02:00",
                      createdBy: "AT-1234-4321",
                      modifiedAt: null,
                      modifiedBy: null,
                      deletedAt: null,
                      deletedBy: null,
                      _links: [
                        {
                          href: "/transactions/EX-0171-7899-4460/status",
                          rel: "self",
                          type: "GET"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Bad request, see response body for more information"
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid"
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights"
          },
          "404": {
            description: "Not found"
          },
          "405": {
            description: "Used HTTP method is not allowed"
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported"
          },
          "429": {
            description: "Rate limit reached."
          },
          "500": {
            description: "An internal error occurred"
          }
        },
        security: [
          {
            basicAuth: []
          }
        ]
      }
    },
    "/transactions": {
      post: {
        tags: [
          "Transactions"
        ],
        summary: "Transaction:Create",
        description: "This endpoint is used to create a transaction in redirect mode. By calling this endpoint, you get a transactionID and a paymentUrl which can be used to redirect the payer. After the payment, the payer will be redirected to the provided returnUrl, where you can check the status and process the order.\n\nYou need to authenticate with an AT code (as username) and the corresponding token (as password) or you can authenticate with a SL code (as username) and the corresponding secret (as password)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                required: [
                  "amount",
                  "returnUrl"
                ],
                properties: {
                  serviceId: {
                    description: "The ID of your service. Required if you authenticate with AT-code/token. You can find the service ID here: https://my.pay.nl/programs/programs",
                    type: "string",
                    example: "SL-####-####"
                  },
                  description: {
                    description: "Is shown on the statement of the payer.",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "Example description."
                  },
                  reference: {
                    description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    pattern: "^[a-zA-Z0-9]{1,64}$",
                    example: "12345XXY0123"
                  },
                  expire: {
                    description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                    type: "string",
                    format: "date-time",
                    example: "2016-06-04T08:15:00+01:00"
                  },
                  returnUrl: {
                    description: "The URL where the payer has to be send to after the payment.",
                    type: "string",
                    format: "uri",
                    example: "https://demo.pay.nl/complete/"
                  },
                  exchangeUrl: {
                    description: "The URL where we exchange the status of a transaction.",
                    type: "string",
                    format: "uri",
                    example: "https://demo.pay.nl/exchange.php"
                  },
                  amount: {
                    required: [
                      "value"
                    ],
                    properties: {
                      value: {
                        description: "The amount in cents.",
                        type: "integer",
                        minimum: 1,
                        example: 10
                      },
                      currency: {
                        description: "The currency in ISO-4217 format.",
                        type: "string",
                        example: "EUR"
                      }
                    },
                    type: "object",
                    title: "Amount",
                    "x-readme-ref-name": "Amount"
                  },
                  paymentMethod: {
                    properties: {
                      id: {
                        description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                        type: "integer",
                        example: "10"
                      },
                      subId: {
                        description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                        type: "string",
                        example: "10"
                      }
                    },
                    type: "object"
                  },
                  integration: {
                    properties: {
                      testMode: {
                        description: "Indicates if the service is in testmode or not, possible values: false or true",
                        type: "boolean"
                      }
                    },
                    type: "object",
                    title: "Integration",
                    "x-readme-ref-name": "Integration"
                  },
                  customer: {
                    properties: {
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      ipAddress: {
                        description: "An ip address",
                        type: "string",
                        example: "213.126.82.230"
                      },
                      birthDate: {
                        description: "Date of birth as defined in ISO-8601.",
                        type: "string",
                        format: "date",
                        example: "1999-02-15"
                      },
                      gender: {
                        description: "The subject's gender. Choose either M for male or F for female.",
                        type: "string",
                        example: "M"
                      },
                      phone: {
                        description: "The subject's phone number. Optionally prepended with a + and country code",
                        type: "string",
                        example: "0031612345678"
                      },
                      email: {
                        description: "An email address.",
                        type: "string",
                        format: "email",
                        example: "sandbox@pay.nl"
                      },
                      language: {
                        description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                        type: "string",
                        enum: [
                          "NL",
                          "EN",
                          "DE",
                          "FR",
                          "IT",
                          "ES"
                        ],
                        example: "NL"
                      },
                      trust: {
                        description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                        type: "integer",
                        maximum: 10,
                        minimum: -10,
                        example: -5
                      },
                      reference: {
                        description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        pattern: "^[a-zA-Z0-9]{1,64}$",
                        example: "NL87654321"
                      },
                      company: {
                        properties: {
                          name: {
                            description: "The name of your merchant.",
                            type: "string",
                            example: "CompanyName"
                          },
                          coc: {
                            description: "Your Chamber of commerce registration number. This format differs per country.",
                            type: "string",
                            example: "12345678"
                          },
                          vat: {
                            description: "Value added tax identification number (VAT identification number).",
                            type: "string",
                            example: "NL807960147B01"
                          },
                          countryCode: {
                            description: "The country code consisting of 2 uppercase letters",
                            type: "string",
                            example: "NL"
                          }
                        },
                        type: "object",
                        title: "Company",
                        "x-readme-ref-name": "Company"
                      }
                    },
                    type: "object"
                  },
                  order: {
                    properties: {
                      countryCode: {
                        description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      },
                      deliveryDate: {
                        description: "The date of delivery.",
                        type: "string",
                        format: "date",
                        example: "1999-02-15"
                      },
                      invoiceDate: {
                        description: "The date of the invoice",
                        type: "string",
                        format: "date",
                        example: "1999-02-15"
                      },
                      deliveryAddress: {
                        required: [
                          "streetName",
                          "streetNumber",
                          "zipCode",
                          "city"
                        ],
                        properties: {
                          firstName: {
                            description: "The forename (also known as a given name, Christian name or a first name).",
                            type: "string",
                            maxLength: 64,
                            minLength: 1,
                            example: "John"
                          },
                          lastName: {
                            description: "The surname (also known as a family name or a last name).",
                            type: "string",
                            maxLength: 64,
                            minLength: 1,
                            example: "Doe"
                          },
                          streetName: {
                            description: "The name of the street",
                            type: "string",
                            maxLength: 128,
                            minLength: 1,
                            example: "Visitlane"
                          },
                          streetNumber: {
                            description: "The street number",
                            type: "string",
                            maxLength: 32,
                            minLength: 1,
                            example: "13"
                          },
                          streetNumberExtension: {
                            description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                            type: "string",
                            maxLength: 32,
                            minLength: 1,
                            example: "b1"
                          },
                          zipCode: {
                            description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                            type: "string",
                            maxLength: 16,
                            minLength: 1,
                            example: "5678CD"
                          },
                          city: {
                            description: "The name of a city",
                            type: "string",
                            maxLength: 128,
                            minLength: 1,
                            example: "Amsterdam"
                          },
                          regionCode: {
                            description: "Region code (iso-3166-2)",
                            type: "string",
                            example: "ZH"
                          },
                          countryCode: {
                            description: "The country code consisting of 2 uppercase letters",
                            type: "string",
                            maxLength: 2,
                            minLength: 2,
                            example: "NL"
                          }
                        },
                        type: "object"
                      },
                      invoiceAddress: {
                        required: [
                          "streetName",
                          "streetNumber",
                          "zipCode",
                          "city"
                        ],
                        properties: {
                          firstName: {
                            description: "The forename (also known as a given name, Christian name or a first name).",
                            type: "string",
                            maxLength: 64,
                            minLength: 1,
                            example: "John"
                          },
                          lastName: {
                            description: "The surname (also known as a family name or a last name).",
                            type: "string",
                            maxLength: 64,
                            minLength: 1,
                            example: "Doe"
                          },
                          streetName: {
                            description: "The name of the street",
                            type: "string",
                            maxLength: 128,
                            minLength: 1,
                            example: "Visitlane"
                          },
                          streetNumber: {
                            description: "The street number",
                            type: "string",
                            maxLength: 32,
                            minLength: 1,
                            example: "13"
                          },
                          streetNumberExtension: {
                            description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                            type: "string",
                            maxLength: 32,
                            minLength: 1,
                            example: "b1"
                          },
                          zipCode: {
                            description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                            type: "string",
                            maxLength: 16,
                            minLength: 1,
                            example: "5678CD"
                          },
                          city: {
                            description: "The name of a city",
                            type: "string",
                            maxLength: 128,
                            minLength: 1,
                            example: "Amsterdam"
                          },
                          regionCode: {
                            description: "Region code (iso-3166-2)",
                            type: "string",
                            example: "ZH"
                          },
                          countryCode: {
                            description: "The country code consisting of 2 uppercase letters",
                            type: "string",
                            maxLength: 2,
                            minLength: 2,
                            example: "NL"
                          }
                        },
                        type: "object"
                      },
                      products: {
                        type: "array",
                        items: {
                          properties: {
                            id: {
                              description: "The product identifier.",
                              type: "string",
                              example: "TEST_01"
                            },
                            description: {
                              description: "The description of the product.",
                              type: "string",
                              example: "Some product description"
                            },
                            type: {
                              description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                              type: "string",
                              enum: [
                                "shipping",
                                "article",
                                "discount",
                                "rounding",
                                "handling",
                                "payment",
                                "credit",
                                "giftcard",
                                "emoney",
                                "crypto"
                              ]
                            },
                            price: {
                              properties: {
                                value: {
                                  description: "The amount in cents.",
                                  type: "integer",
                                  minimum: 1,
                                  example: 10
                                }
                              },
                              type: "object"
                            },
                            quantity: {
                              description: "The quantity.",
                              type: "number",
                              format: "float"
                            },
                            vatCode: {
                              description: "The VAT code to use.",
                              type: "string",
                              enum: [
                                "N",
                                "H",
                                "L"
                              ]
                            }
                          },
                          type: "object",
                          title: "Product",
                          "x-readme-ref-name": "Product"
                        }
                      }
                    },
                    type: "object"
                  },
                  stats: {
                    properties: {
                      info: {
                        description: "The used info code which can be tracked in the stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Campagne 99"
                      },
                      tool: {
                        description: "The used tool code which can be tracked in the stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Google"
                      },
                      object: {
                        description: "The object which can be tracked in stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1
                      },
                      extra1: {
                        description: "The first free value which can be tracked in the stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Customer 6985615"
                      },
                      extra2: {
                        description: "The second free value which can be tracked in the stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Invoice 21.3695"
                      },
                      extra3: {
                        description: "The third free value which can be tracked in the stats.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Shop Amsterdam"
                      },
                      domainId: {
                        description: "The ID of the duplicate content URL",
                        type: "string",
                        example: "WU-####-####"
                      }
                    },
                    type: "object",
                    title: "Stats",
                    "x-readme-ref-name": "Stats"
                  },
                  notification: {
                    properties: {
                      type: {
                        description: 'Use "push" for push messages, or "email" to send out an email. For more information check the following page: https://paynl.readme.io/reference/accounts-1',
                        type: "string",
                        enum: [
                          "push",
                          "email"
                        ]
                      },
                      recipient: {
                        description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). For email, provide a valid email address (XXXX@XXXX.XX).",
                        type: "string",
                        example: "AD-1234-1234"
                      }
                    },
                    type: "object",
                    title: "Notification",
                    "x-readme-ref-name": "Notification"
                  },
                  transferData: {
                    type: "array",
                    items: {
                      properties: {
                        name: {
                          description: "The name of the variable to be tracked in the transaction.",
                          type: "string",
                          example: "stat1"
                        },
                        value: {
                          description: "The value of the variable to be tracked in the transaction.",
                          type: "string",
                          example: "ab8827dfc"
                        }
                      },
                      type: "object",
                      title: "TransferData",
                      "x-readme-ref-name": "TransferData"
                    },
                    xml: {
                      name: "transferData",
                      wrapped: true
                    }
                  }
                },
                type: "object"
              },
              examples: {
                minimalParams: {
                  summary: "Basic Transaction",
                  value: {
                    serviceId: "SL-####-####",
                    returnUrl: "https://demo.pay.nl/complete/",
                    amount: {
                      value: 10
                    }
                  }
                },
                minimalParamsIdeal: {
                  summary: "Ideal + ING Transaction",
                  value: {
                    serviceId: "SL-####-####",
                    returnUrl: "https://demo.pay.nl/complete/",
                    amount: {
                      value: 10
                    },
                    paymentMethod: {
                      id: 10,
                      subId: "4"
                    }
                  }
                },
                minimalParamsCreditcard: {
                  summary: "Creditcard Transaction",
                  value: {
                    serviceId: "SL-####-####",
                    returnUrl: "https://demo.pay.nl/complete/",
                    amount: {
                      value: 10
                    },
                    paymentMethod: {
                      id: 706
                    }
                  }
                },
                minimalParamsPin: {
                  summary: "Pin Terminal Transaction",
                  value: {
                    serviceId: "SL-####-####",
                    returnUrl: "https://demo.pay.nl/complete/",
                    amount: {
                      value: 10
                    },
                    paymentMethod: {
                      id: 1927,
                      subId: "TH-####-####"
                    }
                  }
                },
                maximalParamsTestmode: {
                  summary: "Extended Transaction iDeal - testmode",
                  value: {
                    serviceId: "SL-####-####",
                    description: "Example description",
                    reference: "12345XXY0123",
                    returnUrl: "https://demo.pay.nl/complete/",
                    exchangeUrl: "https://demo.pay.nl/exchange.php",
                    amount: {
                      value: 10,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: "10",
                      subId: "4"
                    },
                    integration: {
                      testMode: true
                    },
                    customer: {
                      firstName: "John",
                      lastName: "Doe",
                      phone: "0031612345678",
                      birthDate: "1999-02-15",
                      gender: "m",
                      email: "sandbox@pay.nl",
                      ipAddress: "213.126.82.230",
                      trust: 5,
                      reference: "NL87654321",
                      company: {
                        countryCode: "nl",
                        coc: "12345678",
                        vat: "NL0123456789",
                        name: "CompanyName"
                      }
                    },
                    order: {
                      countryCode: "NL",
                      deliveryDate: "2022-12-30",
                      invoiceDate: "2022-12-30",
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        streetName: "Deliverylane",
                        streetNumber: "70",
                        streetNumberExtension: "A",
                        zipCode: "5678CD",
                        city: "Amsterdam",
                        regionCode: "NL-ZH",
                        countryCode: "NL"
                      },
                      invoiceAddress: {
                        firstName: "Samanta",
                        lastName: "Doe - Jones",
                        streetName: "Invoicestreet",
                        streetNumber: "2",
                        streetNumberExtension: "B",
                        zipCode: "SW36LQ",
                        city: "London",
                        regionCode: "NL-ZH",
                        countryCode: "GB"
                      },
                      products: [
                        {
                          id: "TEST_01",
                          description: "Caramels sweet roll",
                          type: "article",
                          price: {
                            value: 1,
                            currency: "EUR"
                          },
                          quantity: 2,
                          vatCode: "H"
                        },
                        {
                          id: "TEST_02",
                          description: "Cookie tart sugar",
                          type: "article",
                          price: {
                            value: 3,
                            currency: "EUR"
                          },
                          quantity: 1,
                          vatCode: "H"
                        },
                        {
                          id: "TEST_03",
                          description: "Lollipop chocolate bar",
                          type: "article",
                          price: {
                            value: 1,
                            currency: "EUR"
                          },
                          quantity: 5,
                          vatCode: "H"
                        }
                      ]
                    },
                    notification: {
                      type: "email",
                      recipient: "sandbox@pay.nl"
                    },
                    stats: {
                      info: "Campagne 99",
                      tool: "Google",
                      extra1: "Customer 6985615",
                      extra2: "Invoice 21.3695",
                      extra3: "Shop Amsterdam"
                    },
                    transferData: [
                      {
                        name: "stat1",
                        value: "pos1992"
                      },
                      {
                        name: "stat2",
                        value: "ab8827hhc"
                      }
                    ]
                  }
                },
                maximalParamsNonTestmode: {
                  summary: "Extended Transaction iDeal",
                  value: {
                    serviceId: "SL-####-####",
                    description: "Example description",
                    reference: "12345XXY0123",
                    returnUrl: "https://demo.pay.nl/complete/",
                    exchangeUrl: "https://demo.pay.nl/exchange.php",
                    amount: {
                      value: 10,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: "10",
                      subId: "4"
                    },
                    integration: {
                      testMode: false
                    },
                    customer: {
                      firstName: "John",
                      lastName: "Doe",
                      phone: "0031612345678",
                      birthDate: "1999-02-15",
                      gender: "m",
                      email: "sandbox@pay.nl",
                      ipAddress: "213.126.82.230",
                      trust: 5,
                      reference: "NL87654321"
                    },
                    order: {
                      countryCode: "NL",
                      deliveryDate: "2022-12-30",
                      invoiceDate: "2022-12-30",
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        streetName: "Deliverylane",
                        streetNumber: "70",
                        streetNumberExtension: "A",
                        zipCode: "5678CD",
                        city: "Amsterdam",
                        regionCode: "NL-ZH",
                        countryCode: "NL"
                      },
                      invoiceAddress: {
                        firstName: "Samanta",
                        lastName: "Doe - Jones",
                        streetName: "Invoicestreet",
                        streetNumber: "2",
                        streetNumberExtension: "B",
                        zipCode: "SW36LQ",
                        city: "London",
                        regionCode: "NL-ZH",
                        countryCode: "GB"
                      },
                      products: [
                        {
                          id: "TEST_01",
                          description: "Caramels sweet roll",
                          type: "article",
                          price: {
                            value: 1,
                            currency: "EUR"
                          },
                          quantity: 2,
                          vatCode: "H"
                        },
                        {
                          id: "TEST_02",
                          description: "Cookie tart sugar",
                          type: "article",
                          price: {
                            value: 3,
                            currency: "EUR"
                          },
                          quantity: 1,
                          vatCode: "H"
                        },
                        {
                          id: "TEST_03",
                          description: "Lollipop chocolate bar",
                          type: "article",
                          price: {
                            value: 1,
                            currency: "EUR"
                          },
                          quantity: 5,
                          vatCode: "H"
                        }
                      ]
                    },
                    notification: {
                      type: "email",
                      recipient: "sandbox@pay.nl"
                    },
                    stats: {
                      info: "Campagne 99",
                      tool: "Google",
                      extra1: "Customer 6985615",
                      extra2: "Invoice 21.3695",
                      extra3: "Shop Amsterdam"
                    },
                    transferData: [
                      {
                        name: "stat1",
                        value: "pos1992"
                      },
                      {
                        name: "stat2",
                        value: "ab8827hhc"
                      }
                    ]
                  }
                },
                googleAnalytics: {
                  summary: "Basic transaction with Google Analytics ",
                  value: {
                    serviceId: "SL-####-####",
                    returnUrl: "https://demo.pay.nl/complete",
                    reference: "12345XXY0123",
                    amount: {
                      value: 10,
                      currency: "EUR"
                    },
                    order: {
                      products: [
                        {
                          price: {
                            value: 10,
                            currency: "EUR"
                          },
                          id: "1",
                          description: "Caramels sweet roll",
                          type: "article",
                          quantity: 1,
                          vatCode: "H"
                        }
                      ]
                    },
                    transferData: [
                      {
                        name: "gaClientId",
                        value: "707423299.1686737903"
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    id: {
                      description: "The Id of the transaction.",
                      type: "string",
                      example: "EX-1234-1234-1234"
                    },
                    serviceId: {
                      description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                      type: "string",
                      example: "SL-####-####"
                    },
                    description: {
                      description: "Is shown on the statement of the payer.",
                      type: "string",
                      maxLength: 32,
                      minLength: 1,
                      example: "Example description."
                    },
                    reference: {
                      description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      pattern: "^[a-zA-Z0-9]{1,64}$",
                      example: "12345XXY0123"
                    },
                    manualTransferCode: {
                      description: "Payment reference used to identify manual bank transfers",
                      type: "string",
                      example: "0000 0000 0000 0000"
                    },
                    orderId: {
                      description: "The orderId of the transaction.",
                      type: "string",
                      example: "0000000000X00000"
                    },
                    paymentUrl: {
                      description: "The payment URL for this transaction",
                      type: "string",
                      format: "uri"
                    },
                    statusUrl: {
                      description: "Api url to get status details of the transaction.",
                      type: "string"
                    },
                    amount: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    uuid: {
                      description: "The uuid of the QR code.",
                      type: "string"
                    },
                    hash: {
                      description: "Api url to get status details of the transaction.",
                      type: "string"
                    },
                    cancelUrl: {
                      description: "Api url to get status details of the transaction.",
                      type: "string"
                    },
                    orderStatusUrl: {
                      description: "Api url to get status details of a pin transaction.",
                      type: "string",
                      example: "https://domain.com/api/status"
                    },
                    expire: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false,
                      deprecated: true
                    },
                    expiresAt: {
                      description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    created: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false,
                      deprecated: true
                    },
                    createdAt: {
                      description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modified: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false,
                      deprecated: true
                    },
                    modifiedAt: {
                      description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object"
                },
                examples: {
                  minimal: {
                    summary: "Successful Transaction",
                    value: {
                      id: "EX-1234-1234-1234",
                      serviceId: "SL-1234-1234",
                      description: "Example description",
                      reference: "12345XXY0123",
                      manualTransferCode: "5000 0016 6117 8719",
                      orderId: "1234567891X33ce1",
                      paymentUrl: "https://bankieren.ideal.ing.nl/ideal/betalen/inlog-annuleren/static/detect_mob?trxid=0378827364771217&random=z81d2s6efaf2fcc",
                      statusUrl: "https://rest.pay.nl/v1/transactions/EX-1234-1234-1234/status",
                      amount: {
                        value: 10,
                        currency: "EUR"
                      },
                      uuid: "ab14f24d-fd08-ac23-1661-179814c0ad45",
                      hash: "9142aafd4d02c72d006b315eb590b7c2",
                      cancelUrl: "https://instore.pay.nl:9004/api/cancel?hash=9142aafd4d02c72d006b315eb590b7c2&timeout=5",
                      orderStatusUrl: "https://pin.pay.nl:9004/api/status?hash=9142aafd4d02c72d006b315eb590b7c2&timeout=5",
                      expire: 123456789,
                      expiresAt: "2016-06-04T08:15:00+01:00",
                      created: "2016-06-04T08:15:00+01:00",
                      createdAt: "2016-06-04T08:15:00+01:00",
                      createdBy: "A-1234-4321",
                      modified: "2016-06-04T08:15:00+01:00",
                      modifiedAt: "2016-06-04T08:15:00+01:00",
                      modifiedBy: "A-1234-4321",
                      _links: [
                        {
                          href: "/transactions",
                          rel: "self",
                          type: "POST"
                        },
                        {
                          href: "/transactions/EX-1234-1234-1234",
                          rel: "details",
                          type: "GET"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Bad request, see response body for more information",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    type: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      type: "array",
                      items: {
                        properties: {
                          propertyPath: {
                            type: "string"
                          },
                          message: {
                            type: "string"
                          },
                          code: {
                            type: "string"
                          }
                        },
                        type: "object",
                        title: "Violation",
                        "x-readme-ref-name": "Violation"
                      }
                    }
                  },
                  type: "object",
                  title: "Error",
                  "x-readme-ref-name": "Error"
                },
                examples: {
                  value: {
                    summary: "Bad request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      title: "An error occurred",
                      detail: "transaction.serviceId: Unable to find service location\ntransaction.amount.value: You have entered an invalid amount",
                      violations: [
                        {
                          propertyPath: "transaction.serviceId",
                          message: "Unable to find service location",
                          code: "PAY-2852"
                        },
                        {
                          propertyPath: "transaction.amount.value",
                          message: "You have entered an invalid amount",
                          code: "PAY-2803"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied AT code/token or SL code/secret is invalid"
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights"
          },
          "404": {
            description: "Not found"
          },
          "405": {
            description: "Used HTTP method is not allowed"
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported"
          },
          "415": {
            description: "Unsupported media. The supplied content type in the content-type parameter in the header is not supported"
          },
          "422": {
            description: "Unprocessable Entity, see response body for more information",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    type: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      type: "array",
                      items: {
                        properties: {
                          propertyPath: {
                            type: "string"
                          },
                          message: {
                            type: "string"
                          },
                          code: {
                            type: "string"
                          }
                        },
                        type: "object",
                        title: "Violation",
                        "x-readme-ref-name": "Violation"
                      }
                    }
                  },
                  type: "object",
                  title: "Error",
                  "x-readme-ref-name": "Error"
                },
                examples: {
                  value: {
                    summary: "Payment option not activated",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      title: "An error occurred",
                      detail: "Payment option (9999) is not enabled for this service (SL-####-####)",
                      violations: [
                        {
                          propertyPath: null,
                          message: "Payment option (9999) is not enabled for this service (SL-####-####)",
                          code: "PAY-3000"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached."
          },
          "500": {
            description: "An internal error occurred"
          }
        },
        security: [
          {
            basicAuth: []
          }
        ]
      }
    },
    "/transactions/{transactionId}/status": {
      get: {
        tags: [
          "Transactions"
        ],
        summary: "Transaction:Status",
        description: "Get the status of a transaction. You can use the EX code or \nthe order ID to retrieve the status of a transaction. If you want more detailed information about the transaction, \ncall the Transaction:Info API.",
        parameters: [
          {
            name: "transactionId",
            in: "path",
            required: true,
            schema: {
              description: "The Id of the transaction.",
              type: "string",
              example: "EX-1234-1234-1234"
            }
          }
        ],
        responses: {
          "200": {
            description: "Ok.",
            content: {
              "application/json": {
                schema: {
                  properties: {
                    id: {
                      description: "The Id of the transaction.",
                      type: "string"
                    },
                    orderId: {
                      description: "The orderId of the transaction.",
                      type: "string"
                    },
                    serviceCode: {
                      description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                      type: "string"
                    },
                    description: {
                      description: "Is shown on the statement of the payer.",
                      type: "string"
                    },
                    reference: {
                      description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                      type: "string"
                    },
                    ipAddress: {
                      description: "An ip address",
                      type: "string"
                    },
                    amount: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    amountConverted: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    amountPaid: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    amountRefunded: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    status: {
                      properties: {
                        code: {
                          description: "The status code.",
                          type: "integer"
                        },
                        action: {
                          description: "The state in which the transaction resides",
                          type: "string",
                          example: "PAID"
                        },
                        phase: {
                          description: "The current phase in the transaction state",
                          type: "string",
                          example: "APPROVED"
                        }
                      },
                      type: "object",
                      title: "Status",
                      "x-readme-ref-name": "Status"
                    },
                    paymentData: {
                      properties: {
                        method: {
                          description: "Payment method of the transaction.",
                          type: "string"
                        },
                        customerKey: {
                          description: "Customer key of the customer from the transaction.",
                          type: "string"
                        },
                        customerId: {
                          description: "Customer id of the customer from the transaction.",
                          type: "string"
                        },
                        customerName: {
                          description: "Customer name of the customer from the transaction.",
                          type: "string"
                        },
                        ipAddress: {
                          description: "Ip address of the customer from the transaction.",
                          type: "string"
                        },
                        secureStatus: {
                          description: "Secure status of the transaction.",
                          type: "boolean"
                        },
                        paymentVerificationMethod: {
                          type: "integer"
                        }
                      },
                      type: "object",
                      title: "TransactionStatusPaymentData",
                      "x-readme-ref-name": "TransactionStatusPaymentData"
                    },
                    paymentMethod: {
                      properties: {
                        id: {
                          description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                          type: "integer"
                        },
                        subId: {
                          description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                          type: "integer"
                        }
                      },
                      type: "object",
                      title: "TransactionStatusPaymentMethod",
                      "x-readme-ref-name": "TransactionStatusPaymentMethod"
                    },
                    integration: {
                      properties: {
                        testMode: {
                          description: "Indicates if the service is in testmode or not, possible values: false or true",
                          type: "boolean"
                        }
                      },
                      type: "object",
                      title: "Integration",
                      "x-readme-ref-name": "Integration"
                    },
                    expiredAt: {
                      description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      nullable: true
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "TransactionStatus",
                  "x-readme-ref-name": "TransactionStatus"
                },
                examples: {
                  success: {
                    summary: "Transaction status",
                    value: {
                      id: "EX-0171-7899-4460",
                      orderId: "1234567891X33ce1",
                      serviceCode: "SL-4878-2340",
                      description: "Example description",
                      reference: "12345XXY0123",
                      ipAddress: "86.83.126.161",
                      amount: {
                        value: 10,
                        currency: "EUR"
                      },
                      amountConverted: {
                        value: 10,
                        currency: "EUR"
                      },
                      amountPaid: {
                        value: 0,
                        currency: "EUR"
                      },
                      amountRefunded: {
                        value: 0,
                        currency: "EUR"
                      },
                      status: {
                        code: 100,
                        action: "PAID",
                        phase: "SUCCESS"
                      },
                      paymentData: {
                        method: "iban",
                        customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
                        customerId: "NL91ABNA0417164300",
                        customerName: "John Doe",
                        ipAddress: "127.0.0.1",
                        secureStatus: false,
                        paymentVerificationMethod: 16
                      },
                      paymentMethod: {
                        id: 10,
                        subId: 3
                      },
                      integration: {
                        testMode: false
                      },
                      expiresAt: "2021-09-04T12:14:01+02:00",
                      createdAt: "2021-09-04T12:14:01+02:00",
                      createdBy: "AT-0073-4553",
                      modifiedAt: null,
                      modifiedBy: null,
                      deletedAt: null,
                      deletedBy: null,
                      _links: [
                        {
                          href: "/transactions/EX-0171-7899-4460/status",
                          rel: "self",
                          type: "GET"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Bad request, see response body for more information"
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid"
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights"
          },
          "404": {
            description: "Not found"
          },
          "405": {
            description: "Used HTTP method is not allowed"
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported"
          },
          "429": {
            description: "Rate limit reached."
          },
          "500": {
            description: "An internal error occurred"
          }
        },
        security: [
          {
            basicAuth: []
          }
        ]
      }
    }
  },
  components: {
    schemas: {
      AcceptanceDocument: {
        allOf: [
          {
            properties: {
              code: {
                description: "Code of the acceptance document.",
                type: "string",
                example: "D-1234-1234"
              },
              type: {
                description: "Type of the acceptance document.",
                type: "string",
                example: "identification"
              },
              status: {
                description: "Status of the acceptance document.",
                type: "string",
                example: "UPLOADED"
              }
            },
            type: "object",
            title: "Document",
            "x-readme-ref-name": "Document"
          },
          {
            required: [
              "code",
              "type",
              "status",
              "translations",
              "createdAt",
              "createdBy",
              "modifiedAt",
              "modifiedBy",
              "acceptedAt",
              "deletedAt",
              "deletedBy"
            ],
            properties: {
              translations: {
                description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                type: "object",
                uniqueItems: true,
                example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                nullable: true,
                additionalProperties: {
                  type: "object",
                  additionalProperties: {
                    type: "string"
                  }
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object"
          }
        ],
        title: "AcceptanceDocument",
        "x-readme-ref-name": "AcceptanceDocument"
      },
      Account: {
        required: [
          "code",
          "email",
          "firstName",
          "lastName",
          "language",
          "nationality",
          "dateofBirth",
          "phone",
          "merchants",
          "documents"
        ],
        properties: {
          code: {
            type: "string",
            example: "A-1234-4321"
          },
          email: {
            type: "string"
          },
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            example: "John"
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            example: "Doe"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            example: "NL"
          },
          nationality: {
            description: "Nationality of the person.",
            type: "string",
            example: "NL"
          },
          dateOfBirth: {
            description: "Date of birth of the person.",
            type: "string",
            example: "1999-12-12"
          },
          phone: {
            description: "The subject's phone number. Optionally prepended with a + and country code",
            type: "string",
            example: "0031612345678"
          },
          visitAddress: {
            required: [
              "code",
              "streetName",
              "zipCode",
              "city",
              "countryCode"
            ],
            properties: {
              code: {
                type: "string"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Location",
            "x-readme-ref-name": "Location"
          },
          merchants: {
            type: "array",
            items: {
              required: [
                "code",
                "name",
                "licenseCode",
                "package",
                "rights",
                "accountManager"
              ],
              properties: {
                code: {
                  description: "The merchant id of your company starting with M.",
                  type: "string",
                  example: "M-1234-4321"
                },
                name: {
                  description: "The name of your merchant.",
                  type: "string",
                  maxLength: 128,
                  minLength: 2,
                  example: "CompanyName"
                },
                licenseCode: {
                  description: "License code.",
                  type: "string",
                  example: "AL-1234-4321"
                },
                package: {
                  type: "string"
                },
                rights: {
                  type: "string",
                  enum: [
                    "ALL",
                    "SPECIFIED"
                  ]
                },
                accountManager: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          documents: {
            type: "array",
            items: {
              allOf: [
                {
                  properties: {
                    code: {
                      description: "Code of the acceptance document.",
                      type: "string",
                      example: "D-1234-1234"
                    },
                    type: {
                      description: "Type of the acceptance document.",
                      type: "string",
                      example: "identification"
                    },
                    status: {
                      description: "Status of the acceptance document.",
                      type: "string",
                      example: "UPLOADED"
                    }
                  },
                  type: "object",
                  title: "Document",
                  "x-readme-ref-name": "Document"
                },
                {
                  required: [
                    "code",
                    "type",
                    "status",
                    "translations",
                    "createdAt",
                    "createdBy",
                    "modifiedAt",
                    "modifiedBy",
                    "acceptedAt",
                    "deletedAt",
                    "deletedBy"
                  ],
                  properties: {
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    acceptedAt: {
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object"
                }
              ],
              title: "AcceptanceDocument",
              "x-readme-ref-name": "AcceptanceDocument"
            }
          }
        },
        type: "object",
        title: "Account",
        "x-readme-ref-name": "Account"
      },
      AccountCompliance: {
        type: "object",
        title: "AccountCompliance",
        "x-readme-ref-name": "AccountCompliance"
      },
      AccountRelation: {
        required: [
          "email"
        ],
        properties: {
          code: {
            description: "The account code",
            type: "string",
            example: "A-1234-4321"
          },
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "John"
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Doe"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            maxLength: 3,
            minLength: 1,
            example: "NL"
          },
          merchants: {
            description: "A list of connected merchants",
            type: "array",
            items: {
              properties: {
                accountLinkCode: {
                  description: "The code that links an account to a merchant",
                  type: "string",
                  example: "AL-####-####"
                },
                merchantCode: {
                  description: "The merchant id of your company starting with M.",
                  type: "string",
                  example: "M-####-####"
                },
                companyName: {
                  description: "The name of your merchant.",
                  type: "string",
                  maxLength: 255,
                  minLength: 1,
                  example: "CompanyName"
                },
                package: {
                  description: "A Pay package.",
                  type: "string",
                  maxLength: 255,
                  minLength: 1,
                  example: "pioneer"
                },
                allRights: {
                  description: "The account has full access to this merchant",
                  type: "string",
                  format: "bool",
                  example: "FALSE"
                },
                accountManager: {
                  description: "The account manager for this merchant",
                  type: "string",
                  maxLength: 255,
                  minLength: 1,
                  example: "John Smith"
                }
              },
              type: "object",
              title: "AccountRelationMerchant",
              "x-readme-ref-name": "AccountRelationMerchant"
            }
          }
        },
        type: "object",
        title: "AccountRelation",
        "x-readme-ref-name": "AccountRelation"
      },
      AccountRelationMerchant: {
        properties: {
          accountLinkCode: {
            description: "The code that links an account to a merchant",
            type: "string",
            example: "AL-####-####"
          },
          merchantCode: {
            description: "The merchant id of your company starting with M.",
            type: "string",
            example: "M-####-####"
          },
          companyName: {
            description: "The name of your merchant.",
            type: "string",
            maxLength: 255,
            minLength: 1,
            example: "CompanyName"
          },
          package: {
            description: "A Pay package.",
            type: "string",
            maxLength: 255,
            minLength: 1,
            example: "pioneer"
          },
          allRights: {
            description: "The account has full access to this merchant",
            type: "string",
            format: "bool",
            example: "FALSE"
          },
          accountManager: {
            description: "The account manager for this merchant",
            type: "string",
            maxLength: 255,
            minLength: 1,
            example: "John Smith"
          }
        },
        type: "object",
        title: "AccountRelationMerchant",
        "x-readme-ref-name": "AccountRelationMerchant"
      },
      Address: {
        properties: {
          code: {
            type: "string"
          },
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "John"
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Doe"
          },
          streetName: {
            description: "The name of the street",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Visitlane"
          },
          streetNumber: {
            description: "The street number",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "13"
          },
          streetNumberExtension: {
            description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "b1"
          },
          zipCode: {
            description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
            type: "string",
            maxLength: 16,
            minLength: 1,
            example: "5678CD"
          },
          city: {
            description: "The name of a city",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Amsterdam"
          },
          regionCode: {
            description: "Region code (iso-3166-2)",
            type: "string",
            example: "ZH"
          },
          countryCode: {
            description: "The country code consisting of 2 uppercase letters",
            type: "string",
            maxLength: 2,
            minLength: 2,
            example: "NL"
          }
        },
        type: "object",
        title: "Address",
        "x-readme-ref-name": "Address"
      },
      Amount: {
        required: [
          "value"
        ],
        properties: {
          value: {
            description: "The amount in cents.",
            type: "integer",
            minimum: 1,
            example: 10
          },
          currency: {
            description: "The currency in ISO-4217 format.",
            type: "string",
            example: "EUR"
          }
        },
        type: "object",
        title: "Amount",
        "x-readme-ref-name": "Amount"
      },
      AuthenticationToken: {
        required: [
          "code",
          "secret",
          "name",
          "merchant",
          "createdAt",
          "createdBy",
          "modifiedAt",
          "modifiedBy",
          "deletedAt",
          "deletedBy"
        ],
        properties: {
          code: {
            type: "string",
            example: "AT-1234-4321"
          },
          secret: {
            type: "string"
          },
          name: {
            type: "string"
          },
          merchant: {
            required: [
              "code",
              "name",
              "status"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              }
            },
            type: "object",
            title: "MerchantMinimal",
            "x-readme-ref-name": "MerchantMinimal"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "AuthenticationToken",
        "x-readme-ref-name": "AuthenticationToken"
      },
      Authorisationgroup: {
        properties: {
          code: {
            description: "Authorisation group identifier",
            type: "string",
            example: "AG-1234-4321"
          },
          name: {
            description: "Name of the authorisation group",
            type: "string",
            example: "John Doe"
          },
          description: {
            description: "Description of the authorisation group",
            type: "string",
            example: "John Doe of test company"
          },
          purpose: {
            properties: {
              account: {
                type: "boolean",
                example: true
              },
              token: {
                type: "boolean",
                example: true
              },
              relation: {
                type: "boolean",
                example: true
              },
              merchant: {
                type: "boolean",
                example: true
              }
            },
            type: "object"
          },
          public: {
            description: "Indicate if the authorisation group is public",
            type: "boolean",
            example: true
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "Authorisationgroup",
        "x-readme-ref-name": "Authorisationgroup"
      },
      Balance: {
        required: [
          "balance",
          "invoices",
          "costs",
          "nextClearing",
          "lastClearing"
        ],
        properties: {
          balance: {
            required: [
              "amount",
              "currency"
            ],
            properties: {
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              }
            },
            type: "object"
          },
          invoices: {
            required: [
              "amount",
              "currency"
            ],
            properties: {
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              }
            },
            type: "object",
            nullable: true
          },
          costs: {
            required: [
              "amount",
              "currency"
            ],
            properties: {
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              }
            },
            type: "object",
            nullable: true
          },
          availableBalance: {
            required: [
              "amount",
              "currency"
            ],
            properties: {
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              },
              turnoverGroups: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    amount: {
                      type: "integer"
                    },
                    currency: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              }
            },
            type: "object",
            nullable: true
          },
          nextClearing: {
            required: [
              "state",
              "date",
              "amount",
              "currency"
            ],
            properties: {
              state: {
                type: "string"
              },
              date: {
                type: "integer",
                format: "date",
                nullable: true
              },
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              }
            },
            type: "object"
          },
          lastClearing: {
            required: [
              "date",
              "amount",
              "currency"
            ],
            properties: {
              date: {
                type: "integer",
                format: "date",
                nullable: true
              },
              amount: {
                type: "integer"
              },
              currency: {
                type: "string"
              }
            },
            type: "object"
          }
        },
        type: "object",
        title: "Balance",
        "x-readme-ref-name": "Balance"
      },
      BankAccount: {
        required: [
          "iban",
          "bic",
          "owner"
        ],
        properties: {
          iban: {
            description: "The International Bank Account Number (IBAN).",
            type: "string",
            example: "NL69INGB0123456789"
          },
          bic: {
            description: "Business Identifier Codes (BIC/SWIFT).",
            type: "string",
            example: "INGBNL2A"
          },
          owner: {
            description: "The owner of the bank account.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "John Doe"
          }
        },
        type: "object",
        title: "BankAccount",
        "x-readme-ref-name": "BankAccount"
      },
      BillingDataGroup: {
        required: [
          "id",
          "name",
          "translations",
          "billingLineTypes",
          "createdAt",
          "modifiedAt",
          "deletedAt"
        ],
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          billingLineTypes: {
            type: "array",
            items: {
              required: [
                "id",
                "name",
                "translations",
                "createdAt",
                "modifiedAt",
                "deletedAt"
              ],
              properties: {
                id: {
                  type: "integer"
                },
                name: {
                  type: "string"
                },
                translations: {
                  description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                  type: "object",
                  uniqueItems: true,
                  example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                  nullable: true,
                  additionalProperties: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                }
              },
              type: "object",
              title: "LineType",
              "x-readme-ref-name": "LineType"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "BillingDataGroup",
        "x-readme-ref-name": "BillingDataGroup"
      },
      BillingUnitType: {
        required: [
          "id",
          "name",
          "createdAt",
          "modifiedAt",
          "deletedAt"
        ],
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "BillingUnitType",
        "x-readme-ref-name": "BillingUnitType"
      },
      Card: {
        properties: {
          id: {
            description: "The identifier of the card scheme used.",
            type: "integer",
            example: "1009"
          },
          name: {
            description: "The name of the card scheme used.",
            type: "string",
            example: "Maestro"
          },
          expireMonth: {
            description: "The month in which the card expires",
            type: "string",
            example: "01"
          },
          expireYear: {
            description: "THe year in which the card expires",
            type: "string",
            example: "2023"
          },
          pin: {
            description: "The card pincode",
            type: "string",
            example: "12345"
          },
          type: {
            description: "The type of card",
            type: "string",
            enum: [
              "POS",
              "ECOM",
              "CIT",
              "MIT",
              "MOTO",
              "WALLET"
            ]
          }
        },
        type: "object",
        title: "Card",
        "x-readme-ref-name": "Card"
      },
      Category: {
        properties: {
          code: {
            description: "The category (code) identifier",
            type: "string",
            maxLength: 40,
            pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
            example: "CY-1234-4321"
          },
          name: {
            description: "The category name.",
            type: "string",
            example: "Digitale diensten gambling (kansspelen)"
          },
          description: {
            description: "The category's description.",
            type: "string",
            example: "Kansspelen"
          },
          sequence: {
            description: "The sequence of the category.",
            type: "integer"
          },
          available: {
            description: "The category's availability.",
            type: "boolean"
          },
          initialMCC: {
            description: "The initial MCC of the category.",
            type: "integer",
            example: "General Contractors-Residential and Commercial",
            nullable: true
          },
          initialRiskCategory: {
            description: "The initial risk category of the category.",
            type: "string",
            example: "Low risk"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          paymentMethods: {
            type: "array",
            items: {
              properties: {
                id: {
                  description: "The payment profile identifier.",
                  type: "integer",
                  example: "1630"
                },
                name: {
                  description: "The name of the payment profile.",
                  type: "string",
                  example: "Pin (Maestro)"
                }
              },
              type: "object"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Category",
        "x-readme-ref-name": "Category"
      },
      ClearingDataGroup: {
        required: [
          "id",
          "name",
          "translations",
          "clearingLineTypes",
          "createdAt",
          "modifiedAt",
          "deletedAt"
        ],
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          clearingLineTypes: {
            type: "array",
            items: {
              required: [
                "id",
                "name",
                "translations",
                "createdAt",
                "modifiedAt",
                "deletedAt"
              ],
              properties: {
                id: {
                  type: "integer"
                },
                name: {
                  type: "string"
                },
                translations: {
                  description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                  type: "object",
                  uniqueItems: true,
                  example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                  nullable: true,
                  additionalProperties: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                }
              },
              type: "object",
              title: "LineType",
              "x-readme-ref-name": "LineType"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "ClearingDataGroup",
        "x-readme-ref-name": "ClearingDataGroup"
      },
      ClearingLine: {
        required: [
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
        properties: {
          code: {
            type: "string"
          },
          merchant: {
            required: [
              "code",
              "contractPackage"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              contractPackage: {
                type: "string"
              }
            },
            type: "object"
          },
          turnoverGroup: {
            required: [
              "code",
              "name"
            ],
            properties: {
              code: {
                type: "string"
              },
              name: {
                type: "string"
              }
            },
            type: "object",
            nullable: true
          },
          clearingLineType: {
            required: [
              "id",
              "name"
            ],
            properties: {
              id: {
                type: "integer"
              },
              name: {
                type: "string"
              }
            },
            type: "object",
            nullable: true
          },
          unitType: {
            required: [
              "id",
              "name"
            ],
            properties: {
              id: {
                type: "integer"
              },
              name: {
                type: "string"
              }
            },
            type: "object",
            nullable: true
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          valueDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          clearingDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          settlementDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          processedDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          state: {
            type: "string",
            enum: [
              "PROCESSED",
              "CLEARED",
              "SETTLED"
            ]
          },
          clearingID: {
            type: "string",
            nullable: true
          }
        },
        type: "object",
        title: "ClearingLine",
        "x-readme-ref-name": "ClearingLine"
      },
      Company: {
        properties: {
          name: {
            description: "The name of your merchant.",
            type: "string",
            example: "CompanyName"
          },
          coc: {
            description: "Your Chamber of commerce registration number. This format differs per country.",
            type: "string",
            example: "12345678"
          },
          vat: {
            description: "Value added tax identification number (VAT identification number).",
            type: "string",
            example: "NL807960147B01"
          },
          countryCode: {
            description: "The country code consisting of 2 uppercase letters",
            type: "string",
            example: "NL"
          }
        },
        type: "object",
        title: "Company",
        "x-readme-ref-name": "Company"
      },
      CompanyCard: {
        properties: {
          id: {
            description: "The id of the company's card.",
            type: "integer",
            example: "VY-####-####-####"
          },
          token: {
            description: "The card token of the company.",
            type: "string",
            example: "abcdefghijklmnopqrstuvwxyz123456"
          }
        },
        type: "object",
        title: "CompanyCard",
        "x-readme-ref-name": "CompanyCard"
      },
      CompanyType: {
        properties: {
          id: {
            description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
            type: "integer"
          },
          name: {
            description: "Name of the company type.",
            type: "string"
          },
          countryCode: {
            description: "Country where company type exists for.",
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "CompanyType",
        "x-readme-ref-name": "CompanyType"
      },
      ComplianceData: {
        properties: {
          pep: {
            description: "Indicate if the person is a Politically Exposed Person (PEP).",
            type: "boolean",
            example: "true"
          },
          pepDescription: {
            description: "Describe in your own words why this person is a PEP.",
            type: "string",
            example: "The person is active as an alderman in the municipality where he lives."
          },
          dateOfBirth: {
            description: "Date of birth of the person.",
            type: "string",
            format: "date-time",
            example: "1999-12-12"
          },
          nationality: {
            description: "Nationality of the person.",
            type: "string",
            example: "NL"
          },
          idDocumentNumber: {
            description: "The id document number of the person",
            type: "string",
            example: ""
          }
        },
        type: "object",
        title: "ComplianceData",
        "x-readme-ref-name": "ComplianceData"
      },
      ComplianceDataPerson: {
        allOf: [
          {
            properties: {
              pep: {
                description: "Indicate if the person is a Politically Exposed Person (PEP).",
                type: "boolean",
                example: "true"
              },
              pepDescription: {
                description: "Describe in your own words why this person is a PEP.",
                type: "string",
                example: "The person is active as an alderman in the municipality where he lives."
              },
              dateOfBirth: {
                description: "Date of birth of the person.",
                type: "string",
                format: "date-time",
                example: "1999-12-12"
              },
              nationality: {
                description: "Nationality of the person.",
                type: "string",
                example: "NL"
              },
              idDocumentNumber: {
                description: "The id document number of the person",
                type: "string",
                example: ""
              }
            },
            type: "object",
            title: "ComplianceData",
            "x-readme-ref-name": "ComplianceData"
          },
          {
            properties: {
              ubo: {
                description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                type: "string",
                enum: [
                  "no",
                  "direct",
                  "indirect",
                  "pseudo"
                ],
                example: "direct"
              },
              uboPercentage: {
                description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                type: "integer",
                example: "25"
              },
              authorizedToSign: {
                description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                type: "string",
                enum: [
                  "no",
                  "alone",
                  "shared"
                ],
                example: "shared"
              },
              relationshipDescription: {
                description: "Describe in your own words the relation the person has with this company.",
                type: "string",
                example: "John Doe of test company"
              }
            },
            type: "object"
          }
        ],
        title: "ComplianceDataPerson",
        "x-readme-ref-name": "ComplianceDataPerson"
      },
      ComplianceDataPersonPartial: {
        allOf: [
          {
            allOf: [
              {
                properties: {
                  pep: {
                    description: "Indicate if the person is a Politically Exposed Person (PEP).",
                    type: "boolean",
                    example: "true"
                  },
                  pepDescription: {
                    description: "Describe in your own words why this person is a PEP.",
                    type: "string",
                    example: "The person is active as an alderman in the municipality where he lives."
                  },
                  dateOfBirth: {
                    description: "Date of birth of the person.",
                    type: "string",
                    format: "date-time",
                    example: "1999-12-12"
                  },
                  nationality: {
                    description: "Nationality of the person.",
                    type: "string",
                    example: "NL"
                  },
                  idDocumentNumber: {
                    description: "The id document number of the person",
                    type: "string",
                    example: ""
                  }
                },
                type: "object",
                title: "ComplianceData",
                "x-readme-ref-name": "ComplianceData"
              },
              {
                properties: {
                  ubo: {
                    description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                    type: "string",
                    enum: [
                      "no",
                      "direct",
                      "indirect",
                      "pseudo"
                    ],
                    example: "direct"
                  },
                  uboPercentage: {
                    description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                    type: "integer",
                    example: "25"
                  },
                  authorizedToSign: {
                    description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                    type: "string",
                    enum: [
                      "no",
                      "alone",
                      "shared"
                    ],
                    example: "shared"
                  },
                  relationshipDescription: {
                    description: "Describe in your own words the relation the person has with this company.",
                    type: "string",
                    example: "John Doe of test company"
                  }
                },
                type: "object"
              }
            ],
            title: "ComplianceDataPerson",
            "x-readme-ref-name": "ComplianceDataPerson"
          },
          {
            properties: {
              pep: {
                description: "Indicate if the person is a Politically Exposed Person (PEP).",
                type: "boolean",
                example: "true"
              },
              pepDescription: {
                description: "Describe in your own words why this person is a PEP.",
                type: "string",
                example: "The person is active as an alderman in the municipality where he lives."
              },
              dateOfBirth: {
                description: "Date of birth of the person.",
                type: "string",
                format: "date-time",
                example: "1999-12-12"
              },
              nationality: {
                description: "Nationality of the person.",
                type: "string",
                example: "NL"
              },
              idDocumentNumber: {
                description: "The id document number of the person",
                type: "string",
                example: ""
              }
            },
            type: "object",
            title: "ComplianceData",
            "x-readme-ref-name": "ComplianceData"
          },
          {
            properties: {
              authorizedToSign: {
                description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                type: "string",
                enum: [
                  "no",
                  "alone",
                  "shared"
                ],
                example: "shared"
              },
              pep: {
                description: "Indicate if the person is a Politically Exposed Person (PEP).",
                type: "boolean",
                example: "true"
              },
              pepDescription: {
                description: "Describe in your own words why this person is a PEP.",
                type: "string",
                example: "The person is active as an alderman in the municipality where he lives."
              },
              ubo: {
                description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                type: "string",
                enum: [
                  "no",
                  "direct",
                  "indirect",
                  "pseudo"
                ],
                example: "direct"
              },
              uboPercentage: {
                description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                type: "integer",
                example: "25"
              },
              relationshipDescription: {
                description: "Describe in your own words the relation the person has with this company.",
                type: "string",
                example: "John Doe of test company"
              }
            }
          }
        ],
        title: "ComplianceDataPersonPartial",
        "x-readme-ref-name": "ComplianceDataPersonPartial"
      },
      ContactMethod: {
        properties: {
          code: {
            description: "The contact method ID of your company starting with CM.",
            type: "string",
            example: "CM-1234-4321"
          },
          type: {
            description: "The type of contact method.",
            type: "string",
            enum: [
              "email",
              "email_support",
              "phone",
              "phone_helpdesk",
              "phone_off_hours",
              "url",
              "email_msnskype"
            ],
            example: "The type of contact method."
          },
          value: {
            description: "The value of the contact method.",
            type: "string",
            example: "088-88 666 22"
          },
          description: {
            description: "The description of the contact method.",
            type: "string"
          },
          public: {
            description: "Is the contact method public accessible",
            type: "boolean",
            example: "true"
          },
          notifications: {
            description: "Does the contact method needs to receive notifications",
            type: "boolean",
            example: "false"
          }
        },
        type: "object",
        title: "ContactMethod",
        "x-readme-ref-name": "ContactMethod"
      },
      Country: {
        properties: {
          code: {
            description: "Code of the country",
            type: "string"
          },
          isoNumber: {
            description: "Iso number of the country",
            type: "integer"
          },
          name: {
            description: "Name of the country",
            type: "string"
          },
          nationality: {
            type: "string",
            nullable: true
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          locales: {
            description: "Country locales",
            type: "array",
            items: {
              type: "string"
            }
          },
          phonePrefix: {
            description: "International phone prefix of country",
            type: "integer"
          },
          signupAllowed: {
            description: "Sign up allowed",
            type: "boolean"
          },
          inEU: {
            description: "Country is in EU",
            type: "boolean"
          },
          highRisk: {
            description: "High Risk country",
            type: "boolean"
          },
          ibanLength: {
            description: "iBan lenght of country",
            type: "integer"
          },
          image: {
            description: "Image of the country flag",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Country",
        "x-readme-ref-name": "Country"
      },
      Currency: {
        properties: {
          id: {
            description: "Id of the currency.",
            type: "integer"
          },
          tag: {
            description: "The currency in ISO-4217 format.",
            type: "string",
            example: "EUR"
          },
          name: {
            description: "Full name of the currency.",
            type: "string",
            example: "Euro."
          },
          isoCurrencyNumber: {
            description: "ISO number of the currency.",
            type: "integer"
          },
          symbol: {
            description: "Symbol of the currency.",
            type: "string"
          },
          exchangeRate: {
            description: "Exchange rate of the currency.",
            type: "number"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Currency",
        "x-readme-ref-name": "Currency"
      },
      Customer: {
        properties: {
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "John"
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Doe"
          },
          type: {
            description: "Either B for business or C for consumer.",
            type: "string",
            enum: [
              "B",
              "C"
            ]
          },
          ip: {
            description: "An ip address",
            type: "string",
            example: "213.126.82.230"
          },
          birthDate: {
            description: "Date of birth as defined in ISO-8601.",
            type: "string",
            format: "date",
            example: "1999-02-15"
          },
          gender: {
            description: "The subject's gender. Choose either M for male or F for female.",
            type: "string",
            example: "M"
          },
          phone: {
            description: "The subject's phone number. Optionally prepended with a + and country code",
            type: "string",
            example: "0031612345678"
          },
          email: {
            description: "An email address.",
            type: "string",
            format: "email",
            example: "sandbox@pay.nl"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            enum: [
              "NL",
              "EN",
              "DE",
              "FR",
              "IT",
              "ES"
            ],
            example: "NL"
          },
          trust: {
            description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
            type: "integer",
            maximum: 10,
            minimum: -10,
            example: -5
          },
          reference: {
            description: "Unique reference of the payer. This field only allows alphanumeric characters.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            pattern: "^[a-zA-Z0-9]{1,64}$",
            example: "NL87654321"
          },
          bankAccount: {
            required: [
              "iban",
              "bic",
              "owner"
            ],
            properties: {
              iban: {
                description: "The International Bank Account Number (IBAN).",
                type: "string",
                example: "NL69INGB0123456789"
              },
              bic: {
                description: "Business Identifier Codes (BIC/SWIFT).",
                type: "string",
                example: "INGBNL2A"
              },
              owner: {
                description: "The owner of the bank account.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John Doe"
              }
            },
            type: "object",
            title: "BankAccount",
            "x-readme-ref-name": "BankAccount"
          },
          company: {
            properties: {
              name: {
                description: "The name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              }
            },
            type: "object",
            title: "Company",
            "x-readme-ref-name": "Company"
          }
        },
        type: "object",
        title: "Customer",
        "x-readme-ref-name": "Customer"
      },
      Directdebit: {
        properties: {
          id: {
            description: "The direct debit identifier.",
            type: "string",
            example: "IL-####-####-####"
          },
          paymentSessionId: {
            description: "The payment session identifier.",
            type: "string",
            example: 1e8
          },
          processDate: {
            description: "The ISO date at which this entity will be processed",
            type: "string",
            format: "date-time",
            example: "2019-01-01T12:00:00+02:00"
          },
          type: {
            description: "The type of direct debit. One of: single, mandate, recurring.",
            type: "string",
            example: "single"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          declined: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          status: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          description: {
            description: "The description of the direct debit.",
            type: "string",
            maxLength: 32
          },
          bankAccount: {
            required: [
              "iban",
              "bic",
              "owner"
            ],
            properties: {
              iban: {
                description: "The International Bank Account Number (IBAN).",
                type: "string",
                example: "NL69INGB0123456789"
              },
              bic: {
                description: "Business Identifier Codes (BIC/SWIFT).",
                type: "string",
                example: "INGBNL2A"
              },
              owner: {
                description: "The owner of the bank account.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John Doe"
              }
            },
            type: "object",
            title: "BankAccount",
            "x-readme-ref-name": "BankAccount"
          },
          exchangeUrl: {
            description: "The exchange URL to call.",
            type: "string",
            format: "uri"
          }
        },
        type: "object",
        title: "Directdebit",
        "x-readme-ref-name": "Directdebit"
      },
      Document: {
        properties: {
          code: {
            description: "Code of the acceptance document.",
            type: "string",
            example: "D-1234-1234"
          },
          type: {
            description: "Type of the acceptance document.",
            type: "string",
            example: "identification"
          },
          status: {
            description: "Status of the acceptance document.",
            type: "string",
            example: "UPLOADED"
          }
        },
        type: "object",
        title: "Document",
        "x-readme-ref-name": "Document"
      },
      DocumentEmbedded: {
        properties: {
          code: {
            description: "Code of the acceptance document.",
            type: "string",
            example: "D-1234-1234"
          },
          name: {
            description: "Name of the document.",
            type: "string",
            example: "Agreemnent"
          },
          description: {
            description: "Description of the type of document.",
            type: "string",
            example: "This is a merchant agreement."
          },
          files: {
            type: "array",
            items: {
              properties: {
                name: {
                  description: "File name",
                  type: "string",
                  example: "agreement.pdf"
                },
                mimeType: {
                  description: "Mime-type of the file.",
                  type: "string",
                  example: "application/pdf"
                },
                size: {
                  description: "Amount of bytes",
                  type: "integer",
                  example: 518721
                },
                contents: {
                  description: "Base64 encoded file.",
                  type: "string",
                  example: "cGhwa2Fib3V0ZXI="
                }
              },
              type: "object",
              title: "FileEmbedded",
              "x-readme-ref-name": "FileEmbedded"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "DocumentEmbedded",
        "x-readme-ref-name": "DocumentEmbedded"
      },
      FileEmbedded: {
        properties: {
          name: {
            description: "File name",
            type: "string",
            example: "agreement.pdf"
          },
          mimeType: {
            description: "Mime-type of the file.",
            type: "string",
            example: "application/pdf"
          },
          size: {
            description: "Amount of bytes",
            type: "integer",
            example: 518721
          },
          contents: {
            description: "Base64 encoded file.",
            type: "string",
            example: "cGhwa2Fib3V0ZXI="
          }
        },
        type: "object",
        title: "FileEmbedded",
        "x-readme-ref-name": "FileEmbedded"
      },
      FinanceTransactionLine: {
        properties: {
          code: {
            type: "string"
          },
          unitType: {
            description: "The specification for the unit's type",
            required: [
              "id",
              "name"
            ],
            properties: {
              id: {
                description: "The unit type ID",
                type: "integer",
                example: "12"
              },
              name: {
                description: "The unit type's name",
                type: "string",
                example: "percentage"
              }
            },
            type: "object",
            nullable: true
          },
          amount: {
            type: "number"
          },
          costs: {
            description: "The costs revue per financial transaction with the corresponding currency",
            properties: {
              revenue: {
                description: "The revenue for the costs as a decimal (/float)",
                type: "number",
                example: "23.45"
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object"
          },
          processedDate: {
            type: "string",
            format: "date",
            nullable: true
          }
        },
        type: "object",
        title: "FinanceTransactionLine",
        "x-readme-ref-name": "FinanceTransactionLine"
      },
      Integration: {
        properties: {
          testMode: {
            description: "Indicates if the service is in testmode or not, possible values: false or true",
            type: "boolean"
          }
        },
        type: "object",
        title: "Integration",
        "x-readme-ref-name": "Integration"
      },
      IntegrationPlugin: {
        properties: {
          code: {
            description: "A code for this integration",
            type: "string",
            example: "PL-0000-0000"
          },
          name: {
            description: "An integration name.",
            type: "string"
          },
          description: {
            description: "Description of the integration.",
            type: "string"
          },
          status: {
            description: "Status of the integration.",
            type: "string"
          },
          image: {
            description: "Image of the integration.",
            type: "string"
          },
          url: {
            description: "Url to the integration.",
            type: "string"
          },
          urlInfo: {
            description: "Url to more information in the documentation about this integration.",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          versions: {
            items: {
              properties: {
                code: {
                  description: "A code for this integration version",
                  type: "string",
                  example: "PV-0000-0000"
                },
                version: {
                  description: "Integration version.",
                  type: "string"
                },
                developer: {
                  description: "Developer of the integration version.",
                  type: "string"
                },
                status: {
                  description: "Status of the integration.",
                  type: "string"
                },
                urlDownload: {
                  description: "Url to download.",
                  type: "string"
                },
                urlManual: {
                  description: "Url to manual.",
                  type: "string"
                },
                urlShopDemo: {
                  description: "Url to shopDemo.",
                  type: "string"
                },
                urlGithub: {
                  description: "Url to github.",
                  type: "string"
                },
                urlImage: {
                  description: "Url to image.",
                  type: "string"
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                }
              },
              type: "object",
              title: "IntegrationPluginVersion",
              "x-readme-ref-name": "IntegrationPluginVersion"
            }
          }
        },
        type: "object",
        title: "IntegrationPlugin",
        "x-readme-ref-name": "IntegrationPlugin"
      },
      IntegrationPluginVersion: {
        properties: {
          code: {
            description: "A code for this integration version",
            type: "string",
            example: "PV-0000-0000"
          },
          version: {
            description: "Integration version.",
            type: "string"
          },
          developer: {
            description: "Developer of the integration version.",
            type: "string"
          },
          status: {
            description: "Status of the integration.",
            type: "string"
          },
          urlDownload: {
            description: "Url to download.",
            type: "string"
          },
          urlManual: {
            description: "Url to manual.",
            type: "string"
          },
          urlShopDemo: {
            description: "Url to shopDemo.",
            type: "string"
          },
          urlGithub: {
            description: "Url to github.",
            type: "string"
          },
          urlImage: {
            description: "Url to image.",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "IntegrationPluginVersion",
        "x-readme-ref-name": "IntegrationPluginVersion"
      },
      Interval: {
        properties: {
          period: {
            description: "Specify the period frequency. Must be one of: day,week,month,trimester,halfyear,year,manual.",
            type: "string",
            enum: [
              "day",
              "week",
              "month",
              "trimester",
              "halfyear",
              "year",
              "manual"
            ]
          },
          quantity: {
            description: "Indicated the number of times this order should be executed.",
            type: "integer",
            example: 1
          },
          value: {
            description: "Specify the frequency for a period. For examply a weekly period, but only every second week.",
            type: "integer",
            example: 1
          }
        },
        type: "object",
        title: "Interval",
        "x-readme-ref-name": "Interval"
      },
      InvoiceLine: {
        required: [
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
        properties: {
          code: {
            type: "string"
          },
          merchant: {
            description: "The corresponding merchant for the invoice line",
            required: [
              "code",
              "contractPackage"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              contractPackage: {
                description: "The merchant's package type",
                type: "string",
                example: "Business"
              }
            },
            type: "object"
          },
          turnoverGroup: {
            description: "The turnover group for the invoice line",
            required: [
              "code",
              "name"
            ],
            properties: {
              code: {
                description: "The turnover group code",
                type: "string",
                example: "CT-1234-4321"
              },
              name: {
                description: "The turnover group name",
                type: "string",
                example: "Ecommerce"
              }
            },
            type: "object",
            nullable: true
          },
          billingLineType: {
            description: "The type of billing used for the invoice, c.q. payment method",
            required: [
              "id",
              "name"
            ],
            properties: {
              id: {
                description: "ID of the billing type",
                type: "integer",
                example: "706"
              },
              name: {
                description: "The name for the corresponding billing type",
                type: "string",
                example: "Visa Mastercard"
              }
            },
            type: "object",
            nullable: true
          },
          volume: {
            description: "The volume of the invoice line",
            properties: {
              amount: {
                description: "Amount of the volume as decimal",
                type: "number",
                example: "3.80"
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object"
          },
          totalCosts: {
            description: "The total costs per invoice line",
            properties: {
              totalCosts: {
                description: "The total costs amount as decimal",
                type: "number",
                example: "0.23"
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object"
          },
          transactions: {
            type: "integer"
          },
          payers: {
            type: "integer"
          },
          vatPercentage: {
            type: "number"
          },
          date: {
            type: "string",
            format: "date",
            nullable: true
          },
          valueDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          paymentDate: {
            type: "string",
            format: "date",
            nullable: true
          },
          state: {
            type: "string",
            enum: [
              "OPEN",
              "PAYABLE",
              "PAID"
            ],
            nullable: true
          },
          invoiceID: {
            type: "string",
            nullable: true
          },
          lines: {
            type: "array",
            items: {
              properties: {
                code: {
                  type: "string"
                },
                unitType: {
                  description: "The specification for the unit's type",
                  required: [
                    "id",
                    "name"
                  ],
                  properties: {
                    id: {
                      description: "The unit type ID",
                      type: "integer",
                      example: "12"
                    },
                    name: {
                      description: "The unit type's name",
                      type: "string",
                      example: "percentage"
                    }
                  },
                  type: "object",
                  nullable: true
                },
                amount: {
                  type: "number"
                },
                costs: {
                  description: "The costs revue per financial transaction with the corresponding currency",
                  properties: {
                    revenue: {
                      description: "The revenue for the costs as a decimal (/float)",
                      type: "number",
                      example: "23.45"
                    },
                    currency: {
                      description: "The currency in ISO-4217 format.",
                      type: "string",
                      example: "EUR"
                    }
                  },
                  type: "object"
                },
                processedDate: {
                  type: "string",
                  format: "date",
                  nullable: true
                }
              },
              type: "object",
              title: "FinanceTransactionLine",
              "x-readme-ref-name": "FinanceTransactionLine"
            }
          }
        },
        type: "object",
        title: "InvoiceLine",
        "x-readme-ref-name": "InvoiceLine"
      },
      Issuer: {
        properties: {
          id: {
            description: "The identifier for this issuer",
            type: "integer",
            example: "1"
          },
          code: {
            description: "A code for this issuer",
            type: "string",
            example: "PB-0000-0000"
          },
          name: {
            description: "The issuer name.",
            type: "string"
          },
          bic: {
            description: "The Bank Identifier Code.",
            type: "string"
          },
          issuerId: {
            description: "ID of the issuer.",
            type: "string"
          },
          available: {
            description: "Is available.",
            type: "boolean"
          },
          status: {
            description: "Status.",
            type: "string",
            enum: [
              "active",
              "inactive"
            ]
          },
          image: {
            description: "Image of the integration.",
            type: "string"
          },
          paymentMethod: {
            required: [
              "id"
            ],
            properties: {
              id: {
                description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                type: "integer",
                example: "10"
              },
              name: {
                description: "The name of the payment method.",
                type: "string",
                example: "ideal"
              }
            },
            type: "object",
            title: "IssuerPaymentMethod",
            "x-readme-ref-name": "IssuerPaymentMethod"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Issuer",
        "x-readme-ref-name": "Issuer"
      },
      IssuerPaymentMethod: {
        required: [
          "id"
        ],
        properties: {
          id: {
            description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            type: "integer",
            example: "10"
          },
          name: {
            description: "The name of the payment method.",
            type: "string",
            example: "ideal"
          }
        },
        type: "object",
        title: "IssuerPaymentMethod",
        "x-readme-ref-name": "IssuerPaymentMethod"
      },
      JWT: {
        properties: {
          accessToken: {
            description: "Token used to make API calls",
            type: "string",
            example: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiJBLTE1ODQtOTMxNyIsImlhdCI6MTY2OTEyOTg0OSwiZXhwIjoxNjY5MTM3MDQ5fQ.7g61s7PN58Ope8t70ysnvOqbcOjGDFzyWanZeFqx8cQ"
          },
          refreshToken: {
            description: "Token used to exchange for new ones",
            type: "string",
            example: "5fe027d96cded0c92b2337d4068a336dc41b956683a501c95d4896d9cb9f1103dc0b6d3388f17c1ef6a578ed9aa3c9d1c133355e9d9a4fa5dbb53d22e0aba0dc"
          },
          accessTokenExpiresAt: {
            type: "string",
            format: "date-time",
            nullable: false
          },
          refreshTokenExpiresAt: {
            type: "string",
            format: "date-time",
            nullable: false
          }
        },
        type: "object",
        title: "JWT",
        "x-readme-ref-name": "JWT"
      },
      Language: {
        properties: {
          code: {
            description: "The language code",
            type: "string",
            example: "en_US"
          },
          name: {
            description: "The language name.",
            type: "string"
          },
          adminLanguageAvailable: {
            description: "Language is available in the administration panel.",
            type: "boolean"
          },
          hostedPaymentPageLanguageAvailable: {
            description: "Language is available on a hosted payment page.",
            type: "boolean"
          },
          payerCommunicationLanguageAvailable: {
            description: "Language is available for communication to the payer.",
            type: "boolean"
          },
          contractLanguageAvailable: {
            description: "Language is available for contracts.",
            type: "boolean"
          },
          image: {
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Language",
        "x-readme-ref-name": "Language"
      },
      Layout: {
        properties: {
          code: {
            description: "Id of layout",
            type: "string",
            example: "LY-####-####"
          },
          name: {
            description: "Name of the layout",
            type: "string",
            example: "My layout"
          },
          ccsUrl: {
            description: "CSS url to the layout css",
            type: "string"
          },
          icon: {
            description: "Image in base64 encoding",
            type: "string"
          },
          supportingColor: {
            description: "Supporting hex color code",
            type: "string",
            example: "FFFFFF"
          },
          headerTextColor: {
            description: "Header hex color code",
            type: "string",
            example: "FFFFFF"
          },
          buttonColor: {
            description: "Button hex color code",
            type: "string",
            example: "FFFFFF"
          },
          buttonTextColor: {
            description: "Button text hex color code",
            type: "string",
            example: "FFFFFF"
          }
        },
        type: "object",
        title: "Layout",
        "x-readme-ref-name": "Layout"
      },
      License: {
        properties: {
          code: {
            description: "License code.",
            type: "string",
            example: "AL-1234-4321"
          },
          name: {
            description: "Name of the license.",
            type: "string",
            example: "John Doe"
          },
          merchant: {
            allOf: [
              {
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  publicName: {
                    description: "The public name of your merchant.",
                    type: "string",
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  },
                  coc: {
                    description: "Your Chamber of commerce registration number. This format differs per country.",
                    type: "string",
                    example: "12345678"
                  },
                  vat: {
                    description: "Value added tax identification number (VAT identification number).",
                    type: "string",
                    example: "NL807960147B01"
                  },
                  companyTypeId: {
                    description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                    type: "string",
                    example: "1"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    example: "NL"
                  },
                  contractLanguage: {
                    description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                    type: "string",
                    example: "nl_NL"
                  },
                  contractPackage: {
                    type: "string"
                  },
                  accountManager: {
                    description: "The email address of the active account manager.",
                    type: "string",
                    example: "account.manager@pay.nl"
                  },
                  website: {
                    description: "The website.",
                    type: "string",
                    format: "uri",
                    example: "https://www.my-website.com"
                  },
                  categories: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        },
                        description: {
                          description: "The category's description.",
                          type: "string",
                          example: "Kansspelen"
                        },
                        sequence: {
                          description: "The sequence of the category.",
                          type: "integer"
                        },
                        available: {
                          description: "The category's availability.",
                          type: "boolean"
                        },
                        initialMCC: {
                          description: "The initial MCC of the category.",
                          type: "integer",
                          example: "General Contractors-Residential and Commercial",
                          nullable: true
                        },
                        initialRiskCategory: {
                          description: "The initial risk category of the category.",
                          type: "string",
                          example: "Low risk"
                        },
                        translations: {
                          description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                          type: "object",
                          uniqueItems: true,
                          example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                          nullable: true,
                          additionalProperties: {
                            type: "object",
                            additionalProperties: {
                              type: "string"
                            }
                          }
                        },
                        paymentMethods: {
                          type: "array",
                          items: {
                            properties: {
                              id: {
                                description: "The payment profile identifier.",
                                type: "integer",
                                example: "1630"
                              },
                              name: {
                                description: "The name of the payment profile.",
                                type: "string",
                                example: "Pin (Maestro)"
                              }
                            },
                            type: "object"
                          }
                        },
                        createdAt: {
                          description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: false
                        },
                        modifiedAt: {
                          description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        },
                        deletedAt: {
                          description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        }
                      },
                      type: "object",
                      title: "Category",
                      "x-readme-ref-name": "Category"
                    }
                  },
                  integrations: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    }
                  },
                  clearingAccounts: {
                    type: "array",
                    items: {
                      required: [
                        "code",
                        "status",
                        "method",
                        "iban"
                      ],
                      properties: {
                        code: {
                          type: "string"
                        },
                        status: {
                          type: "string",
                          enum: [
                            "APPROVED",
                            "DENIED",
                            "NOT_CHECKED"
                          ]
                        },
                        method: {
                          type: "string",
                          enum: [
                            "iban"
                          ]
                        },
                        iban: {
                          required: [
                            "iban",
                            "bic",
                            "owner"
                          ],
                          properties: {
                            iban: {
                              description: "The International Bank Account Number (IBAN).",
                              type: "string",
                              example: "NL69INGB0123456789"
                            },
                            bic: {
                              description: "Business Identifier Codes (BIC/SWIFT).",
                              type: "string",
                              example: "INGBNL2A"
                            },
                            owner: {
                              description: "The owner of the bank account.",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John Doe"
                            }
                          },
                          type: "object",
                          title: "BankAccount",
                          "x-readme-ref-name": "BankAccount"
                        }
                      },
                      type: "object"
                    }
                  },
                  postalAddress: {
                    required: [
                      "code",
                      "streetName",
                      "zipCode",
                      "city",
                      "countryCode"
                    ],
                    properties: {
                      code: {
                        type: "string"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Location",
                    "x-readme-ref-name": "Location"
                  },
                  visitAddress: {
                    required: [
                      "code",
                      "streetName",
                      "zipCode",
                      "city",
                      "countryCode"
                    ],
                    properties: {
                      code: {
                        type: "string"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Location",
                    "x-readme-ref-name": "Location"
                  },
                  contactMethods: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          description: "The contact method ID of your company starting with CM.",
                          type: "string",
                          example: "CM-1234-4321"
                        },
                        type: {
                          description: "The type of contact method.",
                          type: "string",
                          enum: [
                            "email",
                            "email_support",
                            "phone",
                            "phone_helpdesk",
                            "phone_off_hours",
                            "url",
                            "email_msnskype"
                          ],
                          example: "The type of contact method."
                        },
                        value: {
                          description: "The value of the contact method.",
                          type: "string",
                          example: "088-88 666 22"
                        },
                        description: {
                          description: "The description of the contact method.",
                          type: "string"
                        },
                        public: {
                          description: "Is the contact method public accessible",
                          type: "boolean",
                          example: "true"
                        },
                        notifications: {
                          description: "Does the contact method needs to receive notifications",
                          type: "boolean",
                          example: "false"
                        }
                      },
                      type: "object",
                      title: "ContactMethod",
                      "x-readme-ref-name": "ContactMethod"
                    }
                  },
                  authenticationTokens: {
                    type: "array",
                    items: {
                      properties: {
                        authenticationTokens: {
                          type: "string"
                        }
                      },
                      type: "object"
                    }
                  },
                  trademarks: {
                    type: "array",
                    items: {
                      required: [
                        "name"
                      ],
                      properties: {
                        code: {
                          description: "An identifier for this trademark",
                          type: "string",
                          example: "TM-0000-0000"
                        },
                        type: {
                          type: "string"
                        },
                        name: {
                          description: "A registered trademark name.",
                          type: "string"
                        },
                        status: {
                          description: "Status of the trademark.",
                          type: "string"
                        },
                        createdAt: {
                          description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: false
                        },
                        createdBy: {
                          description: "The reference to an account or token whom created the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: false
                        },
                        modifiedAt: {
                          description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        },
                        modifiedBy: {
                          description: "The reference to an account or token whom modified the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: true
                        },
                        deletedAt: {
                          description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        },
                        deletedBy: {
                          description: "The reference to an account or token whom deleted the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: true
                        }
                      },
                      type: "object",
                      title: "Trademark",
                      "x-readme-ref-name": "Trademark"
                    }
                  },
                  licenses: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          type: "string",
                          example: "AL-1234-4321"
                        },
                        secret: {
                          type: "string",
                          example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                        },
                        name: {
                          type: "string"
                        },
                        accountCode: {
                          type: "string",
                          example: "A-1234-4321"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John",
                          nullable: true
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Doe"
                        },
                        email: {
                          description: "An email address.",
                          type: "string",
                          format: "email",
                          example: "sandbox@pay.nl"
                        },
                        language: {
                          description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                          type: "string",
                          enum: [
                            "NL",
                            "EN",
                            "DE",
                            "FR",
                            "IT",
                            "ES"
                          ],
                          example: "NL"
                        },
                        phone: {
                          description: "The subject's phone number. Optionally prepended with a + and country code",
                          type: "string",
                          example: "0031612345678"
                        },
                        visitAddress: {
                          properties: {
                            code: {
                              type: "string"
                            },
                            firstName: {
                              description: "The forename (also known as a given name, Christian name or a first name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John"
                            },
                            lastName: {
                              description: "The surname (also known as a family name or a last name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "Doe"
                            },
                            streetName: {
                              description: "The name of the street",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Visitlane"
                            },
                            streetNumber: {
                              description: "The street number",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "13"
                            },
                            streetNumberExtension: {
                              description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "b1"
                            },
                            zipCode: {
                              description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                              type: "string",
                              maxLength: 16,
                              minLength: 1,
                              example: "5678CD"
                            },
                            city: {
                              description: "The name of a city",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Amsterdam"
                            },
                            regionCode: {
                              description: "Region code (iso-3166-2)",
                              type: "string",
                              example: "ZH"
                            },
                            countryCode: {
                              description: "The country code consisting of 2 uppercase letters",
                              type: "string",
                              maxLength: 2,
                              minLength: 2,
                              example: "NL"
                            }
                          },
                          type: "object",
                          title: "Address",
                          "x-readme-ref-name": "Address"
                        },
                        complianceData: {
                          allOf: [
                            {
                              properties: {
                                pep: {
                                  description: "Indicate if the person is a Politically Exposed Person (PEP).",
                                  type: "boolean",
                                  example: "true"
                                },
                                pepDescription: {
                                  description: "Describe in your own words why this person is a PEP.",
                                  type: "string",
                                  example: "The person is active as an alderman in the municipality where he lives."
                                },
                                dateOfBirth: {
                                  description: "Date of birth of the person.",
                                  type: "string",
                                  format: "date-time",
                                  example: "1999-12-12"
                                },
                                nationality: {
                                  description: "Nationality of the person.",
                                  type: "string",
                                  example: "NL"
                                },
                                idDocumentNumber: {
                                  description: "The id document number of the person",
                                  type: "string",
                                  example: ""
                                }
                              },
                              type: "object",
                              title: "ComplianceData",
                              "x-readme-ref-name": "ComplianceData"
                            },
                            {
                              properties: {
                                ubo: {
                                  description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                                  type: "string",
                                  enum: [
                                    "no",
                                    "direct",
                                    "indirect",
                                    "pseudo"
                                  ],
                                  example: "direct"
                                },
                                uboPercentage: {
                                  description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                                  type: "integer",
                                  example: "25"
                                },
                                authorizedToSign: {
                                  description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                                  type: "string",
                                  enum: [
                                    "no",
                                    "alone",
                                    "shared"
                                  ],
                                  example: "shared"
                                },
                                relationshipDescription: {
                                  description: "Describe in your own words the relation the person has with this company.",
                                  type: "string",
                                  example: "John Doe of test company"
                                }
                              },
                              type: "object"
                            }
                          ],
                          title: "ComplianceDataPerson",
                          "x-readme-ref-name": "ComplianceDataPerson"
                        }
                      },
                      type: "object",
                      title: "Person",
                      "x-readme-ref-name": "Person"
                    }
                  },
                  services: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        secret: {
                          type: "string"
                        },
                        name: {
                          type: "string"
                        },
                        status: {
                          type: "string"
                        },
                        category: {
                          properties: {
                            code: {
                              description: "The category (code) identifier",
                              type: "string",
                              maxLength: 40,
                              pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                              example: "CY-1234-4321"
                            },
                            name: {
                              description: "The category name.",
                              type: "string",
                              example: "Digitale diensten gambling (kansspelen)"
                            }
                          },
                          type: "object"
                        },
                        integration: {
                          properties: {
                            code: {
                              description: "The plugin identifier.",
                              type: "string",
                              example: "PL-3010-1000"
                            },
                            name: {
                              type: "string"
                            }
                          },
                          type: "object"
                        },
                        website: {
                          description: "The website URL.",
                          type: "string",
                          example: "https://www.pay.nl"
                        },
                        urls: {
                          type: "array",
                          items: {
                            properties: {
                              code: {
                                description: "The code of the website URL.",
                                type: "string",
                                example: "WU-1234-1234"
                              },
                              website: {
                                description: "The website URL.",
                                type: "string",
                                example: "https://www.pay.nl"
                              }
                            },
                            type: "object",
                            title: "WebsiteUrl",
                            "x-readme-ref-name": "WebsiteUrl"
                          }
                        }
                      },
                      type: "object"
                    }
                  },
                  partner: {
                    type: "array",
                    items: {
                      properties: {
                        code: {
                          type: "string",
                          example: "M-1234-4321"
                        },
                        name: {
                          type: "string"
                        },
                        type: {
                          type: "string"
                        },
                        accessToMerchant: {
                          type: "boolean"
                        }
                      },
                      type: "object",
                      title: "Partner",
                      "x-readme-ref-name": "Partner"
                    }
                  },
                  createdAt: {
                    description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: false
                  },
                  createdBy: {
                    description: "The reference to an account or token whom created the entity",
                    type: "string",
                    pattern: "^A(T)?(-\\d{4}){2}$",
                    readOnly: true,
                    example: "A-1234-4321",
                    nullable: false
                  },
                  acceptedAt: {
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: true
                  },
                  suspendedAt: {
                    type: "string",
                    format: "date-time",
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: true
                  },
                  suspendedBy: {
                    description: "SUSPENDED_BY_DESCRIPTION",
                    type: "string",
                    example: "A-1234-4321",
                    nullable: true
                  },
                  modifiedAt: {
                    description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: true
                  },
                  modifiedBy: {
                    description: "The reference to an account or token whom modified the entity",
                    type: "string",
                    pattern: "^A(T)?(-\\d{4}){2}$",
                    readOnly: true,
                    example: "A-1234-4321",
                    nullable: true
                  },
                  deletedAt: {
                    description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: true
                  },
                  deletedBy: {
                    description: "The reference to an account or token whom deleted the entity",
                    type: "string",
                    pattern: "^A(T)?(-\\d{4}){2}$",
                    readOnly: true,
                    example: "A-1234-4321",
                    nullable: true
                  },
                  reviewedAt: {
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: true
                  },
                  nextReviewDate: {
                    type: "string",
                    format: "date-time"
                  }
                },
                type: "object",
                title: "Merchant",
                "x-readme-ref-name": "Merchant"
              },
              {
                properties: {
                  whitelabel: {
                    properties: {
                      primaryColor: {
                        description: "Primary color of the whitelabel.",
                        type: "string",
                        example: "000000"
                      },
                      secondaryColor: {
                        description: "Secondary color of the whitelabel.",
                        type: "string",
                        example: "000000"
                      },
                      footerData: {
                        description: "Footer data of the whitelabel",
                        type: "string",
                        example: ""
                      }
                    },
                    type: "object",
                    title: "Whitelabel",
                    "x-readme-ref-name": "Whitelabel"
                  },
                  primaryContacts: {
                    description: "The primary contacts linked to the merchant.",
                    type: "array",
                    items: {
                      type: "string"
                    },
                    example: "Hans"
                  }
                },
                type: "object"
              }
            ],
            title: "MerchantCompliance",
            "x-readme-ref-name": "MerchantCompliance"
          },
          authorizedToSign: {
            description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
            type: "string",
            enum: [
              "no",
              "alone",
              "shared"
            ],
            example: "shared"
          },
          ubo: {
            description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
            type: "string",
            enum: [
              "no",
              "direct",
              "indirect",
              "pseudo"
            ],
            example: "direct"
          },
          uboPercentage: {
            description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
            type: "integer",
            example: "25"
          },
          relationshipDescription: {
            description: "Describe in your own words the relation the person has with this company.",
            type: "string",
            example: "John Doe of test company"
          },
          creator: {
            description: "The creator of the license.",
            type: "string",
            example: "Papa Doe"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          acceptedAt: {
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "License",
        "x-readme-ref-name": "License"
      },
      LineType: {
        required: [
          "id",
          "name",
          "translations",
          "createdAt",
          "modifiedAt",
          "deletedAt"
        ],
        properties: {
          id: {
            type: "integer"
          },
          name: {
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "LineType",
        "x-readme-ref-name": "LineType"
      },
      Link: {
        required: [
          "href",
          "rel",
          "type"
        ],
        properties: {
          href: {
            description: "",
            type: "string",
            readOnly: true,
            example: "",
            nullable: false
          },
          rel: {
            description: "",
            type: "string",
            readOnly: true,
            example: "",
            nullable: false
          },
          type: {
            description: "",
            type: "string",
            readOnly: true,
            example: "",
            nullable: false
          }
        },
        type: "object",
        title: "Link",
        "x-readme-ref-name": "Link"
      },
      Location: {
        required: [
          "code",
          "streetName",
          "zipCode",
          "city",
          "countryCode"
        ],
        properties: {
          code: {
            type: "string"
          },
          streetName: {
            description: "The name of the street",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Visitlane"
          },
          streetNumber: {
            description: "The street number",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "13"
          },
          zipCode: {
            description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
            type: "string",
            maxLength: 16,
            minLength: 1,
            example: "5678CD"
          },
          city: {
            description: "The name of a city",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Amsterdam"
          },
          countryCode: {
            description: "The country code consisting of 2 uppercase letters",
            type: "string",
            maxLength: 2,
            minLength: 2,
            example: "NL"
          }
        },
        type: "object",
        title: "Location",
        "x-readme-ref-name": "Location"
      },
      LoginSession: {
        properties: {
          sessionCode: {
            type: "string",
            example: "LA-1234-4321"
          },
          handshake: {
            type: "string",
            example: "agftj386jdfjk3489dsfdf824dff"
          },
          internalId: {
            type: "string",
            example: "John Doe's Bakery"
          },
          licenseCode: {
            type: "string",
            example: "AL-1234-4321"
          },
          redirectUrl: {
            type: "string",
            example: "https://dashboard.bakery.com",
            nullable: true
          }
        },
        type: "object",
        title: "LoginSession",
        "x-readme-ref-name": "LoginSession"
      },
      Mandate: {
        properties: {
          id: {
            description: "The direct debit identifier.",
            type: "string",
            example: "IL-####-####-####"
          },
          type: {
            description: "The type of direct debit. One of: single, mandate, recurring.",
            type: "string",
            example: "single"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          description: {
            description: "The description of the direct debit.",
            type: "string"
          },
          statistics: {
            properties: {
              info: {
                description: "The used info code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Campagne 99"
              },
              tool: {
                description: "The used tool code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Google"
              },
              object: {
                description: "The object which can be tracked in stats.",
                type: "string",
                maxLength: 64,
                minLength: 1
              },
              extra1: {
                description: "The first free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Customer 6985615"
              },
              extra2: {
                description: "The second free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Invoice 21.3695"
              },
              extra3: {
                description: "The third free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Shop Amsterdam"
              },
              domainId: {
                description: "The ID of the duplicate content URL",
                type: "string",
                example: "WU-####-####"
              }
            },
            type: "object",
            title: "Stats",
            "x-readme-ref-name": "Stats"
          },
          customer: {
            properties: {
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              type: {
                description: "Either B for business or C for consumer.",
                type: "string",
                enum: [
                  "B",
                  "C"
                ]
              },
              ip: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              birthDate: {
                description: "Date of birth as defined in ISO-8601.",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              gender: {
                description: "The subject's gender. Choose either M for male or F for female.",
                type: "string",
                example: "M"
              },
              phone: {
                description: "The subject's phone number. Optionally prepended with a + and country code",
                type: "string",
                example: "0031612345678"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              trust: {
                description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                type: "integer",
                maximum: 10,
                minimum: -10,
                example: -5
              },
              reference: {
                description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "NL87654321"
              },
              bankAccount: {
                required: [
                  "iban",
                  "bic",
                  "owner"
                ],
                properties: {
                  iban: {
                    description: "The International Bank Account Number (IBAN).",
                    type: "string",
                    example: "NL69INGB0123456789"
                  },
                  bic: {
                    description: "Business Identifier Codes (BIC/SWIFT).",
                    type: "string",
                    example: "INGBNL2A"
                  },
                  owner: {
                    description: "The owner of the bank account.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John Doe"
                  }
                },
                type: "object",
                title: "BankAccount",
                "x-readme-ref-name": "BankAccount"
              },
              company: {
                properties: {
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    example: "CompanyName"
                  },
                  coc: {
                    description: "Your Chamber of commerce registration number. This format differs per country.",
                    type: "string",
                    example: "12345678"
                  },
                  vat: {
                    description: "Value added tax identification number (VAT identification number).",
                    type: "string",
                    example: "NL807960147B01"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    example: "NL"
                  }
                },
                type: "object",
                title: "Company",
                "x-readme-ref-name": "Company"
              }
            },
            type: "object",
            title: "Customer",
            "x-readme-ref-name": "Customer"
          },
          interval: {
            properties: {
              period: {
                description: "Specify the period frequency. Must be one of: day,week,month,trimester,halfyear,year,manual.",
                type: "string",
                enum: [
                  "day",
                  "week",
                  "month",
                  "trimester",
                  "halfyear",
                  "year",
                  "manual"
                ]
              },
              quantity: {
                description: "Indicated the number of times this order should be executed.",
                type: "integer",
                example: 1
              },
              value: {
                description: "Specify the frequency for a period. For examply a weekly period, but only every second week.",
                type: "integer",
                example: 1
              }
            },
            type: "object",
            title: "Interval",
            "x-readme-ref-name": "Interval"
          },
          state: {
            description: "State of the order. Options are: first, active, last, deleted, single.",
            type: "string"
          }
        },
        type: "object",
        title: "Mandate",
        "x-readme-ref-name": "Mandate"
      },
      Mcc: {
        properties: {
          code: {
            description: "A MCC code",
            type: "integer",
            example: "XXXX"
          },
          description: {
            description: "Description of the MCC code.",
            type: "string"
          },
          highRisk: {
            description: "Should this MCC code be considered high risk?",
            type: "boolean"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Mcc",
        "x-readme-ref-name": "Mcc"
      },
      Merchant: {
        properties: {
          code: {
            description: "The merchant id of your company starting with M.",
            type: "string",
            example: "M-1234-4321"
          },
          name: {
            description: "The name of your merchant.",
            type: "string",
            maxLength: 128,
            minLength: 2,
            example: "CompanyName"
          },
          publicName: {
            description: "The public name of your merchant.",
            type: "string",
            example: "CompanyName"
          },
          status: {
            description: "Merchant state",
            type: "string",
            example: "ACTIVE"
          },
          coc: {
            description: "Your Chamber of commerce registration number. This format differs per country.",
            type: "string",
            example: "12345678"
          },
          vat: {
            description: "Value added tax identification number (VAT identification number).",
            type: "string",
            example: "NL807960147B01"
          },
          companyTypeId: {
            description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
            type: "string",
            example: "1"
          },
          countryCode: {
            description: "The country code consisting of 2 uppercase letters",
            type: "string",
            example: "NL"
          },
          contractLanguage: {
            description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
            type: "string",
            example: "nl_NL"
          },
          contractPackage: {
            type: "string"
          },
          accountManager: {
            description: "The email address of the active account manager.",
            type: "string",
            example: "account.manager@pay.nl"
          },
          website: {
            description: "The website.",
            type: "string",
            format: "uri",
            example: "https://www.my-website.com"
          },
          categories: {
            type: "array",
            items: {
              properties: {
                code: {
                  description: "The category (code) identifier",
                  type: "string",
                  maxLength: 40,
                  pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                  example: "CY-1234-4321"
                },
                name: {
                  description: "The category name.",
                  type: "string",
                  example: "Digitale diensten gambling (kansspelen)"
                },
                description: {
                  description: "The category's description.",
                  type: "string",
                  example: "Kansspelen"
                },
                sequence: {
                  description: "The sequence of the category.",
                  type: "integer"
                },
                available: {
                  description: "The category's availability.",
                  type: "boolean"
                },
                initialMCC: {
                  description: "The initial MCC of the category.",
                  type: "integer",
                  example: "General Contractors-Residential and Commercial",
                  nullable: true
                },
                initialRiskCategory: {
                  description: "The initial risk category of the category.",
                  type: "string",
                  example: "Low risk"
                },
                translations: {
                  description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                  type: "object",
                  uniqueItems: true,
                  example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                  nullable: true,
                  additionalProperties: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                paymentMethods: {
                  type: "array",
                  items: {
                    properties: {
                      id: {
                        description: "The payment profile identifier.",
                        type: "integer",
                        example: "1630"
                      },
                      name: {
                        description: "The name of the payment profile.",
                        type: "string",
                        example: "Pin (Maestro)"
                      }
                    },
                    type: "object"
                  }
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                }
              },
              type: "object",
              title: "Category",
              "x-readme-ref-name": "Category"
            }
          },
          integrations: {
            type: "array",
            items: {
              properties: {
                code: {
                  description: "The plugin identifier.",
                  type: "string",
                  example: "PL-3010-1000"
                },
                name: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          clearingAccounts: {
            type: "array",
            items: {
              required: [
                "code",
                "status",
                "method",
                "iban"
              ],
              properties: {
                code: {
                  type: "string"
                },
                status: {
                  type: "string",
                  enum: [
                    "APPROVED",
                    "DENIED",
                    "NOT_CHECKED"
                  ]
                },
                method: {
                  type: "string",
                  enum: [
                    "iban"
                  ]
                },
                iban: {
                  required: [
                    "iban",
                    "bic",
                    "owner"
                  ],
                  properties: {
                    iban: {
                      description: "The International Bank Account Number (IBAN).",
                      type: "string",
                      example: "NL69INGB0123456789"
                    },
                    bic: {
                      description: "Business Identifier Codes (BIC/SWIFT).",
                      type: "string",
                      example: "INGBNL2A"
                    },
                    owner: {
                      description: "The owner of the bank account.",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John Doe"
                    }
                  },
                  type: "object",
                  title: "BankAccount",
                  "x-readme-ref-name": "BankAccount"
                }
              },
              type: "object"
            }
          },
          postalAddress: {
            required: [
              "code",
              "streetName",
              "zipCode",
              "city",
              "countryCode"
            ],
            properties: {
              code: {
                type: "string"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Location",
            "x-readme-ref-name": "Location"
          },
          visitAddress: {
            required: [
              "code",
              "streetName",
              "zipCode",
              "city",
              "countryCode"
            ],
            properties: {
              code: {
                type: "string"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Location",
            "x-readme-ref-name": "Location"
          },
          contactMethods: {
            type: "array",
            items: {
              properties: {
                code: {
                  description: "The contact method ID of your company starting with CM.",
                  type: "string",
                  example: "CM-1234-4321"
                },
                type: {
                  description: "The type of contact method.",
                  type: "string",
                  enum: [
                    "email",
                    "email_support",
                    "phone",
                    "phone_helpdesk",
                    "phone_off_hours",
                    "url",
                    "email_msnskype"
                  ],
                  example: "The type of contact method."
                },
                value: {
                  description: "The value of the contact method.",
                  type: "string",
                  example: "088-88 666 22"
                },
                description: {
                  description: "The description of the contact method.",
                  type: "string"
                },
                public: {
                  description: "Is the contact method public accessible",
                  type: "boolean",
                  example: "true"
                },
                notifications: {
                  description: "Does the contact method needs to receive notifications",
                  type: "boolean",
                  example: "false"
                }
              },
              type: "object",
              title: "ContactMethod",
              "x-readme-ref-name": "ContactMethod"
            }
          },
          authenticationTokens: {
            type: "array",
            items: {
              properties: {
                authenticationTokens: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          trademarks: {
            type: "array",
            items: {
              required: [
                "name"
              ],
              properties: {
                code: {
                  description: "An identifier for this trademark",
                  type: "string",
                  example: "TM-0000-0000"
                },
                type: {
                  type: "string"
                },
                name: {
                  description: "A registered trademark name.",
                  type: "string"
                },
                status: {
                  description: "Status of the trademark.",
                  type: "string"
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                createdBy: {
                  description: "The reference to an account or token whom created the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                modifiedBy: {
                  description: "The reference to an account or token whom modified the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedBy: {
                  description: "The reference to an account or token whom deleted the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: true
                }
              },
              type: "object",
              title: "Trademark",
              "x-readme-ref-name": "Trademark"
            }
          },
          licenses: {
            type: "array",
            items: {
              properties: {
                code: {
                  type: "string",
                  example: "AL-1234-4321"
                },
                secret: {
                  type: "string",
                  example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                },
                name: {
                  type: "string"
                },
                accountCode: {
                  type: "string",
                  example: "A-1234-4321"
                },
                firstName: {
                  description: "The forename (also known as a given name, Christian name or a first name).",
                  type: "string",
                  maxLength: 64,
                  minLength: 1,
                  example: "John",
                  nullable: true
                },
                lastName: {
                  description: "The surname (also known as a family name or a last name).",
                  type: "string",
                  maxLength: 128,
                  minLength: 1,
                  example: "Doe"
                },
                email: {
                  description: "An email address.",
                  type: "string",
                  format: "email",
                  example: "sandbox@pay.nl"
                },
                language: {
                  description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                  type: "string",
                  enum: [
                    "NL",
                    "EN",
                    "DE",
                    "FR",
                    "IT",
                    "ES"
                  ],
                  example: "NL"
                },
                phone: {
                  description: "The subject's phone number. Optionally prepended with a + and country code",
                  type: "string",
                  example: "0031612345678"
                },
                visitAddress: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John"
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "Doe"
                    },
                    streetName: {
                      description: "The name of the street",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Visitlane"
                    },
                    streetNumber: {
                      description: "The street number",
                      type: "string",
                      maxLength: 32,
                      minLength: 1,
                      example: "13"
                    },
                    streetNumberExtension: {
                      description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                      type: "string",
                      maxLength: 32,
                      minLength: 1,
                      example: "b1"
                    },
                    zipCode: {
                      description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                      type: "string",
                      maxLength: 16,
                      minLength: 1,
                      example: "5678CD"
                    },
                    city: {
                      description: "The name of a city",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Amsterdam"
                    },
                    regionCode: {
                      description: "Region code (iso-3166-2)",
                      type: "string",
                      example: "ZH"
                    },
                    countryCode: {
                      description: "The country code consisting of 2 uppercase letters",
                      type: "string",
                      maxLength: 2,
                      minLength: 2,
                      example: "NL"
                    }
                  },
                  type: "object",
                  title: "Address",
                  "x-readme-ref-name": "Address"
                },
                complianceData: {
                  allOf: [
                    {
                      properties: {
                        pep: {
                          description: "Indicate if the person is a Politically Exposed Person (PEP).",
                          type: "boolean",
                          example: "true"
                        },
                        pepDescription: {
                          description: "Describe in your own words why this person is a PEP.",
                          type: "string",
                          example: "The person is active as an alderman in the municipality where he lives."
                        },
                        dateOfBirth: {
                          description: "Date of birth of the person.",
                          type: "string",
                          format: "date-time",
                          example: "1999-12-12"
                        },
                        nationality: {
                          description: "Nationality of the person.",
                          type: "string",
                          example: "NL"
                        },
                        idDocumentNumber: {
                          description: "The id document number of the person",
                          type: "string",
                          example: ""
                        }
                      },
                      type: "object",
                      title: "ComplianceData",
                      "x-readme-ref-name": "ComplianceData"
                    },
                    {
                      properties: {
                        ubo: {
                          description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                          type: "string",
                          enum: [
                            "no",
                            "direct",
                            "indirect",
                            "pseudo"
                          ],
                          example: "direct"
                        },
                        uboPercentage: {
                          description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                          type: "integer",
                          example: "25"
                        },
                        authorizedToSign: {
                          description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                          type: "string",
                          enum: [
                            "no",
                            "alone",
                            "shared"
                          ],
                          example: "shared"
                        },
                        relationshipDescription: {
                          description: "Describe in your own words the relation the person has with this company.",
                          type: "string",
                          example: "John Doe of test company"
                        }
                      },
                      type: "object"
                    }
                  ],
                  title: "ComplianceDataPerson",
                  "x-readme-ref-name": "ComplianceDataPerson"
                }
              },
              type: "object",
              title: "Person",
              "x-readme-ref-name": "Person"
            }
          },
          services: {
            type: "array",
            items: {
              properties: {
                code: {
                  type: "string"
                },
                secret: {
                  type: "string"
                },
                name: {
                  type: "string"
                },
                status: {
                  type: "string"
                },
                category: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    }
                  },
                  type: "object"
                },
                integration: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                },
                website: {
                  description: "The website URL.",
                  type: "string",
                  example: "https://www.pay.nl"
                },
                urls: {
                  type: "array",
                  items: {
                    properties: {
                      code: {
                        description: "The code of the website URL.",
                        type: "string",
                        example: "WU-1234-1234"
                      },
                      website: {
                        description: "The website URL.",
                        type: "string",
                        example: "https://www.pay.nl"
                      }
                    },
                    type: "object",
                    title: "WebsiteUrl",
                    "x-readme-ref-name": "WebsiteUrl"
                  }
                }
              },
              type: "object"
            }
          },
          partner: {
            type: "array",
            items: {
              properties: {
                code: {
                  type: "string",
                  example: "M-1234-4321"
                },
                name: {
                  type: "string"
                },
                type: {
                  type: "string"
                },
                accessToMerchant: {
                  type: "boolean"
                }
              },
              type: "object",
              title: "Partner",
              "x-readme-ref-name": "Partner"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          acceptedAt: {
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          suspendedAt: {
            type: "string",
            format: "date-time",
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          suspendedBy: {
            description: "SUSPENDED_BY_DESCRIPTION",
            type: "string",
            example: "A-1234-4321",
            nullable: true
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          reviewedAt: {
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          nextReviewDate: {
            type: "string",
            format: "date-time"
          }
        },
        type: "object",
        title: "Merchant",
        "x-readme-ref-name": "Merchant"
      },
      MerchantBankAccount: {
        properties: {
          code: {
            description: "The merchant bank account id of your company starting with BA.",
            type: "string",
            example: "BA-1234-4321"
          },
          status: {
            description: "The current check status of the clearing account.",
            type: "string",
            example: "NOT_CHECKED"
          },
          method: {
            description: "The method to add the clearing account. NOTE: Only 'iban' is supported for now!",
            type: "string",
            example: "iban"
          },
          iban: {
            required: [
              "iban",
              "bic",
              "owner"
            ],
            properties: {
              iban: {
                description: "The International Bank Account Number (IBAN).",
                type: "string",
                example: "NL69INGB0123456789"
              },
              bic: {
                description: "Business Identifier Codes (BIC/SWIFT).",
                type: "string",
                example: "INGBNL2A"
              },
              owner: {
                description: "The owner of the bank account.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John Doe"
              }
            },
            type: "object",
            title: "BankAccount",
            "x-readme-ref-name": "BankAccount"
          },
          merchant: {
            required: [
              "code",
              "name",
              "status"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              }
            },
            type: "object",
            title: "MerchantMinimal",
            "x-readme-ref-name": "MerchantMinimal"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "MerchantBankAccount",
        "x-readme-ref-name": "MerchantBankAccount"
      },
      MerchantCompliance: {
        allOf: [
          {
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              publicName: {
                description: "The public name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              companyTypeId: {
                description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                type: "string",
                example: "1"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              },
              contractLanguage: {
                description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                type: "string",
                example: "nl_NL"
              },
              contractPackage: {
                type: "string"
              },
              accountManager: {
                description: "The email address of the active account manager.",
                type: "string",
                example: "account.manager@pay.nl"
              },
              website: {
                description: "The website.",
                type: "string",
                format: "uri",
                example: "https://www.my-website.com"
              },
              categories: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    },
                    description: {
                      description: "The category's description.",
                      type: "string",
                      example: "Kansspelen"
                    },
                    sequence: {
                      description: "The sequence of the category.",
                      type: "integer"
                    },
                    available: {
                      description: "The category's availability.",
                      type: "boolean"
                    },
                    initialMCC: {
                      description: "The initial MCC of the category.",
                      type: "integer",
                      example: "General Contractors-Residential and Commercial",
                      nullable: true
                    },
                    initialRiskCategory: {
                      description: "The initial risk category of the category.",
                      type: "string",
                      example: "Low risk"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    paymentMethods: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The payment profile identifier.",
                            type: "integer",
                            example: "1630"
                          },
                          name: {
                            description: "The name of the payment profile.",
                            type: "string",
                            example: "Pin (Maestro)"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Category",
                  "x-readme-ref-name": "Category"
                }
              },
              integrations: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              clearingAccounts: {
                type: "array",
                items: {
                  required: [
                    "code",
                    "status",
                    "method",
                    "iban"
                  ],
                  properties: {
                    code: {
                      type: "string"
                    },
                    status: {
                      type: "string",
                      enum: [
                        "APPROVED",
                        "DENIED",
                        "NOT_CHECKED"
                      ]
                    },
                    method: {
                      type: "string",
                      enum: [
                        "iban"
                      ]
                    },
                    iban: {
                      required: [
                        "iban",
                        "bic",
                        "owner"
                      ],
                      properties: {
                        iban: {
                          description: "The International Bank Account Number (IBAN).",
                          type: "string",
                          example: "NL69INGB0123456789"
                        },
                        bic: {
                          description: "Business Identifier Codes (BIC/SWIFT).",
                          type: "string",
                          example: "INGBNL2A"
                        },
                        owner: {
                          description: "The owner of the bank account.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John Doe"
                        }
                      },
                      type: "object",
                      title: "BankAccount",
                      "x-readme-ref-name": "BankAccount"
                    }
                  },
                  type: "object"
                }
              },
              postalAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              visitAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              contactMethods: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The contact method ID of your company starting with CM.",
                      type: "string",
                      example: "CM-1234-4321"
                    },
                    type: {
                      description: "The type of contact method.",
                      type: "string",
                      enum: [
                        "email",
                        "email_support",
                        "phone",
                        "phone_helpdesk",
                        "phone_off_hours",
                        "url",
                        "email_msnskype"
                      ],
                      example: "The type of contact method."
                    },
                    value: {
                      description: "The value of the contact method.",
                      type: "string",
                      example: "088-88 666 22"
                    },
                    description: {
                      description: "The description of the contact method.",
                      type: "string"
                    },
                    public: {
                      description: "Is the contact method public accessible",
                      type: "boolean",
                      example: "true"
                    },
                    notifications: {
                      description: "Does the contact method needs to receive notifications",
                      type: "boolean",
                      example: "false"
                    }
                  },
                  type: "object",
                  title: "ContactMethod",
                  "x-readme-ref-name": "ContactMethod"
                }
              },
              authenticationTokens: {
                type: "array",
                items: {
                  properties: {
                    authenticationTokens: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              trademarks: {
                type: "array",
                items: {
                  required: [
                    "name"
                  ],
                  properties: {
                    code: {
                      description: "An identifier for this trademark",
                      type: "string",
                      example: "TM-0000-0000"
                    },
                    type: {
                      type: "string"
                    },
                    name: {
                      description: "A registered trademark name.",
                      type: "string"
                    },
                    status: {
                      description: "Status of the trademark.",
                      type: "string"
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Trademark",
                  "x-readme-ref-name": "Trademark"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              services: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    secret: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    },
                    category: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        }
                      },
                      type: "object"
                    },
                    integration: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    website: {
                      description: "The website URL.",
                      type: "string",
                      example: "https://www.pay.nl"
                    },
                    urls: {
                      type: "array",
                      items: {
                        properties: {
                          code: {
                            description: "The code of the website URL.",
                            type: "string",
                            example: "WU-1234-1234"
                          },
                          website: {
                            description: "The website URL.",
                            type: "string",
                            example: "https://www.pay.nl"
                          }
                        },
                        type: "object",
                        title: "WebsiteUrl",
                        "x-readme-ref-name": "WebsiteUrl"
                      }
                    }
                  },
                  type: "object"
                }
              },
              partner: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "M-1234-4321"
                    },
                    name: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    },
                    accessToMerchant: {
                      type: "boolean"
                    }
                  },
                  type: "object",
                  title: "Partner",
                  "x-readme-ref-name": "Partner"
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedAt: {
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedBy: {
                description: "SUSPENDED_BY_DESCRIPTION",
                type: "string",
                example: "A-1234-4321",
                nullable: true
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              reviewedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              nextReviewDate: {
                type: "string",
                format: "date-time"
              }
            },
            type: "object",
            title: "Merchant",
            "x-readme-ref-name": "Merchant"
          },
          {
            properties: {
              whitelabel: {
                properties: {
                  primaryColor: {
                    description: "Primary color of the whitelabel.",
                    type: "string",
                    example: "000000"
                  },
                  secondaryColor: {
                    description: "Secondary color of the whitelabel.",
                    type: "string",
                    example: "000000"
                  },
                  footerData: {
                    description: "Footer data of the whitelabel",
                    type: "string",
                    example: ""
                  }
                },
                type: "object",
                title: "Whitelabel",
                "x-readme-ref-name": "Whitelabel"
              },
              primaryContacts: {
                description: "The primary contacts linked to the merchant.",
                type: "array",
                items: {
                  type: "string"
                },
                example: "Hans"
              }
            },
            type: "object"
          }
        ],
        title: "MerchantCompliance",
        "x-readme-ref-name": "MerchantCompliance"
      },
      MerchantContactMethod: {
        allOf: [
          {
            properties: {
              code: {
                description: "The contact method ID of your company starting with CM.",
                type: "string",
                example: "CM-1234-4321"
              },
              type: {
                description: "The type of contact method.",
                type: "string",
                enum: [
                  "email",
                  "email_support",
                  "phone",
                  "phone_helpdesk",
                  "phone_off_hours",
                  "url",
                  "email_msnskype"
                ],
                example: "The type of contact method."
              },
              value: {
                description: "The value of the contact method.",
                type: "string",
                example: "088-88 666 22"
              },
              description: {
                description: "The description of the contact method.",
                type: "string"
              },
              public: {
                description: "Is the contact method public accessible",
                type: "boolean",
                example: "true"
              },
              notifications: {
                description: "Does the contact method needs to receive notifications",
                type: "boolean",
                example: "false"
              }
            },
            type: "object",
            title: "ContactMethod",
            "x-readme-ref-name": "ContactMethod"
          },
          {
            properties: {
              merchant: {
                required: [
                  "code",
                  "name",
                  "status"
                ],
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  }
                },
                type: "object",
                title: "MerchantMinimal",
                "x-readme-ref-name": "MerchantMinimal"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object"
          }
        ],
        title: "MerchantContactMethod",
        "x-readme-ref-name": "MerchantContactMethod"
      },
      MerchantCreate: {
        allOf: [
          {
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              publicName: {
                description: "The public name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              companyTypeId: {
                description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                type: "string",
                example: "1"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              },
              contractLanguage: {
                description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                type: "string",
                example: "nl_NL"
              },
              contractPackage: {
                type: "string"
              },
              accountManager: {
                description: "The email address of the active account manager.",
                type: "string",
                example: "account.manager@pay.nl"
              },
              website: {
                description: "The website.",
                type: "string",
                format: "uri",
                example: "https://www.my-website.com"
              },
              categories: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    },
                    description: {
                      description: "The category's description.",
                      type: "string",
                      example: "Kansspelen"
                    },
                    sequence: {
                      description: "The sequence of the category.",
                      type: "integer"
                    },
                    available: {
                      description: "The category's availability.",
                      type: "boolean"
                    },
                    initialMCC: {
                      description: "The initial MCC of the category.",
                      type: "integer",
                      example: "General Contractors-Residential and Commercial",
                      nullable: true
                    },
                    initialRiskCategory: {
                      description: "The initial risk category of the category.",
                      type: "string",
                      example: "Low risk"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    paymentMethods: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The payment profile identifier.",
                            type: "integer",
                            example: "1630"
                          },
                          name: {
                            description: "The name of the payment profile.",
                            type: "string",
                            example: "Pin (Maestro)"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Category",
                  "x-readme-ref-name": "Category"
                }
              },
              integrations: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              clearingAccounts: {
                type: "array",
                items: {
                  required: [
                    "code",
                    "status",
                    "method",
                    "iban"
                  ],
                  properties: {
                    code: {
                      type: "string"
                    },
                    status: {
                      type: "string",
                      enum: [
                        "APPROVED",
                        "DENIED",
                        "NOT_CHECKED"
                      ]
                    },
                    method: {
                      type: "string",
                      enum: [
                        "iban"
                      ]
                    },
                    iban: {
                      required: [
                        "iban",
                        "bic",
                        "owner"
                      ],
                      properties: {
                        iban: {
                          description: "The International Bank Account Number (IBAN).",
                          type: "string",
                          example: "NL69INGB0123456789"
                        },
                        bic: {
                          description: "Business Identifier Codes (BIC/SWIFT).",
                          type: "string",
                          example: "INGBNL2A"
                        },
                        owner: {
                          description: "The owner of the bank account.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John Doe"
                        }
                      },
                      type: "object",
                      title: "BankAccount",
                      "x-readme-ref-name": "BankAccount"
                    }
                  },
                  type: "object"
                }
              },
              postalAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              visitAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              contactMethods: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The contact method ID of your company starting with CM.",
                      type: "string",
                      example: "CM-1234-4321"
                    },
                    type: {
                      description: "The type of contact method.",
                      type: "string",
                      enum: [
                        "email",
                        "email_support",
                        "phone",
                        "phone_helpdesk",
                        "phone_off_hours",
                        "url",
                        "email_msnskype"
                      ],
                      example: "The type of contact method."
                    },
                    value: {
                      description: "The value of the contact method.",
                      type: "string",
                      example: "088-88 666 22"
                    },
                    description: {
                      description: "The description of the contact method.",
                      type: "string"
                    },
                    public: {
                      description: "Is the contact method public accessible",
                      type: "boolean",
                      example: "true"
                    },
                    notifications: {
                      description: "Does the contact method needs to receive notifications",
                      type: "boolean",
                      example: "false"
                    }
                  },
                  type: "object",
                  title: "ContactMethod",
                  "x-readme-ref-name": "ContactMethod"
                }
              },
              authenticationTokens: {
                type: "array",
                items: {
                  properties: {
                    authenticationTokens: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              trademarks: {
                type: "array",
                items: {
                  required: [
                    "name"
                  ],
                  properties: {
                    code: {
                      description: "An identifier for this trademark",
                      type: "string",
                      example: "TM-0000-0000"
                    },
                    type: {
                      type: "string"
                    },
                    name: {
                      description: "A registered trademark name.",
                      type: "string"
                    },
                    status: {
                      description: "Status of the trademark.",
                      type: "string"
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Trademark",
                  "x-readme-ref-name": "Trademark"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              services: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    secret: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    },
                    category: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        }
                      },
                      type: "object"
                    },
                    integration: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    website: {
                      description: "The website URL.",
                      type: "string",
                      example: "https://www.pay.nl"
                    },
                    urls: {
                      type: "array",
                      items: {
                        properties: {
                          code: {
                            description: "The code of the website URL.",
                            type: "string",
                            example: "WU-1234-1234"
                          },
                          website: {
                            description: "The website URL.",
                            type: "string",
                            example: "https://www.pay.nl"
                          }
                        },
                        type: "object",
                        title: "WebsiteUrl",
                        "x-readme-ref-name": "WebsiteUrl"
                      }
                    }
                  },
                  type: "object"
                }
              },
              partner: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "M-1234-4321"
                    },
                    name: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    },
                    accessToMerchant: {
                      type: "boolean"
                    }
                  },
                  type: "object",
                  title: "Partner",
                  "x-readme-ref-name": "Partner"
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedAt: {
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedBy: {
                description: "SUSPENDED_BY_DESCRIPTION",
                type: "string",
                example: "A-1234-4321",
                nullable: true
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              reviewedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              nextReviewDate: {
                type: "string",
                format: "date-time"
              }
            },
            type: "object",
            title: "Merchant",
            "x-readme-ref-name": "Merchant"
          },
          {
            properties: {
              service: {
                required: [
                  "name",
                  "description",
                  "categoryCode",
                  "integrationCode",
                  "publication"
                ],
                properties: {
                  name: {
                    description: "The name of your service.",
                    type: "string",
                    example: "My first service!"
                  },
                  description: {
                    description: "The description of the service.",
                    type: "string"
                  },
                  categoryCode: {
                    type: "string",
                    example: "CY-1234-4321"
                  },
                  integrationCode: {
                    type: "string",
                    example: "PV-1234-4321"
                  },
                  publication: {
                    type: "string"
                  }
                },
                type: "object"
              }
            },
            type: "object"
          }
        ],
        title: "MerchantCreate",
        "x-readme-ref-name": "MerchantCreate"
      },
      MerchantInfo: {
        allOf: [
          {
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              publicName: {
                description: "The public name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              companyTypeId: {
                description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                type: "string",
                example: "1"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              },
              contractLanguage: {
                description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                type: "string",
                example: "nl_NL"
              },
              contractPackage: {
                type: "string"
              },
              accountManager: {
                description: "The email address of the active account manager.",
                type: "string",
                example: "account.manager@pay.nl"
              },
              website: {
                description: "The website.",
                type: "string",
                format: "uri",
                example: "https://www.my-website.com"
              },
              categories: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    },
                    description: {
                      description: "The category's description.",
                      type: "string",
                      example: "Kansspelen"
                    },
                    sequence: {
                      description: "The sequence of the category.",
                      type: "integer"
                    },
                    available: {
                      description: "The category's availability.",
                      type: "boolean"
                    },
                    initialMCC: {
                      description: "The initial MCC of the category.",
                      type: "integer",
                      example: "General Contractors-Residential and Commercial",
                      nullable: true
                    },
                    initialRiskCategory: {
                      description: "The initial risk category of the category.",
                      type: "string",
                      example: "Low risk"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    paymentMethods: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The payment profile identifier.",
                            type: "integer",
                            example: "1630"
                          },
                          name: {
                            description: "The name of the payment profile.",
                            type: "string",
                            example: "Pin (Maestro)"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Category",
                  "x-readme-ref-name": "Category"
                }
              },
              integrations: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              clearingAccounts: {
                type: "array",
                items: {
                  required: [
                    "code",
                    "status",
                    "method",
                    "iban"
                  ],
                  properties: {
                    code: {
                      type: "string"
                    },
                    status: {
                      type: "string",
                      enum: [
                        "APPROVED",
                        "DENIED",
                        "NOT_CHECKED"
                      ]
                    },
                    method: {
                      type: "string",
                      enum: [
                        "iban"
                      ]
                    },
                    iban: {
                      required: [
                        "iban",
                        "bic",
                        "owner"
                      ],
                      properties: {
                        iban: {
                          description: "The International Bank Account Number (IBAN).",
                          type: "string",
                          example: "NL69INGB0123456789"
                        },
                        bic: {
                          description: "Business Identifier Codes (BIC/SWIFT).",
                          type: "string",
                          example: "INGBNL2A"
                        },
                        owner: {
                          description: "The owner of the bank account.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John Doe"
                        }
                      },
                      type: "object",
                      title: "BankAccount",
                      "x-readme-ref-name": "BankAccount"
                    }
                  },
                  type: "object"
                }
              },
              postalAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              visitAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              contactMethods: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The contact method ID of your company starting with CM.",
                      type: "string",
                      example: "CM-1234-4321"
                    },
                    type: {
                      description: "The type of contact method.",
                      type: "string",
                      enum: [
                        "email",
                        "email_support",
                        "phone",
                        "phone_helpdesk",
                        "phone_off_hours",
                        "url",
                        "email_msnskype"
                      ],
                      example: "The type of contact method."
                    },
                    value: {
                      description: "The value of the contact method.",
                      type: "string",
                      example: "088-88 666 22"
                    },
                    description: {
                      description: "The description of the contact method.",
                      type: "string"
                    },
                    public: {
                      description: "Is the contact method public accessible",
                      type: "boolean",
                      example: "true"
                    },
                    notifications: {
                      description: "Does the contact method needs to receive notifications",
                      type: "boolean",
                      example: "false"
                    }
                  },
                  type: "object",
                  title: "ContactMethod",
                  "x-readme-ref-name": "ContactMethod"
                }
              },
              authenticationTokens: {
                type: "array",
                items: {
                  properties: {
                    authenticationTokens: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              trademarks: {
                type: "array",
                items: {
                  required: [
                    "name"
                  ],
                  properties: {
                    code: {
                      description: "An identifier for this trademark",
                      type: "string",
                      example: "TM-0000-0000"
                    },
                    type: {
                      type: "string"
                    },
                    name: {
                      description: "A registered trademark name.",
                      type: "string"
                    },
                    status: {
                      description: "Status of the trademark.",
                      type: "string"
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Trademark",
                  "x-readme-ref-name": "Trademark"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              services: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    secret: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    },
                    category: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        }
                      },
                      type: "object"
                    },
                    integration: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    website: {
                      description: "The website URL.",
                      type: "string",
                      example: "https://www.pay.nl"
                    },
                    urls: {
                      type: "array",
                      items: {
                        properties: {
                          code: {
                            description: "The code of the website URL.",
                            type: "string",
                            example: "WU-1234-1234"
                          },
                          website: {
                            description: "The website URL.",
                            type: "string",
                            example: "https://www.pay.nl"
                          }
                        },
                        type: "object",
                        title: "WebsiteUrl",
                        "x-readme-ref-name": "WebsiteUrl"
                      }
                    }
                  },
                  type: "object"
                }
              },
              partner: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "M-1234-4321"
                    },
                    name: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    },
                    accessToMerchant: {
                      type: "boolean"
                    }
                  },
                  type: "object",
                  title: "Partner",
                  "x-readme-ref-name": "Partner"
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedAt: {
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedBy: {
                description: "SUSPENDED_BY_DESCRIPTION",
                type: "string",
                example: "A-1234-4321",
                nullable: true
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              reviewedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              nextReviewDate: {
                type: "string",
                format: "date-time"
              }
            },
            type: "object",
            title: "Merchant",
            "x-readme-ref-name": "Merchant"
          },
          {
            properties: {
              documents: {
                properties: {
                  code: {
                    description: "Code of the acceptance document.",
                    type: "string",
                    example: "D-1234-1234"
                  },
                  type: {
                    description: "Type of the acceptance document.",
                    type: "string",
                    example: "identification"
                  },
                  status: {
                    description: "Status of the acceptance document.",
                    type: "string",
                    example: "UPLOADED"
                  }
                },
                type: "object",
                title: "Document",
                "x-readme-ref-name": "Document"
              },
              licenses: {
                type: "array",
                items: {
                  allOf: [
                    {
                      properties: {
                        code: {
                          type: "string",
                          example: "AL-1234-4321"
                        },
                        secret: {
                          type: "string",
                          example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                        },
                        name: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Doe"
                        },
                        email: {
                          description: "An email address.",
                          type: "string",
                          format: "email",
                          example: "sandbox@pay.nl"
                        },
                        language: {
                          description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                          type: "string",
                          enum: [
                            "NL",
                            "EN",
                            "DE",
                            "FR",
                            "IT",
                            "ES"
                          ],
                          example: "NL"
                        },
                        visitAddress: {
                          properties: {
                            code: {
                              type: "string"
                            },
                            firstName: {
                              description: "The forename (also known as a given name, Christian name or a first name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "John"
                            },
                            lastName: {
                              description: "The surname (also known as a family name or a last name).",
                              type: "string",
                              maxLength: 64,
                              minLength: 1,
                              example: "Doe"
                            },
                            streetName: {
                              description: "The name of the street",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Visitlane"
                            },
                            streetNumber: {
                              description: "The street number",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "13"
                            },
                            streetNumberExtension: {
                              description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                              type: "string",
                              maxLength: 32,
                              minLength: 1,
                              example: "b1"
                            },
                            zipCode: {
                              description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                              type: "string",
                              maxLength: 16,
                              minLength: 1,
                              example: "5678CD"
                            },
                            city: {
                              description: "The name of a city",
                              type: "string",
                              maxLength: 128,
                              minLength: 1,
                              example: "Amsterdam"
                            },
                            regionCode: {
                              description: "Region code (iso-3166-2)",
                              type: "string",
                              example: "ZH"
                            },
                            countryCode: {
                              description: "The country code consisting of 2 uppercase letters",
                              type: "string",
                              maxLength: 2,
                              minLength: 2,
                              example: "NL"
                            }
                          },
                          type: "object",
                          title: "Address",
                          "x-readme-ref-name": "Address"
                        },
                        complianceData: {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        documents: {
                          properties: {
                            code: {
                              description: "Code of the acceptance document.",
                              type: "string",
                              example: "D-1234-1234"
                            },
                            type: {
                              description: "Type of the acceptance document.",
                              type: "string",
                              example: "identification"
                            },
                            status: {
                              description: "Status of the acceptance document.",
                              type: "string",
                              example: "UPLOADED"
                            }
                          },
                          type: "object",
                          title: "Document",
                          "x-readme-ref-name": "Document"
                        },
                        createdAt: {
                          description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: false
                        },
                        createdBy: {
                          description: "The reference to an account or token whom created the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: false
                        },
                        modifiedAt: {
                          description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        },
                        modifiedBy: {
                          description: "The reference to an account or token whom modified the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: true
                        },
                        acceptedAt: {
                          description: "The date and time an account was accepted.",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "2023-11-01T10:19:25+01:00",
                          nullable: false
                        },
                        deletedAt: {
                          description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                          type: "string",
                          format: "date-time",
                          readOnly: true,
                          example: "2016-06-04T08:15:00+01:00",
                          nullable: true
                        },
                        deletedBy: {
                          description: "The reference to an account or token whom deleted the entity",
                          type: "string",
                          pattern: "^A(T)?(-\\d{4}){2}$",
                          readOnly: true,
                          example: "A-1234-4321",
                          nullable: true
                        }
                      },
                      type: "object",
                      title: "PersonCompliance",
                      "x-readme-ref-name": "PersonCompliance"
                    }
                  ],
                  title: "PersonComplianceMinimal",
                  "x-readme-ref-name": "PersonComplianceMinimal"
                }
              }
            },
            type: "object"
          }
        ],
        title: "MerchantInfo",
        "x-readme-ref-name": "MerchantInfo"
      },
      MerchantInfoInternal: {
        allOf: [
          {
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              publicName: {
                description: "The public name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              companyTypeId: {
                description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                type: "string",
                example: "1"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              },
              contractLanguage: {
                description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                type: "string",
                example: "nl_NL"
              },
              contractPackage: {
                type: "string"
              },
              accountManager: {
                description: "The email address of the active account manager.",
                type: "string",
                example: "account.manager@pay.nl"
              },
              website: {
                description: "The website.",
                type: "string",
                format: "uri",
                example: "https://www.my-website.com"
              },
              categories: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    },
                    description: {
                      description: "The category's description.",
                      type: "string",
                      example: "Kansspelen"
                    },
                    sequence: {
                      description: "The sequence of the category.",
                      type: "integer"
                    },
                    available: {
                      description: "The category's availability.",
                      type: "boolean"
                    },
                    initialMCC: {
                      description: "The initial MCC of the category.",
                      type: "integer",
                      example: "General Contractors-Residential and Commercial",
                      nullable: true
                    },
                    initialRiskCategory: {
                      description: "The initial risk category of the category.",
                      type: "string",
                      example: "Low risk"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    paymentMethods: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The payment profile identifier.",
                            type: "integer",
                            example: "1630"
                          },
                          name: {
                            description: "The name of the payment profile.",
                            type: "string",
                            example: "Pin (Maestro)"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Category",
                  "x-readme-ref-name": "Category"
                }
              },
              integrations: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              clearingAccounts: {
                type: "array",
                items: {
                  required: [
                    "code",
                    "status",
                    "method",
                    "iban"
                  ],
                  properties: {
                    code: {
                      type: "string"
                    },
                    status: {
                      type: "string",
                      enum: [
                        "APPROVED",
                        "DENIED",
                        "NOT_CHECKED"
                      ]
                    },
                    method: {
                      type: "string",
                      enum: [
                        "iban"
                      ]
                    },
                    iban: {
                      required: [
                        "iban",
                        "bic",
                        "owner"
                      ],
                      properties: {
                        iban: {
                          description: "The International Bank Account Number (IBAN).",
                          type: "string",
                          example: "NL69INGB0123456789"
                        },
                        bic: {
                          description: "Business Identifier Codes (BIC/SWIFT).",
                          type: "string",
                          example: "INGBNL2A"
                        },
                        owner: {
                          description: "The owner of the bank account.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John Doe"
                        }
                      },
                      type: "object",
                      title: "BankAccount",
                      "x-readme-ref-name": "BankAccount"
                    }
                  },
                  type: "object"
                }
              },
              postalAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              visitAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              contactMethods: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The contact method ID of your company starting with CM.",
                      type: "string",
                      example: "CM-1234-4321"
                    },
                    type: {
                      description: "The type of contact method.",
                      type: "string",
                      enum: [
                        "email",
                        "email_support",
                        "phone",
                        "phone_helpdesk",
                        "phone_off_hours",
                        "url",
                        "email_msnskype"
                      ],
                      example: "The type of contact method."
                    },
                    value: {
                      description: "The value of the contact method.",
                      type: "string",
                      example: "088-88 666 22"
                    },
                    description: {
                      description: "The description of the contact method.",
                      type: "string"
                    },
                    public: {
                      description: "Is the contact method public accessible",
                      type: "boolean",
                      example: "true"
                    },
                    notifications: {
                      description: "Does the contact method needs to receive notifications",
                      type: "boolean",
                      example: "false"
                    }
                  },
                  type: "object",
                  title: "ContactMethod",
                  "x-readme-ref-name": "ContactMethod"
                }
              },
              authenticationTokens: {
                type: "array",
                items: {
                  properties: {
                    authenticationTokens: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              trademarks: {
                type: "array",
                items: {
                  required: [
                    "name"
                  ],
                  properties: {
                    code: {
                      description: "An identifier for this trademark",
                      type: "string",
                      example: "TM-0000-0000"
                    },
                    type: {
                      type: "string"
                    },
                    name: {
                      description: "A registered trademark name.",
                      type: "string"
                    },
                    status: {
                      description: "Status of the trademark.",
                      type: "string"
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Trademark",
                  "x-readme-ref-name": "Trademark"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              services: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    secret: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    },
                    category: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        }
                      },
                      type: "object"
                    },
                    integration: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    website: {
                      description: "The website URL.",
                      type: "string",
                      example: "https://www.pay.nl"
                    },
                    urls: {
                      type: "array",
                      items: {
                        properties: {
                          code: {
                            description: "The code of the website URL.",
                            type: "string",
                            example: "WU-1234-1234"
                          },
                          website: {
                            description: "The website URL.",
                            type: "string",
                            example: "https://www.pay.nl"
                          }
                        },
                        type: "object",
                        title: "WebsiteUrl",
                        "x-readme-ref-name": "WebsiteUrl"
                      }
                    }
                  },
                  type: "object"
                }
              },
              partner: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "M-1234-4321"
                    },
                    name: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    },
                    accessToMerchant: {
                      type: "boolean"
                    }
                  },
                  type: "object",
                  title: "Partner",
                  "x-readme-ref-name": "Partner"
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedAt: {
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedBy: {
                description: "SUSPENDED_BY_DESCRIPTION",
                type: "string",
                example: "A-1234-4321",
                nullable: true
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              reviewedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              nextReviewDate: {
                type: "string",
                format: "date-time"
              }
            },
            type: "object",
            title: "Merchant",
            "x-readme-ref-name": "Merchant"
          },
          {
            properties: {
              clearingFrequency: {
                description: "Clearing frequency.",
                type: "string",
                example: "manual"
              },
              invoiceFrequency: {
                description: "Invoice frequency.",
                type: "string",
                example: "month"
              },
              grade: {
                description: "Grade of the merchant.",
                type: "string",
                example: "D"
              },
              outPaymentScheme: {
                description: "Outpayment scheme of the merchant.",
                type: "string",
                example: ""
              },
              refundPolicy: {
                description: "Refund policy of the merchant.",
                type: "string",
                example: "Standard"
              },
              administration: {
                description: "Administration of the merchant.",
                type: "string",
                example: "Standard merchant"
              },
              documents: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "Code of the acceptance document.",
                      type: "string",
                      example: "D-1234-1234"
                    },
                    type: {
                      description: "Type of the acceptance document.",
                      type: "string",
                      example: "identification"
                    },
                    status: {
                      description: "Status of the acceptance document.",
                      type: "string",
                      example: "UPLOADED"
                    }
                  },
                  type: "object",
                  title: "Document",
                  "x-readme-ref-name": "Document"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              boardingStatus: {
                description: "Current boarding status of the merchant",
                type: "string",
                enum: [
                  "REGISTERED",
                  "ONBOARDING",
                  "ACCEPTED",
                  "SUSPENDED",
                  "OFFBOARDED"
                ],
                example: "REGISTERED"
              }
            },
            type: "object"
          }
        ],
        title: "MerchantInfoInternal",
        "x-readme-ref-name": "MerchantInfoInternal"
      },
      MerchantMinimal: {
        required: [
          "code",
          "name",
          "status"
        ],
        properties: {
          code: {
            description: "The merchant id of your company starting with M.",
            type: "string",
            example: "M-1234-4321"
          },
          name: {
            description: "The name of your merchant.",
            type: "string",
            maxLength: 128,
            minLength: 2,
            example: "CompanyName"
          },
          status: {
            description: "Merchant state",
            type: "string",
            example: "ACTIVE"
          }
        },
        type: "object",
        title: "MerchantMinimal",
        "x-readme-ref-name": "MerchantMinimal"
      },
      MerchantPartial: {
        allOf: [
          {
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              publicName: {
                description: "The public name of your merchant.",
                type: "string",
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              coc: {
                description: "Your Chamber of commerce registration number. This format differs per country.",
                type: "string",
                example: "12345678"
              },
              vat: {
                description: "Value added tax identification number (VAT identification number).",
                type: "string",
                example: "NL807960147B01"
              },
              companyTypeId: {
                description: "ID of the company type. The available company types can be retrieved with the Core Data API Companytypes (https://developer.pay.nl/reference/get_companytypes)",
                type: "string",
                example: "1"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                example: "NL"
              },
              contractLanguage: {
                description: "The language code supplied needs to be a locale in i18n format. The available languages can be retrieved with the Core Data API Languages (https://developer.pay.nl/reference/get_languages) where the contractLanguageAvailable flag is set to 'True'",
                type: "string",
                example: "nl_NL"
              },
              contractPackage: {
                type: "string"
              },
              accountManager: {
                description: "The email address of the active account manager.",
                type: "string",
                example: "account.manager@pay.nl"
              },
              website: {
                description: "The website.",
                type: "string",
                format: "uri",
                example: "https://www.my-website.com"
              },
              categories: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The category (code) identifier",
                      type: "string",
                      maxLength: 40,
                      pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                      example: "CY-1234-4321"
                    },
                    name: {
                      description: "The category name.",
                      type: "string",
                      example: "Digitale diensten gambling (kansspelen)"
                    },
                    description: {
                      description: "The category's description.",
                      type: "string",
                      example: "Kansspelen"
                    },
                    sequence: {
                      description: "The sequence of the category.",
                      type: "integer"
                    },
                    available: {
                      description: "The category's availability.",
                      type: "boolean"
                    },
                    initialMCC: {
                      description: "The initial MCC of the category.",
                      type: "integer",
                      example: "General Contractors-Residential and Commercial",
                      nullable: true
                    },
                    initialRiskCategory: {
                      description: "The initial risk category of the category.",
                      type: "string",
                      example: "Low risk"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    paymentMethods: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The payment profile identifier.",
                            type: "integer",
                            example: "1630"
                          },
                          name: {
                            description: "The name of the payment profile.",
                            type: "string",
                            example: "Pin (Maestro)"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Category",
                  "x-readme-ref-name": "Category"
                }
              },
              integrations: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The plugin identifier.",
                      type: "string",
                      example: "PL-3010-1000"
                    },
                    name: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              clearingAccounts: {
                type: "array",
                items: {
                  required: [
                    "code",
                    "status",
                    "method",
                    "iban"
                  ],
                  properties: {
                    code: {
                      type: "string"
                    },
                    status: {
                      type: "string",
                      enum: [
                        "APPROVED",
                        "DENIED",
                        "NOT_CHECKED"
                      ]
                    },
                    method: {
                      type: "string",
                      enum: [
                        "iban"
                      ]
                    },
                    iban: {
                      required: [
                        "iban",
                        "bic",
                        "owner"
                      ],
                      properties: {
                        iban: {
                          description: "The International Bank Account Number (IBAN).",
                          type: "string",
                          example: "NL69INGB0123456789"
                        },
                        bic: {
                          description: "Business Identifier Codes (BIC/SWIFT).",
                          type: "string",
                          example: "INGBNL2A"
                        },
                        owner: {
                          description: "The owner of the bank account.",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John Doe"
                        }
                      },
                      type: "object",
                      title: "BankAccount",
                      "x-readme-ref-name": "BankAccount"
                    }
                  },
                  type: "object"
                }
              },
              postalAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              visitAddress: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              contactMethods: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      description: "The contact method ID of your company starting with CM.",
                      type: "string",
                      example: "CM-1234-4321"
                    },
                    type: {
                      description: "The type of contact method.",
                      type: "string",
                      enum: [
                        "email",
                        "email_support",
                        "phone",
                        "phone_helpdesk",
                        "phone_off_hours",
                        "url",
                        "email_msnskype"
                      ],
                      example: "The type of contact method."
                    },
                    value: {
                      description: "The value of the contact method.",
                      type: "string",
                      example: "088-88 666 22"
                    },
                    description: {
                      description: "The description of the contact method.",
                      type: "string"
                    },
                    public: {
                      description: "Is the contact method public accessible",
                      type: "boolean",
                      example: "true"
                    },
                    notifications: {
                      description: "Does the contact method needs to receive notifications",
                      type: "boolean",
                      example: "false"
                    }
                  },
                  type: "object",
                  title: "ContactMethod",
                  "x-readme-ref-name": "ContactMethod"
                }
              },
              authenticationTokens: {
                type: "array",
                items: {
                  properties: {
                    authenticationTokens: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              trademarks: {
                type: "array",
                items: {
                  required: [
                    "name"
                  ],
                  properties: {
                    code: {
                      description: "An identifier for this trademark",
                      type: "string",
                      example: "TM-0000-0000"
                    },
                    type: {
                      type: "string"
                    },
                    name: {
                      description: "A registered trademark name.",
                      type: "string"
                    },
                    status: {
                      description: "Status of the trademark.",
                      type: "string"
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "Trademark",
                  "x-readme-ref-name": "Trademark"
                }
              },
              licenses: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "AL-1234-4321"
                    },
                    secret: {
                      type: "string",
                      example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
                    },
                    name: {
                      type: "string"
                    },
                    accountCode: {
                      type: "string",
                      example: "A-1234-4321"
                    },
                    firstName: {
                      description: "The forename (also known as a given name, Christian name or a first name).",
                      type: "string",
                      maxLength: 64,
                      minLength: 1,
                      example: "John",
                      nullable: true
                    },
                    lastName: {
                      description: "The surname (also known as a family name or a last name).",
                      type: "string",
                      maxLength: 128,
                      minLength: 1,
                      example: "Doe"
                    },
                    email: {
                      description: "An email address.",
                      type: "string",
                      format: "email",
                      example: "sandbox@pay.nl"
                    },
                    language: {
                      description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                      type: "string",
                      enum: [
                        "NL",
                        "EN",
                        "DE",
                        "FR",
                        "IT",
                        "ES"
                      ],
                      example: "NL"
                    },
                    phone: {
                      description: "The subject's phone number. Optionally prepended with a + and country code",
                      type: "string",
                      example: "0031612345678"
                    },
                    visitAddress: {
                      properties: {
                        code: {
                          type: "string"
                        },
                        firstName: {
                          description: "The forename (also known as a given name, Christian name or a first name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "John"
                        },
                        lastName: {
                          description: "The surname (also known as a family name or a last name).",
                          type: "string",
                          maxLength: 64,
                          minLength: 1,
                          example: "Doe"
                        },
                        streetName: {
                          description: "The name of the street",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Visitlane"
                        },
                        streetNumber: {
                          description: "The street number",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "13"
                        },
                        streetNumberExtension: {
                          description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                          type: "string",
                          maxLength: 32,
                          minLength: 1,
                          example: "b1"
                        },
                        zipCode: {
                          description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                          type: "string",
                          maxLength: 16,
                          minLength: 1,
                          example: "5678CD"
                        },
                        city: {
                          description: "The name of a city",
                          type: "string",
                          maxLength: 128,
                          minLength: 1,
                          example: "Amsterdam"
                        },
                        regionCode: {
                          description: "Region code (iso-3166-2)",
                          type: "string",
                          example: "ZH"
                        },
                        countryCode: {
                          description: "The country code consisting of 2 uppercase letters",
                          type: "string",
                          maxLength: 2,
                          minLength: 2,
                          example: "NL"
                        }
                      },
                      type: "object",
                      title: "Address",
                      "x-readme-ref-name": "Address"
                    },
                    complianceData: {
                      allOf: [
                        {
                          properties: {
                            pep: {
                              description: "Indicate if the person is a Politically Exposed Person (PEP).",
                              type: "boolean",
                              example: "true"
                            },
                            pepDescription: {
                              description: "Describe in your own words why this person is a PEP.",
                              type: "string",
                              example: "The person is active as an alderman in the municipality where he lives."
                            },
                            dateOfBirth: {
                              description: "Date of birth of the person.",
                              type: "string",
                              format: "date-time",
                              example: "1999-12-12"
                            },
                            nationality: {
                              description: "Nationality of the person.",
                              type: "string",
                              example: "NL"
                            },
                            idDocumentNumber: {
                              description: "The id document number of the person",
                              type: "string",
                              example: ""
                            }
                          },
                          type: "object",
                          title: "ComplianceData",
                          "x-readme-ref-name": "ComplianceData"
                        },
                        {
                          properties: {
                            ubo: {
                              description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                              type: "string",
                              enum: [
                                "no",
                                "direct",
                                "indirect",
                                "pseudo"
                              ],
                              example: "direct"
                            },
                            uboPercentage: {
                              description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                              type: "integer",
                              example: "25"
                            },
                            authorizedToSign: {
                              description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                              type: "string",
                              enum: [
                                "no",
                                "alone",
                                "shared"
                              ],
                              example: "shared"
                            },
                            relationshipDescription: {
                              description: "Describe in your own words the relation the person has with this company.",
                              type: "string",
                              example: "John Doe of test company"
                            }
                          },
                          type: "object"
                        }
                      ],
                      title: "ComplianceDataPerson",
                      "x-readme-ref-name": "ComplianceDataPerson"
                    }
                  },
                  type: "object",
                  title: "Person",
                  "x-readme-ref-name": "Person"
                }
              },
              services: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string"
                    },
                    secret: {
                      type: "string"
                    },
                    name: {
                      type: "string"
                    },
                    status: {
                      type: "string"
                    },
                    category: {
                      properties: {
                        code: {
                          description: "The category (code) identifier",
                          type: "string",
                          maxLength: 40,
                          pattern: "^[A-Z]{1,2}(-\\d{4}){2,}$",
                          example: "CY-1234-4321"
                        },
                        name: {
                          description: "The category name.",
                          type: "string",
                          example: "Digitale diensten gambling (kansspelen)"
                        }
                      },
                      type: "object"
                    },
                    integration: {
                      properties: {
                        code: {
                          description: "The plugin identifier.",
                          type: "string",
                          example: "PL-3010-1000"
                        },
                        name: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    website: {
                      description: "The website URL.",
                      type: "string",
                      example: "https://www.pay.nl"
                    },
                    urls: {
                      type: "array",
                      items: {
                        properties: {
                          code: {
                            description: "The code of the website URL.",
                            type: "string",
                            example: "WU-1234-1234"
                          },
                          website: {
                            description: "The website URL.",
                            type: "string",
                            example: "https://www.pay.nl"
                          }
                        },
                        type: "object",
                        title: "WebsiteUrl",
                        "x-readme-ref-name": "WebsiteUrl"
                      }
                    }
                  },
                  type: "object"
                }
              },
              partner: {
                type: "array",
                items: {
                  properties: {
                    code: {
                      type: "string",
                      example: "M-1234-4321"
                    },
                    name: {
                      type: "string"
                    },
                    type: {
                      type: "string"
                    },
                    accessToMerchant: {
                      type: "boolean"
                    }
                  },
                  type: "object",
                  title: "Partner",
                  "x-readme-ref-name": "Partner"
                }
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              acceptedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedAt: {
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              suspendedBy: {
                description: "SUSPENDED_BY_DESCRIPTION",
                type: "string",
                example: "A-1234-4321",
                nullable: true
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              reviewedAt: {
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              nextReviewDate: {
                type: "string",
                format: "date-time"
              }
            },
            type: "object",
            title: "Merchant",
            "x-readme-ref-name": "Merchant"
          }
        ],
        title: "MerchantPartial",
        "x-readme-ref-name": "MerchantPartial"
      },
      Notification: {
        properties: {
          type: {
            description: 'Use "push" for push messages, or "email" to send out an email. For more information check the following page: https://paynl.readme.io/reference/accounts-1',
            type: "string",
            enum: [
              "push",
              "email"
            ]
          },
          recipient: {
            description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). For email, provide a valid email address (XXXX@XXXX.XX).",
            type: "string",
            example: "AD-1234-1234"
          }
        },
        type: "object",
        title: "Notification",
        "x-readme-ref-name": "Notification"
      },
      NotificationGroup: {
        properties: {
          technical: {
            type: "boolean"
          },
          financial: {
            type: "boolean"
          },
          operations: {
            type: "boolean"
          }
        },
        type: "object",
        title: "NotificationGroup",
        "x-readme-ref-name": "NotificationGroup"
      },
      Order: {
        properties: {
          countryCode: {
            description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
            type: "string",
            maxLength: 2,
            minLength: 2,
            example: "NL"
          },
          deliveryDate: {
            description: "The date of delivery.",
            type: "string",
            format: "date",
            example: "1999-02-15"
          },
          invoiceDate: {
            description: "The date of the invoice",
            type: "string",
            format: "date",
            example: "1999-02-15"
          },
          deliveryAddress: {
            properties: {
              code: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              streetNumberExtension: {
                description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "b1"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              regionCode: {
                description: "Region code (iso-3166-2)",
                type: "string",
                example: "ZH"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Address",
            "x-readme-ref-name": "Address"
          },
          invoiceAddress: {
            properties: {
              code: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              streetNumberExtension: {
                description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "b1"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              regionCode: {
                description: "Region code (iso-3166-2)",
                type: "string",
                example: "ZH"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Address",
            "x-readme-ref-name": "Address"
          },
          products: {
            type: "array",
            items: {
              properties: {
                id: {
                  description: "The product identifier.",
                  type: "string",
                  example: "TEST_01"
                },
                description: {
                  description: "The description of the product.",
                  type: "string",
                  example: "Some product description"
                },
                type: {
                  description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                  type: "string",
                  enum: [
                    "shipping",
                    "article",
                    "discount",
                    "rounding",
                    "handling",
                    "payment",
                    "credit",
                    "giftcard",
                    "emoney",
                    "crypto"
                  ]
                },
                price: {
                  properties: {
                    value: {
                      description: "The amount in cents.",
                      type: "integer",
                      minimum: 1,
                      example: 10
                    }
                  },
                  type: "object"
                },
                quantity: {
                  description: "The quantity.",
                  type: "number",
                  format: "float"
                },
                vatCode: {
                  description: "The VAT code to use.",
                  type: "string",
                  enum: [
                    "N",
                    "H",
                    "L"
                  ]
                }
              },
              type: "object",
              title: "Product",
              "x-readme-ref-name": "Product"
            }
          }
        },
        type: "object",
        title: "Order",
        "x-readme-ref-name": "Order"
      },
      Package: {
        properties: {
          code: {
            description: "Code of the package.",
            type: "string"
          },
          name: {
            description: "Name of the package.",
            type: "string"
          },
          description: {
            description: "Description of the package.",
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          partnerType: {
            description: "Parter types linked to the package.",
            type: "array",
            items: {
              type: "string"
            }
          },
          connectionTypeOnRegistration: {
            type: "string",
            enum: [
              "ALLIANCE",
              "BP",
              "ISO",
              "PARTNER"
            ],
            nullable: true
          },
          actionCode: {
            description: "Action code linked to the package.",
            type: "string"
          },
          actionCodeValidUntil: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          contractPackage: {
            description: "The contract package where this package is linked to.",
            type: "string"
          },
          monthlyFee: {
            description: "Monthly Fee of the package.",
            type: "integer"
          },
          discountPercentage: {
            description: "Discount percentage of the package.",
            type: "integer"
          },
          public: {
            description: "If it is an public package.",
            type: "boolean"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "Package",
        "x-readme-ref-name": "Package"
      },
      PaginatorLink: {
        allOf: [
          {
            required: [
              "href",
              "rel",
              "type"
            ],
            properties: {
              href: {
                description: "",
                type: "string",
                readOnly: true,
                example: "",
                nullable: false
              },
              rel: {
                description: "",
                type: "string",
                readOnly: true,
                example: "",
                nullable: false
              },
              type: {
                description: "",
                type: "string",
                readOnly: true,
                example: "",
                nullable: false
              }
            },
            type: "object",
            title: "Link",
            "x-readme-ref-name": "Link"
          }
        ],
        title: "PaginatorLink",
        "x-readme-ref-name": "PaginatorLink"
      },
      Partner: {
        properties: {
          code: {
            type: "string",
            example: "M-1234-4321"
          },
          name: {
            type: "string"
          },
          type: {
            type: "string"
          },
          accessToMerchant: {
            type: "boolean"
          }
        },
        type: "object",
        title: "Partner",
        "x-readme-ref-name": "Partner"
      },
      PartnerExtended: {
        allOf: [
          {
            properties: {
              code: {
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                type: "string"
              },
              type: {
                type: "string"
              },
              accessToMerchant: {
                type: "boolean"
              }
            },
            type: "object",
            title: "Partner",
            "x-readme-ref-name": "Partner"
          },
          {
            properties: {
              iso: {
                description: "Is a independent sales organisation.",
                type: "boolean"
              },
              bp: {
                description: "Is a business partner.",
                type: "boolean"
              },
              alliance: {
                description: "Is an alliance partner.",
                type: "boolean"
              },
              fi: {
                description: "Is an financial institute partner.",
                type: "boolean"
              },
              sp: {
                description: "Is a hosted solution.",
                type: "boolean"
              }
            },
            type: "object"
          }
        ],
        title: "PartnerExtended",
        "x-readme-ref-name": "PartnerExtended"
      },
      Payment: {
        properties: {
          method: {
            description: "The method",
            type: "string",
            enum: [
              "iban"
            ]
          },
          card: {
            description: "$card",
            required: [
              "expireMonth",
              "expireYear",
              "type"
            ],
            properties: {
              expireMonth: {
                description: "The month in which the card expires",
                type: "string",
                example: "01"
              },
              expireYear: {
                description: "THe year in which the card expires",
                type: "string",
                example: "2023"
              },
              pin: {
                description: "The card pincode",
                type: "string",
                example: "12345"
              },
              name: {
                description: "The name of the card scheme used.",
                type: "string",
                example: "Maestro"
              },
              type: {
                description: "The type of card",
                type: "string",
                enum: [
                  "POS",
                  "ECOM",
                  "CIT",
                  "MIT",
                  "MOTO",
                  "WALLET"
                ]
              }
            },
            type: "object"
          }
        },
        type: "object",
        title: "Payment",
        "x-readme-ref-name": "Payment"
      },
      PaymentData: {
        properties: {
          method: {
            description: "Payment method of the transaction.",
            type: "string"
          },
          customerKey: {
            description: "Customer key of the customer from the transaction.",
            type: "string"
          },
          customerId: {
            description: "Customer id of the customer from the transaction.",
            type: "string"
          },
          customerName: {
            description: "Customer name of the customer from the transaction.",
            type: "string"
          },
          ipAddress: {
            description: "Ip address of the customer from the transaction.",
            type: "string"
          },
          secureStatus: {
            description: "Secure status of the transaction.",
            type: "boolean"
          },
          paymentVerificationMethod: {
            type: "integer"
          }
        },
        type: "object",
        title: "PaymentData",
        "x-readme-ref-name": "PaymentData"
      },
      PaymentLink: {
        required: [
          "securityMode"
        ],
        properties: {
          url: {
            description: "The paylink url.",
            type: "string",
            format: "uri",
            example: "https://example.com"
          },
          securityMode: {
            description: "0: URL, amount and variables can be changed\n1: Amount is fixed. URL and variables can be changed\n2: Pre filled variable can be changed. Amount is fixed\n3: URL, amount and variables are fixed. Only empty variables can be filled",
            type: "integer",
            enum: [
              0,
              1,
              2,
              3
            ]
          }
        },
        type: "object",
        title: "PaymentLink",
        "x-readme-ref-name": "PaymentLink"
      },
      PaymentMethod: {
        required: [
          "id"
        ],
        properties: {
          id: {
            description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            type: "integer",
            example: "10"
          },
          subId: {
            description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
            type: "string",
            example: "10"
          },
          name: {
            description: "The name of the payment method.",
            type: "string",
            example: "ideal"
          }
        },
        type: "object",
        title: "PaymentMethod",
        "x-readme-ref-name": "PaymentMethod"
      },
      PaymentProfile: {
        properties: {
          id: {
            description: "The payment profile identifier.",
            type: "integer"
          },
          name: {
            description: "The name of the payment profile.",
            type: "string"
          },
          publicName: {
            description: "Public name of the payment method",
            type: "string"
          },
          public: {
            description: "Check if payment method is public",
            type: "boolean"
          },
          selectable: {
            description: "check if payment method is selectable",
            type: "boolean"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          image: {
            description: "The image of the payment method.",
            type: "string"
          },
          issuers: {
            description: "Issuers linked to payment method",
            type: "array",
            items: {
              properties: {
                id: {
                  type: "string"
                },
                code: {
                  type: "string"
                },
                name: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          categories: {
            type: "array",
            items: {
              properties: {
                code: {
                  description: "The category (code) identifier",
                  type: "string",
                  example: "CY-1234-4321"
                },
                name: {
                  description: "The category name.",
                  type: "string",
                  example: "Digitale diensten gambling (kansspelen)"
                }
              },
              type: "object"
            }
          },
          paymentMethodGroup: {
            description: "Payment method group where payment method is assigned to",
            type: "string"
          },
          paymentType: {
            description: "Payment type",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          }
        },
        type: "object",
        title: "PaymentProfile",
        "x-readme-ref-name": "PaymentProfile"
      },
      Payout: {
        properties: {
          type: {
            description: 'Defines the type of the transaction. Possible values are: "iban"',
            type: "string",
            enum: [
              "iban"
            ]
          },
          transaction: {
            required: [
              "serviceId",
              "amount",
              "returnUrl"
            ],
            properties: {
              id: {
                description: "The Id of the transaction.",
                type: "string",
                example: "EX-1234-1234-1234"
              },
              serviceId: {
                description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                type: "string",
                example: "SL-####-####"
              },
              description: {
                description: "Is shown on the statement of the payer.",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "Example description."
              },
              reference: {
                description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "12345XXY0123"
              },
              manualTransferCode: {
                description: "Payment reference used to identify manual bank transfers",
                type: "string",
                example: "0000 0000 0000 0000"
              },
              orderId: {
                description: "The orderId of the transaction.",
                type: "string",
                example: "0000000000X00000"
              },
              ipAddress: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              exchangeUrl: {
                description: "The URL where we exchange the status of a transaction.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/exchange.php"
              },
              returnUrl: {
                description: "The URL where the payer has to be send to after the payment.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/complete/"
              },
              paymentUrl: {
                description: "The payment URL for this transaction",
                type: "string",
                format: "uri"
              },
              amount: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              expire: {
                description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00"
              },
              created: {
                description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              modified: {
                description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              amountConverted: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountPaid: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountRefunded: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              paymentMethod: {
                required: [
                  "id"
                ],
                properties: {
                  id: {
                    description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                    type: "integer",
                    example: "10"
                  },
                  subId: {
                    description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                    type: "string",
                    example: "10"
                  },
                  name: {
                    description: "The name of the payment method.",
                    type: "string",
                    example: "ideal"
                  }
                },
                type: "object",
                title: "PaymentMethod",
                "x-readme-ref-name": "PaymentMethod"
              },
              status: {
                properties: {
                  code: {
                    description: "The status code.",
                    type: "integer"
                  },
                  action: {
                    description: "The state in which the transaction resides",
                    type: "string",
                    example: "PAID"
                  },
                  phase: {
                    description: "The current phase in the transaction state",
                    type: "string",
                    example: "APPROVED"
                  }
                },
                type: "object",
                title: "Status",
                "x-readme-ref-name": "Status"
              },
              integration: {
                properties: {
                  testMode: {
                    description: "Indicates if the service is in testmode or not, possible values: false or true",
                    type: "boolean"
                  }
                },
                type: "object",
                title: "Integration",
                "x-readme-ref-name": "Integration"
              },
              customer: {
                properties: {
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  type: {
                    description: "Either B for business or C for consumer.",
                    type: "string",
                    enum: [
                      "B",
                      "C"
                    ]
                  },
                  ip: {
                    description: "An ip address",
                    type: "string",
                    example: "213.126.82.230"
                  },
                  birthDate: {
                    description: "Date of birth as defined in ISO-8601.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  gender: {
                    description: "The subject's gender. Choose either M for male or F for female.",
                    type: "string",
                    example: "M"
                  },
                  phone: {
                    description: "The subject's phone number. Optionally prepended with a + and country code",
                    type: "string",
                    example: "0031612345678"
                  },
                  email: {
                    description: "An email address.",
                    type: "string",
                    format: "email",
                    example: "sandbox@pay.nl"
                  },
                  language: {
                    description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                    type: "string",
                    enum: [
                      "NL",
                      "EN",
                      "DE",
                      "FR",
                      "IT",
                      "ES"
                    ],
                    example: "NL"
                  },
                  trust: {
                    description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                    type: "integer",
                    maximum: 10,
                    minimum: -10,
                    example: -5
                  },
                  reference: {
                    description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    pattern: "^[a-zA-Z0-9]{1,64}$",
                    example: "NL87654321"
                  },
                  bankAccount: {
                    required: [
                      "iban",
                      "bic",
                      "owner"
                    ],
                    properties: {
                      iban: {
                        description: "The International Bank Account Number (IBAN).",
                        type: "string",
                        example: "NL69INGB0123456789"
                      },
                      bic: {
                        description: "Business Identifier Codes (BIC/SWIFT).",
                        type: "string",
                        example: "INGBNL2A"
                      },
                      owner: {
                        description: "The owner of the bank account.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John Doe"
                      }
                    },
                    type: "object",
                    title: "BankAccount",
                    "x-readme-ref-name": "BankAccount"
                  },
                  company: {
                    properties: {
                      name: {
                        description: "The name of your merchant.",
                        type: "string",
                        example: "CompanyName"
                      },
                      coc: {
                        description: "Your Chamber of commerce registration number. This format differs per country.",
                        type: "string",
                        example: "12345678"
                      },
                      vat: {
                        description: "Value added tax identification number (VAT identification number).",
                        type: "string",
                        example: "NL807960147B01"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Company",
                    "x-readme-ref-name": "Company"
                  }
                },
                type: "object",
                title: "Customer",
                "x-readme-ref-name": "Customer"
              },
              order: {
                properties: {
                  countryCode: {
                    description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  },
                  deliveryDate: {
                    description: "The date of delivery.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  invoiceDate: {
                    description: "The date of the invoice",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  deliveryAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  invoiceAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  products: {
                    type: "array",
                    items: {
                      properties: {
                        id: {
                          description: "The product identifier.",
                          type: "string",
                          example: "TEST_01"
                        },
                        description: {
                          description: "The description of the product.",
                          type: "string",
                          example: "Some product description"
                        },
                        type: {
                          description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                          type: "string",
                          enum: [
                            "shipping",
                            "article",
                            "discount",
                            "rounding",
                            "handling",
                            "payment",
                            "credit",
                            "giftcard",
                            "emoney",
                            "crypto"
                          ]
                        },
                        price: {
                          properties: {
                            value: {
                              description: "The amount in cents.",
                              type: "integer",
                              minimum: 1,
                              example: 10
                            }
                          },
                          type: "object"
                        },
                        quantity: {
                          description: "The quantity.",
                          type: "number",
                          format: "float"
                        },
                        vatCode: {
                          description: "The VAT code to use.",
                          type: "string",
                          enum: [
                            "N",
                            "H",
                            "L"
                          ]
                        }
                      },
                      type: "object",
                      title: "Product",
                      "x-readme-ref-name": "Product"
                    }
                  }
                },
                type: "object",
                title: "Order",
                "x-readme-ref-name": "Order"
              },
              stats: {
                properties: {
                  info: {
                    description: "The used info code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Campagne 99"
                  },
                  tool: {
                    description: "The used tool code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Google"
                  },
                  object: {
                    description: "The object which can be tracked in stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1
                  },
                  extra1: {
                    description: "The first free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Customer 6985615"
                  },
                  extra2: {
                    description: "The second free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Invoice 21.3695"
                  },
                  extra3: {
                    description: "The third free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Shop Amsterdam"
                  },
                  domainId: {
                    description: "The ID of the duplicate content URL",
                    type: "string",
                    example: "WU-####-####"
                  }
                },
                type: "object",
                title: "Stats",
                "x-readme-ref-name": "Stats"
              },
              type: {
                description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM",
                type: "string",
                enum: [
                  "POS",
                  "ECOM",
                  "CIT",
                  "MIT",
                  "MOTO"
                ]
              },
              transferData: {
                type: "array",
                items: {
                  properties: {
                    name: {
                      description: "The name of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "stat1"
                    },
                    value: {
                      description: "The value of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "ab8827dfc"
                    }
                  },
                  type: "object",
                  title: "TransferData",
                  "x-readme-ref-name": "TransferData"
                },
                xml: {
                  name: "transferData",
                  wrapped: true
                }
              }
            },
            type: "object",
            xml: {
              name: "transaction"
            },
            title: "Transaction",
            "x-readme-ref-name": "Transaction"
          }
        },
        type: "object",
        title: "Payout",
        "x-readme-ref-name": "Payout"
      },
      Person: {
        properties: {
          code: {
            type: "string",
            example: "AL-1234-4321"
          },
          secret: {
            type: "string",
            example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
          },
          name: {
            type: "string"
          },
          accountCode: {
            type: "string",
            example: "A-1234-4321"
          },
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "John",
            nullable: true
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Doe"
          },
          email: {
            description: "An email address.",
            type: "string",
            format: "email",
            example: "sandbox@pay.nl"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            enum: [
              "NL",
              "EN",
              "DE",
              "FR",
              "IT",
              "ES"
            ],
            example: "NL"
          },
          phone: {
            description: "The subject's phone number. Optionally prepended with a + and country code",
            type: "string",
            example: "0031612345678"
          },
          visitAddress: {
            properties: {
              code: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              streetNumberExtension: {
                description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "b1"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              regionCode: {
                description: "Region code (iso-3166-2)",
                type: "string",
                example: "ZH"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Address",
            "x-readme-ref-name": "Address"
          },
          complianceData: {
            allOf: [
              {
                properties: {
                  pep: {
                    description: "Indicate if the person is a Politically Exposed Person (PEP).",
                    type: "boolean",
                    example: "true"
                  },
                  pepDescription: {
                    description: "Describe in your own words why this person is a PEP.",
                    type: "string",
                    example: "The person is active as an alderman in the municipality where he lives."
                  },
                  dateOfBirth: {
                    description: "Date of birth of the person.",
                    type: "string",
                    format: "date-time",
                    example: "1999-12-12"
                  },
                  nationality: {
                    description: "Nationality of the person.",
                    type: "string",
                    example: "NL"
                  },
                  idDocumentNumber: {
                    description: "The id document number of the person",
                    type: "string",
                    example: ""
                  }
                },
                type: "object",
                title: "ComplianceData",
                "x-readme-ref-name": "ComplianceData"
              },
              {
                properties: {
                  ubo: {
                    description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                    type: "string",
                    enum: [
                      "no",
                      "direct",
                      "indirect",
                      "pseudo"
                    ],
                    example: "direct"
                  },
                  uboPercentage: {
                    description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                    type: "integer",
                    example: "25"
                  },
                  authorizedToSign: {
                    description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                    type: "string",
                    enum: [
                      "no",
                      "alone",
                      "shared"
                    ],
                    example: "shared"
                  },
                  relationshipDescription: {
                    description: "Describe in your own words the relation the person has with this company.",
                    type: "string",
                    example: "John Doe of test company"
                  }
                },
                type: "object"
              }
            ],
            title: "ComplianceDataPerson",
            "x-readme-ref-name": "ComplianceDataPerson"
          }
        },
        type: "object",
        title: "Person",
        "x-readme-ref-name": "Person"
      },
      PersonCompliance: {
        properties: {
          code: {
            type: "string",
            example: "AL-1234-4321"
          },
          secret: {
            type: "string",
            example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
          },
          name: {
            type: "string"
          },
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "John"
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            type: "string",
            maxLength: 128,
            minLength: 1,
            example: "Doe"
          },
          email: {
            description: "An email address.",
            type: "string",
            format: "email",
            example: "sandbox@pay.nl"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            enum: [
              "NL",
              "EN",
              "DE",
              "FR",
              "IT",
              "ES"
            ],
            example: "NL"
          },
          visitAddress: {
            properties: {
              code: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              streetNumberExtension: {
                description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "b1"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              regionCode: {
                description: "Region code (iso-3166-2)",
                type: "string",
                example: "ZH"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Address",
            "x-readme-ref-name": "Address"
          },
          complianceData: {
            properties: {
              pep: {
                description: "Indicate if the person is a Politically Exposed Person (PEP).",
                type: "boolean",
                example: "true"
              },
              pepDescription: {
                description: "Describe in your own words why this person is a PEP.",
                type: "string",
                example: "The person is active as an alderman in the municipality where he lives."
              },
              dateOfBirth: {
                description: "Date of birth of the person.",
                type: "string",
                format: "date-time",
                example: "1999-12-12"
              },
              nationality: {
                description: "Nationality of the person.",
                type: "string",
                example: "NL"
              },
              idDocumentNumber: {
                description: "The id document number of the person",
                type: "string",
                example: ""
              }
            },
            type: "object",
            title: "ComplianceData",
            "x-readme-ref-name": "ComplianceData"
          },
          documents: {
            properties: {
              code: {
                description: "Code of the acceptance document.",
                type: "string",
                example: "D-1234-1234"
              },
              type: {
                description: "Type of the acceptance document.",
                type: "string",
                example: "identification"
              },
              status: {
                description: "Status of the acceptance document.",
                type: "string",
                example: "UPLOADED"
              }
            },
            type: "object",
            title: "Document",
            "x-readme-ref-name": "Document"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          acceptedAt: {
            description: "The date and time an account was accepted.",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "2023-11-01T10:19:25+01:00",
            nullable: false
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "PersonCompliance",
        "x-readme-ref-name": "PersonCompliance"
      },
      PersonComplianceMinimal: {
        allOf: [
          {
            properties: {
              code: {
                type: "string",
                example: "AL-1234-4321"
              },
              secret: {
                type: "string",
                example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
              },
              name: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Doe"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              visitAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              complianceData: {
                properties: {
                  pep: {
                    description: "Indicate if the person is a Politically Exposed Person (PEP).",
                    type: "boolean",
                    example: "true"
                  },
                  pepDescription: {
                    description: "Describe in your own words why this person is a PEP.",
                    type: "string",
                    example: "The person is active as an alderman in the municipality where he lives."
                  },
                  dateOfBirth: {
                    description: "Date of birth of the person.",
                    type: "string",
                    format: "date-time",
                    example: "1999-12-12"
                  },
                  nationality: {
                    description: "Nationality of the person.",
                    type: "string",
                    example: "NL"
                  },
                  idDocumentNumber: {
                    description: "The id document number of the person",
                    type: "string",
                    example: ""
                  }
                },
                type: "object",
                title: "ComplianceData",
                "x-readme-ref-name": "ComplianceData"
              },
              documents: {
                properties: {
                  code: {
                    description: "Code of the acceptance document.",
                    type: "string",
                    example: "D-1234-1234"
                  },
                  type: {
                    description: "Type of the acceptance document.",
                    type: "string",
                    example: "identification"
                  },
                  status: {
                    description: "Status of the acceptance document.",
                    type: "string",
                    example: "UPLOADED"
                  }
                },
                type: "object",
                title: "Document",
                "x-readme-ref-name": "Document"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              acceptedAt: {
                description: "The date and time an account was accepted.",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "2023-11-01T10:19:25+01:00",
                nullable: false
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object",
            title: "PersonCompliance",
            "x-readme-ref-name": "PersonCompliance"
          }
        ],
        title: "PersonComplianceMinimal",
        "x-readme-ref-name": "PersonComplianceMinimal"
      },
      PersonInfoInternal: {
        allOf: [
          {
            properties: {
              code: {
                type: "string",
                example: "AL-1234-4321"
              },
              secret: {
                type: "string",
                example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
              },
              name: {
                type: "string"
              },
              accountCode: {
                type: "string",
                example: "A-1234-4321"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John",
                nullable: true
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Doe"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              phone: {
                description: "The subject's phone number. Optionally prepended with a + and country code",
                type: "string",
                example: "0031612345678"
              },
              visitAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              complianceData: {
                allOf: [
                  {
                    properties: {
                      pep: {
                        description: "Indicate if the person is a Politically Exposed Person (PEP).",
                        type: "boolean",
                        example: "true"
                      },
                      pepDescription: {
                        description: "Describe in your own words why this person is a PEP.",
                        type: "string",
                        example: "The person is active as an alderman in the municipality where he lives."
                      },
                      dateOfBirth: {
                        description: "Date of birth of the person.",
                        type: "string",
                        format: "date-time",
                        example: "1999-12-12"
                      },
                      nationality: {
                        description: "Nationality of the person.",
                        type: "string",
                        example: "NL"
                      },
                      idDocumentNumber: {
                        description: "The id document number of the person",
                        type: "string",
                        example: ""
                      }
                    },
                    type: "object",
                    title: "ComplianceData",
                    "x-readme-ref-name": "ComplianceData"
                  },
                  {
                    properties: {
                      ubo: {
                        description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                        type: "string",
                        enum: [
                          "no",
                          "direct",
                          "indirect",
                          "pseudo"
                        ],
                        example: "direct"
                      },
                      uboPercentage: {
                        description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                        type: "integer",
                        example: "25"
                      },
                      authorizedToSign: {
                        description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                        type: "string",
                        enum: [
                          "no",
                          "alone",
                          "shared"
                        ],
                        example: "shared"
                      },
                      relationshipDescription: {
                        description: "Describe in your own words the relation the person has with this company.",
                        type: "string",
                        example: "John Doe of test company"
                      }
                    },
                    type: "object"
                  }
                ],
                title: "ComplianceDataPerson",
                "x-readme-ref-name": "ComplianceDataPerson"
              }
            },
            type: "object",
            title: "Person",
            "x-readme-ref-name": "Person"
          },
          {
            properties: {
              documents: {
                properties: {
                  code: {
                    description: "Code of the acceptance document.",
                    type: "string",
                    example: "D-1234-1234"
                  },
                  type: {
                    description: "Type of the acceptance document.",
                    type: "string",
                    example: "identification"
                  },
                  status: {
                    description: "Status of the acceptance document.",
                    type: "string",
                    example: "UPLOADED"
                  }
                },
                type: "object",
                title: "Document",
                "x-readme-ref-name": "Document"
              }
            },
            type: "object"
          }
        ],
        title: "PersonInfoInternal",
        "x-readme-ref-name": "PersonInfoInternal"
      },
      PersonLicense: {
        properties: {
          code: {
            description: "License code.",
            type: "string",
            example: "AL-1234-4321"
          },
          name: {
            description: "Name of the license.",
            type: "string",
            example: "John Doe"
          },
          language: {
            description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
            type: "string",
            example: "NL"
          },
          complianceData: {
            properties: {
              authorizedToSign: {
                description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                type: "string",
                enum: [
                  "no",
                  "alone",
                  "shared"
                ],
                example: "shared"
              },
              pep: {
                description: "Indicate if the person is a Politically Exposed Person (PEP).",
                type: "boolean",
                example: "true"
              },
              pepDescription: {
                description: "Describe in your own words why this person is a PEP.",
                type: "string",
                example: "The person is active as an alderman in the municipality where he lives."
              },
              ubo: {
                description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                type: "string",
                enum: [
                  "no",
                  "direct",
                  "indirect",
                  "pseudo"
                ],
                example: "direct"
              },
              uboPercentage: {
                description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                type: "integer",
                example: "25"
              },
              relationshipDescription: {
                description: "Describe in your own words the relation the person has with this company.",
                type: "string",
                example: "John Doe of test company"
              }
            }
          },
          notificationGroup: {
            properties: {
              technical: {
                type: "boolean"
              },
              financial: {
                type: "boolean"
              },
              operations: {
                type: "boolean"
              }
            },
            type: "object",
            title: "NotificationGroup",
            "x-readme-ref-name": "NotificationGroup"
          },
          merchant: {
            required: [
              "code",
              "name",
              "status"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              }
            },
            type: "object",
            title: "MerchantMinimal",
            "x-readme-ref-name": "MerchantMinimal"
          },
          platform: {
            properties: {
              loginAccount: {
                type: "boolean"
              },
              loginTpa: {
                type: "boolean"
              },
              authorisation: {
                type: "string",
                enum: [
                  "all",
                  "specified"
                ]
              },
              authorisationGroups: {
                type: "array",
                items: {
                  description: "Authorisation group identifier",
                  type: "string",
                  example: "AG-1234-4321"
                }
              }
            },
            type: "object",
            title: "Platform",
            "x-readme-ref-name": "Platform"
          },
          documents: {
            properties: {
              code: {
                description: "Code of the acceptance document.",
                type: "string",
                example: "D-1234-1234"
              },
              type: {
                description: "Type of the acceptance document.",
                type: "string",
                example: "identification"
              },
              status: {
                description: "Status of the acceptance document.",
                type: "string",
                example: "UPLOADED"
              }
            },
            type: "object",
            title: "Document",
            "x-readme-ref-name": "Document"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "PersonLicense",
        "x-readme-ref-name": "PersonLicense"
      },
      PersonLicensePartial: {
        allOf: [
          {
            properties: {
              code: {
                description: "License code.",
                type: "string",
                example: "AL-1234-4321"
              },
              name: {
                description: "Name of the license.",
                type: "string",
                example: "John Doe"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                example: "NL"
              },
              complianceData: {
                properties: {
                  authorizedToSign: {
                    description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                    type: "string",
                    enum: [
                      "no",
                      "alone",
                      "shared"
                    ],
                    example: "shared"
                  },
                  pep: {
                    description: "Indicate if the person is a Politically Exposed Person (PEP).",
                    type: "boolean",
                    example: "true"
                  },
                  pepDescription: {
                    description: "Describe in your own words why this person is a PEP.",
                    type: "string",
                    example: "The person is active as an alderman in the municipality where he lives."
                  },
                  ubo: {
                    description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                    type: "string",
                    enum: [
                      "no",
                      "direct",
                      "indirect",
                      "pseudo"
                    ],
                    example: "direct"
                  },
                  uboPercentage: {
                    description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                    type: "integer",
                    example: "25"
                  },
                  relationshipDescription: {
                    description: "Describe in your own words the relation the person has with this company.",
                    type: "string",
                    example: "John Doe of test company"
                  }
                }
              },
              notificationGroup: {
                properties: {
                  technical: {
                    type: "boolean"
                  },
                  financial: {
                    type: "boolean"
                  },
                  operations: {
                    type: "boolean"
                  }
                },
                type: "object",
                title: "NotificationGroup",
                "x-readme-ref-name": "NotificationGroup"
              },
              merchant: {
                required: [
                  "code",
                  "name",
                  "status"
                ],
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  }
                },
                type: "object",
                title: "MerchantMinimal",
                "x-readme-ref-name": "MerchantMinimal"
              },
              platform: {
                properties: {
                  loginAccount: {
                    type: "boolean"
                  },
                  loginTpa: {
                    type: "boolean"
                  },
                  authorisation: {
                    type: "string",
                    enum: [
                      "all",
                      "specified"
                    ]
                  },
                  authorisationGroups: {
                    type: "array",
                    items: {
                      description: "Authorisation group identifier",
                      type: "string",
                      example: "AG-1234-4321"
                    }
                  }
                },
                type: "object",
                title: "Platform",
                "x-readme-ref-name": "Platform"
              },
              documents: {
                properties: {
                  code: {
                    description: "Code of the acceptance document.",
                    type: "string",
                    example: "D-1234-1234"
                  },
                  type: {
                    description: "Type of the acceptance document.",
                    type: "string",
                    example: "identification"
                  },
                  status: {
                    description: "Status of the acceptance document.",
                    type: "string",
                    example: "UPLOADED"
                  }
                },
                type: "object",
                title: "Document",
                "x-readme-ref-name": "Document"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object",
            title: "PersonLicense",
            "x-readme-ref-name": "PersonLicense"
          },
          {
            properties: {
              code: {
                description: "License code.",
                type: "string",
                example: "AL-1234-4321"
              },
              name: {
                description: "Name of the license.",
                type: "string",
                example: "John Doe"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                example: "NL"
              },
              notificationGroup: {
                properties: {
                  technical: {
                    type: "boolean"
                  },
                  financial: {
                    type: "boolean"
                  },
                  operations: {
                    type: "boolean"
                  }
                },
                type: "object",
                title: "NotificationGroup",
                "x-readme-ref-name": "NotificationGroup"
              },
              platform: {
                properties: {
                  loginAccount: {
                    type: "boolean"
                  },
                  loginTpa: {
                    type: "boolean"
                  },
                  authorisation: {
                    type: "string",
                    enum: [
                      "all",
                      "specified"
                    ]
                  },
                  authorisationGroups: {
                    type: "array",
                    items: {
                      description: "Authorisation group identifier",
                      type: "string",
                      example: "AG-1234-4321"
                    }
                  }
                },
                type: "object",
                title: "Platform",
                "x-readme-ref-name": "Platform"
              },
              merchant: {
                required: [
                  "code",
                  "name",
                  "status"
                ],
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  }
                },
                type: "object",
                title: "MerchantMinimal",
                "x-readme-ref-name": "MerchantMinimal"
              },
              documents: {
                properties: {
                  code: {
                    description: "Code of the acceptance document.",
                    type: "string",
                    example: "D-1234-1234"
                  },
                  type: {
                    description: "Type of the acceptance document.",
                    type: "string",
                    example: "identification"
                  },
                  status: {
                    description: "Status of the acceptance document.",
                    type: "string",
                    example: "UPLOADED"
                  }
                },
                type: "object",
                title: "Document",
                "x-readme-ref-name": "Document"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object"
          }
        ],
        title: "PersonLicensePartial",
        "x-readme-ref-name": "PersonLicensePartial"
      },
      PersonMinimal: {
        allOf: [
          {
            properties: {
              code: {
                type: "string",
                example: "AL-1234-4321"
              },
              secret: {
                type: "string",
                example: "2jQ5hyjpBG9duCoZQcdD1F8Tb1HxL0oAArKfbCAu"
              },
              name: {
                type: "string"
              },
              accountCode: {
                type: "string",
                example: "A-1234-4321"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John",
                nullable: true
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Doe"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              phone: {
                description: "The subject's phone number. Optionally prepended with a + and country code",
                type: "string",
                example: "0031612345678"
              },
              visitAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              complianceData: {
                allOf: [
                  {
                    properties: {
                      pep: {
                        description: "Indicate if the person is a Politically Exposed Person (PEP).",
                        type: "boolean",
                        example: "true"
                      },
                      pepDescription: {
                        description: "Describe in your own words why this person is a PEP.",
                        type: "string",
                        example: "The person is active as an alderman in the municipality where he lives."
                      },
                      dateOfBirth: {
                        description: "Date of birth of the person.",
                        type: "string",
                        format: "date-time",
                        example: "1999-12-12"
                      },
                      nationality: {
                        description: "Nationality of the person.",
                        type: "string",
                        example: "NL"
                      },
                      idDocumentNumber: {
                        description: "The id document number of the person",
                        type: "string",
                        example: ""
                      }
                    },
                    type: "object",
                    title: "ComplianceData",
                    "x-readme-ref-name": "ComplianceData"
                  },
                  {
                    properties: {
                      ubo: {
                        description: "Indicate if the person is an UBO:\nno: no ubo\npseudo: is a pseudo ubo (no financial interest)\ndirect: is a direct ubo with financial interest\nindirect: is a indirect ubo (due to involvement of a parent company or holding) with financial interest",
                        type: "string",
                        enum: [
                          "no",
                          "direct",
                          "indirect",
                          "pseudo"
                        ],
                        example: "direct"
                      },
                      uboPercentage: {
                        description: "Indicate for direct and indirect UBO's the percentage of involvement (e.g. % of shares of a company).",
                        type: "integer",
                        example: "25"
                      },
                      authorizedToSign: {
                        description: "Indicate if the person is authorized to sign on behalf of the company:\nno: not authorized to sign\nalone: is authorized to sign\nshared: is authorized to sign together with other(s)",
                        type: "string",
                        enum: [
                          "no",
                          "alone",
                          "shared"
                        ],
                        example: "shared"
                      },
                      relationshipDescription: {
                        description: "Describe in your own words the relation the person has with this company.",
                        type: "string",
                        example: "John Doe of test company"
                      }
                    },
                    type: "object"
                  }
                ],
                title: "ComplianceDataPerson",
                "x-readme-ref-name": "ComplianceDataPerson"
              }
            },
            type: "object",
            title: "Person",
            "x-readme-ref-name": "Person"
          }
        ],
        title: "PersonMinimal",
        "x-readme-ref-name": "PersonMinimal"
      },
      Platform: {
        properties: {
          loginAccount: {
            type: "boolean"
          },
          loginTpa: {
            type: "boolean"
          },
          authorisation: {
            type: "string",
            enum: [
              "all",
              "specified"
            ]
          },
          authorisationGroups: {
            type: "array",
            items: {
              description: "Authorisation group identifier",
              type: "string",
              example: "AG-1234-4321"
            }
          }
        },
        type: "object",
        title: "Platform",
        "x-readme-ref-name": "Platform"
      },
      Product: {
        properties: {
          id: {
            description: "The product identifier.",
            type: "string",
            example: "TEST_01"
          },
          description: {
            description: "The description of the product.",
            type: "string",
            example: "Some product description"
          },
          type: {
            description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
            type: "string",
            enum: [
              "shipping",
              "article",
              "discount",
              "rounding",
              "handling",
              "payment",
              "credit",
              "giftcard",
              "emoney",
              "crypto"
            ]
          },
          price: {
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              }
            },
            type: "object"
          },
          quantity: {
            description: "The quantity.",
            type: "number",
            format: "float"
          },
          vatCode: {
            description: "The VAT code to use.",
            type: "string",
            enum: [
              "N",
              "H",
              "L"
            ]
          }
        },
        type: "object",
        title: "Product",
        "x-readme-ref-name": "Product"
      },
      productType: {
        properties: {
          code: {
            description: "Code of product type",
            type: "string"
          },
          description: {
            description: "Description of product type",
            type: "string"
          },
          image: {
            description: "Image of product type",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "productType",
        "x-readme-ref-name": "productType"
      },
      Progress: {
        description: "A terminal transaction lasts up to 45 seconds. The progress indicates how long the terminal is not available/the customer has time to complete the transaction",
        properties: {
          percentage: {
            description: "Progress in percentage.",
            type: "number",
            format: "float"
          },
          secondsPassed: {
            description: "The amount of seconds the transaction is waiting for the payer since starting the transaction.",
            type: "integer"
          },
          percentagePerSecond: {
            description: "Each second corresponds to a percentage the transaction is in progress.",
            type: "number",
            format: "float"
          }
        },
        type: "object",
        title: "Progress",
        "x-readme-ref-name": "Progress"
      },
      Qr: {
        properties: {
          uuid: {
            description: "The uuid of the QR code.",
            type: "string",
            maxLength: 36,
            minLength: 36,
            example: "1234-5678-1234-5678"
          },
          serviceId: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string",
            example: "SL-####-####"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          secret: {
            description: "The secret of the QR code.",
            type: "string",
            format: "byte",
            maxLength: 40,
            minLength: 40,
            example: "secret"
          },
          reference: {
            description: "The reference of the QR code.",
            type: "string",
            example: "123456"
          },
          padChar: {
            description: "The padding character.",
            type: "string",
            maxLength: 1,
            minLength: 1,
            pattern: "^[a-zA-Z0-9]{1}$",
            example: "a"
          },
          referenceType: {
            description: "The reference type of the QR code. Must be one of the following values: string, hex.",
            type: "string",
            enum: [
              "string",
              "hex"
            ],
            example: "string"
          },
          externalPaymentLink: {
            description: "The external link to complete your payment with the supplier.",
            type: "string",
            example: "https://qr6.ideal.nl/uuid"
          },
          paymentLink: {
            description: "A link to complete your payment using our payment screen.",
            type: "string",
            example: "https://ideal.pay.nl/qr/uuid"
          },
          contents: {
            description: "The qr contents as a base64 string.",
            type: "string",
            example: "iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAADAFBM..."
          }
        },
        type: "object",
        title: "Qr",
        "x-readme-ref-name": "Qr"
      },
      Receipt: {
        properties: {
          id: {
            description: "A base64 encoded receipt.",
            type: "string",
            format: "byte",
            example: "TG9yZW0lMjBpcHN1bSUyMGRvbG9yJTIwc2l0JTIwYW1ldCwlMjBjb25zZWN0ZXR1ciUyMGFkaXBpc2NpbmclMjBlbGl0Lg=="
          },
          signature: {
            description: "Unique signature for a receipt.",
            type: "string"
          },
          approvalId: {
            description: "Identifier for the transaction.",
            type: "string"
          },
          card: {
            properties: {
              id: {
                description: "The identifier of the card scheme used.",
                type: "integer",
                example: "1009"
              },
              name: {
                description: "The name of the card scheme used.",
                type: "string",
                example: "Maestro"
              },
              expireMonth: {
                description: "The month in which the card expires",
                type: "string",
                example: "01"
              },
              expireYear: {
                description: "THe year in which the card expires",
                type: "string",
                example: "2023"
              },
              pin: {
                description: "The card pincode",
                type: "string",
                example: "12345"
              },
              type: {
                description: "The type of card",
                type: "string",
                enum: [
                  "POS",
                  "ECOM",
                  "CIT",
                  "MIT",
                  "MOTO",
                  "WALLET"
                ]
              }
            },
            type: "object",
            title: "Card",
            "x-readme-ref-name": "Card"
          },
          paymentMethod: {
            required: [
              "id"
            ],
            properties: {
              id: {
                description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                type: "integer",
                example: "10"
              },
              subId: {
                description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                type: "string",
                example: "10"
              },
              name: {
                description: "The name of the payment method.",
                type: "string",
                example: "ideal"
              }
            },
            type: "object",
            title: "PaymentMethod",
            "x-readme-ref-name": "PaymentMethod"
          }
        },
        type: "object",
        title: "Receipt",
        "x-readme-ref-name": "Receipt"
      },
      Refund: {
        properties: {
          id: {
            description: "The ID of the refund",
            type: "string",
            example: "RF-####-####-####"
          },
          paymentSessionId: {
            description: "The payment session identifier.",
            type: "string",
            example: 1e8
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          description: {
            description: "The description of the refund.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "The product never got delivered."
          },
          bankAccount: {
            required: [
              "iban",
              "bic",
              "owner"
            ],
            properties: {
              iban: {
                description: "The International Bank Account Number (IBAN).",
                type: "string",
                example: "NL69INGB0123456789"
              },
              bic: {
                description: "Business Identifier Codes (BIC/SWIFT).",
                type: "string",
                example: "INGBNL2A"
              },
              owner: {
                description: "The owner of the bank account.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John Doe"
              }
            },
            type: "object",
            title: "BankAccount",
            "x-readme-ref-name": "BankAccount"
          },
          status: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          processDate: {
            description: "The ISO date at which this entity will be processed",
            type: "string",
            format: "date-time",
            example: "2019-01-01T12:00:00+02:00"
          },
          vatPercentage: {
            description: "the vat percentage this refund applies to. Only applicable for amount, not products, and only for AfterPay.",
            type: "number",
            format: "float",
            example: "21.0"
          },
          exchangeUrl: {
            description: "The URL where we exchange the status of a transaction.",
            type: "string",
            format: "uri",
            example: "https://demo.pay.nl/exchange.php"
          }
        },
        type: "object",
        title: "Refund",
        "x-readme-ref-name": "Refund"
      },
      Service: {
        properties: {
          id: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string",
            example: "SL-####-####"
          },
          name: {
            description: "The name of your service.",
            type: "string",
            example: "My first service!"
          },
          description: {
            description: "The description of the service.",
            type: "string"
          },
          testMode: {
            description: "Indicates if the service is in testmode or not, possible values: false or true",
            type: "integer"
          },
          secret: {
            description: "The unique reference for this service.",
            type: "string",
            example: "bade123abf124124abefa311b"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          }
        },
        type: "object",
        title: "Service",
        "x-readme-ref-name": "Service"
      },
      PaymentMethodGroup: {
        properties: {
          name: {
            description: "Payment method group name",
            type: "string"
          },
          image: {
            description: "Payment method group image",
            type: "string"
          },
          paymentmethods: {
            description: "Payment method group methods",
            type: "array",
            items: {
              properties: {
                paymentmethod: {
                  required: [
                    "id"
                  ],
                  properties: {
                    id: {
                      description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                      type: "integer",
                      example: "10"
                    },
                    name: {
                      description: "The name of the payment method.",
                      type: "string",
                      example: "ideal"
                    },
                    description: {
                      type: "string"
                    },
                    translations: {
                      description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                      type: "object",
                      uniqueItems: true,
                      example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                      nullable: true,
                      additionalProperties: {
                        type: "object",
                        additionalProperties: {
                          type: "string"
                        }
                      }
                    },
                    image: {
                      description: "The image of the payment method.",
                      type: "string",
                      example: "https://admin.pay.nl/images/payment_profiles/10.gif"
                    },
                    options: {
                      type: "array",
                      items: {
                        properties: {
                          id: {
                            description: "The ID of the issuer.",
                            type: "integer",
                            example: 2
                          },
                          name: {
                            description: "The name of the issuer.",
                            type: "string",
                            example: "Rabobank"
                          },
                          image: {
                            description: "The image of the issuer.",
                            type: "string",
                            example: "/issuers/4.svg"
                          }
                        },
                        type: "object"
                      }
                    },
                    settings: {
                      type: "array",
                      items: {
                        properties: {
                          key: {
                            description: "The name of the setting.",
                            type: "string"
                          },
                          value: {
                            description: "The value of the setting.",
                            type: "string"
                          }
                        },
                        type: "object"
                      }
                    },
                    minAmount: {
                      description: "The minimum amount in cents in order to use this payment_method.",
                      type: "integer",
                      example: 100
                    },
                    maxAmount: {
                      description: "The maximum amount in cents which is allowed for this payment_method.",
                      type: "integer",
                      example: 1e5
                    }
                  },
                  type: "object",
                  title: "PaymentMethodConfig",
                  "x-readme-ref-name": "PaymentMethodConfig"
                }
              },
              type: "object"
            }
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          }
        },
        type: "object",
        title: "PaymentMethodGroup",
        "x-readme-ref-name": "PaymentMethodGroup"
      },
      ServiceConfigCategory: {
        properties: {
          code: {
            description: "Category identifier.",
            type: "string",
            example: "CY-1234-4321"
          },
          name: {
            description: "The category name.",
            type: "string"
          }
        },
        type: "object",
        title: "ServiceConfigCategory",
        "x-readme-ref-name": "ServiceConfigCategory"
      },
      TurnOverGroup: {
        properties: {
          code: {
            description: "Id of the turnover group",
            type: "string",
            example: "TM-####-####"
          },
          name: {
            description: "Name of the turn over group",
            type: "string"
          }
        },
        type: "object",
        title: "TurnOverGroup",
        "x-readme-ref-name": "TurnOverGroup"
      },
      Stats: {
        properties: {
          info: {
            description: "The used info code which can be tracked in the stats.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Campagne 99"
          },
          tool: {
            description: "The used tool code which can be tracked in the stats.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Google"
          },
          object: {
            description: "The object which can be tracked in stats.",
            type: "string",
            maxLength: 64,
            minLength: 1
          },
          extra1: {
            description: "The first free value which can be tracked in the stats.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Customer 6985615"
          },
          extra2: {
            description: "The second free value which can be tracked in the stats.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Invoice 21.3695"
          },
          extra3: {
            description: "The third free value which can be tracked in the stats.",
            type: "string",
            maxLength: 64,
            minLength: 1,
            example: "Shop Amsterdam"
          },
          domainId: {
            description: "The ID of the duplicate content URL",
            type: "string",
            example: "WU-####-####"
          }
        },
        type: "object",
        title: "Stats",
        "x-readme-ref-name": "Stats"
      },
      Status: {
        properties: {
          code: {
            description: "The status code.",
            type: "integer"
          },
          action: {
            description: "The state in which the transaction resides",
            type: "string",
            example: "PAID"
          },
          phase: {
            description: "The current phase in the transaction state",
            type: "string",
            example: "APPROVED"
          }
        },
        type: "object",
        title: "Status",
        "x-readme-ref-name": "Status"
      },
      Terminal: {
        properties: {
          code: {
            description: "The terminal identifier.",
            type: "string",
            example: "TH-1234-1234"
          },
          name: {
            description: "The name of the terminal.",
            type: "string",
            example: "Terminal Shop."
          },
          attribution: {
            description: "The terminal attribution.",
            type: "string",
            example: "PAY.nl* CompanyName"
          },
          status: {
            description: "The current status of the terminal.",
            type: "string",
            example: "ACTIVE"
          },
          connectionStatus: {
            description: "The current connection status of the terminal.",
            type: "string",
            example: "ONLINE"
          },
          merchant: {
            required: [
              "code",
              "name",
              "status"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              }
            },
            type: "object",
            title: "MerchantMinimal",
            "x-readme-ref-name": "MerchantMinimal"
          },
          service: {
            properties: {
              id: {
                description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                type: "string",
                example: "SL-####-####"
              },
              name: {
                description: "The name of your service.",
                type: "string",
                example: "My first service!"
              },
              description: {
                description: "The description of the service.",
                type: "string"
              },
              testMode: {
                description: "Indicates if the service is in testmode or not, possible values: false or true",
                type: "integer"
              },
              secret: {
                description: "The unique reference for this service.",
                type: "string",
                example: "bade123abf124124abefa311b"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              }
            },
            type: "object",
            title: "Service",
            "x-readme-ref-name": "Service"
          },
          description: {
            description: "The terminal description.",
            type: "string"
          },
          supplier: {
            properties: {
              id: {
                description: "The terminal supplier id",
                type: "integer",
                example: "1"
              },
              name: {
                description: "The terminal supplier name",
                type: "string",
                example: "AtosWorldline"
              },
              terminalId: {
                description: "The terminal supplier id",
                type: "string",
                example: "1"
              }
            },
            type: "object",
            title: "TerminalSupplier",
            "x-readme-ref-name": "TerminalSupplier"
          },
          terminalType: {
            description: "The terminal type.",
            type: "string"
          },
          ecrProtocol: {
            description: "The ECR protocol.",
            type: "string",
            example: "WEB"
          },
          contractStartDate: {
            description: "The terminal contract startdate.",
            type: "string",
            format: "date-time"
          },
          contractEndDate: {
            description: "The terminal contract enddate.",
            type: "string",
            format: "date-time"
          },
          paymentTypes: {
            description: "The terminal payment type.",
            type: "array",
            items: {
              properties: {
                paymentType: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          terminalBrands: {
            description: "The terminal brands.",
            type: "array",
            items: {
              properties: {
                id: {
                  description: "The terminal contract enddate.",
                  type: "integer"
                },
                name: {
                  description: "The terminal contract enddate.",
                  type: "string"
                },
                image: {
                  description: "The terminal contract enddate.",
                  type: "string"
                },
                acquirer: {
                  description: "The terminal acquirer",
                  type: "string"
                },
                acquirerTid: {
                  description: "The terminal contract enddate.",
                  type: "string"
                },
                acquirerMid: {
                  description: "The terminal contract number",
                  type: "string"
                },
                acquirerChecksum: {
                  description: "The terminal contract enddate.",
                  type: "string"
                },
                paymentTypes: {
                  description: "The terminal payment type.",
                  type: "array",
                  items: {
                    properties: {
                      paymentType: {
                        type: "string"
                      }
                    },
                    type: "object"
                  }
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                createdBy: {
                  description: "The reference to an account or token whom created the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                modifiedBy: {
                  description: "The reference to an account or token whom modified the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: true
                },
                deletedAt: {
                  description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedBy: {
                  description: "The reference to an account or token whom deleted the entity",
                  type: "string",
                  pattern: "^A(T)?(-\\d{4}){2}$",
                  readOnly: true,
                  example: "A-1234-4321",
                  nullable: true
                }
              },
              type: "object",
              title: "TerminalBrand",
              "x-readme-ref-name": "TerminalBrand"
            }
          },
          location: {
            required: [
              "code",
              "streetName",
              "zipCode",
              "city",
              "countryCode"
            ],
            properties: {
              code: {
                type: "string"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Location",
            "x-readme-ref-name": "Location"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "Terminal",
        "x-readme-ref-name": "Terminal"
      },
      TerminalBrand: {
        properties: {
          id: {
            description: "The terminal contract enddate.",
            type: "integer"
          },
          name: {
            description: "The terminal contract enddate.",
            type: "string"
          },
          image: {
            description: "The terminal contract enddate.",
            type: "string"
          },
          acquirer: {
            description: "The terminal acquirer",
            type: "string"
          },
          acquirerTid: {
            description: "The terminal contract enddate.",
            type: "string"
          },
          acquirerMid: {
            description: "The terminal contract number",
            type: "string"
          },
          acquirerChecksum: {
            description: "The terminal contract enddate.",
            type: "string"
          },
          paymentTypes: {
            description: "The terminal payment type.",
            type: "array",
            items: {
              properties: {
                paymentType: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "TerminalBrand",
        "x-readme-ref-name": "TerminalBrand"
      },
      TerminalSupplier: {
        properties: {
          id: {
            description: "The terminal supplier id",
            type: "integer",
            example: "1"
          },
          name: {
            description: "The terminal supplier name",
            type: "string",
            example: "AtosWorldline"
          },
          terminalId: {
            description: "The terminal supplier id",
            type: "string",
            example: "1"
          }
        },
        type: "object",
        title: "TerminalSupplier",
        "x-readme-ref-name": "TerminalSupplier"
      },
      TerminalTransaction: {
        properties: {
          state: {
            description: "The state of the terminal transaction.",
            type: "string"
          },
          terminalTransactionId: {
            description: "The terminal transaction ID.",
            type: "string",
            example: "TT-####-####-####."
          },
          transactionHash: {
            description: "The hash of this terminal transaction.",
            type: "string"
          },
          issuerUrl: {
            description: "The issuer URL for this terminal transaction",
            type: "string",
            format: "uri"
          },
          statusUrl: {
            description: "The status URL for this terminal transaction",
            type: "string",
            format: "uri"
          },
          cancelUrl: {
            description: "The cancel URL for this terminal transaction",
            type: "string",
            format: "uri"
          },
          nextUrl: {
            description: "The next URL for this terminal transaction when it's not completed yet.",
            type: "string",
            format: "uri"
          },
          terminal: {
            properties: {
              code: {
                description: "The terminal identifier.",
                type: "string",
                example: "TH-1234-1234"
              },
              name: {
                description: "The name of the terminal.",
                type: "string",
                example: "Terminal Shop."
              },
              attribution: {
                description: "The terminal attribution.",
                type: "string",
                example: "PAY.nl* CompanyName"
              },
              status: {
                description: "The current status of the terminal.",
                type: "string",
                example: "ACTIVE"
              },
              connectionStatus: {
                description: "The current connection status of the terminal.",
                type: "string",
                example: "ONLINE"
              },
              merchant: {
                required: [
                  "code",
                  "name",
                  "status"
                ],
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  }
                },
                type: "object",
                title: "MerchantMinimal",
                "x-readme-ref-name": "MerchantMinimal"
              },
              service: {
                properties: {
                  id: {
                    description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                    type: "string",
                    example: "SL-####-####"
                  },
                  name: {
                    description: "The name of your service.",
                    type: "string",
                    example: "My first service!"
                  },
                  description: {
                    description: "The description of the service.",
                    type: "string"
                  },
                  testMode: {
                    description: "Indicates if the service is in testmode or not, possible values: false or true",
                    type: "integer"
                  },
                  secret: {
                    description: "The unique reference for this service.",
                    type: "string",
                    example: "bade123abf124124abefa311b"
                  },
                  createdAt: {
                    description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                    type: "string",
                    format: "date-time",
                    readOnly: true,
                    example: "2016-06-04T08:15:00+01:00",
                    nullable: false
                  }
                },
                type: "object",
                title: "Service",
                "x-readme-ref-name": "Service"
              },
              description: {
                description: "The terminal description.",
                type: "string"
              },
              supplier: {
                properties: {
                  id: {
                    description: "The terminal supplier id",
                    type: "integer",
                    example: "1"
                  },
                  name: {
                    description: "The terminal supplier name",
                    type: "string",
                    example: "AtosWorldline"
                  },
                  terminalId: {
                    description: "The terminal supplier id",
                    type: "string",
                    example: "1"
                  }
                },
                type: "object",
                title: "TerminalSupplier",
                "x-readme-ref-name": "TerminalSupplier"
              },
              terminalType: {
                description: "The terminal type.",
                type: "string"
              },
              ecrProtocol: {
                description: "The ECR protocol.",
                type: "string",
                example: "WEB"
              },
              contractStartDate: {
                description: "The terminal contract startdate.",
                type: "string",
                format: "date-time"
              },
              contractEndDate: {
                description: "The terminal contract enddate.",
                type: "string",
                format: "date-time"
              },
              paymentTypes: {
                description: "The terminal payment type.",
                type: "array",
                items: {
                  properties: {
                    paymentType: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              terminalBrands: {
                description: "The terminal brands.",
                type: "array",
                items: {
                  properties: {
                    id: {
                      description: "The terminal contract enddate.",
                      type: "integer"
                    },
                    name: {
                      description: "The terminal contract enddate.",
                      type: "string"
                    },
                    image: {
                      description: "The terminal contract enddate.",
                      type: "string"
                    },
                    acquirer: {
                      description: "The terminal acquirer",
                      type: "string"
                    },
                    acquirerTid: {
                      description: "The terminal contract enddate.",
                      type: "string"
                    },
                    acquirerMid: {
                      description: "The terminal contract number",
                      type: "string"
                    },
                    acquirerChecksum: {
                      description: "The terminal contract enddate.",
                      type: "string"
                    },
                    paymentTypes: {
                      description: "The terminal payment type.",
                      type: "array",
                      items: {
                        properties: {
                          paymentType: {
                            type: "string"
                          }
                        },
                        type: "object"
                      }
                    },
                    createdAt: {
                      description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: false
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    },
                    modifiedAt: {
                      description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The reference to an account or token whom modified the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    },
                    deletedAt: {
                      description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00",
                      nullable: true
                    },
                    deletedBy: {
                      description: "The reference to an account or token whom deleted the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: true
                    }
                  },
                  type: "object",
                  title: "TerminalBrand",
                  "x-readme-ref-name": "TerminalBrand"
                }
              },
              location: {
                required: [
                  "code",
                  "streetName",
                  "zipCode",
                  "city",
                  "countryCode"
                ],
                properties: {
                  code: {
                    type: "string"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Location",
                "x-readme-ref-name": "Location"
              },
              createdAt: {
                description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: false
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              },
              modifiedAt: {
                description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              modifiedBy: {
                description: "The reference to an account or token whom modified the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object",
            title: "Terminal",
            "x-readme-ref-name": "Terminal"
          },
          progress: {
            description: "A terminal transaction lasts up to 45 seconds. The progress indicates how long the terminal is not available/the customer has time to complete the transaction",
            properties: {
              percentage: {
                description: "Progress in percentage.",
                type: "number",
                format: "float"
              },
              secondsPassed: {
                description: "The amount of seconds the transaction is waiting for the payer since starting the transaction.",
                type: "integer"
              },
              percentagePerSecond: {
                description: "Each second corresponds to a percentage the transaction is in progress.",
                type: "number",
                format: "float"
              }
            },
            type: "object",
            title: "Progress",
            "x-readme-ref-name": "Progress"
          }
        },
        type: "object",
        title: "TerminalTransaction",
        "x-readme-ref-name": "TerminalTransaction"
      },
      TradeName: {
        properties: {
          code: {
            description: "An identifier for this TradeName",
            type: "string"
          },
          name: {
            description: "A registered TradeName",
            type: "string"
          }
        },
        type: "object",
        title: "TradeName",
        "x-readme-ref-name": "TradeName"
      },
      Trademark: {
        required: [
          "name"
        ],
        properties: {
          code: {
            description: "An identifier for this trademark",
            type: "string",
            example: "TM-0000-0000"
          },
          type: {
            type: "string"
          },
          name: {
            description: "A registered trademark name.",
            type: "string"
          },
          status: {
            description: "Status of the trademark.",
            type: "string"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "Trademark",
        "x-readme-ref-name": "Trademark"
      },
      TransactionInfo: {
        required: [
          "serviceId",
          "amount",
          "returnUrl"
        ],
        properties: {
          id: {
            description: "The Id of the transaction.",
            type: "string",
            example: "EX-1234-1234-1234"
          },
          orderId: {
            description: "The orderId of the transaction.",
            type: "string",
            example: "EX-1234-1234-1234"
          },
          serviceCode: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "Example description."
          },
          reference: {
            description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
            type: "string",
            maxLength: 64,
            minLength: 1,
            pattern: "^[a-zA-Z0-9]{1,64}$",
            example: "12345XXY0123"
          },
          manualTransferCode: {
            description: "Payment reference used to identify manual bank transfers",
            type: "string",
            example: "0000 0000 0000 0000"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountConverted: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountPaid: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountRefunded: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          status: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          paymentData: {
            properties: {
              method: {
                description: "Payment method of the transaction.",
                type: "string"
              },
              customerKey: {
                description: "Customer key of the customer from the transaction.",
                type: "string"
              },
              customerId: {
                description: "Customer id of the customer from the transaction.",
                type: "string"
              },
              customerName: {
                description: "Customer name of the customer from the transaction.",
                type: "string"
              },
              ipAddress: {
                description: "Ip address of the customer from the transaction.",
                type: "string"
              },
              secureStatus: {
                description: "Secure status of the transaction.",
                type: "boolean"
              },
              paymentVerificationMethod: {
                type: "integer"
              }
            },
            type: "object",
            title: "TransactionStatusPaymentData",
            "x-readme-ref-name": "TransactionStatusPaymentData"
          },
          paymentMethod: {
            properties: {
              id: {
                description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                type: "integer"
              },
              subId: {
                description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                type: "integer"
              }
            },
            type: "object",
            title: "TransactionStatusPaymentMethod",
            "x-readme-ref-name": "TransactionStatusPaymentMethod"
          },
          integration: {
            properties: {
              testMode: {
                description: "Indicates if the service is in testmode or not, possible values: false or true",
                type: "boolean"
              }
            },
            type: "object",
            title: "Integration",
            "x-readme-ref-name": "Integration"
          },
          customer: {
            properties: {
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              type: {
                description: "Either B for business or C for consumer.",
                type: "string",
                enum: [
                  "B",
                  "C"
                ]
              },
              ip: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              birthDate: {
                description: "Date of birth as defined in ISO-8601.",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              gender: {
                description: "The subject's gender. Choose either M for male or F for female.",
                type: "string",
                example: "M"
              },
              phone: {
                description: "The subject's phone number. Optionally prepended with a + and country code",
                type: "string",
                example: "0031612345678"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              trust: {
                description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                type: "integer",
                maximum: 10,
                minimum: -10,
                example: -5
              },
              reference: {
                description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "NL87654321"
              },
              bankAccount: {
                required: [
                  "iban",
                  "bic",
                  "owner"
                ],
                properties: {
                  iban: {
                    description: "The International Bank Account Number (IBAN).",
                    type: "string",
                    example: "NL69INGB0123456789"
                  },
                  bic: {
                    description: "Business Identifier Codes (BIC/SWIFT).",
                    type: "string",
                    example: "INGBNL2A"
                  },
                  owner: {
                    description: "The owner of the bank account.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John Doe"
                  }
                },
                type: "object",
                title: "BankAccount",
                "x-readme-ref-name": "BankAccount"
              },
              company: {
                properties: {
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    example: "CompanyName"
                  },
                  coc: {
                    description: "Your Chamber of commerce registration number. This format differs per country.",
                    type: "string",
                    example: "12345678"
                  },
                  vat: {
                    description: "Value added tax identification number (VAT identification number).",
                    type: "string",
                    example: "NL807960147B01"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    example: "NL"
                  }
                },
                type: "object",
                title: "Company",
                "x-readme-ref-name": "Company"
              }
            },
            type: "object",
            title: "Customer",
            "x-readme-ref-name": "Customer"
          },
          order: {
            properties: {
              countryCode: {
                description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              },
              deliveryDate: {
                description: "The date of delivery.",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              invoiceDate: {
                description: "The date of the invoice",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              deliveryAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              invoiceAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              products: {
                type: "array",
                items: {
                  properties: {
                    id: {
                      description: "The product identifier.",
                      type: "string",
                      example: "TEST_01"
                    },
                    description: {
                      description: "The description of the product.",
                      type: "string",
                      example: "Some product description"
                    },
                    type: {
                      description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                      type: "string",
                      enum: [
                        "shipping",
                        "article",
                        "discount",
                        "rounding",
                        "handling",
                        "payment",
                        "credit",
                        "giftcard",
                        "emoney",
                        "crypto"
                      ]
                    },
                    price: {
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        }
                      },
                      type: "object"
                    },
                    quantity: {
                      description: "The quantity.",
                      type: "number",
                      format: "float"
                    },
                    vatCode: {
                      description: "The VAT code to use.",
                      type: "string",
                      enum: [
                        "N",
                        "H",
                        "L"
                      ]
                    }
                  },
                  type: "object",
                  title: "Product",
                  "x-readme-ref-name": "Product"
                }
              }
            },
            type: "object",
            title: "Order",
            "x-readme-ref-name": "Order"
          },
          stats: {
            properties: {
              info: {
                description: "The used info code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Campagne 99"
              },
              tool: {
                description: "The used tool code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Google"
              },
              object: {
                description: "The object which can be tracked in stats.",
                type: "string",
                maxLength: 64,
                minLength: 1
              },
              extra1: {
                description: "The first free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Customer 6985615"
              },
              extra2: {
                description: "The second free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Invoice 21.3695"
              },
              extra3: {
                description: "The third free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Shop Amsterdam"
              },
              domainId: {
                description: "The ID of the duplicate content URL",
                type: "string",
                example: "WU-####-####"
              }
            },
            type: "object",
            title: "Stats",
            "x-readme-ref-name": "Stats"
          },
          transferData: {
            properties: {
              name: {
                description: "The name of the variable to be tracked in the transaction.",
                type: "string",
                example: "stat1"
              },
              value: {
                description: "The value of the variable to be tracked in the transaction.",
                type: "string",
                example: "ab8827dfc"
              }
            },
            type: "object",
            title: "TransferData",
            "x-readme-ref-name": "TransferData"
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          expiredAt: {
            description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            readOnly: true,
            nullable: true
          }
        },
        type: "object",
        title: "TransactionInfo",
        "x-readme-ref-name": "TransactionInfo"
      },
      TransactionStatus: {
        properties: {
          id: {
            description: "The Id of the transaction.",
            type: "string"
          },
          orderId: {
            description: "The orderId of the transaction.",
            type: "string"
          },
          serviceCode: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            type: "string"
          },
          reference: {
            description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
            type: "string"
          },
          ipAddress: {
            description: "An ip address",
            type: "string"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountConverted: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountPaid: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountRefunded: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          status: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          paymentData: {
            properties: {
              method: {
                description: "Payment method of the transaction.",
                type: "string"
              },
              customerKey: {
                description: "Customer key of the customer from the transaction.",
                type: "string"
              },
              customerId: {
                description: "Customer id of the customer from the transaction.",
                type: "string"
              },
              customerName: {
                description: "Customer name of the customer from the transaction.",
                type: "string"
              },
              ipAddress: {
                description: "Ip address of the customer from the transaction.",
                type: "string"
              },
              secureStatus: {
                description: "Secure status of the transaction.",
                type: "boolean"
              },
              paymentVerificationMethod: {
                type: "integer"
              }
            },
            type: "object",
            title: "TransactionStatusPaymentData",
            "x-readme-ref-name": "TransactionStatusPaymentData"
          },
          paymentMethod: {
            properties: {
              id: {
                description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                type: "integer"
              },
              subId: {
                description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                type: "integer"
              }
            },
            type: "object",
            title: "TransactionStatusPaymentMethod",
            "x-readme-ref-name": "TransactionStatusPaymentMethod"
          },
          integration: {
            properties: {
              testMode: {
                description: "Indicates if the service is in testmode or not, possible values: false or true",
                type: "boolean"
              }
            },
            type: "object",
            title: "Integration",
            "x-readme-ref-name": "Integration"
          },
          expiredAt: {
            description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            readOnly: true,
            nullable: true
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "TransactionStatus",
        "x-readme-ref-name": "TransactionStatus"
      },
      TransactionStatusPaymentData: {
        properties: {
          method: {
            description: "Payment method of the transaction.",
            type: "string"
          },
          customerKey: {
            description: "Customer key of the customer from the transaction.",
            type: "string"
          },
          customerId: {
            description: "Customer id of the customer from the transaction.",
            type: "string"
          },
          customerName: {
            description: "Customer name of the customer from the transaction.",
            type: "string"
          },
          ipAddress: {
            description: "Ip address of the customer from the transaction.",
            type: "string"
          },
          secureStatus: {
            description: "Secure status of the transaction.",
            type: "boolean"
          },
          paymentVerificationMethod: {
            type: "integer"
          }
        },
        type: "object",
        title: "TransactionStatusPaymentData",
        "x-readme-ref-name": "TransactionStatusPaymentData"
      },
      TransactionStatusPaymentMethod: {
        properties: {
          id: {
            description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            type: "integer"
          },
          subId: {
            description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
            type: "integer"
          }
        },
        type: "object",
        title: "TransactionStatusPaymentMethod",
        "x-readme-ref-name": "TransactionStatusPaymentMethod"
      },
      Transfer: {
        properties: {
          value: {
            description: "Use a valid MerchantId or orderId.",
            type: "string",
            example: "merchant, transaction"
          },
          type: {
            description: "Use transaction, merchant or alliance to change the beneficiary owner of the transaction.",
            type: "string",
            enum: [
              "merchant",
              "transaction",
              "alliance"
            ]
          },
          data: {
            description: "Option to send multiple values via an array which can be tracked in the stats.",
            type: "string",
            example: [
              "value1",
              "value2"
            ]
          }
        },
        type: "object",
        title: "Transfer",
        "x-readme-ref-name": "Transfer"
      },
      TransferData: {
        properties: {
          name: {
            description: "The name of the variable to be tracked in the transaction.",
            type: "string",
            example: "stat1"
          },
          value: {
            description: "The value of the variable to be tracked in the transaction.",
            type: "string",
            example: "ab8827dfc"
          }
        },
        type: "object",
        title: "TransferData",
        "x-readme-ref-name": "TransferData"
      },
      TurnoverGroup: {
        required: [
          "code",
          "name",
          "default",
          "description",
          "paymentDescription",
          "merchant",
          "bankAccount",
          "createdAt",
          "createdBy",
          "modifiedAt",
          "modifiedBy",
          "deletedAt",
          "deletedBy"
        ],
        properties: {
          code: {
            type: "string",
            example: "CT-1234-4321"
          },
          name: {
            type: "string"
          },
          default: {
            type: "boolean"
          },
          description: {
            type: "string"
          },
          paymentDescription: {
            type: "string",
            nullable: true
          },
          merchant: {
            required: [
              "code",
              "status",
              "name"
            ],
            properties: {
              code: {
                description: "The merchant id of your company starting with M.",
                type: "string",
                example: "M-1234-4321"
              },
              status: {
                description: "Merchant state",
                type: "string",
                example: "ACTIVE"
              },
              name: {
                description: "The name of your merchant.",
                type: "string",
                maxLength: 128,
                minLength: 2,
                example: "CompanyName"
              }
            },
            type: "object"
          },
          bankAccount: {
            required: [
              "code",
              "status",
              "method",
              "iban"
            ],
            properties: {
              code: {
                description: "The merchant bank account id of your company starting with BA.",
                type: "string",
                example: "BA-1234-4321"
              },
              status: {
                description: "The current check status of the clearing account.",
                type: "string",
                example: "NOT_CHECKED"
              },
              method: {
                description: "The method to add the clearing account. NOTE: Only 'iban' is supported for now!",
                type: "string",
                example: "iban"
              },
              iban: {
                required: [
                  "iban",
                  "bic",
                  "owner"
                ],
                properties: {
                  iban: {
                    description: "The International Bank Account Number (IBAN).",
                    type: "string",
                    example: "NL69INGB0123456789"
                  },
                  bic: {
                    description: "Business Identifier Codes (BIC/SWIFT).",
                    type: "string",
                    example: "INGBNL2A"
                  },
                  owner: {
                    description: "The owner of the bank account.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John Doe"
                  }
                },
                type: "object",
                title: "BankAccount",
                "x-readme-ref-name": "BankAccount"
              }
            },
            type: "object",
            nullable: true
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "TurnoverGroup",
        "x-readme-ref-name": "TurnoverGroup"
      },
      Universal: {
        properties: {
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          requiredFields: {
            description: "The required fields of the payment method.",
            type: "array",
            items: {
              properties: {
                fieldName: {
                  type: "string"
                },
                mandatory: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "Universal",
        "x-readme-ref-name": "Universal"
      },
      VisitAddress: {
        allOf: [
          {
            properties: {
              code: {
                type: "string"
              },
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              streetName: {
                description: "The name of the street",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Visitlane"
              },
              streetNumber: {
                description: "The street number",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "13"
              },
              streetNumberExtension: {
                description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "b1"
              },
              zipCode: {
                description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                type: "string",
                maxLength: 16,
                minLength: 1,
                example: "5678CD"
              },
              city: {
                description: "The name of a city",
                type: "string",
                maxLength: 128,
                minLength: 1,
                example: "Amsterdam"
              },
              regionCode: {
                description: "Region code (iso-3166-2)",
                type: "string",
                example: "ZH"
              },
              countryCode: {
                description: "The country code consisting of 2 uppercase letters",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              }
            },
            type: "object",
            title: "Address",
            "x-readme-ref-name": "Address"
          }
        ],
        title: "VisitAddress",
        "x-readme-ref-name": "VisitAddress"
      },
      Voucher: {
        required: [
          "cardNumber"
        ],
        properties: {
          cardNumber: {
            description: "The number on your voucher card.",
            type: "string",
            example: "12345678"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          pinCode: {
            description: "Your pincode.",
            type: "string",
            example: "1234"
          },
          posId: {
            description: "The ID of the point of sale device.",
            type: "string",
            example: "1234567"
          },
          type: {
            description: 'The type of voucher transaction. Can be one of: "POS", "ECOM"',
            type: "string",
            example: "POS"
          }
        },
        type: "object",
        title: "Voucher",
        "x-readme-ref-name": "Voucher"
      },
      WebsiteUrl: {
        properties: {
          code: {
            description: "The code of the website URL.",
            type: "string",
            example: "WU-1234-1234"
          },
          website: {
            description: "The website URL.",
            type: "string",
            example: "https://www.pay.nl"
          }
        },
        type: "object",
        title: "WebsiteUrl",
        "x-readme-ref-name": "WebsiteUrl"
      },
      Whitelabel: {
        properties: {
          primaryColor: {
            description: "Primary color of the whitelabel.",
            type: "string",
            example: "000000"
          },
          secondaryColor: {
            description: "Secondary color of the whitelabel.",
            type: "string",
            example: "000000"
          },
          footerData: {
            description: "Footer data of the whitelabel",
            type: "string",
            example: ""
          }
        },
        type: "object",
        title: "Whitelabel",
        "x-readme-ref-name": "Whitelabel"
      },
      CheckoutOption: {
        allOf: [
          {
            properties: {
              name: {
                description: "Payment method group name",
                type: "string"
              },
              image: {
                description: "Payment method group image",
                type: "string"
              },
              paymentmethods: {
                description: "Payment method group methods",
                type: "array",
                items: {
                  properties: {
                    paymentmethod: {
                      required: [
                        "id"
                      ],
                      properties: {
                        id: {
                          description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                          type: "integer",
                          example: "10"
                        },
                        name: {
                          description: "The name of the payment method.",
                          type: "string",
                          example: "ideal"
                        },
                        description: {
                          type: "string"
                        },
                        translations: {
                          description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                          type: "object",
                          uniqueItems: true,
                          example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                          nullable: true,
                          additionalProperties: {
                            type: "object",
                            additionalProperties: {
                              type: "string"
                            }
                          }
                        },
                        image: {
                          description: "The image of the payment method.",
                          type: "string",
                          example: "https://admin.pay.nl/images/payment_profiles/10.gif"
                        },
                        options: {
                          type: "array",
                          items: {
                            properties: {
                              id: {
                                description: "The ID of the issuer.",
                                type: "integer",
                                example: 2
                              },
                              name: {
                                description: "The name of the issuer.",
                                type: "string",
                                example: "Rabobank"
                              },
                              image: {
                                description: "The image of the issuer.",
                                type: "string",
                                example: "/issuers/4.svg"
                              }
                            },
                            type: "object"
                          }
                        },
                        settings: {
                          type: "array",
                          items: {
                            properties: {
                              key: {
                                description: "The name of the setting.",
                                type: "string"
                              },
                              value: {
                                description: "The value of the setting.",
                                type: "string"
                              }
                            },
                            type: "object"
                          }
                        },
                        minAmount: {
                          description: "The minimum amount in cents in order to use this payment_method.",
                          type: "integer",
                          example: 100
                        },
                        maxAmount: {
                          description: "The maximum amount in cents which is allowed for this payment_method.",
                          type: "integer",
                          example: 1e5
                        }
                      },
                      type: "object",
                      title: "PaymentMethodConfig",
                      "x-readme-ref-name": "PaymentMethodConfig"
                    }
                  },
                  type: "object"
                }
              },
              translations: {
                description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                type: "object",
                uniqueItems: true,
                example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                nullable: true,
                additionalProperties: {
                  type: "object",
                  additionalProperties: {
                    type: "string"
                  }
                }
              }
            },
            type: "object",
            title: "PaymentMethodGroup",
            "x-readme-ref-name": "PaymentMethodGroup"
          },
          {
            properties: {
              tag: {
                type: "string"
              },
              requiredFields: {
                description: "The required fields of the payment method.",
                type: "array",
                items: {
                  properties: {
                    fieldName: {
                      type: "string"
                    },
                    mandatory: {
                      type: "string"
                    }
                  },
                  type: "object"
                }
              }
            },
            type: "object"
          }
        ],
        title: "CheckoutOption",
        "x-readme-ref-name": "CheckoutOption"
      },
      Error: {
        properties: {
          type: {
            type: "string"
          },
          title: {
            type: "string"
          },
          detail: {
            type: "string"
          },
          violations: {
            type: "array",
            items: {
              properties: {
                propertyPath: {
                  type: "string"
                },
                message: {
                  type: "string"
                },
                code: {
                  type: "string"
                }
              },
              type: "object",
              title: "Violation",
              "x-readme-ref-name": "Violation"
            }
          }
        },
        type: "object",
        title: "Error",
        "x-readme-ref-name": "Error"
      },
      PaymentMethodsFull: {
        properties: {
          id: {
            description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            type: "integer"
          },
          name: {
            description: "The name of the payment method.",
            type: "string"
          },
          description: {
            description: "The description of the payment method.",
            type: "string"
          },
          sequence: {
            description: "The sequence of the payment method.",
            type: "integer"
          },
          public: {
            description: "Public status of the payment method.",
            type: "boolean"
          },
          status: {
            description: "Active status of payment method.",
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          image: {
            description: "The image of the payment method.",
            type: "string"
          },
          paymentProfiles: {
            description: "The payment profiles of the payment method.",
            type: "array",
            items: {
              properties: {
                id: {
                  description: "The payment profile identifier.",
                  type: "integer"
                },
                name: {
                  description: "The name of the payment profile.",
                  type: "string"
                },
                publicName: {
                  description: "Public name of the payment method",
                  type: "string"
                },
                public: {
                  description: "Check if payment method is public",
                  type: "boolean"
                },
                selectable: {
                  description: "check if payment method is selectable",
                  type: "boolean"
                },
                translations: {
                  description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                  type: "object",
                  uniqueItems: true,
                  example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                  nullable: true,
                  additionalProperties: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                image: {
                  description: "The image of the payment method.",
                  type: "string"
                },
                issuers: {
                  description: "Issuers linked to payment method",
                  type: "array",
                  items: {
                    properties: {
                      id: {
                        type: "string"
                      },
                      code: {
                        type: "string"
                      },
                      name: {
                        type: "string"
                      }
                    },
                    type: "object"
                  }
                },
                categories: {
                  type: "array",
                  items: {
                    properties: {
                      code: {
                        description: "The category (code) identifier",
                        type: "string",
                        example: "CY-1234-4321"
                      },
                      name: {
                        description: "The category name.",
                        type: "string",
                        example: "Digitale diensten gambling (kansspelen)"
                      }
                    },
                    type: "object"
                  }
                },
                paymentMethodGroup: {
                  description: "Payment method group where payment method is assigned to",
                  type: "string"
                },
                paymentType: {
                  description: "Payment type",
                  type: "string"
                },
                createdAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                },
                modifiedAt: {
                  description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: true
                },
                deletedAt: {
                  description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
                  type: "string",
                  format: "date-time",
                  readOnly: true,
                  example: "2016-06-04T08:15:00+01:00",
                  nullable: false
                }
              },
              type: "object",
              title: "PaymentProfile",
              "x-readme-ref-name": "PaymentProfile"
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "PaymentMethodsFull",
        "x-readme-ref-name": "PaymentMethodsFull"
      },
      PaymentMethodGroups: {
        properties: {
          id: {
            description: "payment method group id",
            type: "integer"
          },
          name: {
            description: "Payment method group name",
            type: "string"
          },
          publicName: {
            description: "Payment method group public name",
            type: "string"
          },
          sequence: {
            description: "Payment method group sequence number",
            type: "integer"
          },
          image: {
            description: "Payment method group image",
            type: "string"
          },
          requiredFields: {
            description: "The required fields of the payment method.",
            type: "array",
            items: {
              properties: {
                fieldName: {
                  type: "string"
                },
                mandatory: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          }
        },
        type: "object",
        title: "PaymentMethodGroups",
        "x-readme-ref-name": "PaymentMethodGroups"
      },
      ServiceConfig: {
        properties: {
          code: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string",
            example: "SL-####-####"
          },
          secret: {
            description: "The unique reference for this service.",
            type: "string",
            example: "bade123abf124124abefa311b"
          },
          testMode: {
            description: "Indicates if the service is in testmode or not, possible values: false or true",
            type: "boolean"
          },
          name: {
            description: "The name of your service.",
            type: "string",
            example: "My first service!"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          status: {
            description: "The state of the service",
            type: "string"
          },
          merchant: {
            items: {
              properties: {
                code: {
                  description: "The merchant id of your company starting with M.",
                  type: "string",
                  example: "M-####-####"
                },
                status: {
                  description: "Merchant state",
                  type: "string"
                },
                name: {
                  description: "The name of your merchant.",
                  type: "string",
                  maxLength: 128,
                  minLength: 2,
                  example: "CompanyName"
                }
              },
              type: "object",
              title: "MerchantConfig",
              "x-readme-ref-name": "MerchantConfig"
            },
            nullable: true,
            oneOf: [
              {
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-####-####"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  }
                },
                type: "object",
                title: "MerchantConfig",
                "x-readme-ref-name": "MerchantConfig"
              }
            ]
          },
          category: {
            items: {
              properties: {
                code: {
                  description: "Category identifier.",
                  type: "string",
                  example: "CY-1234-4321"
                },
                name: {
                  description: "The category name.",
                  type: "string"
                }
              },
              type: "object",
              title: "ServiceConfigCategory",
              "x-readme-ref-name": "ServiceConfigCategory"
            },
            nullable: true,
            oneOf: [
              {
                properties: {
                  code: {
                    description: "Category identifier.",
                    type: "string",
                    example: "CY-1234-4321"
                  },
                  name: {
                    description: "The category name.",
                    type: "string"
                  }
                },
                type: "object",
                title: "ServiceConfigCategory",
                "x-readme-ref-name": "ServiceConfigCategory"
              }
            ]
          },
          mcc: {
            type: "integer",
            nullable: true
          },
          turnOverGroup: {
            items: {
              properties: {
                code: {
                  description: "Id of the turnover group",
                  type: "string",
                  example: "TM-####-####"
                },
                name: {
                  description: "Name of the turn over group",
                  type: "string"
                }
              },
              type: "object",
              title: "TurnOverGroup",
              "x-readme-ref-name": "TurnOverGroup"
            },
            nullable: true,
            oneOf: [
              {
                properties: {
                  code: {
                    description: "Id of the turnover group",
                    type: "string",
                    example: "TM-####-####"
                  },
                  name: {
                    description: "Name of the turn over group",
                    type: "string"
                  }
                },
                type: "object",
                title: "TurnOverGroup",
                "x-readme-ref-name": "TurnOverGroup"
              }
            ]
          },
          layout: {
            items: {
              properties: {
                code: {
                  description: "Id of layout",
                  type: "string",
                  example: "LY-####-####"
                },
                name: {
                  description: "Name of the layout",
                  type: "string",
                  example: "My layout"
                },
                ccsUrl: {
                  description: "CSS url to the layout css",
                  type: "string"
                },
                icon: {
                  description: "Image in base64 encoding",
                  type: "string"
                },
                supportingColor: {
                  description: "Supporting hex color code",
                  type: "string",
                  example: "FFFFFF"
                },
                headerTextColor: {
                  description: "Header hex color code",
                  type: "string",
                  example: "FFFFFF"
                },
                buttonColor: {
                  description: "Button hex color code",
                  type: "string",
                  example: "FFFFFF"
                },
                buttonTextColor: {
                  description: "Button text hex color code",
                  type: "string",
                  example: "FFFFFF"
                }
              },
              type: "object",
              title: "Layout",
              "x-readme-ref-name": "Layout"
            },
            nullable: true,
            oneOf: [
              {
                properties: {
                  code: {
                    description: "Id of layout",
                    type: "string",
                    example: "LY-####-####"
                  },
                  name: {
                    description: "Name of the layout",
                    type: "string",
                    example: "My layout"
                  },
                  ccsUrl: {
                    description: "CSS url to the layout css",
                    type: "string"
                  },
                  icon: {
                    description: "Image in base64 encoding",
                    type: "string"
                  },
                  supportingColor: {
                    description: "Supporting hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  headerTextColor: {
                    description: "Header hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  buttonColor: {
                    description: "Button hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  buttonTextColor: {
                    description: "Button text hex color code",
                    type: "string",
                    example: "FFFFFF"
                  }
                },
                type: "object",
                title: "Layout",
                "x-readme-ref-name": "Layout"
              }
            ]
          },
          tradeName: {
            items: {
              properties: {
                code: {
                  description: "An identifier for this TradeName",
                  type: "string"
                },
                name: {
                  description: "A registered TradeName",
                  type: "string"
                }
              },
              type: "object",
              title: "TradeName",
              "x-readme-ref-name": "TradeName"
            },
            nullable: true,
            oneOf: [
              {
                properties: {
                  code: {
                    description: "An identifier for this TradeName",
                    type: "string"
                  },
                  name: {
                    description: "A registered TradeName",
                    type: "string"
                  }
                },
                type: "object",
                title: "TradeName",
                "x-readme-ref-name": "TradeName"
              }
            ]
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          deletedAt: {
            description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          deletedBy: {
            description: "The reference to an account or token whom deleted the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          },
          checkoutOptions: {
            type: "array",
            items: {
              properties: {
                tag: {
                  description: "The tag of the checkout option.",
                  type: "string",
                  example: "PM_10"
                },
                name: {
                  description: "The name of the checkout option.",
                  type: "string",
                  example: "iDEAL"
                },
                translations: {
                  description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                  type: "object",
                  uniqueItems: true,
                  example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                  nullable: true,
                  additionalProperties: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                image: {
                  description: "The image of the checkout option.",
                  type: "string",
                  example: "/payment_methods/1.svg"
                },
                paymentMethods: {
                  type: "array",
                  items: {
                    required: [
                      "id"
                    ],
                    properties: {
                      id: {
                        description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                        type: "integer",
                        example: "10"
                      },
                      name: {
                        description: "The name of the payment method.",
                        type: "string",
                        example: "ideal"
                      },
                      description: {
                        type: "string"
                      },
                      translations: {
                        description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
                        type: "object",
                        uniqueItems: true,
                        example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
                        nullable: true,
                        additionalProperties: {
                          type: "object",
                          additionalProperties: {
                            type: "string"
                          }
                        }
                      },
                      image: {
                        description: "The image of the payment method.",
                        type: "string",
                        example: "https://admin.pay.nl/images/payment_profiles/10.gif"
                      },
                      options: {
                        type: "array",
                        items: {
                          properties: {
                            id: {
                              description: "The ID of the issuer.",
                              type: "integer",
                              example: 2
                            },
                            name: {
                              description: "The name of the issuer.",
                              type: "string",
                              example: "Rabobank"
                            },
                            image: {
                              description: "The image of the issuer.",
                              type: "string",
                              example: "/issuers/4.svg"
                            }
                          },
                          type: "object"
                        }
                      },
                      settings: {
                        type: "array",
                        items: {
                          properties: {
                            key: {
                              description: "The name of the setting.",
                              type: "string"
                            },
                            value: {
                              description: "The value of the setting.",
                              type: "string"
                            }
                          },
                          type: "object"
                        }
                      },
                      minAmount: {
                        description: "The minimum amount in cents in order to use this payment_method.",
                        type: "integer",
                        example: 100
                      },
                      maxAmount: {
                        description: "The maximum amount in cents which is allowed for this payment_method.",
                        type: "integer",
                        example: 1e5
                      }
                    },
                    type: "object",
                    title: "PaymentMethodConfig",
                    "x-readme-ref-name": "PaymentMethodConfig"
                  }
                }
              },
              type: "object"
            }
          },
          checkoutSequence: {
            type: "array",
            items: {
              type: "object"
            }
          },
          checkoutTexts: {
            type: "array",
            items: {
              type: "object"
            }
          },
          encryptionKeys: {
            type: "array",
            items: {
              type: "object"
            }
          },
          tguList: {
            type: "array",
            items: {
              properties: {
                ID: {
                  type: "integer"
                },
                share: {
                  type: "integer"
                },
                domain: {
                  type: "string"
                },
                status: {
                  type: "string"
                }
              },
              type: "object"
            }
          }
        },
        type: "object",
        title: "ServiceConfig",
        "x-readme-ref-name": "ServiceConfig"
      },
      MerchantConfig: {
        properties: {
          code: {
            description: "The merchant id of your company starting with M.",
            type: "string",
            example: "M-####-####"
          },
          status: {
            description: "Merchant state",
            type: "string"
          },
          name: {
            description: "The name of your merchant.",
            type: "string",
            maxLength: 128,
            minLength: 2,
            example: "CompanyName"
          }
        },
        type: "object",
        title: "MerchantConfig",
        "x-readme-ref-name": "MerchantConfig"
      },
      PaymentMethodConfig: {
        required: [
          "id"
        ],
        properties: {
          id: {
            description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
            type: "integer",
            example: "10"
          },
          name: {
            description: "The name of the payment method.",
            type: "string",
            example: "ideal"
          },
          description: {
            type: "string"
          },
          translations: {
            description: "Object containing all the translations with the property name in which the corresponds with a property on the object itself.",
            type: "object",
            uniqueItems: true,
            example: '\n    "translations": {\n      "name": {\n        ...\n      },\n      "description": {\n        ...\n      }\n    }\n',
            nullable: true,
            additionalProperties: {
              type: "object",
              additionalProperties: {
                type: "string"
              }
            }
          },
          image: {
            description: "The image of the payment method.",
            type: "string",
            example: "https://admin.pay.nl/images/payment_profiles/10.gif"
          },
          options: {
            type: "array",
            items: {
              properties: {
                id: {
                  description: "The ID of the issuer.",
                  type: "integer",
                  example: 2
                },
                name: {
                  description: "The name of the issuer.",
                  type: "string",
                  example: "Rabobank"
                },
                image: {
                  description: "The image of the issuer.",
                  type: "string",
                  example: "/issuers/4.svg"
                }
              },
              type: "object"
            }
          },
          settings: {
            type: "array",
            items: {
              properties: {
                key: {
                  description: "The name of the setting.",
                  type: "string"
                },
                value: {
                  description: "The value of the setting.",
                  type: "string"
                }
              },
              type: "object"
            }
          },
          minAmount: {
            description: "The minimum amount in cents in order to use this payment_method.",
            type: "integer",
            example: 100
          },
          maxAmount: {
            description: "The maximum amount in cents which is allowed for this payment_method.",
            type: "integer",
            example: 1e5
          }
        },
        type: "object",
        title: "PaymentMethodConfig",
        "x-readme-ref-name": "PaymentMethodConfig"
      },
      Transaction: {
        required: [
          "serviceId",
          "amount",
          "returnUrl"
        ],
        properties: {
          id: {
            description: "The Id of the transaction.",
            type: "string",
            example: "EX-1234-1234-1234"
          },
          serviceId: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string",
            example: "SL-####-####"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "Example description."
          },
          reference: {
            description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
            type: "string",
            maxLength: 64,
            minLength: 1,
            pattern: "^[a-zA-Z0-9]{1,64}$",
            example: "12345XXY0123"
          },
          manualTransferCode: {
            description: "Payment reference used to identify manual bank transfers",
            type: "string",
            example: "0000 0000 0000 0000"
          },
          orderId: {
            description: "The orderId of the transaction.",
            type: "string",
            example: "0000000000X00000"
          },
          ipAddress: {
            description: "An ip address",
            type: "string",
            example: "213.126.82.230"
          },
          exchangeUrl: {
            description: "The URL where we exchange the status of a transaction.",
            type: "string",
            format: "uri",
            example: "https://demo.pay.nl/exchange.php"
          },
          returnUrl: {
            description: "The URL where the payer has to be send to after the payment.",
            type: "string",
            format: "uri",
            example: "https://demo.pay.nl/complete/"
          },
          paymentUrl: {
            description: "The payment URL for this transaction",
            type: "string",
            format: "uri"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          expire: {
            description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            example: "2016-06-04T08:15:00+01:00"
          },
          created: {
            description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00"
          },
          modified: {
            description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00"
          },
          amountConverted: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountPaid: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          amountRefunded: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          paymentMethod: {
            required: [
              "id"
            ],
            properties: {
              id: {
                description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                type: "integer",
                example: "10"
              },
              subId: {
                description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                type: "string",
                example: "10"
              },
              name: {
                description: "The name of the payment method.",
                type: "string",
                example: "ideal"
              }
            },
            type: "object",
            title: "PaymentMethod",
            "x-readme-ref-name": "PaymentMethod"
          },
          status: {
            properties: {
              code: {
                description: "The status code.",
                type: "integer"
              },
              action: {
                description: "The state in which the transaction resides",
                type: "string",
                example: "PAID"
              },
              phase: {
                description: "The current phase in the transaction state",
                type: "string",
                example: "APPROVED"
              }
            },
            type: "object",
            title: "Status",
            "x-readme-ref-name": "Status"
          },
          integration: {
            properties: {
              testMode: {
                description: "Indicates if the service is in testmode or not, possible values: false or true",
                type: "boolean"
              }
            },
            type: "object",
            title: "Integration",
            "x-readme-ref-name": "Integration"
          },
          customer: {
            properties: {
              firstName: {
                description: "The forename (also known as a given name, Christian name or a first name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "John"
              },
              lastName: {
                description: "The surname (also known as a family name or a last name).",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Doe"
              },
              type: {
                description: "Either B for business or C for consumer.",
                type: "string",
                enum: [
                  "B",
                  "C"
                ]
              },
              ip: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              birthDate: {
                description: "Date of birth as defined in ISO-8601.",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              gender: {
                description: "The subject's gender. Choose either M for male or F for female.",
                type: "string",
                example: "M"
              },
              phone: {
                description: "The subject's phone number. Optionally prepended with a + and country code",
                type: "string",
                example: "0031612345678"
              },
              email: {
                description: "An email address.",
                type: "string",
                format: "email",
                example: "sandbox@pay.nl"
              },
              language: {
                description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                type: "string",
                enum: [
                  "NL",
                  "EN",
                  "DE",
                  "FR",
                  "IT",
                  "ES"
                ],
                example: "NL"
              },
              trust: {
                description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                type: "integer",
                maximum: 10,
                minimum: -10,
                example: -5
              },
              reference: {
                description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "NL87654321"
              },
              bankAccount: {
                required: [
                  "iban",
                  "bic",
                  "owner"
                ],
                properties: {
                  iban: {
                    description: "The International Bank Account Number (IBAN).",
                    type: "string",
                    example: "NL69INGB0123456789"
                  },
                  bic: {
                    description: "Business Identifier Codes (BIC/SWIFT).",
                    type: "string",
                    example: "INGBNL2A"
                  },
                  owner: {
                    description: "The owner of the bank account.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John Doe"
                  }
                },
                type: "object",
                title: "BankAccount",
                "x-readme-ref-name": "BankAccount"
              },
              company: {
                properties: {
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    example: "CompanyName"
                  },
                  coc: {
                    description: "Your Chamber of commerce registration number. This format differs per country.",
                    type: "string",
                    example: "12345678"
                  },
                  vat: {
                    description: "Value added tax identification number (VAT identification number).",
                    type: "string",
                    example: "NL807960147B01"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    example: "NL"
                  }
                },
                type: "object",
                title: "Company",
                "x-readme-ref-name": "Company"
              }
            },
            type: "object",
            title: "Customer",
            "x-readme-ref-name": "Customer"
          },
          order: {
            properties: {
              countryCode: {
                description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                type: "string",
                maxLength: 2,
                minLength: 2,
                example: "NL"
              },
              deliveryDate: {
                description: "The date of delivery.",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              invoiceDate: {
                description: "The date of the invoice",
                type: "string",
                format: "date",
                example: "1999-02-15"
              },
              deliveryAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              invoiceAddress: {
                properties: {
                  code: {
                    type: "string"
                  },
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  streetName: {
                    description: "The name of the street",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Visitlane"
                  },
                  streetNumber: {
                    description: "The street number",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "13"
                  },
                  streetNumberExtension: {
                    description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                    type: "string",
                    maxLength: 32,
                    minLength: 1,
                    example: "b1"
                  },
                  zipCode: {
                    description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                    type: "string",
                    maxLength: 16,
                    minLength: 1,
                    example: "5678CD"
                  },
                  city: {
                    description: "The name of a city",
                    type: "string",
                    maxLength: 128,
                    minLength: 1,
                    example: "Amsterdam"
                  },
                  regionCode: {
                    description: "Region code (iso-3166-2)",
                    type: "string",
                    example: "ZH"
                  },
                  countryCode: {
                    description: "The country code consisting of 2 uppercase letters",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  }
                },
                type: "object",
                title: "Address",
                "x-readme-ref-name": "Address"
              },
              products: {
                type: "array",
                items: {
                  properties: {
                    id: {
                      description: "The product identifier.",
                      type: "string",
                      example: "TEST_01"
                    },
                    description: {
                      description: "The description of the product.",
                      type: "string",
                      example: "Some product description"
                    },
                    type: {
                      description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                      type: "string",
                      enum: [
                        "shipping",
                        "article",
                        "discount",
                        "rounding",
                        "handling",
                        "payment",
                        "credit",
                        "giftcard",
                        "emoney",
                        "crypto"
                      ]
                    },
                    price: {
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        }
                      },
                      type: "object"
                    },
                    quantity: {
                      description: "The quantity.",
                      type: "number",
                      format: "float"
                    },
                    vatCode: {
                      description: "The VAT code to use.",
                      type: "string",
                      enum: [
                        "N",
                        "H",
                        "L"
                      ]
                    }
                  },
                  type: "object",
                  title: "Product",
                  "x-readme-ref-name": "Product"
                }
              }
            },
            type: "object",
            title: "Order",
            "x-readme-ref-name": "Order"
          },
          stats: {
            properties: {
              info: {
                description: "The used info code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Campagne 99"
              },
              tool: {
                description: "The used tool code which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Google"
              },
              object: {
                description: "The object which can be tracked in stats.",
                type: "string",
                maxLength: 64,
                minLength: 1
              },
              extra1: {
                description: "The first free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Customer 6985615"
              },
              extra2: {
                description: "The second free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Invoice 21.3695"
              },
              extra3: {
                description: "The third free value which can be tracked in the stats.",
                type: "string",
                maxLength: 64,
                minLength: 1,
                example: "Shop Amsterdam"
              },
              domainId: {
                description: "The ID of the duplicate content URL",
                type: "string",
                example: "WU-####-####"
              }
            },
            type: "object",
            title: "Stats",
            "x-readme-ref-name": "Stats"
          },
          type: {
            description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM",
            type: "string",
            enum: [
              "POS",
              "ECOM",
              "CIT",
              "MIT",
              "MOTO"
            ]
          },
          transferData: {
            type: "array",
            items: {
              properties: {
                name: {
                  description: "The name of the variable to be tracked in the transaction.",
                  type: "string",
                  example: "stat1"
                },
                value: {
                  description: "The value of the variable to be tracked in the transaction.",
                  type: "string",
                  example: "ab8827dfc"
                }
              },
              type: "object",
              title: "TransferData",
              "x-readme-ref-name": "TransferData"
            },
            xml: {
              name: "transferData",
              wrapped: true
            }
          }
        },
        type: "object",
        xml: {
          name: "transaction"
        },
        title: "Transaction",
        "x-readme-ref-name": "Transaction"
      },
      TransactionLoad: {
        allOf: [
          {
            required: [
              "serviceId",
              "amount",
              "returnUrl"
            ],
            properties: {
              id: {
                description: "The Id of the transaction.",
                type: "string",
                example: "EX-1234-1234-1234"
              },
              serviceId: {
                description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                type: "string",
                example: "SL-####-####"
              },
              description: {
                description: "Is shown on the statement of the payer.",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "Example description."
              },
              reference: {
                description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "12345XXY0123"
              },
              manualTransferCode: {
                description: "Payment reference used to identify manual bank transfers",
                type: "string",
                example: "0000 0000 0000 0000"
              },
              orderId: {
                description: "The orderId of the transaction.",
                type: "string",
                example: "0000000000X00000"
              },
              ipAddress: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              exchangeUrl: {
                description: "The URL where we exchange the status of a transaction.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/exchange.php"
              },
              returnUrl: {
                description: "The URL where the payer has to be send to after the payment.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/complete/"
              },
              paymentUrl: {
                description: "The payment URL for this transaction",
                type: "string",
                format: "uri"
              },
              amount: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              expire: {
                description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00"
              },
              created: {
                description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              modified: {
                description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              amountConverted: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountPaid: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountRefunded: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              paymentMethod: {
                required: [
                  "id"
                ],
                properties: {
                  id: {
                    description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                    type: "integer",
                    example: "10"
                  },
                  subId: {
                    description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                    type: "string",
                    example: "10"
                  },
                  name: {
                    description: "The name of the payment method.",
                    type: "string",
                    example: "ideal"
                  }
                },
                type: "object",
                title: "PaymentMethod",
                "x-readme-ref-name": "PaymentMethod"
              },
              status: {
                properties: {
                  code: {
                    description: "The status code.",
                    type: "integer"
                  },
                  action: {
                    description: "The state in which the transaction resides",
                    type: "string",
                    example: "PAID"
                  },
                  phase: {
                    description: "The current phase in the transaction state",
                    type: "string",
                    example: "APPROVED"
                  }
                },
                type: "object",
                title: "Status",
                "x-readme-ref-name": "Status"
              },
              integration: {
                properties: {
                  testMode: {
                    description: "Indicates if the service is in testmode or not, possible values: false or true",
                    type: "boolean"
                  }
                },
                type: "object",
                title: "Integration",
                "x-readme-ref-name": "Integration"
              },
              customer: {
                properties: {
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  type: {
                    description: "Either B for business or C for consumer.",
                    type: "string",
                    enum: [
                      "B",
                      "C"
                    ]
                  },
                  ip: {
                    description: "An ip address",
                    type: "string",
                    example: "213.126.82.230"
                  },
                  birthDate: {
                    description: "Date of birth as defined in ISO-8601.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  gender: {
                    description: "The subject's gender. Choose either M for male or F for female.",
                    type: "string",
                    example: "M"
                  },
                  phone: {
                    description: "The subject's phone number. Optionally prepended with a + and country code",
                    type: "string",
                    example: "0031612345678"
                  },
                  email: {
                    description: "An email address.",
                    type: "string",
                    format: "email",
                    example: "sandbox@pay.nl"
                  },
                  language: {
                    description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                    type: "string",
                    enum: [
                      "NL",
                      "EN",
                      "DE",
                      "FR",
                      "IT",
                      "ES"
                    ],
                    example: "NL"
                  },
                  trust: {
                    description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                    type: "integer",
                    maximum: 10,
                    minimum: -10,
                    example: -5
                  },
                  reference: {
                    description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    pattern: "^[a-zA-Z0-9]{1,64}$",
                    example: "NL87654321"
                  },
                  bankAccount: {
                    required: [
                      "iban",
                      "bic",
                      "owner"
                    ],
                    properties: {
                      iban: {
                        description: "The International Bank Account Number (IBAN).",
                        type: "string",
                        example: "NL69INGB0123456789"
                      },
                      bic: {
                        description: "Business Identifier Codes (BIC/SWIFT).",
                        type: "string",
                        example: "INGBNL2A"
                      },
                      owner: {
                        description: "The owner of the bank account.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John Doe"
                      }
                    },
                    type: "object",
                    title: "BankAccount",
                    "x-readme-ref-name": "BankAccount"
                  },
                  company: {
                    properties: {
                      name: {
                        description: "The name of your merchant.",
                        type: "string",
                        example: "CompanyName"
                      },
                      coc: {
                        description: "Your Chamber of commerce registration number. This format differs per country.",
                        type: "string",
                        example: "12345678"
                      },
                      vat: {
                        description: "Value added tax identification number (VAT identification number).",
                        type: "string",
                        example: "NL807960147B01"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Company",
                    "x-readme-ref-name": "Company"
                  }
                },
                type: "object",
                title: "Customer",
                "x-readme-ref-name": "Customer"
              },
              order: {
                properties: {
                  countryCode: {
                    description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  },
                  deliveryDate: {
                    description: "The date of delivery.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  invoiceDate: {
                    description: "The date of the invoice",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  deliveryAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  invoiceAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  products: {
                    type: "array",
                    items: {
                      properties: {
                        id: {
                          description: "The product identifier.",
                          type: "string",
                          example: "TEST_01"
                        },
                        description: {
                          description: "The description of the product.",
                          type: "string",
                          example: "Some product description"
                        },
                        type: {
                          description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                          type: "string",
                          enum: [
                            "shipping",
                            "article",
                            "discount",
                            "rounding",
                            "handling",
                            "payment",
                            "credit",
                            "giftcard",
                            "emoney",
                            "crypto"
                          ]
                        },
                        price: {
                          properties: {
                            value: {
                              description: "The amount in cents.",
                              type: "integer",
                              minimum: 1,
                              example: 10
                            }
                          },
                          type: "object"
                        },
                        quantity: {
                          description: "The quantity.",
                          type: "number",
                          format: "float"
                        },
                        vatCode: {
                          description: "The VAT code to use.",
                          type: "string",
                          enum: [
                            "N",
                            "H",
                            "L"
                          ]
                        }
                      },
                      type: "object",
                      title: "Product",
                      "x-readme-ref-name": "Product"
                    }
                  }
                },
                type: "object",
                title: "Order",
                "x-readme-ref-name": "Order"
              },
              stats: {
                properties: {
                  info: {
                    description: "The used info code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Campagne 99"
                  },
                  tool: {
                    description: "The used tool code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Google"
                  },
                  object: {
                    description: "The object which can be tracked in stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1
                  },
                  extra1: {
                    description: "The first free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Customer 6985615"
                  },
                  extra2: {
                    description: "The second free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Invoice 21.3695"
                  },
                  extra3: {
                    description: "The third free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Shop Amsterdam"
                  },
                  domainId: {
                    description: "The ID of the duplicate content URL",
                    type: "string",
                    example: "WU-####-####"
                  }
                },
                type: "object",
                title: "Stats",
                "x-readme-ref-name": "Stats"
              },
              type: {
                description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM",
                type: "string",
                enum: [
                  "POS",
                  "ECOM",
                  "CIT",
                  "MIT",
                  "MOTO"
                ]
              },
              transferData: {
                type: "array",
                items: {
                  properties: {
                    name: {
                      description: "The name of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "stat1"
                    },
                    value: {
                      description: "The value of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "ab8827dfc"
                    }
                  },
                  type: "object",
                  title: "TransferData",
                  "x-readme-ref-name": "TransferData"
                },
                xml: {
                  name: "transferData",
                  wrapped: true
                }
              }
            },
            type: "object",
            xml: {
              name: "transaction"
            },
            title: "Transaction",
            "x-readme-ref-name": "Transaction"
          },
          {
            properties: {
              serviceCode: {
                description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                type: "string"
              },
              merchant: {
                required: [
                  "code",
                  "name",
                  "status"
                ],
                properties: {
                  code: {
                    description: "The merchant id of your company starting with M.",
                    type: "string",
                    example: "M-1234-4321"
                  },
                  name: {
                    description: "The name of your merchant.",
                    type: "string",
                    maxLength: 128,
                    minLength: 2,
                    example: "CompanyName"
                  },
                  status: {
                    description: "Merchant state",
                    type: "string",
                    example: "ACTIVE"
                  }
                },
                type: "object",
                title: "MerchantMinimal",
                "x-readme-ref-name": "MerchantMinimal"
              },
              tradeName: {
                properties: {
                  code: {
                    description: "An identifier for this TradeName",
                    type: "string"
                  },
                  name: {
                    description: "A registered TradeName",
                    type: "string"
                  }
                },
                type: "object",
                title: "TradeName",
                "x-readme-ref-name": "TradeName"
              },
              layout: {
                properties: {
                  code: {
                    description: "Id of layout",
                    type: "string",
                    example: "LY-####-####"
                  },
                  name: {
                    description: "Name of the layout",
                    type: "string",
                    example: "My layout"
                  },
                  ccsUrl: {
                    description: "CSS url to the layout css",
                    type: "string"
                  },
                  icon: {
                    description: "Image in base64 encoding",
                    type: "string"
                  },
                  supportingColor: {
                    description: "Supporting hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  headerTextColor: {
                    description: "Header hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  buttonColor: {
                    description: "Button hex color code",
                    type: "string",
                    example: "FFFFFF"
                  },
                  buttonTextColor: {
                    description: "Button text hex color code",
                    type: "string",
                    example: "FFFFFF"
                  }
                },
                type: "object",
                title: "Layout",
                "x-readme-ref-name": "Layout"
              },
              expiredAt: {
                description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                nullable: true
              },
              deletedAt: {
                description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00",
                nullable: true
              },
              deletedBy: {
                description: "The reference to an account or token whom deleted the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: true
              }
            },
            type: "object",
            xml: {
              name: "transactionLoad"
            }
          }
        ],
        title: "TransactionLoad",
        "x-readme-ref-name": "TransactionLoad"
      },
      TransactionMinimal: {
        properties: {
          id: {
            description: "The Id of the transaction.",
            type: "string",
            example: "EX-1234-1234-1234"
          },
          serviceId: {
            description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
            type: "string",
            example: "SL-####-####"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            type: "string",
            maxLength: 32,
            minLength: 1,
            example: "Example description."
          },
          reference: {
            description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
            type: "string",
            maxLength: 64,
            minLength: 1,
            pattern: "^[a-zA-Z0-9]{1,64}$",
            example: "12345XXY0123"
          },
          manualTransferCode: {
            description: "Payment reference used to identify manual bank transfers",
            type: "string",
            example: "0000 0000 0000 0000"
          },
          orderId: {
            description: "The orderId of the transaction.",
            type: "string",
            example: "0000000000X00000"
          },
          paymentUrl: {
            description: "The payment URL for this transaction",
            type: "string",
            format: "uri"
          },
          statusUrl: {
            description: "Api url to get status details of the transaction.",
            type: "string"
          },
          orderStatusUrl: {
            description: "Api url to get status details of a pin transaction.",
            type: "string",
            example: "https://domain.com/api/status"
          },
          amount: {
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents.",
                type: "integer",
                minimum: 1,
                example: 10
              },
              currency: {
                description: "The currency in ISO-4217 format.",
                type: "string",
                example: "EUR"
              }
            },
            type: "object",
            title: "Amount",
            "x-readme-ref-name": "Amount"
          },
          uuid: {
            description: "The uuid of the QR code.",
            type: "string"
          },
          hash: {
            description: "Api url to get status details of the transaction.",
            type: "string"
          },
          cancelUrl: {
            description: "Api url to get status details of the transaction.",
            type: "string"
          },
          expire: {
            description: "Expire date in timestamp notation.",
            type: "integer",
            example: "2016-06-04T08:15:00+01:00",
            deprecated: true
          },
          expiresAt: {
            description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00"
          },
          created: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false,
            deprecated: true
          },
          createdAt: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false
          },
          createdBy: {
            description: "The reference to an account or token whom created the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: false
          },
          modified: {
            description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: false,
            deprecated: true
          },
          modifiedAt: {
            description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
            type: "string",
            format: "date-time",
            readOnly: true,
            example: "2016-06-04T08:15:00+01:00",
            nullable: true
          },
          modifiedBy: {
            description: "The reference to an account or token whom modified the entity",
            type: "string",
            pattern: "^A(T)?(-\\d{4}){2}$",
            readOnly: true,
            example: "A-1234-4321",
            nullable: true
          }
        },
        type: "object",
        title: "TransactionMinimal",
        "x-readme-ref-name": "TransactionMinimal"
      },
      TransactionRefund: {
        allOf: [
          {
            required: [
              "serviceId",
              "amount",
              "returnUrl"
            ],
            properties: {
              id: {
                description: "The Id of the transaction.",
                type: "string",
                example: "EX-1234-1234-1234"
              },
              serviceId: {
                description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs",
                type: "string",
                example: "SL-####-####"
              },
              description: {
                description: "Is shown on the statement of the payer.",
                type: "string",
                maxLength: 32,
                minLength: 1,
                example: "Example description."
              },
              reference: {
                description: "The merchant identification of this transaction. This field only allows alphanumeric characters",
                type: "string",
                maxLength: 64,
                minLength: 1,
                pattern: "^[a-zA-Z0-9]{1,64}$",
                example: "12345XXY0123"
              },
              manualTransferCode: {
                description: "Payment reference used to identify manual bank transfers",
                type: "string",
                example: "0000 0000 0000 0000"
              },
              orderId: {
                description: "The orderId of the transaction.",
                type: "string",
                example: "0000000000X00000"
              },
              ipAddress: {
                description: "An ip address",
                type: "string",
                example: "213.126.82.230"
              },
              exchangeUrl: {
                description: "The URL where we exchange the status of a transaction.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/exchange.php"
              },
              returnUrl: {
                description: "The URL where the payer has to be send to after the payment.",
                type: "string",
                format: "uri",
                example: "https://demo.pay.nl/complete/"
              },
              paymentUrl: {
                description: "The payment URL for this transaction",
                type: "string",
                format: "uri"
              },
              amount: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              expire: {
                description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                example: "2016-06-04T08:15:00+01:00"
              },
              created: {
                description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              modified: {
                description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                type: "string",
                format: "date-time",
                readOnly: true,
                example: "2016-06-04T08:15:00+01:00"
              },
              amountConverted: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountPaid: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              amountRefunded: {
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents.",
                    type: "integer",
                    minimum: 1,
                    example: 10
                  },
                  currency: {
                    description: "The currency in ISO-4217 format.",
                    type: "string",
                    example: "EUR"
                  }
                },
                type: "object",
                title: "Amount",
                "x-readme-ref-name": "Amount"
              },
              paymentMethod: {
                required: [
                  "id"
                ],
                properties: {
                  id: {
                    description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.",
                    type: "integer",
                    example: "10"
                  },
                  subId: {
                    description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.",
                    type: "string",
                    example: "10"
                  },
                  name: {
                    description: "The name of the payment method.",
                    type: "string",
                    example: "ideal"
                  }
                },
                type: "object",
                title: "PaymentMethod",
                "x-readme-ref-name": "PaymentMethod"
              },
              status: {
                properties: {
                  code: {
                    description: "The status code.",
                    type: "integer"
                  },
                  action: {
                    description: "The state in which the transaction resides",
                    type: "string",
                    example: "PAID"
                  },
                  phase: {
                    description: "The current phase in the transaction state",
                    type: "string",
                    example: "APPROVED"
                  }
                },
                type: "object",
                title: "Status",
                "x-readme-ref-name": "Status"
              },
              integration: {
                properties: {
                  testMode: {
                    description: "Indicates if the service is in testmode or not, possible values: false or true",
                    type: "boolean"
                  }
                },
                type: "object",
                title: "Integration",
                "x-readme-ref-name": "Integration"
              },
              customer: {
                properties: {
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "John"
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Doe"
                  },
                  type: {
                    description: "Either B for business or C for consumer.",
                    type: "string",
                    enum: [
                      "B",
                      "C"
                    ]
                  },
                  ip: {
                    description: "An ip address",
                    type: "string",
                    example: "213.126.82.230"
                  },
                  birthDate: {
                    description: "Date of birth as defined in ISO-8601.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  gender: {
                    description: "The subject's gender. Choose either M for male or F for female.",
                    type: "string",
                    example: "M"
                  },
                  phone: {
                    description: "The subject's phone number. Optionally prepended with a + and country code",
                    type: "string",
                    example: "0031612345678"
                  },
                  email: {
                    description: "An email address.",
                    type: "string",
                    format: "email",
                    example: "sandbox@pay.nl"
                  },
                  language: {
                    description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages",
                    type: "string",
                    enum: [
                      "NL",
                      "EN",
                      "DE",
                      "FR",
                      "IT",
                      "ES"
                    ],
                    example: "NL"
                  },
                  trust: {
                    description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).",
                    type: "integer",
                    maximum: 10,
                    minimum: -10,
                    example: -5
                  },
                  reference: {
                    description: "Unique reference of the payer. This field only allows alphanumeric characters.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    pattern: "^[a-zA-Z0-9]{1,64}$",
                    example: "NL87654321"
                  },
                  bankAccount: {
                    required: [
                      "iban",
                      "bic",
                      "owner"
                    ],
                    properties: {
                      iban: {
                        description: "The International Bank Account Number (IBAN).",
                        type: "string",
                        example: "NL69INGB0123456789"
                      },
                      bic: {
                        description: "Business Identifier Codes (BIC/SWIFT).",
                        type: "string",
                        example: "INGBNL2A"
                      },
                      owner: {
                        description: "The owner of the bank account.",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John Doe"
                      }
                    },
                    type: "object",
                    title: "BankAccount",
                    "x-readme-ref-name": "BankAccount"
                  },
                  company: {
                    properties: {
                      name: {
                        description: "The name of your merchant.",
                        type: "string",
                        example: "CompanyName"
                      },
                      coc: {
                        description: "Your Chamber of commerce registration number. This format differs per country.",
                        type: "string",
                        example: "12345678"
                      },
                      vat: {
                        description: "Value added tax identification number (VAT identification number).",
                        type: "string",
                        example: "NL807960147B01"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Company",
                    "x-readme-ref-name": "Company"
                  }
                },
                type: "object",
                title: "Customer",
                "x-readme-ref-name": "Customer"
              },
              order: {
                properties: {
                  countryCode: {
                    description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction",
                    type: "string",
                    maxLength: 2,
                    minLength: 2,
                    example: "NL"
                  },
                  deliveryDate: {
                    description: "The date of delivery.",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  invoiceDate: {
                    description: "The date of the invoice",
                    type: "string",
                    format: "date",
                    example: "1999-02-15"
                  },
                  deliveryAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  invoiceAddress: {
                    properties: {
                      code: {
                        type: "string"
                      },
                      firstName: {
                        description: "The forename (also known as a given name, Christian name or a first name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "John"
                      },
                      lastName: {
                        description: "The surname (also known as a family name or a last name).",
                        type: "string",
                        maxLength: 64,
                        minLength: 1,
                        example: "Doe"
                      },
                      streetName: {
                        description: "The name of the street",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Visitlane"
                      },
                      streetNumber: {
                        description: "The street number",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "13"
                      },
                      streetNumberExtension: {
                        description: "A house number extension is required to deal with appartments or other addresses sharing the same front door",
                        type: "string",
                        maxLength: 32,
                        minLength: 1,
                        example: "b1"
                      },
                      zipCode: {
                        description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.",
                        type: "string",
                        maxLength: 16,
                        minLength: 1,
                        example: "5678CD"
                      },
                      city: {
                        description: "The name of a city",
                        type: "string",
                        maxLength: 128,
                        minLength: 1,
                        example: "Amsterdam"
                      },
                      regionCode: {
                        description: "Region code (iso-3166-2)",
                        type: "string",
                        example: "ZH"
                      },
                      countryCode: {
                        description: "The country code consisting of 2 uppercase letters",
                        type: "string",
                        maxLength: 2,
                        minLength: 2,
                        example: "NL"
                      }
                    },
                    type: "object",
                    title: "Address",
                    "x-readme-ref-name": "Address"
                  },
                  products: {
                    type: "array",
                    items: {
                      properties: {
                        id: {
                          description: "The product identifier.",
                          type: "string",
                          example: "TEST_01"
                        },
                        description: {
                          description: "The description of the product.",
                          type: "string",
                          example: "Some product description"
                        },
                        type: {
                          description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
                          type: "string",
                          enum: [
                            "shipping",
                            "article",
                            "discount",
                            "rounding",
                            "handling",
                            "payment",
                            "credit",
                            "giftcard",
                            "emoney",
                            "crypto"
                          ]
                        },
                        price: {
                          properties: {
                            value: {
                              description: "The amount in cents.",
                              type: "integer",
                              minimum: 1,
                              example: 10
                            }
                          },
                          type: "object"
                        },
                        quantity: {
                          description: "The quantity.",
                          type: "number",
                          format: "float"
                        },
                        vatCode: {
                          description: "The VAT code to use.",
                          type: "string",
                          enum: [
                            "N",
                            "H",
                            "L"
                          ]
                        }
                      },
                      type: "object",
                      title: "Product",
                      "x-readme-ref-name": "Product"
                    }
                  }
                },
                type: "object",
                title: "Order",
                "x-readme-ref-name": "Order"
              },
              stats: {
                properties: {
                  info: {
                    description: "The used info code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Campagne 99"
                  },
                  tool: {
                    description: "The used tool code which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Google"
                  },
                  object: {
                    description: "The object which can be tracked in stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1
                  },
                  extra1: {
                    description: "The first free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Customer 6985615"
                  },
                  extra2: {
                    description: "The second free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Invoice 21.3695"
                  },
                  extra3: {
                    description: "The third free value which can be tracked in the stats.",
                    type: "string",
                    maxLength: 64,
                    minLength: 1,
                    example: "Shop Amsterdam"
                  },
                  domainId: {
                    description: "The ID of the duplicate content URL",
                    type: "string",
                    example: "WU-####-####"
                  }
                },
                type: "object",
                title: "Stats",
                "x-readme-ref-name": "Stats"
              },
              type: {
                description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM",
                type: "string",
                enum: [
                  "POS",
                  "ECOM",
                  "CIT",
                  "MIT",
                  "MOTO"
                ]
              },
              transferData: {
                type: "array",
                items: {
                  properties: {
                    name: {
                      description: "The name of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "stat1"
                    },
                    value: {
                      description: "The value of the variable to be tracked in the transaction.",
                      type: "string",
                      example: "ab8827dfc"
                    }
                  },
                  type: "object",
                  title: "TransferData",
                  "x-readme-ref-name": "TransferData"
                },
                xml: {
                  name: "transferData",
                  wrapped: true
                }
              }
            },
            type: "object",
            xml: {
              name: "transaction"
            },
            title: "Transaction",
            "x-readme-ref-name": "Transaction"
          },
          {
            properties: {
              transactionId: {
                type: "string"
              },
              processDate: {
                description: "The ISO date at which this entity will be processed",
                type: "string",
                format: "date-time",
                example: "1999-02-15",
                nullable: true
              },
              refundedTransactions: {
                type: "array",
                items: {
                  properties: {
                    amountRefunded: {
                      required: [
                        "value"
                      ],
                      properties: {
                        value: {
                          description: "The amount in cents.",
                          type: "integer",
                          minimum: 1,
                          example: 10
                        },
                        currency: {
                          description: "The currency in ISO-4217 format.",
                          type: "string",
                          example: "EUR"
                        }
                      },
                      type: "object",
                      title: "Amount",
                      "x-readme-ref-name": "Amount"
                    },
                    refund: {
                      properties: {
                        id: {
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    createdAt: {
                      description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.",
                      type: "string",
                      format: "date-time",
                      readOnly: true,
                      example: "2016-06-04T08:15:00+01:00"
                    },
                    createdBy: {
                      description: "The reference to an account or token whom created the entity",
                      type: "string",
                      pattern: "^A(T)?(-\\d{4}){2}$",
                      readOnly: true,
                      example: "A-1234-4321",
                      nullable: false
                    }
                  },
                  type: "object"
                }
              },
              createdBy: {
                description: "The reference to an account or token whom created the entity",
                type: "string",
                pattern: "^A(T)?(-\\d{4}){2}$",
                readOnly: true,
                example: "A-1234-4321",
                nullable: false
              }
            },
            type: "object"
          }
        ],
        title: "TransactionRefund",
        "x-readme-ref-name": "TransactionRefund"
      },
      Violation: {
        properties: {
          propertyPath: {
            type: "string"
          },
          message: {
            type: "string"
          },
          code: {
            type: "string"
          }
        },
        type: "object",
        title: "Violation",
        "x-readme-ref-name": "Violation"
      }
    },
    responses: {
      BadRequest: {
        description: "Bad request, see response body for more information"
      },
      Unauthorized: {
        description: "Unauthorized. Supplied credentials are invalid"
      },
      Forbidden: {
        description: "Forbidden. Supplied credentials have no rights"
      },
      NotFound: {
        description: "Not found"
      },
      MethodNotAllowed: {
        description: "Used HTTP method is not allowed"
      },
      NotAcceptable: {
        description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported"
      },
      Conflict: {
        description: "Indicates a request conflict with the current state of the target resource"
      },
      UnsupportedMedia: {
        description: "Unsupported media. The supplied content type in the content-type parameter in the header is not supported"
      },
      Unprocessable: {
        description: "Unprocessable entity, see response body for more information"
      },
      RateLimiting: {
        description: "Rate limit reached."
      }
    },
    examples: {
      TransactionRequestMinimum: {
        summary: "Basic Transaction",
        value: {
          serviceId: "SL-####-####",
          returnUrl: "https://demo.pay.nl/complete/",
          amount: {
            value: 10
          }
        }
      },
      TransactionRequestMinimumIDeal: {
        summary: "Ideal + ING Transaction",
        value: {
          serviceId: "SL-####-####",
          returnUrl: "https://demo.pay.nl/complete/",
          amount: {
            value: 10
          },
          paymentMethod: {
            id: 10,
            subId: "4"
          }
        }
      },
      TransactionRequestMinimumCreditcard: {
        summary: "Creditcard Transaction",
        value: {
          serviceId: "SL-####-####",
          returnUrl: "https://demo.pay.nl/complete/",
          amount: {
            value: 10
          },
          paymentMethod: {
            id: 706
          }
        }
      },
      TransactionRequestMinimumPin: {
        summary: "Pin Terminal Transaction",
        value: {
          serviceId: "SL-####-####",
          returnUrl: "https://demo.pay.nl/complete/",
          amount: {
            value: 10
          },
          paymentMethod: {
            id: 1927,
            subId: "TH-####-####"
          }
        }
      },
      TransactionRequestMaximumTestmodeWithCompanydata: {
        summary: "Extended Transaction iDeal - testmode",
        value: {
          serviceId: "SL-####-####",
          description: "Example description",
          reference: "12345XXY0123",
          returnUrl: "https://demo.pay.nl/complete/",
          exchangeUrl: "https://demo.pay.nl/exchange.php",
          amount: {
            value: 10,
            currency: "EUR"
          },
          paymentMethod: {
            id: "10",
            subId: "4"
          },
          integration: {
            testMode: true
          },
          customer: {
            firstName: "John",
            lastName: "Doe",
            phone: "0031612345678",
            birthDate: "1999-02-15",
            gender: "m",
            email: "sandbox@pay.nl",
            ipAddress: "213.126.82.230",
            trust: 5,
            reference: "NL87654321",
            company: {
              countryCode: "nl",
              coc: "12345678",
              vat: "NL0123456789",
              name: "CompanyName"
            }
          },
          order: {
            countryCode: "NL",
            deliveryDate: "2022-12-30",
            invoiceDate: "2022-12-30",
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              streetName: "Deliverylane",
              streetNumber: "70",
              streetNumberExtension: "A",
              zipCode: "5678CD",
              city: "Amsterdam",
              regionCode: "NL-ZH",
              countryCode: "NL"
            },
            invoiceAddress: {
              firstName: "Samanta",
              lastName: "Doe - Jones",
              streetName: "Invoicestreet",
              streetNumber: "2",
              streetNumberExtension: "B",
              zipCode: "SW36LQ",
              city: "London",
              regionCode: "NL-ZH",
              countryCode: "GB"
            },
            products: [
              {
                id: "TEST_01",
                description: "Caramels sweet roll",
                type: "article",
                price: {
                  value: 1,
                  currency: "EUR"
                },
                quantity: 2,
                vatCode: "H"
              },
              {
                id: "TEST_02",
                description: "Cookie tart sugar",
                type: "article",
                price: {
                  value: 3,
                  currency: "EUR"
                },
                quantity: 1,
                vatCode: "H"
              },
              {
                id: "TEST_03",
                description: "Lollipop chocolate bar",
                type: "article",
                price: {
                  value: 1,
                  currency: "EUR"
                },
                quantity: 5,
                vatCode: "H"
              }
            ]
          },
          notification: {
            type: "email",
            recipient: "sandbox@pay.nl"
          },
          stats: {
            info: "Campagne 99",
            tool: "Google",
            extra1: "Customer 6985615",
            extra2: "Invoice 21.3695",
            extra3: "Shop Amsterdam"
          },
          transferData: [
            {
              name: "stat1",
              value: "pos1992"
            },
            {
              name: "stat2",
              value: "ab8827hhc"
            }
          ]
        }
      },
      TransactionRequestMaximumNoTestmodeNoCompanyData: {
        summary: "Extended Transaction iDeal",
        value: {
          serviceId: "SL-####-####",
          description: "Example description",
          reference: "12345XXY0123",
          returnUrl: "https://demo.pay.nl/complete/",
          exchangeUrl: "https://demo.pay.nl/exchange.php",
          amount: {
            value: 10,
            currency: "EUR"
          },
          paymentMethod: {
            id: "10",
            subId: "4"
          },
          integration: {
            testMode: false
          },
          customer: {
            firstName: "John",
            lastName: "Doe",
            phone: "0031612345678",
            birthDate: "1999-02-15",
            gender: "m",
            email: "sandbox@pay.nl",
            ipAddress: "213.126.82.230",
            trust: 5,
            reference: "NL87654321"
          },
          order: {
            countryCode: "NL",
            deliveryDate: "2022-12-30",
            invoiceDate: "2022-12-30",
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              streetName: "Deliverylane",
              streetNumber: "70",
              streetNumberExtension: "A",
              zipCode: "5678CD",
              city: "Amsterdam",
              regionCode: "NL-ZH",
              countryCode: "NL"
            },
            invoiceAddress: {
              firstName: "Samanta",
              lastName: "Doe - Jones",
              streetName: "Invoicestreet",
              streetNumber: "2",
              streetNumberExtension: "B",
              zipCode: "SW36LQ",
              city: "London",
              regionCode: "NL-ZH",
              countryCode: "GB"
            },
            products: [
              {
                id: "TEST_01",
                description: "Caramels sweet roll",
                type: "article",
                price: {
                  value: 1,
                  currency: "EUR"
                },
                quantity: 2,
                vatCode: "H"
              },
              {
                id: "TEST_02",
                description: "Cookie tart sugar",
                type: "article",
                price: {
                  value: 3,
                  currency: "EUR"
                },
                quantity: 1,
                vatCode: "H"
              },
              {
                id: "TEST_03",
                description: "Lollipop chocolate bar",
                type: "article",
                price: {
                  value: 1,
                  currency: "EUR"
                },
                quantity: 5,
                vatCode: "H"
              }
            ]
          },
          notification: {
            type: "email",
            recipient: "sandbox@pay.nl"
          },
          stats: {
            info: "Campagne 99",
            tool: "Google",
            extra1: "Customer 6985615",
            extra2: "Invoice 21.3695",
            extra3: "Shop Amsterdam"
          },
          transferData: [
            {
              name: "stat1",
              value: "pos1992"
            },
            {
              name: "stat2",
              value: "ab8827hhc"
            }
          ]
        }
      },
      TransactionRequestWithGoogleAnalytics: {
        summary: "Basic transaction with Google Analytics ",
        value: {
          serviceId: "SL-####-####",
          returnUrl: "https://demo.pay.nl/complete",
          reference: "12345XXY0123",
          amount: {
            value: 10,
            currency: "EUR"
          },
          order: {
            products: [
              {
                price: {
                  value: 10,
                  currency: "EUR"
                },
                id: "1",
                description: "Caramels sweet roll",
                type: "article",
                quantity: 1,
                vatCode: "H"
              }
            ]
          },
          transferData: [
            {
              name: "gaClientId",
              value: "707423299.1686737903"
            }
          ]
        }
      },
      TransactionResponseExample: {
        summary: "Successful Transaction",
        value: {
          id: "EX-1234-1234-1234",
          serviceId: "SL-1234-1234",
          description: "Example description",
          reference: "12345XXY0123",
          manualTransferCode: "5000 0016 6117 8719",
          orderId: "1234567891X33ce1",
          paymentUrl: "https://bankieren.ideal.ing.nl/ideal/betalen/inlog-annuleren/static/detect_mob?trxid=0378827364771217&random=z81d2s6efaf2fcc",
          statusUrl: "https://rest.pay.nl/v1/transactions/EX-1234-1234-1234/status",
          amount: {
            value: 10,
            currency: "EUR"
          },
          uuid: "ab14f24d-fd08-ac23-1661-179814c0ad45",
          hash: "9142aafd4d02c72d006b315eb590b7c2",
          cancelUrl: "https://instore.pay.nl:9004/api/cancel?hash=9142aafd4d02c72d006b315eb590b7c2&timeout=5",
          orderStatusUrl: "https://pin.pay.nl:9004/api/status?hash=9142aafd4d02c72d006b315eb590b7c2&timeout=5",
          expire: 123456789,
          expiresAt: "2016-06-04T08:15:00+01:00",
          created: "2016-06-04T08:15:00+01:00",
          createdAt: "2016-06-04T08:15:00+01:00",
          createdBy: "A-1234-4321",
          modified: "2016-06-04T08:15:00+01:00",
          modifiedAt: "2016-06-04T08:15:00+01:00",
          modifiedBy: "A-1234-4321",
          _links: [
            {
              href: "/transactions",
              rel: "self",
              type: "POST"
            },
            {
              href: "/transactions/EX-1234-1234-1234",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionStatusResponse200Successful: {
        summary: "Transaction status",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: 100,
            action: "PAID",
            phase: "SUCCESS"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false,
            paymentVerificationMethod: 16
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/status",
              rel: "self",
              type: "GET"
            }
          ]
        }
      },
      TransactionLoadResponse200Successful: {
        summary: "Transaction Load",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "0000 0018 0911 7996",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          returnUrl: "https://pay.nl",
          amount: {
            value: 10,
            currency: "EUR"
          },
          status: {
            code: 20,
            action: "PENDING",
            phase: "PENDING"
          },
          integration: {
            testMode: false
          },
          merchant: {
            code: "M-3421-2120",
            name: "Company B.V.",
            status: "ACTIVE"
          },
          tradeName: {
            code: "TM-1740-2882",
            name: "TradeName"
          },
          layout: {
            code: "LY-1080-1010",
            name: "Eigen look & feel",
            cssUrl: "https://static.pay.nl/layout/LY-1080-1010/cssfile.css",
            icon: "",
            supportingColor: "000000",
            headerTextColor: "556622",
            buttonColor: "56EADD",
            buttonTextColor: "CCCCCC"
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/load",
              rel: "self",
              type: "GET"
            }
          ]
        }
      },
      TransactionCancelResponse200Successful: {
        summary: "Transaction cancel",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: -90,
            action: "CANCEL",
            phase: "CANCELLED"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/cancel",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-0171-7899-4460",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionApproveResponse200Successful: {
        summary: "Transaction approve",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: 100,
            action: "PAID",
            phase: "SUCCESS"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/approve",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-0171-7899-4460",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionDeclineResponse200Successful: {
        summary: "Transaction decline",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: -64,
            action: "CANCEL",
            phase: "DENIED"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/decline",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-0171-7899-4460",
              rel: "self",
              type: "GET"
            }
          ]
        }
      },
      TransactionVoidResponse200Successful: {
        summary: "Transaction void",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 10,
            currency: "EUR"
          },
          status: {
            code: -90,
            action: "CANCEL",
            phase: "CANCELLED"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/void",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-0171-7899-4460",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionCaptureResponse200Successful: {
        summary: "Transaction capture",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: 100,
            action: "PAID",
            phase: "SUCCESS"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "127.0.0.1",
            secureStatus: false
          },
          paymentMethod: {
            id: 10,
            subId: 3
          },
          integration: {
            testMode: false
          },
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-0073-4553",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/capture",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-0171-7899-4460",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionResponse200Successful: {
        summary: "Transaction Full",
        value: {
          id: "EX-0171-7899-4460",
          orderId: "1234567891X33ce1",
          serviceCode: "SL-4878-2340",
          description: "Example description",
          reference: "12345XXY0123",
          ipAddress: "86.83.126.161",
          amount: {
            value: 10,
            currency: "EUR"
          },
          amountConverted: {
            value: 10,
            currency: "EUR"
          },
          amountPaid: {
            value: 0,
            currency: "EUR"
          },
          amountRefunded: {
            value: 0,
            currency: "EUR"
          },
          status: {
            code: 100,
            action: "PAID",
            phase: "SUCCESS"
          },
          paymentData: {
            method: "iban",
            customerKey: "07e384a630c97ef7e1f1fb8b2edbf8ac",
            customerId: "NL91ABNA0417164300",
            customerName: "John Doe",
            ipAddress: "213.126.82.230",
            secureStatus: false,
            paymentVerificationMethod: 16,
            iban: {
              iban: "NL69INGB0123456789",
              bic: "INGBNL2A",
              owner: "John Doe"
            }
          },
          paymentMethod: {
            id: 10,
            subId: 3,
            name: "iDEAL"
          },
          customer: {
            firstName: "John",
            lastName: "Doe",
            type: "B",
            birthDate: "1999-02-15",
            language: "NL",
            gender: "M",
            phone: "0031612345678",
            email: "sandbox@pay.nl",
            trust: 0,
            reference: "NL87654321",
            bankAccount: {
              iban: "NL69INGB0123456789",
              bic: "INGBNL2A",
              owner: "John Doe"
            },
            company: {
              name: "CompanyName",
              coc: "12345678",
              vat: "NL0123456789",
              countryCode: "NL"
            }
          },
          order: {
            countryCode: "NL",
            deliveryDate: "2022-12-30",
            invoiceDate: "2022-12-30",
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              streetName: "Deliverylane",
              streetNumber: 70,
              streetNumberExtension: "A",
              zipCode: "5678CD",
              city: "Amsterdam",
              regionCode: "NH",
              countryCode: "NL"
            },
            invoiceAddress: {
              firstName: "Samanta",
              lastName: "Doe - Jones",
              streetName: "Invoicestreet",
              streetNumber: 2,
              streetNumberExtension: "B",
              zipCode: "5211",
              city: "London",
              regionCode: "LND",
              countryCode: "UK"
            },
            products: [
              {
                id: "Telefoon",
                type: "article",
                description: "iPhone 12 Pro",
                price: {
                  value: 5,
                  currency: "EUR"
                },
                quantity: 1,
                vatCode: "H"
              },
              {
                id: "TV",
                type: "article",
                description: "Samsung TV",
                price: {
                  value: 5,
                  currency: "EUR"
                },
                quantity: 1,
                vatCode: "H"
              }
            ]
          },
          stats: {
            info: "",
            tool: "",
            object: "",
            extra1: "76908",
            extra2: "",
            extra3: "",
            domainId: null
          },
          transferData: [],
          expiresAt: "2021-09-04T12:14:01+02:00",
          createdAt: "2021-09-04T12:14:01+02:00",
          createdBy: "AT-1234-4321",
          modifiedAt: null,
          modifiedBy: null,
          deletedAt: null,
          deletedBy: null,
          _links: [
            {
              href: "/transactions/EX-0171-7899-4460/status",
              rel: "self",
              type: "GET"
            }
          ]
        }
      },
      TransactionResponse400BadRequest: {
        summary: "Bad request",
        value: {
          type: "https://developer.pay.nl/docs/error-codes",
          title: "An error occurred",
          detail: "transaction.serviceId: Unable to find service location\ntransaction.amount.value: You have entered an invalid amount",
          violations: [
            {
              propertyPath: "transaction.serviceId",
              message: "Unable to find service location",
              code: "PAY-2852"
            },
            {
              propertyPath: "transaction.amount.value",
              message: "You have entered an invalid amount",
              code: "PAY-2803"
            }
          ]
        }
      },
      TransactionResponse422UnprocessableEntity: {
        summary: "Payment option not activated",
        value: {
          type: "https://developer.pay.nl/docs/error-codes",
          title: "An error occurred",
          detail: "Payment option (9999) is not enabled for this service (SL-####-####)",
          violations: [
            {
              propertyPath: null,
              message: "Payment option (9999) is not enabled for this service (SL-####-####)",
              code: "PAY-3000"
            }
          ]
        }
      },
      TransactionRefund200Successful: {
        summary: "Successful refund",
        value: {
          orderId: "1661180545X1ca9c",
          transactionId: "EX-5431-7835-5460",
          description: "We have refunded \u20AC 0,10 by refunding IBAN bankaccount (NL16RABO1822913977) with \u20AC 0,10",
          processDate: "2022-12-01T14:37:58+01:00",
          amount: {
            value: 1e3,
            currency: "EUR"
          },
          amountRefunded: {
            value: 10,
            currency: "EUR"
          },
          refundedTransactions: [
            {
              amountRefunded: {
                value: 10,
                currency: "EUR"
              },
              refund: {
                id: "RF-1234-1234-1234-1234"
              },
              createdAt: "2022-12-01T14:37:58+01:00",
              createdBy: "AT-1234-4321"
            }
          ],
          createdAt: "2022-12-01T14:37:58+01:00",
          createdBy: "AT-1234-4321",
          _links: [
            {
              href: "/transactions/EX-5431-7835-5460/refund",
              rel: "self",
              type: "PATCH"
            },
            {
              href: "/transactions/EX-5431-7835-5460",
              rel: "details",
              type: "GET"
            }
          ]
        }
      },
      TransactionRefundAmountPayload: {
        summary: "Refund based on an amount",
        value: {
          amount: {
            value: 10,
            currency: "EUR"
          },
          products: [],
          description: "The product never got delivered",
          processDate: "2019-01-01T12:00:00+02:00",
          vatPercentage: "21.0",
          exchangeUrl: "https://demo.pay.nl/exchange.php"
        }
      },
      TransactionRefundProductPayload: {
        summary: "Refund based on a product",
        value: {
          amount: null,
          products: {
            TEST_01: 1
          },
          description: "The product never got delivered",
          processDate: "2019-01-01T12:00:00+02:00",
          vatPercentage: "21.0",
          exchangeUrl: "https://demo.pay.nl/exchange.php"
        }
      },
      TransactionRefund400BadRequestExample: {
        summary: "Empty Amount",
        value: {
          type: "https://developer.pay.nl/docs/error-codes",
          title: "An error occurred",
          detail: "amount: Is empty",
          violations: [
            {
              propertyPath: "amount",
              message: "Is empty",
              code: "PAY-2828"
            }
          ]
        }
      },
      TransactionRefund422UnprocessableEntity: {
        summary: "Refund too fast",
        value: {
          type: "https://developer.pay.nl/docs/error-codes",
          title: "An error occurred",
          detail: "Refund too fast",
          violations: [
            {
              propertyPath: null,
              message: "Refund too fast",
              code: "PAY-3000"
            }
          ]
        }
      },
      TransactionCaptureAmountPayload: {
        summary: "Capture based on an amount",
        value: {
          amount: 10
        }
      },
      TransactionCaptureProductPayload: {
        summary: "Capture based on a product",
        value: {
          products: {
            TEST_01: 1
          }
        }
      }
    },
    securitySchemes: {
      basicAuth: {
        type: "http",
        scheme: "basic"
      },
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    }
  },
  tags: [
    {
      name: "Accounts",
      description: ""
    },
    {
      name: "Core Data",
      description: ""
    },
    {
      name: "Directdebits",
      description: ""
    },
    {
      name: "Ispay",
      description: ""
    },
    {
      name: "Merchant Management",
      description: ""
    },
    {
      name: "Refunds",
      description: ""
    },
    {
      name: "Payout",
      description: ""
    },
    {
      name: "Pin",
      description: ""
    },
    {
      name: "Qr",
      description: ""
    },
    {
      name: "Services",
      description: ""
    },
    {
      name: "Trademarks",
      description: ""
    },
    {
      name: "Transactions",
      description: ""
    },
    {
      name: "Vouchers",
      description: ""
    }
  ],
  externalDocs: {
    description: "Official PAY. documentation",
    url: "https://docs.pay.nl"
  }
};

// src/sdk.ts
var SDK = class {
  core;
  constructor() {
    this.core = new APICore(openapi_default, "paynl-transaction/v2.0 (api/7.0.0-beta.8)");
  }
  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config) {
    this.core.setConfig(config);
  }
  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values) {
    this.core.setAuth(...values);
    return this;
  }
  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url, variables = {}) {
    this.core.setServer(url, variables);
  }
  /**
   * Get all detailed information of a transaction. You can use the EX code or the order ID
   * to retrieve the detailed transaction information
   *
   * @summary Transaction:Info
   */
  getTransactionsTransactionid(metadata) {
    return this.core.fetch("/transactions/{transactionId}", "get", metadata);
  }
  /**
   * This endpoint is used to create a transaction in redirect mode. By calling this
   * endpoint, you get a transactionID and a paymentUrl which can be used to redirect the
   * payer. After the payment, the payer will be redirected to the provided returnUrl, where
   * you can check the status and process the order.
   *
   * You need to authenticate with an AT code (as username) and the corresponding token (as
   * password) or you can authenticate with a SL code (as username) and the corresponding
   * secret (as password)
   *
   * @summary Transaction:Create
   * @throws FetchError<400, types.Error> Bad request, see response body for more information
   * @throws FetchError<422, types.Error> Unprocessable Entity, see response body for more information
   */
  postTransactions(body) {
    return this.core.fetch("/transactions", "post", body);
  }
  /**
   * Get the status of a transaction. You can use the EX code or 
   * the order ID to retrieve the status of a transaction. If you want more detailed
   * information about the transaction, 
   * call the Transaction:Info API.
   *
   * @summary Transaction:Status
   */
  getTransactionsTransactionidStatus(metadata) {
    return this.core.fetch("/transactions/{transactionId}/status", "get", metadata);
  }
};

export {
  SDK
};
//# sourceMappingURL=chunk-NHHMKJGT.js.map