"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/sdk.ts
var _apicore = require('@readme/api-core'); var _apicore2 = _interopRequireDefault(_apicore);

// openapi.json
var openapi_default = {
  openapi: "3.0.0",
  info: {
    title: "Pay. Transaction Gateway Unit API",
    description: "The restful API for interacting with the Pay. Transaction Gateway Unit.",
    contact: {
      name: "Pay.",
      url: "https://www.pay.nl",
      email: "support@pay.nl"
    },
    version: "1"
  },
  servers: [
    {
      url: "https://connect.pay.nl",
      description: "Production Multicore"
    },
    {
      url: "https://connect.payments.nl",
      description: "Production Core"
    },
    {
      url: "https://connect.achterelkebetaling.nl",
      description: "Production Core"
    }
  ],
  paths: {
    "/v1/orders": {
      post: {
        operationId: "api_create_order",
        tags: [
          "Order"
        ],
        responses: {
          "201": {
            description: "Order created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Order created",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 20,
                        action: "PENDING"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Create",
        description: "Create an order on this TGU. An order represents the total order as it exists in your shop and can be fulfilled through one or more payments.",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "serviceId",
                  "amount"
                ],
                properties: {
                  serviceId: {
                    minLength: 12,
                    maxLength: 12,
                    pattern: "^(SL-[0-9]{4}-[0-9]{4})$",
                    type: "string",
                    description: "Unique service location identifier",
                    example: "SL-1234-1234"
                  },
                  description: {
                    description: "Is shown on the statement of the payer.",
                    example: "Order Description",
                    type: "string",
                    nullable: true
                  },
                  reference: {
                    description: "The merchant identification of this transaction. \n This field only allows alphanumeric characters",
                    example: "REF1234",
                    type: "string",
                    nullable: true
                  },
                  expire: {
                    description: "The time at which this order expires. Must be in ATOM (ISO-8601) notation.",
                    example: "1999-11-22T13:37:00+01:00",
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  returnUrl: {
                    description: "The URL where the payer will be sent to after the payment.",
                    example: "https://demo.pay.nl/start/return.php",
                    type: "string",
                    nullable: true
                  },
                  exchangeUrl: {
                    description: "The URL where we exchange the status of a transaction.",
                    example: "https://pay.nl/exchange",
                    type: "string",
                    nullable: true
                  },
                  amount: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    required: [
                      "value"
                    ],
                    properties: {
                      value: {
                        description: "The amount in cents. \u04041.50 becomes 150",
                        example: 1,
                        type: "integer"
                      },
                      currency: {
                        externalDocs: {
                          url: "https://schema.org/priceCurrency"
                        },
                        example: "EUR",
                        type: "string",
                        nullable: true
                      }
                    },
                    title: "Order.Input.Amount",
                    "x-readme-ref-name": "Order.Input.Amount"
                  },
                  paymentMethod: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            example: 10,
                            type: "integer",
                            nullable: true
                          },
                          input: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "cardNumber"
                                ],
                                properties: {
                                  cardNumber: {
                                    minLength: 10,
                                    description: "The card number of the Giftcard",
                                    example: "6064363019",
                                    type: "string"
                                  },
                                  pincode: {
                                    minLength: 5,
                                    maxLength: 6,
                                    description: "The pin code of the Giftcard",
                                    example: "123456",
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.Giftcard",
                                "x-readme-ref-name": "Order.PaymentMethod.Giftcard"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  issuerId: {
                                    nullable: true,
                                    description: "The ID (4 = ING) or the BIC code of the issuer, required for integrations with iDEAL 1.0",
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.iDEAL",
                                "x-readme-ref-name": "Order.PaymentMethod.iDEAL"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "terminalCode"
                                ],
                                properties: {
                                  terminalCode: {
                                    pattern: "^(TH-[0-9]{4}-[0-9]{4})$",
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.Pin",
                                "x-readme-ref-name": "Order.PaymentMethod.Pin"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "firstName",
                                  "lastName",
                                  "email",
                                  "city",
                                  "iban",
                                  "bic"
                                ],
                                properties: {
                                  firstName: {
                                    type: "string",
                                    nullable: true
                                  },
                                  lastName: {
                                    type: "string",
                                    nullable: true
                                  },
                                  email: {
                                    format: "email",
                                    externalDocs: {
                                      url: "https://schema.org/email"
                                    },
                                    type: "string",
                                    nullable: true
                                  },
                                  city: {
                                    type: "string",
                                    nullable: true
                                  },
                                  iban: {
                                    externalDocs: {
                                      url: "https://schema.org/identifier"
                                    },
                                    type: "string",
                                    nullable: true
                                  },
                                  bic: {
                                    externalDocs: {
                                      url: "https://schema.org/identifier"
                                    },
                                    type: "string",
                                    nullable: true
                                  },
                                  permissionGiven: {
                                    type: "boolean"
                                  }
                                },
                                title: "Order.PaymentMethod.DirectDebit",
                                "x-readme-ref-name": "Order.PaymentMethod.DirectDebit"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "countryCode"
                                ],
                                properties: {
                                  countryCode: {
                                    enum: [
                                      "AU",
                                      "AT",
                                      "BE",
                                      "CA",
                                      "CZ",
                                      "DK",
                                      "FI",
                                      "FR",
                                      "DE",
                                      "GR",
                                      "IE",
                                      "IT",
                                      "MX",
                                      "NL",
                                      "NZ",
                                      "NO",
                                      "PL",
                                      "PT",
                                      "RO",
                                      "ES",
                                      "SE",
                                      "CH",
                                      "GB",
                                      "US"
                                    ],
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.Klarna",
                                "x-readme-ref-name": "Order.PaymentMethod.Klarna"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "email"
                                ],
                                properties: {
                                  email: {
                                    format: "email",
                                    externalDocs: {
                                      url: "https://schema.org/email"
                                    },
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.Przelewy24",
                                "x-readme-ref-name": "Order.PaymentMethod.Przelewy24"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "issuer",
                                  "country"
                                ],
                                properties: {
                                  issuer: {
                                    type: "string",
                                    nullable: true
                                  },
                                  country: {
                                    type: "string",
                                    nullable: true
                                  },
                                  debtorIban: {
                                    minLength: 1,
                                    type: "string",
                                    nullable: true
                                  },
                                  psuId: {
                                    minLength: 1,
                                    type: "string",
                                    nullable: true
                                  }
                                },
                                title: "Order.PaymentMethod.PayByBank",
                                "x-readme-ref-name": "Order.PaymentMethod.PayByBank"
                              },
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "initials",
                                  "firstName",
                                  "lastName",
                                  "gender",
                                  "streetName",
                                  "houseNumber",
                                  "postalCode",
                                  "city",
                                  "country",
                                  "email",
                                  "phoneNumber"
                                ],
                                properties: {
                                  initials: {
                                    type: "string"
                                  },
                                  firstName: {
                                    type: "string"
                                  },
                                  lastName: {
                                    type: "string"
                                  },
                                  gender: {
                                    enum: [
                                      "FEMALE",
                                      "MALE"
                                    ],
                                    type: "string"
                                  },
                                  streetName: {
                                    type: "string"
                                  },
                                  houseNumber: {
                                    type: "string"
                                  },
                                  houseNumberAddition: {
                                    maxLength: 255,
                                    type: "string",
                                    nullable: true
                                  },
                                  postalCode: {
                                    type: "string"
                                  },
                                  city: {
                                    type: "string"
                                  },
                                  country: {
                                    enum: [
                                      "NL",
                                      "BE"
                                    ],
                                    type: "string"
                                  },
                                  email: {
                                    format: "email",
                                    externalDocs: {
                                      url: "https://schema.org/email"
                                    },
                                    type: "string"
                                  },
                                  phoneNumber: {
                                    type: "string"
                                  }
                                },
                                title: "Order.PaymentMethod.SprayPay",
                                "x-readme-ref-name": "Order.PaymentMethod.SprayPay"
                              }
                            ],
                            type: "object",
                            description: "Additional input for the payment method.",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Input.PaymentMethod",
                        "x-readme-ref-name": "Order.Input.PaymentMethod"
                      }
                    ],
                    nullable: true
                  },
                  integration: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          test: {
                            type: "boolean",
                            nullable: true
                          }
                        },
                        title: "Order.Input.Integration",
                        "x-readme-ref-name": "Order.Input.Integration"
                      }
                    ],
                    nullable: true
                  },
                  optimize: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          flow: {
                            enum: [
                              "fastCheckout"
                            ],
                            type: "string",
                            nullable: true
                          },
                          shippingAddress: {
                            type: "boolean",
                            nullable: true
                          },
                          billingAddress: {
                            type: "boolean",
                            nullable: true
                          },
                          contactDetails: {
                            type: "boolean",
                            nullable: true
                          },
                          mcc: {
                            maxLength: 4,
                            type: "string",
                            nullable: true
                          },
                          collectorAccount: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  method: {
                                    enum: [
                                      "iban"
                                    ],
                                    type: "string"
                                  },
                                  iban: {
                                    anyOf: [
                                      {
                                        type: "object",
                                        description: "",
                                        deprecated: false,
                                        required: [
                                          "iban",
                                          "bic",
                                          "owner"
                                        ],
                                        properties: {
                                          iban: {
                                            type: "string"
                                          },
                                          bic: {
                                            type: "string"
                                          },
                                          owner: {
                                            type: "string"
                                          }
                                        },
                                        title: "Order.Input.Optimize.CollectorAccount.Iban",
                                        "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
                                      }
                                    ],
                                    nullable: true
                                  }
                                },
                                title: "Order.Input.Optimize.CollectorAccount",
                                "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount"
                              }
                            ],
                            nullable: true
                          },
                          collectorCompany: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "id",
                                  "name"
                                ],
                                properties: {
                                  id: {
                                    type: "string"
                                  },
                                  name: {
                                    type: "string"
                                  }
                                },
                                title: "Order.Input.Optimize.CollectorCompany",
                                "x-readme-ref-name": "Order.Input.Optimize.CollectorCompany"
                              }
                            ],
                            nullable: true
                          }
                        },
                        title: "Order.Input.Optimize",
                        "x-readme-ref-name": "Order.Input.Optimize"
                      }
                    ],
                    nullable: true
                  },
                  customer: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          email: {
                            format: "email",
                            minLength: 1,
                            maxLength: 255,
                            externalDocs: {
                              url: "https://schema.org/email"
                            },
                            example: "johndoe@example.com",
                            type: "string",
                            nullable: true
                          },
                          firstname: {
                            minLength: 1,
                            maxLength: 255,
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastname: {
                            minLength: 1,
                            maxLength: 255,
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          birthDate: {
                            externalDocs: {
                              url: "https://schema.org/Date"
                            },
                            example: "1999-11-22",
                            type: "string",
                            format: "date-time",
                            nullable: true
                          },
                          gender: {
                            minLength: 1,
                            maxLength: 1,
                            example: "O",
                            type: "string",
                            nullable: true
                          },
                          phone: {
                            example: "06-12345678",
                            type: "string",
                            nullable: true
                          },
                          locale: {
                            example: "nl_BE",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            example: "192.168.0.1",
                            type: "string",
                            nullable: true
                          },
                          trust: {
                            example: 1,
                            type: "integer",
                            nullable: true
                          },
                          reference: {
                            example: "Your customer reference",
                            type: "string",
                            nullable: true
                          },
                          gaClientId: {
                            example: "GA1.2.904941809.1556093647",
                            type: "string",
                            nullable: true
                          },
                          company: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  name: {
                                    example: "Company.",
                                    type: "string",
                                    nullable: true
                                  },
                                  cocNumber: {
                                    example: "000000",
                                    type: "string",
                                    nullable: true
                                  },
                                  vatNumber: {
                                    example: "NL000000000B01",
                                    type: "string",
                                    nullable: true
                                  },
                                  country: {
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  }
                                },
                                title: "Order.Input.Company",
                                "x-readme-ref-name": "Order.Input.Company"
                              }
                            ],
                            nullable: true
                          }
                        },
                        title: "Order.Input.Customer",
                        "x-readme-ref-name": "Order.Input.Customer"
                      }
                    ],
                    nullable: true
                  },
                  order: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          countryCode: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          },
                          deliveryDate: {
                            example: "2023-12-24",
                            type: "string",
                            format: "date-time",
                            nullable: true
                          },
                          invoiceDate: {
                            example: "2023-12-24",
                            type: "string",
                            format: "date-time",
                            nullable: true
                          },
                          deliveryAddress: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  firstName: {
                                    description: "The forename (also known as a given name, Christian name or a first name).",
                                    example: "John",
                                    type: "string",
                                    nullable: true
                                  },
                                  lastName: {
                                    description: "The surname (also known as a family name or a last name).",
                                    example: "Doe",
                                    type: "string",
                                    nullable: true
                                  },
                                  street: {
                                    minLength: 1,
                                    maxLength: 255,
                                    description: "The name of the street",
                                    example: "P.C. Hooftstraat",
                                    type: "string",
                                    nullable: true
                                  },
                                  streetNumber: {
                                    minLength: 1,
                                    maxLength: 16,
                                    example: "100",
                                    type: "string",
                                    nullable: true
                                  },
                                  streetNumberExtension: {
                                    minLength: 1,
                                    maxLength: 16,
                                    example: "second floor",
                                    type: "string",
                                    nullable: true
                                  },
                                  zipCode: {
                                    minLength: 1,
                                    maxLength: 100,
                                    example: "3202XA",
                                    type: "string",
                                    nullable: true
                                  },
                                  city: {
                                    minLength: 1,
                                    maxLength: 255,
                                    example: "Amsterdam",
                                    type: "string",
                                    nullable: true
                                  },
                                  country: {
                                    minLength: 2,
                                    maxLength: 2,
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  },
                                  region: {
                                    minLength: 1,
                                    maxLength: 50,
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  }
                                },
                                required: [
                                  "street",
                                  "streetNumber",
                                  "zipCode",
                                  "city",
                                  "country"
                                ],
                                title: "Order.Input.Address",
                                "x-readme-ref-name": "Order.Input.Address"
                              }
                            ],
                            nullable: true
                          },
                          invoiceAddress: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  firstName: {
                                    description: "The forename (also known as a given name, Christian name or a first name).",
                                    example: "John",
                                    type: "string",
                                    nullable: true
                                  },
                                  lastName: {
                                    description: "The surname (also known as a family name or a last name).",
                                    example: "Doe",
                                    type: "string",
                                    nullable: true
                                  },
                                  street: {
                                    minLength: 1,
                                    maxLength: 255,
                                    description: "The name of the street",
                                    example: "P.C. Hooftstraat",
                                    type: "string",
                                    nullable: true
                                  },
                                  streetNumber: {
                                    minLength: 1,
                                    maxLength: 16,
                                    example: "100",
                                    type: "string",
                                    nullable: true
                                  },
                                  streetNumberExtension: {
                                    minLength: 1,
                                    maxLength: 16,
                                    example: "second floor",
                                    type: "string",
                                    nullable: true
                                  },
                                  zipCode: {
                                    minLength: 1,
                                    maxLength: 100,
                                    example: "3202XA",
                                    type: "string",
                                    nullable: true
                                  },
                                  city: {
                                    minLength: 1,
                                    maxLength: 255,
                                    example: "Amsterdam",
                                    type: "string",
                                    nullable: true
                                  },
                                  country: {
                                    minLength: 2,
                                    maxLength: 2,
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  },
                                  region: {
                                    minLength: 1,
                                    maxLength: 50,
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  }
                                },
                                required: [
                                  "street",
                                  "streetNumber",
                                  "zipCode",
                                  "city",
                                  "country"
                                ],
                                title: "Order.Input.Address",
                                "x-readme-ref-name": "Order.Input.Address"
                              }
                            ],
                            nullable: true
                          },
                          products: {
                            items: {
                              anyOf: [
                                {
                                  type: "object",
                                  description: "",
                                  deprecated: false,
                                  properties: {
                                    id: {
                                      example: "123b123h1239",
                                      type: "string",
                                      nullable: true
                                    },
                                    description: {
                                      example: "Pair of socks",
                                      type: "string",
                                      nullable: true
                                    },
                                    type: {
                                      description: "The type of product. \n\n             More information can be found here: https://paynl.readme.io/reference/producttypes",
                                      example: "ARTICLE",
                                      type: "string",
                                      nullable: true
                                    },
                                    price: {
                                      anyOf: [
                                        {
                                          type: "object",
                                          description: "",
                                          deprecated: false,
                                          required: [
                                            "value"
                                          ],
                                          properties: {
                                            value: {
                                              description: "The amount in cents. \u04041.50 becomes 150",
                                              example: 1,
                                              type: "integer"
                                            },
                                            currency: {
                                              externalDocs: {
                                                url: "https://schema.org/priceCurrency"
                                              },
                                              example: "EUR",
                                              type: "string",
                                              nullable: true
                                            }
                                          },
                                          title: "Order.Input.Amount",
                                          "x-readme-ref-name": "Order.Input.Amount"
                                        }
                                      ],
                                      nullable: true
                                    },
                                    quantity: {
                                      example: 1,
                                      type: "number",
                                      nullable: true
                                    },
                                    vatPercentage: {
                                      example: 21,
                                      type: "number",
                                      nullable: true
                                    }
                                  },
                                  title: "Order.Input.Product",
                                  "x-readme-ref-name": "Order.Input.Product"
                                }
                              ]
                            },
                            type: "array"
                          }
                        },
                        title: "Order.Input.Order",
                        "x-readme-ref-name": "Order.Input.Order"
                      }
                    ],
                    nullable: true
                  },
                  notification: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          type: {
                            enum: [
                              "push",
                              "email"
                            ],
                            description: 'Use "push" for push messages, or "email" to send out an email.\n                      For more information check the following page: https://paynl.readme.io/reference/accounts-1',
                            type: "string",
                            nullable: true
                          },
                          recipient: {
                            description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). \n        For email, provide a valid email address (XXXX@XXXX.XX).",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "Order.Input.Notification",
                        "x-readme-ref-name": "Order.Input.Notification"
                      }
                    ],
                    nullable: true
                  },
                  stats: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          tool: {
                            description: "The used tool code which can be tracked in the stats.",
                            example: "Tool",
                            type: "string",
                            nullable: true
                          },
                          info: {
                            description: "The used info code which can be tracked in the stats.",
                            example: "Info",
                            type: "string",
                            nullable: true
                          },
                          object: {
                            description: "The object which can be tracked in stats.",
                            example: "Object",
                            type: "string",
                            nullable: true
                          },
                          extra1: {
                            description: "The first free value which can be tracked in the stats.",
                            example: "Extra1",
                            type: "string",
                            nullable: true
                          },
                          extra2: {
                            description: "The second free value which can be tracked in the stats.",
                            example: "Extra2",
                            type: "string",
                            nullable: true
                          },
                          extra3: {
                            description: "The third free value which can be tracked in the stats.",
                            example: "Extra3",
                            type: "string",
                            nullable: true
                          },
                          domainId: {
                            example: "WU-1234-1234",
                            type: "string",
                            nullable: true
                          },
                          promotorId: {
                            type: "integer",
                            nullable: true
                          }
                        },
                        title: "Order.Input.Stats",
                        "x-readme-ref-name": "Order.Input.Stats"
                      }
                    ],
                    nullable: true
                  },
                  transferData: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    },
                    nullable: true
                  }
                },
                title: "Order.Input",
                "x-readme-ref-name": "Order.Input"
              },
              examples: {
                order_minimum: {
                  summary: "Minimum order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Minimal Order",
                    reference: "REF1234",
                    amount: {
                      value: 1450
                    }
                  }
                },
                ideal_ing_order: {
                  summary: "iDEAL + ING Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "iDEAL + ING Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 10,
                      input: {
                        issuerId: "4"
                      }
                    }
                  }
                },
                account_funding_transaction: {
                  summary: "Account Funding Transaction",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Account Funding Transaction",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 10,
                      input: {
                        issuerId: "4"
                      }
                    },
                    customer: {
                      reference: "NL00RABO2098811624"
                    }
                  }
                },
                ideal_fast_checkout: {
                  summary: "iDEAL Fast Checkout Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "iDEAL Fast Checkout",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 10
                    },
                    optimize: {
                      flow: "fastCheckout",
                      shippingAddress: true,
                      billingAddress: true,
                      contactDetails: true
                    }
                  }
                },
                ideal_c2c: {
                  summary: "iDEAL C2C Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "iDEAL C2C",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 10
                    },
                    optimize: {
                      collectorAccount: {
                        method: "iban",
                        iban: {
                          iban: "NL86BANKXXXXXXXXXX",
                          bic: "BANK",
                          owner: "J. Doe"
                        }
                      }
                    }
                  }
                },
                ideal_end2end: {
                  summary: "iDEAL end2end Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "iDEAL end2end",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 10
                    },
                    optimize: {
                      collectorAccount: {
                        method: "iban",
                        iban: {
                          iban: "NL86BANKXXXXXXXXXX",
                          bic: "BANK",
                          owner: "Company BV"
                        }
                      },
                      collectorCompany: {
                        id: "12345",
                        name: "Company BV"
                      }
                    }
                  }
                },
                vvv: {
                  summary: "Direct VVV Giftcard Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Giftcard Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1714,
                      input: {
                        cardNumber: "606436430000000",
                        pincode: "00000"
                      }
                    }
                  }
                },
                pin: {
                  summary: "Direct Instore Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Pin Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1927,
                      input: {
                        terminalCode: "TH-1234-1234"
                      }
                    }
                  }
                },
                directdebit: {
                  summary: "Direct DirectDebit Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Direct Debit Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 137,
                      input: {
                        email: "JohnDoe@pay.nl",
                        firstName: "John",
                        lastName: "Doe",
                        city: "Spijkenisse",
                        iban: "NL00INGB00000000",
                        bic: "INGBNL2A",
                        permissionGiven: true
                      }
                    }
                  }
                },
                klarna: {
                  summary: "Direct Klarna Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Klarna Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1717,
                      input: {
                        countryCode: "NL"
                      }
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678"
                    },
                    order: {
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                klarnaBusiness: {
                  summary: "Direct Klarna Order (Business)",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Klarna Business Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1717,
                      input: {
                        countryCode: "NL"
                      }
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678",
                      company: {
                        name: "Company.",
                        cocNumber: "00000000",
                        vatNumber: "NL000000000B01",
                        country: "NL"
                      }
                    },
                    order: {
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                riverty: {
                  summary: "Direct Riverty Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Riverty Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 2561
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678"
                    },
                    order: {
                      invoiceAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                rivertyBusiness: {
                  summary: "Direct Riverty Order (Business)",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Riverty Business Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 2561
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678",
                      company: {
                        name: "Company.",
                        cocNumber: "00000000",
                        vatNumber: "NL000000000B01",
                        country: "NL"
                      }
                    },
                    order: {
                      invoiceAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                billink: {
                  summary: "Direct Billink Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Billink Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1672
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678"
                    },
                    order: {
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      invoiceAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                billinkBusiness: {
                  summary: "Direct Billink Order (Business)",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Direct Billink Business Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 1672
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678",
                      company: {
                        name: "Company.",
                        cocNumber: "00000000",
                        vatNumber: "NL000000000B01",
                        country: "NL"
                      }
                    },
                    order: {
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      invoiceAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                in3: {
                  summary: "Direct In3 Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "In3 Order",
                    reference: "REF1234",
                    amount: {
                      value: 5e3
                    },
                    paymentMethod: {
                      id: 1813
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678"
                    },
                    order: {
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      }
                    }
                  }
                },
                in3_business: {
                  summary: "Direct In3 Order (Business)",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "In3 Business Order",
                    reference: "REF1234",
                    amount: {
                      value: 25e3
                    },
                    paymentMethod: {
                      id: 3192
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678",
                      company: {
                        name: "Company.",
                        cocNumber: "00000000",
                        vatNumber: "NL000000000B01",
                        country: "NL"
                      }
                    },
                    order: {
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      }
                    }
                  }
                },
                notyd: {
                  summary: "Direct Notyd Order (Business only)",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Notyd Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 2931
                    },
                    customer: {
                      email: "johndoe@example.com",
                      firstname: "John",
                      lastname: "Doe",
                      birthDate: "1999-11-22T00:00:00+01:00",
                      gender: "M",
                      phone: "0612345678",
                      company: {
                        name: "Company.",
                        cocNumber: "00000000",
                        vatNumber: "NL000000000B01",
                        country: "NL"
                      }
                    },
                    order: {
                      deliveryAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      invoiceAddress: {
                        firstName: "John",
                        lastName: "Doe",
                        street: "P.C. Hooftstraat",
                        streetNumber: "100",
                        streetNumberExtension: "A",
                        zipCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL"
                      },
                      products: [
                        {
                          id: "ART1234",
                          description: "Article 1234",
                          type: "ARTICLE",
                          price: {
                            value: 2350
                          },
                          quantity: 1,
                          vatPercentage: 0
                        }
                      ]
                    }
                  }
                },
                creditclick: {
                  summary: "Direct Creditclick Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Creditclick Order",
                    reference: "REF1234",
                    amount: {
                      value: 25e3
                    },
                    paymentMethod: {
                      id: 2107,
                      input: {
                        initials: "J",
                        firstName: "John",
                        lastName: "Doe",
                        gender: "MALE",
                        streetName: "P.C. Hooftstraat",
                        houseNumber: "100",
                        houseNumberAddition: "A",
                        postalCode: "3202XA",
                        city: "Amsterdam",
                        country: "NL",
                        phoneNumber: "0612345678"
                      }
                    }
                  }
                },
                p24: {
                  summary: "Direct Przelewy24 Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "Przelewy24 Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 2151,
                      input: {
                        email: "JohnDoe@pay.nl"
                      }
                    }
                  }
                },
                paybybank: {
                  summary: "Direct PayByBank Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "PayByBank Order",
                    reference: "REF1234",
                    amount: {
                      value: 2350
                    },
                    paymentMethod: {
                      id: 2970,
                      input: {
                        issuer: "ing",
                        country: "nl",
                        psuId: "psu",
                        debtorIban: "NL00INGB0000000"
                      }
                    }
                  }
                },
                spraypay: {
                  summary: "Direct SprayPay Order",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "SprayPay Order",
                    reference: "REF1234",
                    amount: {
                      value: 25e3
                    },
                    paymentMethod: {
                      id: 1987,
                      input: {
                        initials: "J",
                        firstName: "John",
                        lastName: "Doe",
                        gender: "MALE",
                        streetName: "Curieweg",
                        houseNumber: "19",
                        houseNumberAddition: "C",
                        postalCode: "3208 KJ",
                        city: "Spijkenisse",
                        country: "NL",
                        phoneNumber: "0600000000",
                        email: "johndoe@example.com"
                      }
                    }
                  }
                },
                test_case_one: {
                  summary: "Sandbox test case #1",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_1",
                    reference: "TESTREFERENCE1",
                    amount: {
                      value: 10101,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    }
                  }
                },
                test_case_two: {
                  summary: "Sandbox test case #2",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_2",
                    reference: "TESTREFERENCE2",
                    amount: {
                      value: 20202,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    order: {
                      deliveryAddress: {
                        street: "TEST_DELIVERY_STREET",
                        streetNumber: "101",
                        streetNumberExtension: "a, first floor",
                        zipCode: "1122AB",
                        city: "TEST_DELIVERY_CITY",
                        country: "NL",
                        region: "TEST_DELIVERY_REGION"
                      },
                      invoiceAddress: {
                        street: "TEST_INVOICE_STREET",
                        streetNumber: "202",
                        streetNumberExtension: "b, second floor",
                        zipCode: "2233",
                        city: "TEST_INVOICE_CITY",
                        country: "BE",
                        region: "TEST_INVOICE_REGION"
                      }
                    }
                  }
                },
                test_case_three: {
                  summary: "Sandbox test case #3",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_3",
                    reference: "TESTREFERENCE3",
                    amount: {
                      value: 30303,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    customer: {
                      company: {
                        name: "TEST_COMPANY_NAME",
                        cocNumber: "12345678",
                        vatNumber: "NL0123456789",
                        country: "NL"
                      }
                    }
                  }
                },
                test_case_four: {
                  summary: "Sandbox test case #4",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_4",
                    reference: "TESTREFERENCE4",
                    amount: {
                      value: 40404,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    order: {
                      invoiceAddress: {
                        zipCode: "1122",
                        country: "BE"
                      }
                    }
                  }
                },
                test_case_five: {
                  summary: "Sandbox test case #5",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_5",
                    reference: "TESTREFERENCE5",
                    amount: {
                      value: 50505,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    stats: {
                      object: "TEST_PARTNER_VALUE"
                    }
                  }
                },
                test_case_six: {
                  summary: "Sandbox test case #6",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_6",
                    reference: "TESTREFERENCE6",
                    amount: {
                      value: 60606,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    stats: {
                      tool: "TEST_TOOL",
                      info: "TEST_INFO",
                      extra1: "TEST_CUSTOM_EXTRA1",
                      extra2: "TEST_CUSTOM_EXTRA2",
                      extra3: "TEST_CUSTOM_EXTRA3",
                      domainId: "TEST_DOMANID",
                      promotorId: 123456789
                    }
                  }
                },
                test_case_seven: {
                  summary: "Sandbox test case #7",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_7",
                    reference: "TESTREFERENCE7",
                    amount: {
                      value: 70707,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    customer: {
                      gaClientId: "TEST_GA_CLIENT_ID"
                    }
                  }
                },
                test_case_eight: {
                  summary: "Sandbox test case #8",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_DESCRIPTION_8",
                    reference: "TESTREFERENCE8",
                    amount: {
                      value: 80808,
                      currency: "EUR"
                    },
                    paymentMethod: {
                      id: 613
                    },
                    integration: {
                      test: true
                    },
                    customer: {
                      email: "test-email@example.com",
                      trust: 7,
                      reference: "TEST_CUSTOMER_REFERENCE"
                    }
                  }
                },
                test_case_nine: {
                  summary: "Sandbox test case #9",
                  value: {
                    serviceId: "SL-1234-1234",
                    description: "TEST_D\xC9SCR\xCDPT\xCDON_9",
                    reference: "TESTREFERENCE9",
                    amount: {
                      value: 90909,
                      currency: "EUR"
                    },
                    customer: {
                      firstname: "TEST_CUSTOMER_F\xCDRST_N\xC4M\xCA",
                      lastname: "TEST_CUSTOMER_L\xC4ST_N\xC4M\xCA",
                      reference: "TEST_CUSTOMER_R\xCAF\xCAR\xCANC\xCA",
                      company: {
                        name: "TEST_COMP\xC4NY_N\xC2M\xCA"
                      }
                    },
                    order: {
                      deliveryAddress: {
                        street: "TEST_D\xCAL\xCDV\xCARY_STR\xCA\xCAT",
                        streetNumberExtension: "\xE5, f\u012Brst fl\xF8\xF8r",
                        city: "TEST_D\xCAL\xCDV\xCARY_C\xCETY",
                        region: "TEST_D\xCAL\xCDV\xCARY_R\u0118G\xCDON"
                      },
                      invoiceAddress: {
                        street: "TEST_\xCDNV\u0152\xCDC\xCA_STR\xCA\xCAT",
                        streetNumberExtension: "b, s\xEAc\xF5nd fl\xF2\xF2r",
                        city: "TEST_\xCDNV\u0152\xCDC\xCA_C\xCDTY",
                        region: "TEST_\xCDNV\u0152\xCDC\xCA_R\xCAG\xCD\xD2N"
                      },
                      products: [
                        {
                          description: "TEST_PR\xD8D\u016ACT_1_D\u0116SCR\u012EPT\xCF\u014CN",
                          type: "ARTICLE",
                          price: {
                            value: 90909
                          },
                          quantity: 1
                        }
                      ]
                    },
                    stats: {
                      tool: "TEST_T\u014C\u014CL",
                      info: "TEST_\xCDNF\u014C",
                      object: "TEST_P\xC2RTN\xCBR_V\xC6L\xD9\u0118",
                      extra1: "TEST_C\xD9ST\xD5M_\xCAXTR\xC41",
                      extra2: "TEST_C\xD9ST\xD5M_\xCAXTR\xC42",
                      extra3: "TEST_C\xD9ST\xD5M_\xCAXTR\xC43",
                      domainId: "TESTD\u014CM\xC4\xCDN\xCDD"
                    },
                    transferData: {
                      test: "TEST_TR\xC0NSF\xCAR_D\xC2T\xC0_IT\u0118M"
                    }
                  }
                }
              }
            }
          },
          required: false
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/capture/amount": {
      patch: {
        operationId: "api_capture_amount",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order captured",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Captured order (with supplier and checkoutData)",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 100,
                        action: "PAID"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 100,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27b7511b9",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 100,
                            action: "PAID"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          supplierData: []
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
                    }
                  },
                  partial_success: {
                    summary: "Partially captured",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 95,
                        action: "AUTHORIZE"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 45,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 55,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27c9bd541",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 97,
                            action: "AUTHORIZE"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 45,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 55,
                            currency: "EUR"
                          },
                          supplierData: []
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:CaptureAmount",
        description: "Capture a specific amount on an order that has an active reservation (Status 95). Reservations are commonly used for CreditCard and Buy now, Pay later payments. With this API, you can capture a specific amount from the order while the reservation remains active.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  amount: {
                    description: "The desired amount, in cents, to be captured.",
                    example: 1350,
                    type: "integer"
                  }
                },
                title: "Order.CaptureAmountInputDto",
                "x-readme-ref-name": "Order.CaptureAmountInputDto"
              }
            },
            "application/json": {
              schema: {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  amount: {
                    description: "The desired amount, in cents, to be captured.",
                    example: 1350,
                    type: "integer"
                  }
                },
                title: "Order.CaptureAmountInputDto",
                "x-readme-ref-name": "Order.CaptureAmountInputDto"
              }
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/capture/products": {
      patch: {
        operationId: "api_capture_products",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order captured",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Captured order (with supplier and checkoutData)",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 100,
                        action: "PAID"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 100,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27b7511b9",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 100,
                            action: "PAID"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          supplierData: []
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
                    }
                  },
                  partial_success: {
                    summary: "Partially captured",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 95,
                        action: "AUTHORIZE"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 45,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 55,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27c9bd541",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 97,
                            action: "AUTHORIZE"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 45,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 55,
                            currency: "EUR"
                          },
                          supplierData: []
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:CaptureProducts",
        description: "Capture an order that has an active reservation (Status 95). Reservations are commonly used for CreditCard and Buy now, Pay later payments. By using this API, the entire order will be captured.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      description: "",
                      deprecated: false,
                      properties: {
                        id: {
                          description: "The externalId of the product to be captured.",
                          example: "Product1",
                          type: "string"
                        },
                        quantity: {
                          description: "The quantity of this product to be captured.",
                          example: 2,
                          type: "number"
                        }
                      },
                      title: "ProductQuantityInputDto",
                      "x-readme-ref-name": "ProductQuantityInputDto"
                    }
                  }
                },
                title: "Order.CaptureProductsInputDto",
                "x-readme-ref-name": "Order.CaptureProductsInputDto"
              }
            },
            "application/json": {
              schema: {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      description: "",
                      deprecated: false,
                      properties: {
                        id: {
                          description: "The externalId of the product to be captured.",
                          example: "Product1",
                          type: "string"
                        },
                        quantity: {
                          description: "The quantity of this product to be captured.",
                          example: 2,
                          type: "number"
                        }
                      },
                      title: "ProductQuantityInputDto",
                      "x-readme-ref-name": "ProductQuantityInputDto"
                    }
                  }
                },
                title: "Order.CaptureProductsInputDto",
                "x-readme-ref-name": "Order.CaptureProductsInputDto"
              }
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/status": {
      get: {
        operationId: "api_get_status",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order status",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Order",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 50,
                        action: "PENDING"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27a4a35fd",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 50,
                            action: "PENDING"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          supplierData: null
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
                    }
                  },
                  captured_with_checkout_data: {
                    summary: "Captured order (with supplier and checkoutData)",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 100,
                        action: "PAID"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 100,
                        currency: "EUR"
                      },
                      checkoutData: {
                        customer: {
                          email: "JohnDoe@pay.nl",
                          firstname: "John",
                          lastname: "Doe",
                          dateOfBirth: "1999-11-22",
                          gender: "M",
                          phone: "+3161234567890",
                          locale: "nl_NL",
                          ipAddress: "0:0:0:0:0:0:0:1",
                          reference: "Cstmr12",
                          company: {
                            name: "Pay.",
                            cocNumber: "24283498",
                            vatNumber: "NL807960147B01",
                            country: "NL"
                          }
                        },
                        billingAddress: {
                          firstName: "John",
                          lastName: "Doe",
                          streetName: "Curieweg",
                          streetNumber: "19",
                          streetNumberAddition: "C",
                          zipCode: "3208 KJ",
                          city: "Spijkenisse",
                          countryCode: "NL",
                          regionCode: "nl-ZH"
                        },
                        shippingAddress: {
                          firstName: "John",
                          lastName: "Doe",
                          streetName: "Curieweg",
                          streetNumber: "19",
                          streetNumberAddition: "C",
                          zipCode: "3208 KJ",
                          city: "Spijkenisse",
                          countryCode: "NL",
                          regionCode: "nl-ZH"
                        }
                      },
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27be73a4b",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: "iban",
                          customerKey: "aefdd1bea7e6f855b74ea7fbe19ba0a646789777",
                          customerId: "NL22INGB6512284550",
                          customerName: "John Doe",
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 100,
                            action: "PAID"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          supplierData: {
                            contactDetails: {
                              email: "JohnDoe@mail.nl",
                              firstName: "John",
                              lastName: "Doe",
                              phoneNumber: "+3161234567890"
                            },
                            invoiceAddress: {
                              firstName: "John",
                              lastName: "Doe",
                              street: "Curieweg",
                              houseNumber: "19",
                              addition: "C",
                              postalCode: "3208 KJ",
                              city: "Spijkenisse",
                              companyName: "Pay.",
                              countryName: "Netherlands"
                            },
                            shippingAddress: {
                              firstName: "John",
                              lastName: "Doe",
                              street: "Curieweg",
                              houseNumber: "19",
                              addition: "C",
                              postalCode: "3208 KJ",
                              city: "Spijkenisse",
                              companyName: "Pay.",
                              countryName: "Netherlands"
                            }
                          }
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "410": {
            description: "Indicates that this resource is no longer available for use",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Gone: {
                    summary: "The requested resource is no longer available",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1410",
                      title: "The requested resource is no longer available",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Status",
        description: "Retrieve the current status of an order along with its corresponding payment attempts.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/approve": {
      patch: {
        operationId: "api_approve_order",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order approved",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Approved order",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 100,
                        action: "PAID"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 100,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27a627ec2",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 100,
                            action: "PAID"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          supplierData: null
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Approve",
        description: "Approve an order that is flagged for a risk check by the Verify module, continuing the regular order flow.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {}
            },
            "application/json": {
              schema: {}
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/decline": {
      patch: {
        operationId: "api_decline_order",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order declined",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Declined order",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: -64,
                        action: "CANCEL"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27ac52cf8",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: -64,
                            action: "CANCEL"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          supplierData: null
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Decline",
        description: "Decline an order that is flagged for a risk check by the Verify module, refunding all payments made on this order.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {}
            },
            "application/json": {
              schema: {}
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/capture": {
      patch: {
        operationId: "api_capture_order",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order captured",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Captured order (with supplier and checkoutData)",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: 100,
                        action: "PAID"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 100,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27b7511b9",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: 100,
                            action: "PAID"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          supplierData: []
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Capture",
        description: "Capture an order that has an active reservation (Status 95). Reservations are commonly used for CreditCard and Buy now, Pay later payments. By using this API, the entire order will be captured.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {}
            },
            "application/json": {
              schema: {}
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/void": {
      patch: {
        operationId: "api_void_order",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order voided",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Voided order",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: -90,
                        action: "CANCEL"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27d9bb14e",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: -90,
                            action: "CANCEL"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          supplierData: null
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Void",
        description: "Cancel an order with an active reservation (Status 95), voiding all payments made for that order as well.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {}
            },
            "application/json": {
              schema: {}
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    },
    "/v1/orders/{id}/abort": {
      patch: {
        operationId: "api_abort_order",
        tags: [
          "Order"
        ],
        responses: {
          "200": {
            description: "Order status",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      description: "The unique identifier of your order.",
                      example: "655b2da5-5223-8f32-1aee-737862302XXX",
                      type: "string"
                    },
                    serviceId: {
                      description: "The Service ID used for creating this order",
                      example: "SL-1234-1234",
                      type: "string"
                    },
                    description: {
                      description: "The description given for this order.",
                      example: "Instore Terminal Order #27",
                      type: "string",
                      nullable: true
                    },
                    reference: {
                      description: "The reference given for this order.",
                      example: "REF1234",
                      type: "string",
                      nullable: true
                    },
                    manualTransferCode: {
                      description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
                      example: "1234 1234 1234 1234",
                      type: "string"
                    },
                    orderId: {
                      description: "The order ID as you would see it within the PAY. platform.",
                      example: "52305407020X2325",
                      type: "string"
                    },
                    uuid: {
                      description: "The UUID that can be used to create a QR code for this order.",
                      example: "ad0e7378-6230-2325-5230-5407020a2XXX",
                      type: "string"
                    },
                    customerKey: {
                      readOnly: true,
                      description: "An identifier for the customer",
                      type: "string",
                      nullable: true
                    },
                    status: {
                      description: "The status of the order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        code: {
                          description: "The numeric status code.",
                          example: 20,
                          type: "integer",
                          nullable: true
                        },
                        action: {
                          description: "The human readable status string",
                          example: "PENDING",
                          type: "string",
                          nullable: true
                        }
                      }
                    },
                    receipt: {
                      readOnly: true,
                      description: "Base64 encoded string of the receipt for this order when it's paid.",
                      example: "<base64 string>",
                      type: "string",
                      nullable: true
                    },
                    integration: {
                      description: "Information about your integration.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        test: {
                          description: "Whether this order was created in Test Mode, defaults to false.",
                          type: "boolean"
                        }
                      }
                    },
                    amount: {
                      description: "The amount for this order.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    authorizedAmount: {
                      description: "The amount of the order that is authorized.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    capturedAmount: {
                      description: "The amount of the order that is captured.",
                      type: "object",
                      deprecated: false,
                      properties: {
                        value: {
                          example: 1,
                          type: "integer"
                        },
                        currency: {
                          example: "EUR",
                          type: "string"
                        }
                      }
                    },
                    checkoutData: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            customer: {
                              description: "The customer provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                email: {
                                  example: "johndoe@example.com",
                                  type: "string",
                                  nullable: true
                                },
                                firstname: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastname: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                dateOfBirth: {
                                  example: "1999-11-22",
                                  type: "string",
                                  format: "date-time",
                                  nullable: true
                                },
                                gender: {
                                  example: "O",
                                  type: "string",
                                  nullable: true
                                },
                                phone: {
                                  example: "06-12345678",
                                  type: "string",
                                  nullable: true
                                },
                                locale: {
                                  example: "nl_BE",
                                  type: "string",
                                  nullable: true
                                },
                                ipAddress: {
                                  example: "192.168.0.1",
                                  type: "string",
                                  nullable: true
                                },
                                reference: {
                                  example: "Cstmr12",
                                  type: "string",
                                  nullable: true
                                },
                                company: {
                                  anyOf: [
                                    {
                                      type: "object",
                                      description: "",
                                      deprecated: false,
                                      properties: {
                                        name: {
                                          example: "Pay.",
                                          type: "string",
                                          nullable: true
                                        },
                                        cocNumber: {
                                          example: "24283498",
                                          type: "string",
                                          nullable: true
                                        },
                                        vatNumber: {
                                          example: "NL807960147B01",
                                          type: "string",
                                          nullable: true
                                        },
                                        country: {
                                          example: "NL",
                                          type: "string",
                                          nullable: true
                                        }
                                      },
                                      title: "Order.Output.CheckoutData.Company",
                                      "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                                    }
                                  ],
                                  nullable: true
                                }
                              }
                            },
                            billingAddress: {
                              readOnly: true,
                              description: "The billing address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            },
                            shippingAddress: {
                              description: "The delivery address provided by the supplier",
                              type: "object",
                              deprecated: false,
                              properties: {
                                firstName: {
                                  example: "John",
                                  type: "string",
                                  nullable: true
                                },
                                lastName: {
                                  example: "Doe",
                                  type: "string",
                                  nullable: true
                                },
                                streetName: {
                                  example: "Curieweg",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumber: {
                                  example: "19",
                                  type: "string",
                                  nullable: true
                                },
                                streetNumberAddition: {
                                  example: "C",
                                  type: "string",
                                  nullable: true
                                },
                                zipCode: {
                                  example: "3208 KJ",
                                  type: "string",
                                  nullable: true
                                },
                                city: {
                                  example: "Spijkenisse",
                                  type: "string",
                                  nullable: true
                                },
                                countryCode: {
                                  example: "NL",
                                  type: "string",
                                  nullable: true
                                },
                                regionCode: {
                                  example: "nl-ZH",
                                  type: "string",
                                  nullable: true
                                }
                              }
                            }
                          },
                          title: "Order.Output.CheckoutData",
                          "x-readme-ref-name": "Order.Output.CheckoutData"
                        }
                      ],
                      readOnly: true,
                      description: "Standardized customer data provided by the supplier",
                      nullable: true
                    },
                    payments: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            description: "The unique ID of this payment",
                            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                            type: "string"
                          },
                          paymentMethod: {
                            description: "Information of this payments' payment method.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              id: {
                                type: "integer",
                                nullable: true
                              },
                              input: {
                                type: "array",
                                items: {
                                  type: "string"
                                }
                              }
                            }
                          },
                          customerType: {
                            type: "string",
                            nullable: true
                          },
                          customerKey: {
                            description: "A hashed string identifying the customer itself without exposing sensitive data.",
                            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                            type: "string",
                            nullable: true
                          },
                          customerId: {
                            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                            example: "GB33BUKB20201555555555",
                            type: "string",
                            nullable: true
                          },
                          customerName: {
                            description: "The name of the customer as known by the payment method.",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            description: "The IP Address of the customer that interacted with this payment.",
                            type: "string",
                            nullable: true
                          },
                          secureStatus: {
                            description: "Whether or not the customer was 3DS challenged.",
                            type: "boolean"
                          },
                          paymentVerificationMethod: {
                            description: "A numeric id of how this payment was verified.",
                            type: "integer",
                            nullable: true
                          },
                          status: {
                            description: "The status of this payment.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              code: {
                                description: "The numeric status code.",
                                example: 20,
                                type: "integer",
                                nullable: true
                              },
                              action: {
                                description: "The human readable status string",
                                example: "PENDING",
                                type: "string",
                                nullable: true
                              }
                            }
                          },
                          currencyAmount: {
                            description: "The amount of this payment in the currency of the order.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          amount: {
                            description: "The amount of this payment in the currency in which it was processed.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          authorizedAmount: {
                            description: "The amount of this payment that is authorized.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          capturedAmount: {
                            description: "The amount of this payment that is captured.",
                            type: "object",
                            deprecated: false,
                            properties: {
                              value: {
                                example: 1,
                                type: "integer"
                              },
                              currency: {
                                example: "EUR",
                                type: "string"
                              }
                            }
                          },
                          supplierData: {
                            description: "Relevant data returned by the supplier.",
                            type: "array",
                            items: {
                              type: "string"
                            },
                            nullable: true
                          }
                        },
                        title: "Order.Output.Payment",
                        "x-readme-ref-name": "Order.Output.Payment"
                      },
                      readOnly: true,
                      description: "The payments that are linked to this order.",
                      type: "array"
                    },
                    createdAt: {
                      description: "The date-time at which this order was created in our system.",
                      type: "string",
                      format: "date-time"
                    },
                    createdBy: {
                      description: "The API token or Service ID that created this order.",
                      type: "string",
                      nullable: true
                    },
                    modifiedAt: {
                      description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    modifiedBy: {
                      description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
                      type: "string",
                      nullable: true
                    },
                    expiresAt: {
                      description: "The date-time at which this order expires.",
                      type: "string",
                      format: "date-time"
                    },
                    completedAt: {
                      description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
                      type: "string",
                      format: "date-time",
                      nullable: true
                    },
                    links: {
                      readOnly: true,
                      description: "The links that can be used to interact with this order.",
                      example: {
                        redirect: "<an_url>",
                        status: "<an_url>",
                        cancel: "<an_url>"
                      },
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  title: "Order.Output",
                  "x-readme-ref-name": "Order.Output"
                },
                examples: {
                  success: {
                    summary: "Aborted order",
                    value: {
                      id: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      serviceId: "SL-1234-1234",
                      description: "Instore Terminal Order #27",
                      reference: "REF1234",
                      manualTransferCode: "0000 0000 0000 0000",
                      orderId: "0000",
                      uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
                      customerKey: null,
                      status: {
                        code: -90,
                        action: "CANCEL"
                      },
                      receipt: null,
                      integration: {
                        test: false
                      },
                      amount: {
                        value: 100,
                        currency: "EUR"
                      },
                      authorizedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      capturedAmount: {
                        value: 0,
                        currency: "EUR"
                      },
                      checkoutData: null,
                      payments: [
                        {
                          id: "018f9f33-d564-75a3-b2eb-20e27dba4d6a",
                          paymentMethod: {
                            id: 10,
                            input: {
                              issuerId: "4"
                            }
                          },
                          customerType: null,
                          customerKey: null,
                          customerId: null,
                          customerName: null,
                          ipAddress: "127.0.0.1",
                          secureStatus: false,
                          paymentVerificationMethod: 21,
                          status: {
                            code: -90,
                            action: "CANCEL"
                          },
                          currencyAmount: {
                            value: 100,
                            currency: "EUR"
                          },
                          amount: {
                            value: 100,
                            currency: "EUR"
                          },
                          authorizedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          capturedAmount: {
                            value: 0,
                            currency: "EUR"
                          },
                          supplierData: null
                        }
                      ],
                      createdAt: "2024-05-22T09:28:45+02:00",
                      createdBy: "AT-1234-1234",
                      modifiedAt: "2024-05-22T09:29:45+02:00",
                      modifiedBy: "TGU 123456",
                      expiresAt: "2024-05-22T09:43:45+02:00",
                      completedAt: null,
                      links: {
                        status: "<status_url>",
                        abort: "<abort_url>",
                        redirect: "<redirect_url>"
                      }
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
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  BadRequest: {
                    summary: "Bad Request",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1400",
                      title: "Bad request",
                      detail: "The given input is malformed"
                    }
                  }
                }
              }
            }
          },
          "401": {
            description: "Unauthorized. Supplied credentials are invalid",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Unauthorized: {
                    summary: "Supplier credentials are invalid",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1401",
                      title: "Authentication is needed to access this resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "403": {
            description: "Forbidden. Supplied credentials have no rights",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  Forbidden: {
                    summary: "Supplier credentials have no rights",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1403",
                      title: "Access denied",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "404": {
            description: "Resource not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotFound: {
                    summary: "The requested resource is not found",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1404",
                      title: "The requested resource is not found",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "405": {
            description: "Used HTTP method is not allowed",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  MethodNotAllowed: {
                    summary: "The used HTTP method is not allowed",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1405",
                      title: "The request method is not supported by the target resource",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "406": {
            description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  NotAcceptable: {
                    summary: "The supplied content type in the accept parameter in the header is not supported",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1406",
                      title: "There is no content that is acceptable by this server",
                      detail: ""
                    }
                  }
                }
              }
            }
          },
          "422": {
            description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  UnprocessableEntity: {
                    summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1422",
                      title: "Unable to process the request",
                      detail: "field: cannot be empty",
                      violations: [
                        {
                          propertyPath: "field",
                          message: "cannot be empty"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "429": {
            description: "Rate limit reached.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  TooManyRequests: {
                    summary: "Rate limit reached.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1429",
                      title: "Too many requests",
                      detail: "Rate limit reached, try again in 15 minutes."
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "An internal error occurred.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "An internal error occurred.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1500",
                      title: "An internal error has occurred",
                      detail: "Failed to process request due to X"
                    }
                  }
                }
              }
            }
          },
          "503": {
            description: "The server is currently unable to handle your request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    type: {
                      default: "https://developer.pay.nl/docs/error-codes",
                      example: "https://developer.pay.nl/docs/error-codes",
                      type: "string"
                    },
                    code: {
                      type: "string"
                    },
                    title: {
                      type: "string"
                    },
                    detail: {
                      type: "string"
                    },
                    violations: {
                      items: {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          propertyPath: {
                            type: "string",
                            nullable: true
                          },
                          message: {
                            type: "string"
                          }
                        },
                        title: "ViolationOutput",
                        "x-readme-ref-name": "ViolationOutput"
                      },
                      type: "array"
                    },
                    trace: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  },
                  title: "ErrorOutput",
                  "x-readme-ref-name": "ErrorOutput"
                },
                examples: {
                  InternalServerError: {
                    summary: "The server is currently unable to handle your request.",
                    value: {
                      type: "https://developer.pay.nl/docs/error-codes",
                      code: "PAY-1503",
                      title: "The server is unable to handle your request, try again later.",
                      detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                    }
                  }
                }
              }
            }
          }
        },
        summary: "Order:Abort",
        description: "Abort an order, halting the regular order flow and voiding any payment attempts made to fulfill this order.",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "The id of the order",
            required: true,
            deprecated: false,
            allowEmptyValue: false,
            schema: {
              type: "string",
              example: "9f5cc332-8cd7-4242-b9c8-51941aa12837"
            },
            style: "simple",
            explode: false,
            allowReserved: false
          }
        ],
        requestBody: {
          description: "The updated Order resource",
          content: {
            "application/merge-patch+json": {
              schema: {}
            },
            "application/json": {
              schema: {}
            }
          },
          required: true
        },
        deprecated: false
      },
      parameters: []
    }
  },
  components: {
    schemas: {
      AddressOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          firstName: {
            example: "John",
            type: "string",
            nullable: true
          },
          lastName: {
            example: "Doe",
            type: "string",
            nullable: true
          },
          streetName: {
            example: "Curieweg",
            type: "string",
            nullable: true
          },
          streetNumber: {
            example: "19",
            type: "string",
            nullable: true
          },
          streetNumberAddition: {
            example: "C",
            type: "string",
            nullable: true
          },
          zipCode: {
            example: "3208 KJ",
            type: "string",
            nullable: true
          },
          city: {
            example: "Spijkenisse",
            type: "string",
            nullable: true
          },
          countryCode: {
            example: "NL",
            type: "string",
            nullable: true
          },
          regionCode: {
            example: "nl-ZH",
            type: "string",
            nullable: true
          }
        },
        title: "AddressOutputDto",
        "x-readme-ref-name": "AddressOutputDto"
      },
      AmountOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          value: {
            example: 1,
            type: "integer"
          },
          currency: {
            example: "EUR",
            type: "string"
          }
        },
        title: "AmountOutputDto",
        "x-readme-ref-name": "AmountOutputDto"
      },
      ApplicationOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          name: {
            example: "Application name",
            type: "string"
          },
          version: {
            example: "1.2.1",
            type: "string"
          }
        },
        title: "ApplicationOutputDto",
        "x-readme-ref-name": "ApplicationOutputDto"
      },
      CheckoutDataOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          customer: {
            description: "The customer provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              email: {
                example: "johndoe@example.com",
                type: "string",
                nullable: true
              },
              firstname: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastname: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              dateOfBirth: {
                example: "1999-11-22",
                type: "string",
                format: "date-time",
                nullable: true
              },
              gender: {
                example: "O",
                type: "string",
                nullable: true
              },
              phone: {
                example: "06-12345678",
                type: "string",
                nullable: true
              },
              locale: {
                example: "nl_BE",
                type: "string",
                nullable: true
              },
              ipAddress: {
                example: "192.168.0.1",
                type: "string",
                nullable: true
              },
              reference: {
                example: "Cstmr12",
                type: "string",
                nullable: true
              },
              company: {
                anyOf: [
                  {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      name: {
                        example: "Pay.",
                        type: "string",
                        nullable: true
                      },
                      cocNumber: {
                        example: "24283498",
                        type: "string",
                        nullable: true
                      },
                      vatNumber: {
                        example: "NL807960147B01",
                        type: "string",
                        nullable: true
                      },
                      country: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      }
                    },
                    title: "Order.Output.CheckoutData.Company",
                    "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                  }
                ],
                nullable: true
              }
            }
          },
          billingAddress: {
            readOnly: true,
            description: "The billing address provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              firstName: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastName: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              streetName: {
                example: "Curieweg",
                type: "string",
                nullable: true
              },
              streetNumber: {
                example: "19",
                type: "string",
                nullable: true
              },
              streetNumberAddition: {
                example: "C",
                type: "string",
                nullable: true
              },
              zipCode: {
                example: "3208 KJ",
                type: "string",
                nullable: true
              },
              city: {
                example: "Spijkenisse",
                type: "string",
                nullable: true
              },
              countryCode: {
                example: "NL",
                type: "string",
                nullable: true
              },
              regionCode: {
                example: "nl-ZH",
                type: "string",
                nullable: true
              }
            }
          },
          shippingAddress: {
            description: "The delivery address provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              firstName: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastName: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              streetName: {
                example: "Curieweg",
                type: "string",
                nullable: true
              },
              streetNumber: {
                example: "19",
                type: "string",
                nullable: true
              },
              streetNumberAddition: {
                example: "C",
                type: "string",
                nullable: true
              },
              zipCode: {
                example: "3208 KJ",
                type: "string",
                nullable: true
              },
              city: {
                example: "Spijkenisse",
                type: "string",
                nullable: true
              },
              countryCode: {
                example: "NL",
                type: "string",
                nullable: true
              },
              regionCode: {
                example: "nl-ZH",
                type: "string",
                nullable: true
              }
            }
          }
        },
        title: "CheckoutDataOutputDto",
        "x-readme-ref-name": "CheckoutDataOutputDto"
      },
      CompanyOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          name: {
            example: "Pay.",
            type: "string",
            nullable: true
          },
          cocNumber: {
            example: "24283498",
            type: "string",
            nullable: true
          },
          vatNumber: {
            example: "NL807960147B01",
            type: "string",
            nullable: true
          },
          country: {
            example: "NL",
            type: "string",
            nullable: true
          }
        },
        title: "CompanyOutputDto",
        "x-readme-ref-name": "CompanyOutputDto"
      },
      ContactOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          email: {
            example: "johndoe@example.com",
            type: "string",
            nullable: true
          },
          name: {
            example: "John Doe",
            type: "string",
            nullable: true
          },
          lastname: {
            example: "Doe",
            type: "string",
            nullable: true
          },
          initials: {
            example: "J",
            type: "string",
            nullable: true
          },
          date_of_birth: {
            example: "1999-07-13",
            type: "string",
            nullable: true
          },
          gender: {
            example: "M",
            type: "string",
            nullable: true
          },
          phone_number: {
            example: "06-12345678",
            type: "string",
            nullable: true
          },
          language: {
            example: "nl",
            type: "string",
            nullable: true
          }
        },
        title: "ContactOutputDto",
        "x-readme-ref-name": "ContactOutputDto"
      },
      CustomerOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          email: {
            example: "johndoe@example.com",
            type: "string",
            nullable: true
          },
          firstname: {
            example: "John",
            type: "string",
            nullable: true
          },
          lastname: {
            example: "Doe",
            type: "string",
            nullable: true
          },
          dateOfBirth: {
            example: "1999-11-22",
            type: "string",
            format: "date-time",
            nullable: true
          },
          gender: {
            example: "O",
            type: "string",
            nullable: true
          },
          phone: {
            example: "06-12345678",
            type: "string",
            nullable: true
          },
          locale: {
            example: "nl_BE",
            type: "string",
            nullable: true
          },
          ipAddress: {
            example: "192.168.0.1",
            type: "string",
            nullable: true
          },
          reference: {
            example: "Cstmr12",
            type: "string",
            nullable: true
          },
          company: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Pay.",
                    type: "string",
                    nullable: true
                  },
                  cocNumber: {
                    example: "24283498",
                    type: "string",
                    nullable: true
                  },
                  vatNumber: {
                    example: "NL807960147B01",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.Output.CheckoutData.Company",
                "x-readme-ref-name": "Order.Output.CheckoutData.Company"
              }
            ],
            nullable: true
          }
        },
        title: "CustomerOutputDto",
        "x-readme-ref-name": "CustomerOutputDto"
      },
      EnduserOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          ip_address: {
            example: "127.0.0.1",
            type: "string"
          },
          accept_language: {
            example: "en-US",
            type: "string"
          },
          useragent: {
            example: "Mozilla/5.0 (Mobile; rv:17.0) Gecko/20100101 Firefox/17.0",
            type: "string"
          }
        },
        title: "EnduserOutputDto",
        "x-readme-ref-name": "EnduserOutputDto"
      },
      IntegrationOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          test: {
            description: "Whether this order was created in Test Mode, defaults to false.",
            type: "boolean"
          }
        },
        title: "IntegrationOutputDto",
        "x-readme-ref-name": "IntegrationOutputDto"
      },
      LinkOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          href: {
            type: "string"
          },
          type: {
            type: "string"
          },
          rel: {
            type: "string"
          }
        },
        title: "LinkOutputDto",
        "x-readme-ref-name": "LinkOutputDto"
      },
      LocaleOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          code: {
            type: "string"
          },
          name: {
            type: "string"
          },
          acceptLanguage: {
            type: "string"
          },
          contentLanguage: {
            type: "string"
          },
          countryImageUrls: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        title: "LocaleOutputDto",
        "x-readme-ref-name": "LocaleOutputDto"
      },
      MasterSwitch: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            readOnly: true,
            type: "string"
          },
          paymentMethod: {
            type: "string",
            nullable: true
          },
          setting: {
            type: "string"
          },
          operation: {
            type: "string",
            enum: [
              "prepend",
              "append",
              "set",
              "remove"
            ]
          },
          value: {
            type: "string"
          }
        },
        title: "MasterSwitch",
        "x-readme-ref-name": "MasterSwitch"
      },
      "MasterSwitch.MasterSwitchInputDTO": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          paymentMethod: {
            description: "The id of the payment method, 0 for global",
            example: 10,
            type: "integer"
          },
          setting: {
            description: "The payment setting to override",
            example: "methodEnabled",
            type: "string"
          },
          operation: {
            description: "The operation that this master switch should execute",
            example: "set",
            type: "string",
            enum: [
              "prepend",
              "append",
              "set",
              "remove"
            ]
          },
          value: {
            description: "The value that the operation should use",
            example: "false",
            type: "string"
          }
        },
        title: "MasterSwitch.MasterSwitchInputDTO",
        "x-readme-ref-name": "MasterSwitch.MasterSwitchInputDTO"
      },
      "MasterSwitch.MasterSwitchOutputDTO": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The internal ID of this master switch",
            example: 1337,
            type: "string"
          },
          paymentMethod: {
            description: "The payment method for this master switch",
            example: 10,
            type: "integer"
          },
          setting: {
            description: "The setting that this master switch overrides",
            example: "routeOrder",
            type: "string"
          },
          operation: {
            description: "The operation that this master switch performs",
            example: "remove",
            type: "string",
            enum: [
              "prepend",
              "append",
              "set",
              "remove"
            ]
          },
          value: {
            description: "The value that the operation uses",
            example: 52,
            type: "string"
          }
        },
        title: "MasterSwitch.MasterSwitchOutputDTO",
        "x-readme-ref-name": "MasterSwitch.MasterSwitchOutputDTO"
      },
      "Merchant.MerchantOutputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          },
          publicContacts: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                type: {
                  type: "string"
                },
                value: {
                  type: "string"
                },
                description: {
                  type: "string"
                }
              },
              title: "PublicContactOutputDto",
              "x-readme-ref-name": "PublicContactOutputDto"
            }
          },
          names: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                name: {
                  type: "string"
                },
                type: {
                  type: "string"
                }
              },
              title: "MerchantNameOutputDto",
              "x-readme-ref-name": "MerchantNameOutputDto"
            }
          },
          tokens: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                token: {
                  type: "string"
                },
                validateIp: {
                  type: "boolean"
                },
                ipAddresses: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  nullable: true
                }
              },
              title: "MerchantTokenOutputDto",
              "x-readme-ref-name": "MerchantTokenOutputDto"
            }
          },
          bankAccounts: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                bankAccountNumber: {
                  type: "string"
                },
                bankAccountHolder: {
                  type: "string"
                },
                bic: {
                  type: "string",
                  nullable: true
                }
              },
              title: "MerchantBankAccountOutputDto",
              "x-readme-ref-name": "MerchantBankAccountOutputDto"
            }
          },
          bankAccountId: {
            type: "string",
            nullable: true
          },
          layoutId: {
            type: "string",
            nullable: true
          },
          address: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  street: {
                    type: "string"
                  },
                  houseNumber: {
                    type: "string"
                  },
                  houseNumberAddition: {
                    type: "string",
                    nullable: true
                  },
                  postalCode: {
                    type: "string"
                  },
                  city: {
                    type: "string"
                  },
                  countryCode: {
                    type: "string"
                  }
                },
                title: "MerchantAddressOutputDto",
                "x-readme-ref-name": "MerchantAddressOutputDto"
              }
            ],
            nullable: true
          },
          validUntil: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          parentMerchantId: {
            type: "string",
            nullable: true
          },
          managerMerchantId: {
            type: "string",
            nullable: true
          }
        },
        title: "Merchant.MerchantOutputDto",
        "x-readme-ref-name": "Merchant.MerchantOutputDto"
      },
      MerchantAddressOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          street: {
            type: "string"
          },
          houseNumber: {
            type: "string"
          },
          houseNumberAddition: {
            type: "string",
            nullable: true
          },
          postalCode: {
            type: "string"
          },
          city: {
            type: "string"
          },
          countryCode: {
            type: "string"
          }
        },
        title: "MerchantAddressOutputDto",
        "x-readme-ref-name": "MerchantAddressOutputDto"
      },
      MerchantBankAccountOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          bankAccountNumber: {
            type: "string"
          },
          bankAccountHolder: {
            type: "string"
          },
          bic: {
            type: "string",
            nullable: true
          }
        },
        title: "MerchantBankAccountOutputDto",
        "x-readme-ref-name": "MerchantBankAccountOutputDto"
      },
      MerchantNameOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          },
          type: {
            type: "string"
          }
        },
        title: "MerchantNameOutputDto",
        "x-readme-ref-name": "MerchantNameOutputDto"
      },
      MerchantOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: "M-3914-2321",
            type: "string"
          },
          name: {
            example: "John Doe Farm Equipment",
            type: "string"
          }
        },
        title: "MerchantOutputDto",
        "x-readme-ref-name": "MerchantOutputDto"
      },
      MerchantTokenOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          token: {
            type: "string"
          },
          validateIp: {
            type: "boolean"
          },
          ipAddresses: {
            type: "array",
            items: {
              type: "string"
            },
            nullable: true
          }
        },
        title: "MerchantTokenOutputDto",
        "x-readme-ref-name": "MerchantTokenOutputDto"
      },
      Order: {
        type: "object",
        description: "",
        deprecated: false,
        title: "Order",
        "x-readme-ref-name": "Order"
      },
      "Order.CaptureAmountInputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          amount: {
            description: "The desired amount, in cents, to be captured.",
            example: 1350,
            type: "integer"
          }
        },
        title: "Order.CaptureAmountInputDto",
        "x-readme-ref-name": "Order.CaptureAmountInputDto"
      },
      "Order.CaptureProductsInputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          products: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  description: "The externalId of the product to be captured.",
                  example: "Product1",
                  type: "string"
                },
                quantity: {
                  description: "The quantity of this product to be captured.",
                  example: 2,
                  type: "number"
                }
              },
              title: "ProductQuantityInputDto",
              "x-readme-ref-name": "ProductQuantityInputDto"
            }
          }
        },
        title: "Order.CaptureProductsInputDto",
        "x-readme-ref-name": "Order.CaptureProductsInputDto"
      },
      "Order.CheckoutOutputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          payment_data: {
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              amount: {
                readOnly: true,
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  value: {
                    example: 1,
                    type: "integer"
                  },
                  currency: {
                    example: "EUR",
                    type: "string"
                  }
                }
              },
              open_order_amount: {
                readOnly: true,
                type: "integer"
              },
              point_of_sale_id: {
                readOnly: true,
                type: "string"
              },
              point_of_sale_name: {
                readOnly: true,
                type: "string"
              },
              merchant_name: {
                readOnly: true,
                type: "string"
              },
              order_description: {
                readOnly: true,
                type: "string",
                nullable: true
              },
              order_reference: {
                readOnly: true,
                type: "string"
              },
              status: {
                readOnly: true,
                type: "string",
                enum: [
                  "open",
                  "pending",
                  "completed",
                  "cancelled",
                  "expired",
                  "denied",
                  "error",
                  "failed"
                ]
              },
              return_url: {
                readOnly: true,
                type: "string",
                nullable: true
              }
            },
            title: "PaymentDataOutputDto",
            "x-readme-ref-name": "PaymentDataOutputDto"
          },
          message: {
            description: "You will see this message only when the enduser has return to a issuer and has not comeback to our paymentscreen to see this message.",
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  message: {
                    example: "Something went wrong",
                    type: "string"
                  },
                  type: {
                    example: {
                      name: "ERROR",
                      value: "error"
                    },
                    type: "string",
                    enum: [
                      "error",
                      "info",
                      "success"
                    ]
                  }
                },
                title: "PaymentScreenMessageOutputDto",
                "x-readme-ref-name": "PaymentScreenMessageOutputDto"
              }
            ],
            nullable: true
          },
          order: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  id: {
                    example: "a9be8a9e-930f-4871-9e39-afd51a927992",
                    type: "string"
                  },
                  point_of_sale: {
                    example: "SL-1234-5678",
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      id: {
                        example: "SL-8498-3425",
                        type: "string",
                        nullable: true
                      },
                      name: {
                        example: "Farm equipment",
                        type: "string",
                        nullable: true
                      },
                      group_id: {
                        example: "P-1234-5678",
                        type: "string",
                        nullable: true
                      },
                      url: {
                        example: "https://myfarmequipment.com/",
                        type: "string",
                        nullable: true
                      },
                      description: {
                        example: "Description of my point of sale",
                        type: "string",
                        nullable: true
                      },
                      category_id: {
                        type: "string",
                        nullable: true
                      },
                      test_mode: {
                        example: "false",
                        type: "boolean",
                        nullable: true
                      },
                      mcc_code: {
                        example: "false",
                        type: "string",
                        nullable: true
                      }
                    }
                  },
                  merchant: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      id: {
                        example: "M-3914-2321",
                        type: "string"
                      },
                      name: {
                        example: "John Doe Farm Equipment",
                        type: "string"
                      }
                    },
                    title: "MerchantOutputDto",
                    "x-readme-ref-name": "MerchantOutputDto"
                  },
                  tradename: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          id: {
                            example: "TM-1234-1234",
                            type: "string"
                          },
                          name: {
                            example: "John Doe Farm equipment",
                            type: "string"
                          }
                        },
                        title: "TradenameOutputDto",
                        "x-readme-ref-name": "TradenameOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  status: {
                    example: "new",
                    type: "string"
                  },
                  invoice_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  delivery_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  send_date: {
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  expires_at: {
                    type: "string",
                    format: "date-time"
                  },
                  completed_time: {
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  amount: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      value: {
                        example: 1,
                        type: "integer"
                      },
                      currency: {
                        example: "EUR",
                        type: "string"
                      }
                    },
                    title: "AmountOutputDto",
                    "x-readme-ref-name": "AmountOutputDto"
                  },
                  return_url: {
                    description: "The URL where the payer will be sent to after the payment.",
                    example: "https://www.pay.nl/return",
                    type: "string",
                    nullable: true
                  },
                  enduser: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          ip_address: {
                            example: "127.0.0.1",
                            type: "string"
                          },
                          accept_language: {
                            example: "en-US",
                            type: "string"
                          },
                          useragent: {
                            example: "Mozilla/5.0 (Mobile; rv:17.0) Gecko/20100101 Firefox/17.0",
                            type: "string"
                          }
                        },
                        title: "EnduserOutputDto",
                        "x-readme-ref-name": "EnduserOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  payment_method: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          payment_method: {
                            type: "string"
                          },
                          input: {
                            type: "object",
                            additionalProperties: {
                              type: "string"
                            }
                          }
                        },
                        title: "PaymentMethodInputOutputDto",
                        "x-readme-ref-name": "PaymentMethodInputOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  ipn_urls: {
                    description: "Array of URLs where we exchange the status of a transaction.",
                    example: [
                      "https://pay.nl/ipn1",
                      "https://pay.nl/ipn2"
                    ],
                    type: "array",
                    items: {
                      type: "string"
                    }
                  },
                  application: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          name: {
                            example: "Application name",
                            type: "string"
                          },
                          version: {
                            example: "1.2.1",
                            type: "string"
                          }
                        },
                        title: "ApplicationOutputDto",
                        "x-readme-ref-name": "ApplicationOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  plugin: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          name: {
                            example: "Plugin name",
                            type: "string"
                          },
                          version: {
                            example: "1.1.1",
                            type: "string"
                          }
                        },
                        title: "PluginOutputDto",
                        "x-readme-ref-name": "PluginOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  test: {
                    type: "boolean"
                  },
                  logging: {
                    type: "boolean"
                  },
                  instore: {
                    type: "boolean"
                  },
                  reference: {
                    description: "The merchant identification of this transaction.",
                    example: "1234ABC",
                    type: "string",
                    nullable: true
                  },
                  manualTransferCode: {
                    type: "string"
                  },
                  description: {
                    description: "Is shown on the statement of the payer.",
                    example: "Testdescription",
                    type: "string",
                    nullable: true
                  },
                  stats_data: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          extra1: {
                            description: "The first free value which can be tracked in the stats.",
                            example: "Extra1",
                            type: "string",
                            nullable: true
                          },
                          extra2: {
                            description: "The second free value which can be tracked in the stats.",
                            example: "Extra2",
                            type: "string",
                            nullable: true
                          },
                          extra3: {
                            description: "The third free value which can be tracked in the stats.",
                            example: "Extra3",
                            type: "string",
                            nullable: true
                          },
                          tool: {
                            description: "The used tool code which can be tracked in the stats.",
                            example: "Tool",
                            type: "string",
                            nullable: true
                          },
                          info: {
                            description: "The used info code which can be tracked in the stats.",
                            example: "Info",
                            type: "string",
                            nullable: true
                          },
                          object: {
                            description: "The object which can be tracked in stats.",
                            example: "Object",
                            type: "string",
                            nullable: true
                          },
                          promotor_id: {
                            example: "8763",
                            type: "integer",
                            nullable: true
                          },
                          domain_id: {
                            example: "WU-1234-1234",
                            type: "string",
                            nullable: true
                          },
                          transfer_data: {
                            example: {
                              yourCustom1: "Custom Data Field 1",
                              yourCustom2: "Custom Data Field 2"
                            },
                            type: "array",
                            items: {
                              type: "string"
                            }
                          }
                        },
                        title: "StatsDataOutputDto",
                        "x-readme-ref-name": "StatsDataOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  language: {
                    description: "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",
                    example: "nl",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    description: "https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes",
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  customer: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          email: {
                            example: "johndoe@example.com",
                            type: "string",
                            nullable: true
                          },
                          firstname: {
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastname: {
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          dateOfBirth: {
                            example: "1999-11-22",
                            type: "string",
                            format: "date-time",
                            nullable: true
                          },
                          gender: {
                            example: "O",
                            type: "string",
                            nullable: true
                          },
                          phone: {
                            example: "06-12345678",
                            type: "string",
                            nullable: true
                          },
                          locale: {
                            example: "nl_BE",
                            type: "string",
                            nullable: true
                          },
                          ipAddress: {
                            example: "192.168.0.1",
                            type: "string",
                            nullable: true
                          },
                          reference: {
                            example: "Cstmr12",
                            type: "string",
                            nullable: true
                          },
                          company: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                properties: {
                                  name: {
                                    example: "Pay.",
                                    type: "string",
                                    nullable: true
                                  },
                                  cocNumber: {
                                    example: "24283498",
                                    type: "string",
                                    nullable: true
                                  },
                                  vatNumber: {
                                    example: "NL807960147B01",
                                    type: "string",
                                    nullable: true
                                  },
                                  country: {
                                    example: "NL",
                                    type: "string",
                                    nullable: true
                                  }
                                },
                                title: "Order.Output.CheckoutData.Company",
                                "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                              }
                            ],
                            nullable: true
                          }
                        },
                        title: "CustomerOutputDto",
                        "x-readme-ref-name": "CustomerOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  company: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          name: {
                            example: "Pay.",
                            type: "string",
                            nullable: true
                          },
                          cocNumber: {
                            example: "24283498",
                            type: "string",
                            nullable: true
                          },
                          vatNumber: {
                            example: "NL807960147B01",
                            type: "string",
                            nullable: true
                          },
                          country: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "CompanyOutputDto",
                        "x-readme-ref-name": "CompanyOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  billing_address: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          firstName: {
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastName: {
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          streetName: {
                            example: "Curieweg",
                            type: "string",
                            nullable: true
                          },
                          streetNumber: {
                            example: "19",
                            type: "string",
                            nullable: true
                          },
                          streetNumberAddition: {
                            example: "C",
                            type: "string",
                            nullable: true
                          },
                          zipCode: {
                            example: "3208 KJ",
                            type: "string",
                            nullable: true
                          },
                          city: {
                            example: "Spijkenisse",
                            type: "string",
                            nullable: true
                          },
                          countryCode: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          },
                          regionCode: {
                            example: "nl-ZH",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "AddressOutputDto",
                        "x-readme-ref-name": "AddressOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  billing_contact: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          email: {
                            example: "johndoe@example.com",
                            type: "string",
                            nullable: true
                          },
                          name: {
                            example: "John Doe",
                            type: "string",
                            nullable: true
                          },
                          lastname: {
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          initials: {
                            example: "J",
                            type: "string",
                            nullable: true
                          },
                          date_of_birth: {
                            example: "1999-07-13",
                            type: "string",
                            nullable: true
                          },
                          gender: {
                            example: "M",
                            type: "string",
                            nullable: true
                          },
                          phone_number: {
                            example: "06-12345678",
                            type: "string",
                            nullable: true
                          },
                          language: {
                            example: "nl",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "ContactOutputDto",
                        "x-readme-ref-name": "ContactOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  shipping_address: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          firstName: {
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastName: {
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          streetName: {
                            example: "Curieweg",
                            type: "string",
                            nullable: true
                          },
                          streetNumber: {
                            example: "19",
                            type: "string",
                            nullable: true
                          },
                          streetNumberAddition: {
                            example: "C",
                            type: "string",
                            nullable: true
                          },
                          zipCode: {
                            example: "3208 KJ",
                            type: "string",
                            nullable: true
                          },
                          city: {
                            example: "Spijkenisse",
                            type: "string",
                            nullable: true
                          },
                          countryCode: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          },
                          regionCode: {
                            example: "nl-ZH",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "AddressOutputDto",
                        "x-readme-ref-name": "AddressOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  shipping_contact: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          email: {
                            example: "johndoe@example.com",
                            type: "string",
                            nullable: true
                          },
                          name: {
                            example: "John Doe",
                            type: "string",
                            nullable: true
                          },
                          lastname: {
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          initials: {
                            example: "J",
                            type: "string",
                            nullable: true
                          },
                          date_of_birth: {
                            example: "1999-07-13",
                            type: "string",
                            nullable: true
                          },
                          gender: {
                            example: "M",
                            type: "string",
                            nullable: true
                          },
                          phone_number: {
                            example: "06-12345678",
                            type: "string",
                            nullable: true
                          },
                          language: {
                            example: "nl",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "ContactOutputDto",
                        "x-readme-ref-name": "ContactOutputDto"
                      }
                    ],
                    nullable: true
                  },
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      description: "",
                      deprecated: false,
                      properties: {
                        type: {
                          example: "ARTICLE",
                          type: "string"
                        },
                        name: {
                          example: "Testproduct",
                          type: "string"
                        },
                        unit_price: {
                          example: "595",
                          type: "integer"
                        },
                        quantity: {
                          example: "1.0",
                          type: "number"
                        },
                        vat_percentage: {
                          example: "0.21",
                          type: "number"
                        },
                        external_id: {
                          example: "123b123h1239",
                          type: "string",
                          nullable: true
                        },
                        ean: {
                          example: "4070071967072",
                          type: "string",
                          nullable: true
                        },
                        discount: {
                          example: "5",
                          type: "integer",
                          nullable: true
                        }
                      },
                      title: "ProductOutputDto",
                      "x-readme-ref-name": "ProductOutputDto"
                    }
                  },
                  checkout_url: {
                    example: "https://achterelkebetaling.nl/checkout",
                    type: "string",
                    nullable: true
                  },
                  status_url: {
                    example: "https://achterelkebetaling.nl/status",
                    type: "string",
                    nullable: true
                  }
                },
                title: "OrderCheckoutOutputDto",
                "x-readme-ref-name": "OrderCheckoutOutputDto"
              }
            ],
            nullable: true
          },
          styling: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  stylesheet_url: {
                    type: "string",
                    nullable: true
                  }
                },
                title: "StylingOutputDto",
                "x-readme-ref-name": "StylingOutputDto"
              }
            ],
            nullable: true
          },
          payment_methods: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "integer",
                  nullable: true
                },
                input: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "PaymentMethodOutputDto",
              "x-readme-ref-name": "PaymentMethodOutputDto"
            }
          },
          links: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                href: {
                  type: "string"
                },
                type: {
                  type: "string"
                },
                rel: {
                  type: "string"
                }
              },
              title: "LinkOutputDto",
              "x-readme-ref-name": "LinkOutputDto"
            }
          },
          supportedLocales: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                code: {
                  type: "string"
                },
                name: {
                  type: "string"
                },
                acceptLanguage: {
                  type: "string"
                },
                contentLanguage: {
                  type: "string"
                },
                countryImageUrls: {
                  type: "object",
                  additionalProperties: {
                    type: "string"
                  }
                }
              },
              title: "LocaleOutputDto",
              "x-readme-ref-name": "LocaleOutputDto"
            }
          }
        },
        title: "Order.CheckoutOutputDto",
        "x-readme-ref-name": "Order.CheckoutOutputDto"
      },
      "Order.CreateOrderPaymentInputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          payment_method: {
            type: "string",
            nullable: true
          },
          input: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        title: "Order.CreateOrderPaymentInputDto",
        "x-readme-ref-name": "Order.CreateOrderPaymentInputDto"
      },
      "Order.EnduserInputDto": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "ip_address"
        ],
        properties: {
          ip_address: {
            format: "ipv6",
            example: "127.0.0.1",
            type: "string",
            nullable: true
          },
          accept_language: {
            example: "en-US",
            type: "string",
            nullable: true
          },
          useragent: {
            example: "Mozilla/5.0 (Mobile; rv:17.0) Gecko/20100101 Firefox/17.0",
            type: "string",
            nullable: true
          }
        },
        title: "Order.EnduserInputDto",
        "x-readme-ref-name": "Order.EnduserInputDto"
      },
      "Order.OrderOutputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The unique identifier of your order.",
            example: "655b2da5-5223-8f32-1aee-737862302XXX",
            type: "string"
          },
          serviceId: {
            description: "The Service ID used for creating this order",
            example: "SL-1234-1234",
            type: "string"
          },
          description: {
            description: "The description given for this order.",
            example: "Instore Terminal Order #27",
            type: "string",
            nullable: true
          },
          reference: {
            description: "The reference given for this order.",
            example: "REF1234",
            type: "string",
            nullable: true
          },
          manualTransferCode: {
            description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
            example: "1234 1234 1234 1234",
            type: "string"
          },
          orderId: {
            description: "The order ID as you would see it within the PAY. platform.",
            example: "52305407020X2325",
            type: "string"
          },
          uuid: {
            description: "The UUID that can be used to create a QR code for this order.",
            example: "ad0e7378-6230-2325-5230-5407020a2XXX",
            type: "string"
          },
          customerKey: {
            readOnly: true,
            description: "An identifier for the customer",
            type: "string",
            nullable: true
          },
          status: {
            description: "The status of the order.",
            type: "object",
            deprecated: false,
            properties: {
              code: {
                description: "The numeric status code.",
                example: 20,
                type: "integer",
                nullable: true
              },
              action: {
                description: "The human readable status string",
                example: "PENDING",
                type: "string",
                nullable: true
              }
            }
          },
          receipt: {
            readOnly: true,
            description: "Base64 encoded string of the receipt for this order when it's paid.",
            example: "<base64 string>",
            type: "string",
            nullable: true
          },
          integration: {
            description: "Information about your integration.",
            type: "object",
            deprecated: false,
            properties: {
              test: {
                description: "Whether this order was created in Test Mode, defaults to false.",
                type: "boolean"
              }
            }
          },
          amount: {
            description: "The amount for this order.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          authorizedAmount: {
            description: "The amount of the order that is authorized.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          capturedAmount: {
            description: "The amount of the order that is captured.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          checkoutData: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  customer: {
                    description: "The customer provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      email: {
                        example: "johndoe@example.com",
                        type: "string",
                        nullable: true
                      },
                      firstname: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastname: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      dateOfBirth: {
                        example: "1999-11-22",
                        type: "string",
                        format: "date-time",
                        nullable: true
                      },
                      gender: {
                        example: "O",
                        type: "string",
                        nullable: true
                      },
                      phone: {
                        example: "06-12345678",
                        type: "string",
                        nullable: true
                      },
                      locale: {
                        example: "nl_BE",
                        type: "string",
                        nullable: true
                      },
                      ipAddress: {
                        example: "192.168.0.1",
                        type: "string",
                        nullable: true
                      },
                      reference: {
                        example: "Cstmr12",
                        type: "string",
                        nullable: true
                      },
                      company: {
                        anyOf: [
                          {
                            type: "object",
                            description: "",
                            deprecated: false,
                            properties: {
                              name: {
                                example: "Pay.",
                                type: "string",
                                nullable: true
                              },
                              cocNumber: {
                                example: "24283498",
                                type: "string",
                                nullable: true
                              },
                              vatNumber: {
                                example: "NL807960147B01",
                                type: "string",
                                nullable: true
                              },
                              country: {
                                example: "NL",
                                type: "string",
                                nullable: true
                              }
                            },
                            title: "Order.Output.CheckoutData.Company",
                            "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                          }
                        ],
                        nullable: true
                      }
                    }
                  },
                  billingAddress: {
                    readOnly: true,
                    description: "The billing address provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      firstName: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastName: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      streetName: {
                        example: "Curieweg",
                        type: "string",
                        nullable: true
                      },
                      streetNumber: {
                        example: "19",
                        type: "string",
                        nullable: true
                      },
                      streetNumberAddition: {
                        example: "C",
                        type: "string",
                        nullable: true
                      },
                      zipCode: {
                        example: "3208 KJ",
                        type: "string",
                        nullable: true
                      },
                      city: {
                        example: "Spijkenisse",
                        type: "string",
                        nullable: true
                      },
                      countryCode: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      },
                      regionCode: {
                        example: "nl-ZH",
                        type: "string",
                        nullable: true
                      }
                    }
                  },
                  shippingAddress: {
                    description: "The delivery address provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      firstName: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastName: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      streetName: {
                        example: "Curieweg",
                        type: "string",
                        nullable: true
                      },
                      streetNumber: {
                        example: "19",
                        type: "string",
                        nullable: true
                      },
                      streetNumberAddition: {
                        example: "C",
                        type: "string",
                        nullable: true
                      },
                      zipCode: {
                        example: "3208 KJ",
                        type: "string",
                        nullable: true
                      },
                      city: {
                        example: "Spijkenisse",
                        type: "string",
                        nullable: true
                      },
                      countryCode: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      },
                      regionCode: {
                        example: "nl-ZH",
                        type: "string",
                        nullable: true
                      }
                    }
                  }
                },
                title: "Order.Output.CheckoutData",
                "x-readme-ref-name": "Order.Output.CheckoutData"
              }
            ],
            readOnly: true,
            description: "Standardized customer data provided by the supplier",
            nullable: true
          },
          payments: {
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  description: "The unique ID of this payment",
                  example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                  type: "string"
                },
                paymentMethod: {
                  description: "Information of this payments' payment method.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    id: {
                      type: "integer",
                      nullable: true
                    },
                    input: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  }
                },
                customerType: {
                  type: "string",
                  nullable: true
                },
                customerKey: {
                  description: "A hashed string identifying the customer itself without exposing sensitive data.",
                  example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                  type: "string",
                  nullable: true
                },
                customerId: {
                  description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                  example: "GB33BUKB20201555555555",
                  type: "string",
                  nullable: true
                },
                customerName: {
                  description: "The name of the customer as known by the payment method.",
                  type: "string",
                  nullable: true
                },
                ipAddress: {
                  description: "The IP Address of the customer that interacted with this payment.",
                  type: "string",
                  nullable: true
                },
                secureStatus: {
                  description: "Whether or not the customer was 3DS challenged.",
                  type: "boolean"
                },
                paymentVerificationMethod: {
                  description: "A numeric id of how this payment was verified.",
                  type: "integer",
                  nullable: true
                },
                status: {
                  description: "The status of this payment.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    code: {
                      description: "The numeric status code.",
                      example: 20,
                      type: "integer",
                      nullable: true
                    },
                    action: {
                      description: "The human readable status string",
                      example: "PENDING",
                      type: "string",
                      nullable: true
                    }
                  }
                },
                currencyAmount: {
                  description: "The amount of this payment in the currency of the order.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                amount: {
                  description: "The amount of this payment in the currency in which it was processed.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                authorizedAmount: {
                  description: "The amount of this payment that is authorized.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                capturedAmount: {
                  description: "The amount of this payment that is captured.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                supplierData: {
                  description: "Relevant data returned by the supplier.",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  nullable: true
                }
              },
              title: "Order.Output.Payment",
              "x-readme-ref-name": "Order.Output.Payment"
            },
            readOnly: true,
            description: "The payments that are linked to this order.",
            type: "array"
          },
          createdAt: {
            description: "The date-time at which this order was created in our system.",
            type: "string",
            format: "date-time"
          },
          createdBy: {
            description: "The API token or Service ID that created this order.",
            type: "string",
            nullable: true
          },
          modifiedAt: {
            description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
            type: "string",
            format: "date-time",
            nullable: true
          },
          modifiedBy: {
            description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
            type: "string",
            nullable: true
          },
          expiresAt: {
            description: "The date-time at which this order expires.",
            type: "string",
            format: "date-time"
          },
          completedAt: {
            description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
            type: "string",
            format: "date-time",
            nullable: true
          },
          links: {
            readOnly: true,
            description: "The links that can be used to interact with this order.",
            example: {
              redirect: "<an_url>",
              status: "<an_url>",
              cancel: "<an_url>"
            },
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        title: "Order.OrderOutputDto",
        "x-readme-ref-name": "Order.OrderOutputDto"
      },
      "Order.PaymentCreatedOutputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          redirect_url: {
            type: "string"
          }
        },
        title: "Order.PaymentCreatedOutputDto",
        "x-readme-ref-name": "Order.PaymentCreatedOutputDto"
      },
      OrderCheckoutOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: "a9be8a9e-930f-4871-9e39-afd51a927992",
            type: "string"
          },
          point_of_sale: {
            example: "SL-1234-5678",
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              id: {
                example: "SL-8498-3425",
                type: "string",
                nullable: true
              },
              name: {
                example: "Farm equipment",
                type: "string",
                nullable: true
              },
              group_id: {
                example: "P-1234-5678",
                type: "string",
                nullable: true
              },
              url: {
                example: "https://myfarmequipment.com/",
                type: "string",
                nullable: true
              },
              description: {
                example: "Description of my point of sale",
                type: "string",
                nullable: true
              },
              category_id: {
                type: "string",
                nullable: true
              },
              test_mode: {
                example: "false",
                type: "boolean",
                nullable: true
              },
              mcc_code: {
                example: "false",
                type: "string",
                nullable: true
              }
            }
          },
          merchant: {
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              id: {
                example: "M-3914-2321",
                type: "string"
              },
              name: {
                example: "John Doe Farm Equipment",
                type: "string"
              }
            },
            title: "MerchantOutputDto",
            "x-readme-ref-name": "MerchantOutputDto"
          },
          tradename: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  id: {
                    example: "TM-1234-1234",
                    type: "string"
                  },
                  name: {
                    example: "John Doe Farm equipment",
                    type: "string"
                  }
                },
                title: "TradenameOutputDto",
                "x-readme-ref-name": "TradenameOutputDto"
              }
            ],
            nullable: true
          },
          status: {
            example: "new",
            type: "string"
          },
          invoice_date: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          delivery_date: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          send_date: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          expires_at: {
            type: "string",
            format: "date-time"
          },
          completed_time: {
            type: "string",
            format: "date-time",
            nullable: true
          },
          amount: {
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            },
            title: "AmountOutputDto",
            "x-readme-ref-name": "AmountOutputDto"
          },
          return_url: {
            description: "The URL where the payer will be sent to after the payment.",
            example: "https://www.pay.nl/return",
            type: "string",
            nullable: true
          },
          enduser: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  ip_address: {
                    example: "127.0.0.1",
                    type: "string"
                  },
                  accept_language: {
                    example: "en-US",
                    type: "string"
                  },
                  useragent: {
                    example: "Mozilla/5.0 (Mobile; rv:17.0) Gecko/20100101 Firefox/17.0",
                    type: "string"
                  }
                },
                title: "EnduserOutputDto",
                "x-readme-ref-name": "EnduserOutputDto"
              }
            ],
            nullable: true
          },
          payment_method: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  payment_method: {
                    type: "string"
                  },
                  input: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  }
                },
                title: "PaymentMethodInputOutputDto",
                "x-readme-ref-name": "PaymentMethodInputOutputDto"
              }
            ],
            nullable: true
          },
          ipn_urls: {
            description: "Array of URLs where we exchange the status of a transaction.",
            example: [
              "https://pay.nl/ipn1",
              "https://pay.nl/ipn2"
            ],
            type: "array",
            items: {
              type: "string"
            }
          },
          application: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Application name",
                    type: "string"
                  },
                  version: {
                    example: "1.2.1",
                    type: "string"
                  }
                },
                title: "ApplicationOutputDto",
                "x-readme-ref-name": "ApplicationOutputDto"
              }
            ],
            nullable: true
          },
          plugin: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Plugin name",
                    type: "string"
                  },
                  version: {
                    example: "1.1.1",
                    type: "string"
                  }
                },
                title: "PluginOutputDto",
                "x-readme-ref-name": "PluginOutputDto"
              }
            ],
            nullable: true
          },
          test: {
            type: "boolean"
          },
          logging: {
            type: "boolean"
          },
          instore: {
            type: "boolean"
          },
          reference: {
            description: "The merchant identification of this transaction.",
            example: "1234ABC",
            type: "string",
            nullable: true
          },
          manualTransferCode: {
            type: "string"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            example: "Testdescription",
            type: "string",
            nullable: true
          },
          stats_data: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  extra1: {
                    description: "The first free value which can be tracked in the stats.",
                    example: "Extra1",
                    type: "string",
                    nullable: true
                  },
                  extra2: {
                    description: "The second free value which can be tracked in the stats.",
                    example: "Extra2",
                    type: "string",
                    nullable: true
                  },
                  extra3: {
                    description: "The third free value which can be tracked in the stats.",
                    example: "Extra3",
                    type: "string",
                    nullable: true
                  },
                  tool: {
                    description: "The used tool code which can be tracked in the stats.",
                    example: "Tool",
                    type: "string",
                    nullable: true
                  },
                  info: {
                    description: "The used info code which can be tracked in the stats.",
                    example: "Info",
                    type: "string",
                    nullable: true
                  },
                  object: {
                    description: "The object which can be tracked in stats.",
                    example: "Object",
                    type: "string",
                    nullable: true
                  },
                  promotor_id: {
                    example: "8763",
                    type: "integer",
                    nullable: true
                  },
                  domain_id: {
                    example: "WU-1234-1234",
                    type: "string",
                    nullable: true
                  },
                  transfer_data: {
                    example: {
                      yourCustom1: "Custom Data Field 1",
                      yourCustom2: "Custom Data Field 2"
                    },
                    type: "array",
                    items: {
                      type: "string"
                    }
                  }
                },
                title: "StatsDataOutputDto",
                "x-readme-ref-name": "StatsDataOutputDto"
              }
            ],
            nullable: true
          },
          language: {
            description: "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",
            example: "nl",
            type: "string",
            nullable: true
          },
          country: {
            description: "https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes",
            example: "NL",
            type: "string",
            nullable: true
          },
          customer: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  email: {
                    example: "johndoe@example.com",
                    type: "string",
                    nullable: true
                  },
                  firstname: {
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastname: {
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  dateOfBirth: {
                    example: "1999-11-22",
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  gender: {
                    example: "O",
                    type: "string",
                    nullable: true
                  },
                  phone: {
                    example: "06-12345678",
                    type: "string",
                    nullable: true
                  },
                  locale: {
                    example: "nl_BE",
                    type: "string",
                    nullable: true
                  },
                  ipAddress: {
                    example: "192.168.0.1",
                    type: "string",
                    nullable: true
                  },
                  reference: {
                    example: "Cstmr12",
                    type: "string",
                    nullable: true
                  },
                  company: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          name: {
                            example: "Pay.",
                            type: "string",
                            nullable: true
                          },
                          cocNumber: {
                            example: "24283498",
                            type: "string",
                            nullable: true
                          },
                          vatNumber: {
                            example: "NL807960147B01",
                            type: "string",
                            nullable: true
                          },
                          country: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "Order.Output.CheckoutData.Company",
                        "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                      }
                    ],
                    nullable: true
                  }
                },
                title: "CustomerOutputDto",
                "x-readme-ref-name": "CustomerOutputDto"
              }
            ],
            nullable: true
          },
          company: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Pay.",
                    type: "string",
                    nullable: true
                  },
                  cocNumber: {
                    example: "24283498",
                    type: "string",
                    nullable: true
                  },
                  vatNumber: {
                    example: "NL807960147B01",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                title: "CompanyOutputDto",
                "x-readme-ref-name": "CompanyOutputDto"
              }
            ],
            nullable: true
          },
          billing_address: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  firstName: {
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastName: {
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  streetName: {
                    example: "Curieweg",
                    type: "string",
                    nullable: true
                  },
                  streetNumber: {
                    example: "19",
                    type: "string",
                    nullable: true
                  },
                  streetNumberAddition: {
                    example: "C",
                    type: "string",
                    nullable: true
                  },
                  zipCode: {
                    example: "3208 KJ",
                    type: "string",
                    nullable: true
                  },
                  city: {
                    example: "Spijkenisse",
                    type: "string",
                    nullable: true
                  },
                  countryCode: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  regionCode: {
                    example: "nl-ZH",
                    type: "string",
                    nullable: true
                  }
                },
                title: "AddressOutputDto",
                "x-readme-ref-name": "AddressOutputDto"
              }
            ],
            nullable: true
          },
          billing_contact: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  email: {
                    example: "johndoe@example.com",
                    type: "string",
                    nullable: true
                  },
                  name: {
                    example: "John Doe",
                    type: "string",
                    nullable: true
                  },
                  lastname: {
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  initials: {
                    example: "J",
                    type: "string",
                    nullable: true
                  },
                  date_of_birth: {
                    example: "1999-07-13",
                    type: "string",
                    nullable: true
                  },
                  gender: {
                    example: "M",
                    type: "string",
                    nullable: true
                  },
                  phone_number: {
                    example: "06-12345678",
                    type: "string",
                    nullable: true
                  },
                  language: {
                    example: "nl",
                    type: "string",
                    nullable: true
                  }
                },
                title: "ContactOutputDto",
                "x-readme-ref-name": "ContactOutputDto"
              }
            ],
            nullable: true
          },
          shipping_address: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  firstName: {
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastName: {
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  streetName: {
                    example: "Curieweg",
                    type: "string",
                    nullable: true
                  },
                  streetNumber: {
                    example: "19",
                    type: "string",
                    nullable: true
                  },
                  streetNumberAddition: {
                    example: "C",
                    type: "string",
                    nullable: true
                  },
                  zipCode: {
                    example: "3208 KJ",
                    type: "string",
                    nullable: true
                  },
                  city: {
                    example: "Spijkenisse",
                    type: "string",
                    nullable: true
                  },
                  countryCode: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  regionCode: {
                    example: "nl-ZH",
                    type: "string",
                    nullable: true
                  }
                },
                title: "AddressOutputDto",
                "x-readme-ref-name": "AddressOutputDto"
              }
            ],
            nullable: true
          },
          shipping_contact: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  email: {
                    example: "johndoe@example.com",
                    type: "string",
                    nullable: true
                  },
                  name: {
                    example: "John Doe",
                    type: "string",
                    nullable: true
                  },
                  lastname: {
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  initials: {
                    example: "J",
                    type: "string",
                    nullable: true
                  },
                  date_of_birth: {
                    example: "1999-07-13",
                    type: "string",
                    nullable: true
                  },
                  gender: {
                    example: "M",
                    type: "string",
                    nullable: true
                  },
                  phone_number: {
                    example: "06-12345678",
                    type: "string",
                    nullable: true
                  },
                  language: {
                    example: "nl",
                    type: "string",
                    nullable: true
                  }
                },
                title: "ContactOutputDto",
                "x-readme-ref-name": "ContactOutputDto"
              }
            ],
            nullable: true
          },
          products: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  example: "ARTICLE",
                  type: "string"
                },
                name: {
                  example: "Testproduct",
                  type: "string"
                },
                unit_price: {
                  example: "595",
                  type: "integer"
                },
                quantity: {
                  example: "1.0",
                  type: "number"
                },
                vat_percentage: {
                  example: "0.21",
                  type: "number"
                },
                external_id: {
                  example: "123b123h1239",
                  type: "string",
                  nullable: true
                },
                ean: {
                  example: "4070071967072",
                  type: "string",
                  nullable: true
                },
                discount: {
                  example: "5",
                  type: "integer",
                  nullable: true
                }
              },
              title: "ProductOutputDto",
              "x-readme-ref-name": "ProductOutputDto"
            }
          },
          checkout_url: {
            example: "https://achterelkebetaling.nl/checkout",
            type: "string",
            nullable: true
          },
          status_url: {
            example: "https://achterelkebetaling.nl/status",
            type: "string",
            nullable: true
          }
        },
        title: "OrderCheckoutOutputDto",
        "x-readme-ref-name": "OrderCheckoutOutputDto"
      },
      Payment: {
        type: "object",
        description: "",
        deprecated: false,
        title: "Payment",
        "x-readme-ref-name": "Payment"
      },
      PaymentDataOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          amount: {
            readOnly: true,
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          open_order_amount: {
            readOnly: true,
            type: "integer"
          },
          point_of_sale_id: {
            readOnly: true,
            type: "string"
          },
          point_of_sale_name: {
            readOnly: true,
            type: "string"
          },
          merchant_name: {
            readOnly: true,
            type: "string"
          },
          order_description: {
            readOnly: true,
            type: "string",
            nullable: true
          },
          order_reference: {
            readOnly: true,
            type: "string"
          },
          status: {
            readOnly: true,
            type: "string",
            enum: [
              "open",
              "pending",
              "completed",
              "cancelled",
              "expired",
              "denied",
              "error",
              "failed"
            ]
          },
          return_url: {
            readOnly: true,
            type: "string",
            nullable: true
          }
        },
        title: "PaymentDataOutputDto",
        "x-readme-ref-name": "PaymentDataOutputDto"
      },
      PaymentMethodInputOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          payment_method: {
            type: "string"
          },
          input: {
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        title: "PaymentMethodInputOutputDto",
        "x-readme-ref-name": "PaymentMethodInputOutputDto"
      },
      PaymentMethodOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "integer",
            nullable: true
          },
          input: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        title: "PaymentMethodOutputDto",
        "x-readme-ref-name": "PaymentMethodOutputDto"
      },
      PaymentOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The unique ID of this payment",
            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
            type: "string"
          },
          paymentMethod: {
            description: "Information of this payments' payment method.",
            type: "object",
            deprecated: false,
            properties: {
              id: {
                type: "integer",
                nullable: true
              },
              input: {
                type: "array",
                items: {
                  type: "string"
                }
              }
            }
          },
          customerType: {
            type: "string",
            nullable: true
          },
          customerKey: {
            description: "A hashed string identifying the customer itself without exposing sensitive data.",
            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
            type: "string",
            nullable: true
          },
          customerId: {
            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
            example: "GB33BUKB20201555555555",
            type: "string",
            nullable: true
          },
          customerName: {
            description: "The name of the customer as known by the payment method.",
            type: "string",
            nullable: true
          },
          ipAddress: {
            description: "The IP Address of the customer that interacted with this payment.",
            type: "string",
            nullable: true
          },
          secureStatus: {
            description: "Whether or not the customer was 3DS challenged.",
            type: "boolean"
          },
          paymentVerificationMethod: {
            description: "A numeric id of how this payment was verified.",
            type: "integer",
            nullable: true
          },
          status: {
            description: "The status of this payment.",
            type: "object",
            deprecated: false,
            properties: {
              code: {
                description: "The numeric status code.",
                example: 20,
                type: "integer",
                nullable: true
              },
              action: {
                description: "The human readable status string",
                example: "PENDING",
                type: "string",
                nullable: true
              }
            }
          },
          currencyAmount: {
            description: "The amount of this payment in the currency of the order.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          amount: {
            description: "The amount of this payment in the currency in which it was processed.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          authorizedAmount: {
            description: "The amount of this payment that is authorized.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          capturedAmount: {
            description: "The amount of this payment that is captured.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          supplierData: {
            description: "Relevant data returned by the supplier.",
            type: "array",
            items: {
              type: "string"
            },
            nullable: true
          }
        },
        title: "PaymentOutputDto",
        "x-readme-ref-name": "PaymentOutputDto"
      },
      PaymentScreenMessageOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          message: {
            example: "Something went wrong",
            type: "string"
          },
          type: {
            example: {
              name: "ERROR",
              value: "error"
            },
            type: "string",
            enum: [
              "error",
              "info",
              "success"
            ]
          }
        },
        title: "PaymentScreenMessageOutputDto",
        "x-readme-ref-name": "PaymentScreenMessageOutputDto"
      },
      PluginOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          name: {
            example: "Plugin name",
            type: "string"
          },
          version: {
            example: "1.1.1",
            type: "string"
          }
        },
        title: "PluginOutputDto",
        "x-readme-ref-name": "PluginOutputDto"
      },
      PointOfSale: {
        type: "object",
        description: "",
        deprecated: false,
        title: "PointOfSale",
        "x-readme-ref-name": "PointOfSale"
      },
      "PointOfSale.PointOfSaleOutputDto": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          },
          websiteLocationId: {
            type: "integer"
          },
          websiteId: {
            type: "integer"
          },
          pointOfSaleGroupId: {
            type: "string"
          },
          secret: {
            type: "string"
          },
          categoryId: {
            type: "string"
          },
          description: {
            type: "string"
          },
          mode: {
            type: "string"
          },
          pointOfSaleIpnUrls: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                url: {
                  type: "string"
                },
                sendMethod: {
                  type: "integer"
                },
                retrySchemeId: {
                  type: "integer",
                  nullable: true
                }
              },
              title: "PointOfSaleIpnUrlOutputDto",
              "x-readme-ref-name": "PointOfSaleIpnUrlOutputDto"
            }
          },
          websiteUrls: {
            type: "array",
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  type: "string"
                },
                scrambledCode: {
                  type: "string"
                },
                url: {
                  type: "string"
                }
              },
              title: "WebsiteUrlOutputDto",
              "x-readme-ref-name": "WebsiteUrlOutputDto"
            }
          },
          merchant: {
            type: "object",
            description: "",
            deprecated: false,
            properties: {
              id: {
                example: "M-3914-2321",
                type: "string"
              },
              name: {
                example: "John Doe Farm Equipment",
                type: "string"
              }
            },
            title: "MerchantOutputDto",
            "x-readme-ref-name": "MerchantOutputDto"
          },
          merchantNameId: {
            type: "string",
            nullable: true
          },
          mccCode: {
            type: "string",
            nullable: true
          },
          tariffGroupTypeId: {
            type: "string",
            nullable: true
          },
          layoutId: {
            type: "string",
            nullable: true
          }
        },
        title: "PointOfSale.PointOfSaleOutputDto",
        "x-readme-ref-name": "PointOfSale.PointOfSaleOutputDto"
      },
      PointOfSaleIpnUrlOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          url: {
            type: "string"
          },
          sendMethod: {
            type: "integer"
          },
          retrySchemeId: {
            type: "integer",
            nullable: true
          }
        },
        title: "PointOfSaleIpnUrlOutputDto",
        "x-readme-ref-name": "PointOfSaleIpnUrlOutputDto"
      },
      PointOfSaleOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: "SL-8498-3425",
            type: "string",
            nullable: true
          },
          name: {
            example: "Farm equipment",
            type: "string",
            nullable: true
          },
          group_id: {
            example: "P-1234-5678",
            type: "string",
            nullable: true
          },
          url: {
            example: "https://myfarmequipment.com/",
            type: "string",
            nullable: true
          },
          description: {
            example: "Description of my point of sale",
            type: "string",
            nullable: true
          },
          category_id: {
            type: "string",
            nullable: true
          },
          test_mode: {
            example: "false",
            type: "boolean",
            nullable: true
          },
          mcc_code: {
            example: "false",
            type: "string",
            nullable: true
          }
        },
        title: "PointOfSaleOutputDto",
        "x-readme-ref-name": "PointOfSaleOutputDto"
      },
      ProductOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          type: {
            example: "ARTICLE",
            type: "string"
          },
          name: {
            example: "Testproduct",
            type: "string"
          },
          unit_price: {
            example: "595",
            type: "integer"
          },
          quantity: {
            example: "1.0",
            type: "number"
          },
          vat_percentage: {
            example: "0.21",
            type: "number"
          },
          external_id: {
            example: "123b123h1239",
            type: "string",
            nullable: true
          },
          ean: {
            example: "4070071967072",
            type: "string",
            nullable: true
          },
          discount: {
            example: "5",
            type: "integer",
            nullable: true
          }
        },
        title: "ProductOutputDto",
        "x-readme-ref-name": "ProductOutputDto"
      },
      ProductQuantityInputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The externalId of the product to be captured.",
            example: "Product1",
            type: "string"
          },
          quantity: {
            description: "The quantity of this product to be captured.",
            example: 2,
            type: "number"
          }
        },
        title: "ProductQuantityInputDto",
        "x-readme-ref-name": "ProductQuantityInputDto"
      },
      PublicContactOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          type: {
            type: "string"
          },
          value: {
            type: "string"
          },
          description: {
            type: "string"
          }
        },
        title: "PublicContactOutputDto",
        "x-readme-ref-name": "PublicContactOutputDto"
      },
      StatsDataOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          extra1: {
            description: "The first free value which can be tracked in the stats.",
            example: "Extra1",
            type: "string",
            nullable: true
          },
          extra2: {
            description: "The second free value which can be tracked in the stats.",
            example: "Extra2",
            type: "string",
            nullable: true
          },
          extra3: {
            description: "The third free value which can be tracked in the stats.",
            example: "Extra3",
            type: "string",
            nullable: true
          },
          tool: {
            description: "The used tool code which can be tracked in the stats.",
            example: "Tool",
            type: "string",
            nullable: true
          },
          info: {
            description: "The used info code which can be tracked in the stats.",
            example: "Info",
            type: "string",
            nullable: true
          },
          object: {
            description: "The object which can be tracked in stats.",
            example: "Object",
            type: "string",
            nullable: true
          },
          promotor_id: {
            example: "8763",
            type: "integer",
            nullable: true
          },
          domain_id: {
            example: "WU-1234-1234",
            type: "string",
            nullable: true
          },
          transfer_data: {
            example: {
              yourCustom1: "Custom Data Field 1",
              yourCustom2: "Custom Data Field 2"
            },
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        title: "StatsDataOutputDto",
        "x-readme-ref-name": "StatsDataOutputDto"
      },
      StatusOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          code: {
            description: "The numeric status code.",
            example: 20,
            type: "integer",
            nullable: true
          },
          action: {
            description: "The human readable status string",
            example: "PENDING",
            type: "string",
            nullable: true
          }
        },
        title: "StatusOutputDto",
        "x-readme-ref-name": "StatusOutputDto"
      },
      StylingOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          stylesheet_url: {
            type: "string",
            nullable: true
          }
        },
        title: "StylingOutputDto",
        "x-readme-ref-name": "StylingOutputDto"
      },
      TradenameOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: "TM-1234-1234",
            type: "string"
          },
          name: {
            example: "John Doe Farm equipment",
            type: "string"
          }
        },
        title: "TradenameOutputDto",
        "x-readme-ref-name": "TradenameOutputDto"
      },
      WebsiteUrlOutputDto: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "string"
          },
          scrambledCode: {
            type: "string"
          },
          url: {
            type: "string"
          }
        },
        title: "WebsiteUrlOutputDto",
        "x-readme-ref-name": "WebsiteUrlOutputDto"
      },
      "Order.Input": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "serviceId",
          "amount"
        ],
        properties: {
          serviceId: {
            minLength: 12,
            maxLength: 12,
            pattern: "^(SL-[0-9]{4}-[0-9]{4})$",
            type: "string",
            description: "Unique service location identifier",
            example: "SL-1234-1234"
          },
          description: {
            description: "Is shown on the statement of the payer.",
            example: "Order Description",
            type: "string",
            nullable: true
          },
          reference: {
            description: "The merchant identification of this transaction. \n This field only allows alphanumeric characters",
            example: "REF1234",
            type: "string",
            nullable: true
          },
          expire: {
            description: "The time at which this order expires. Must be in ATOM (ISO-8601) notation.",
            example: "1999-11-22T13:37:00+01:00",
            type: "string",
            format: "date-time",
            nullable: true
          },
          returnUrl: {
            description: "The URL where the payer will be sent to after the payment.",
            example: "https://demo.pay.nl/start/return.php",
            type: "string",
            nullable: true
          },
          exchangeUrl: {
            description: "The URL where we exchange the status of a transaction.",
            example: "https://pay.nl/exchange",
            type: "string",
            nullable: true
          },
          amount: {
            type: "object",
            description: "",
            deprecated: false,
            required: [
              "value"
            ],
            properties: {
              value: {
                description: "The amount in cents. \u04041.50 becomes 150",
                example: 1,
                type: "integer"
              },
              currency: {
                externalDocs: {
                  url: "https://schema.org/priceCurrency"
                },
                example: "EUR",
                type: "string",
                nullable: true
              }
            },
            title: "Order.Input.Amount",
            "x-readme-ref-name": "Order.Input.Amount"
          },
          paymentMethod: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  id: {
                    example: 10,
                    type: "integer",
                    nullable: true
                  },
                  input: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "cardNumber"
                        ],
                        properties: {
                          cardNumber: {
                            minLength: 10,
                            description: "The card number of the Giftcard",
                            example: "6064363019",
                            type: "string"
                          },
                          pincode: {
                            minLength: 5,
                            maxLength: 6,
                            description: "The pin code of the Giftcard",
                            example: "123456",
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.Giftcard",
                        "x-readme-ref-name": "Order.PaymentMethod.Giftcard"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          issuerId: {
                            nullable: true,
                            description: "The ID (4 = ING) or the BIC code of the issuer, required for integrations with iDEAL 1.0",
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.iDEAL",
                        "x-readme-ref-name": "Order.PaymentMethod.iDEAL"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "terminalCode"
                        ],
                        properties: {
                          terminalCode: {
                            pattern: "^(TH-[0-9]{4}-[0-9]{4})$",
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.Pin",
                        "x-readme-ref-name": "Order.PaymentMethod.Pin"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "firstName",
                          "lastName",
                          "email",
                          "city",
                          "iban",
                          "bic"
                        ],
                        properties: {
                          firstName: {
                            type: "string",
                            nullable: true
                          },
                          lastName: {
                            type: "string",
                            nullable: true
                          },
                          email: {
                            format: "email",
                            externalDocs: {
                              url: "https://schema.org/email"
                            },
                            type: "string",
                            nullable: true
                          },
                          city: {
                            type: "string",
                            nullable: true
                          },
                          iban: {
                            externalDocs: {
                              url: "https://schema.org/identifier"
                            },
                            type: "string",
                            nullable: true
                          },
                          bic: {
                            externalDocs: {
                              url: "https://schema.org/identifier"
                            },
                            type: "string",
                            nullable: true
                          },
                          permissionGiven: {
                            type: "boolean"
                          }
                        },
                        title: "Order.PaymentMethod.DirectDebit",
                        "x-readme-ref-name": "Order.PaymentMethod.DirectDebit"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "countryCode"
                        ],
                        properties: {
                          countryCode: {
                            enum: [
                              "AU",
                              "AT",
                              "BE",
                              "CA",
                              "CZ",
                              "DK",
                              "FI",
                              "FR",
                              "DE",
                              "GR",
                              "IE",
                              "IT",
                              "MX",
                              "NL",
                              "NZ",
                              "NO",
                              "PL",
                              "PT",
                              "RO",
                              "ES",
                              "SE",
                              "CH",
                              "GB",
                              "US"
                            ],
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.Klarna",
                        "x-readme-ref-name": "Order.PaymentMethod.Klarna"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "email"
                        ],
                        properties: {
                          email: {
                            format: "email",
                            externalDocs: {
                              url: "https://schema.org/email"
                            },
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.Przelewy24",
                        "x-readme-ref-name": "Order.PaymentMethod.Przelewy24"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "issuer",
                          "country"
                        ],
                        properties: {
                          issuer: {
                            type: "string",
                            nullable: true
                          },
                          country: {
                            type: "string",
                            nullable: true
                          },
                          debtorIban: {
                            minLength: 1,
                            type: "string",
                            nullable: true
                          },
                          psuId: {
                            minLength: 1,
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "Order.PaymentMethod.PayByBank",
                        "x-readme-ref-name": "Order.PaymentMethod.PayByBank"
                      },
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "initials",
                          "firstName",
                          "lastName",
                          "gender",
                          "streetName",
                          "houseNumber",
                          "postalCode",
                          "city",
                          "country",
                          "email",
                          "phoneNumber"
                        ],
                        properties: {
                          initials: {
                            type: "string"
                          },
                          firstName: {
                            type: "string"
                          },
                          lastName: {
                            type: "string"
                          },
                          gender: {
                            enum: [
                              "FEMALE",
                              "MALE"
                            ],
                            type: "string"
                          },
                          streetName: {
                            type: "string"
                          },
                          houseNumber: {
                            type: "string"
                          },
                          houseNumberAddition: {
                            maxLength: 255,
                            type: "string",
                            nullable: true
                          },
                          postalCode: {
                            type: "string"
                          },
                          city: {
                            type: "string"
                          },
                          country: {
                            enum: [
                              "NL",
                              "BE"
                            ],
                            type: "string"
                          },
                          email: {
                            format: "email",
                            externalDocs: {
                              url: "https://schema.org/email"
                            },
                            type: "string"
                          },
                          phoneNumber: {
                            type: "string"
                          }
                        },
                        title: "Order.PaymentMethod.SprayPay",
                        "x-readme-ref-name": "Order.PaymentMethod.SprayPay"
                      }
                    ],
                    type: "object",
                    description: "Additional input for the payment method.",
                    items: {
                      type: "string"
                    },
                    nullable: true
                  }
                },
                title: "Order.Input.PaymentMethod",
                "x-readme-ref-name": "Order.Input.PaymentMethod"
              }
            ],
            nullable: true
          },
          integration: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  test: {
                    type: "boolean",
                    nullable: true
                  }
                },
                title: "Order.Input.Integration",
                "x-readme-ref-name": "Order.Input.Integration"
              }
            ],
            nullable: true
          },
          optimize: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  flow: {
                    enum: [
                      "fastCheckout"
                    ],
                    type: "string",
                    nullable: true
                  },
                  shippingAddress: {
                    type: "boolean",
                    nullable: true
                  },
                  billingAddress: {
                    type: "boolean",
                    nullable: true
                  },
                  contactDetails: {
                    type: "boolean",
                    nullable: true
                  },
                  mcc: {
                    maxLength: 4,
                    type: "string",
                    nullable: true
                  },
                  collectorAccount: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          method: {
                            enum: [
                              "iban"
                            ],
                            type: "string"
                          },
                          iban: {
                            anyOf: [
                              {
                                type: "object",
                                description: "",
                                deprecated: false,
                                required: [
                                  "iban",
                                  "bic",
                                  "owner"
                                ],
                                properties: {
                                  iban: {
                                    type: "string"
                                  },
                                  bic: {
                                    type: "string"
                                  },
                                  owner: {
                                    type: "string"
                                  }
                                },
                                title: "Order.Input.Optimize.CollectorAccount.Iban",
                                "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
                              }
                            ],
                            nullable: true
                          }
                        },
                        title: "Order.Input.Optimize.CollectorAccount",
                        "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount"
                      }
                    ],
                    nullable: true
                  },
                  collectorCompany: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "id",
                          "name"
                        ],
                        properties: {
                          id: {
                            type: "string"
                          },
                          name: {
                            type: "string"
                          }
                        },
                        title: "Order.Input.Optimize.CollectorCompany",
                        "x-readme-ref-name": "Order.Input.Optimize.CollectorCompany"
                      }
                    ],
                    nullable: true
                  }
                },
                title: "Order.Input.Optimize",
                "x-readme-ref-name": "Order.Input.Optimize"
              }
            ],
            nullable: true
          },
          customer: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  email: {
                    format: "email",
                    minLength: 1,
                    maxLength: 255,
                    externalDocs: {
                      url: "https://schema.org/email"
                    },
                    example: "johndoe@example.com",
                    type: "string",
                    nullable: true
                  },
                  firstname: {
                    minLength: 1,
                    maxLength: 255,
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastname: {
                    minLength: 1,
                    maxLength: 255,
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  birthDate: {
                    externalDocs: {
                      url: "https://schema.org/Date"
                    },
                    example: "1999-11-22",
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  gender: {
                    minLength: 1,
                    maxLength: 1,
                    example: "O",
                    type: "string",
                    nullable: true
                  },
                  phone: {
                    example: "06-12345678",
                    type: "string",
                    nullable: true
                  },
                  locale: {
                    example: "nl_BE",
                    type: "string",
                    nullable: true
                  },
                  ipAddress: {
                    example: "192.168.0.1",
                    type: "string",
                    nullable: true
                  },
                  trust: {
                    example: 1,
                    type: "integer",
                    nullable: true
                  },
                  reference: {
                    example: "Your customer reference",
                    type: "string",
                    nullable: true
                  },
                  gaClientId: {
                    example: "GA1.2.904941809.1556093647",
                    type: "string",
                    nullable: true
                  },
                  company: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          name: {
                            example: "Company.",
                            type: "string",
                            nullable: true
                          },
                          cocNumber: {
                            example: "000000",
                            type: "string",
                            nullable: true
                          },
                          vatNumber: {
                            example: "NL000000000B01",
                            type: "string",
                            nullable: true
                          },
                          country: {
                            example: "NL",
                            type: "string",
                            nullable: true
                          }
                        },
                        title: "Order.Input.Company",
                        "x-readme-ref-name": "Order.Input.Company"
                      }
                    ],
                    nullable: true
                  }
                },
                title: "Order.Input.Customer",
                "x-readme-ref-name": "Order.Input.Customer"
              }
            ],
            nullable: true
          },
          order: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  countryCode: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  deliveryDate: {
                    example: "2023-12-24",
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  invoiceDate: {
                    example: "2023-12-24",
                    type: "string",
                    format: "date-time",
                    nullable: true
                  },
                  deliveryAddress: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          firstName: {
                            description: "The forename (also known as a given name, Christian name or a first name).",
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastName: {
                            description: "The surname (also known as a family name or a last name).",
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          street: {
                            minLength: 1,
                            maxLength: 255,
                            description: "The name of the street",
                            example: "P.C. Hooftstraat",
                            type: "string",
                            nullable: true
                          },
                          streetNumber: {
                            minLength: 1,
                            maxLength: 16,
                            example: "100",
                            type: "string",
                            nullable: true
                          },
                          streetNumberExtension: {
                            minLength: 1,
                            maxLength: 16,
                            example: "second floor",
                            type: "string",
                            nullable: true
                          },
                          zipCode: {
                            minLength: 1,
                            maxLength: 100,
                            example: "3202XA",
                            type: "string",
                            nullable: true
                          },
                          city: {
                            minLength: 1,
                            maxLength: 255,
                            example: "Amsterdam",
                            type: "string",
                            nullable: true
                          },
                          country: {
                            minLength: 2,
                            maxLength: 2,
                            example: "NL",
                            type: "string",
                            nullable: true
                          },
                          region: {
                            minLength: 1,
                            maxLength: 50,
                            example: "NL",
                            type: "string",
                            nullable: true
                          }
                        },
                        required: [
                          "street",
                          "streetNumber",
                          "zipCode",
                          "city",
                          "country"
                        ],
                        title: "Order.Input.Address",
                        "x-readme-ref-name": "Order.Input.Address"
                      }
                    ],
                    nullable: true
                  },
                  invoiceAddress: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        properties: {
                          firstName: {
                            description: "The forename (also known as a given name, Christian name or a first name).",
                            example: "John",
                            type: "string",
                            nullable: true
                          },
                          lastName: {
                            description: "The surname (also known as a family name or a last name).",
                            example: "Doe",
                            type: "string",
                            nullable: true
                          },
                          street: {
                            minLength: 1,
                            maxLength: 255,
                            description: "The name of the street",
                            example: "P.C. Hooftstraat",
                            type: "string",
                            nullable: true
                          },
                          streetNumber: {
                            minLength: 1,
                            maxLength: 16,
                            example: "100",
                            type: "string",
                            nullable: true
                          },
                          streetNumberExtension: {
                            minLength: 1,
                            maxLength: 16,
                            example: "second floor",
                            type: "string",
                            nullable: true
                          },
                          zipCode: {
                            minLength: 1,
                            maxLength: 100,
                            example: "3202XA",
                            type: "string",
                            nullable: true
                          },
                          city: {
                            minLength: 1,
                            maxLength: 255,
                            example: "Amsterdam",
                            type: "string",
                            nullable: true
                          },
                          country: {
                            minLength: 2,
                            maxLength: 2,
                            example: "NL",
                            type: "string",
                            nullable: true
                          },
                          region: {
                            minLength: 1,
                            maxLength: 50,
                            example: "NL",
                            type: "string",
                            nullable: true
                          }
                        },
                        required: [
                          "street",
                          "streetNumber",
                          "zipCode",
                          "city",
                          "country"
                        ],
                        title: "Order.Input.Address",
                        "x-readme-ref-name": "Order.Input.Address"
                      }
                    ],
                    nullable: true
                  },
                  products: {
                    items: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          properties: {
                            id: {
                              example: "123b123h1239",
                              type: "string",
                              nullable: true
                            },
                            description: {
                              example: "Pair of socks",
                              type: "string",
                              nullable: true
                            },
                            type: {
                              description: "The type of product. \n\n             More information can be found here: https://paynl.readme.io/reference/producttypes",
                              example: "ARTICLE",
                              type: "string",
                              nullable: true
                            },
                            price: {
                              anyOf: [
                                {
                                  type: "object",
                                  description: "",
                                  deprecated: false,
                                  required: [
                                    "value"
                                  ],
                                  properties: {
                                    value: {
                                      description: "The amount in cents. \u04041.50 becomes 150",
                                      example: 1,
                                      type: "integer"
                                    },
                                    currency: {
                                      externalDocs: {
                                        url: "https://schema.org/priceCurrency"
                                      },
                                      example: "EUR",
                                      type: "string",
                                      nullable: true
                                    }
                                  },
                                  title: "Order.Input.Amount",
                                  "x-readme-ref-name": "Order.Input.Amount"
                                }
                              ],
                              nullable: true
                            },
                            quantity: {
                              example: 1,
                              type: "number",
                              nullable: true
                            },
                            vatPercentage: {
                              example: 21,
                              type: "number",
                              nullable: true
                            }
                          },
                          title: "Order.Input.Product",
                          "x-readme-ref-name": "Order.Input.Product"
                        }
                      ]
                    },
                    type: "array"
                  }
                },
                title: "Order.Input.Order",
                "x-readme-ref-name": "Order.Input.Order"
              }
            ],
            nullable: true
          },
          notification: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  type: {
                    enum: [
                      "push",
                      "email"
                    ],
                    description: 'Use "push" for push messages, or "email" to send out an email.\n                      For more information check the following page: https://paynl.readme.io/reference/accounts-1',
                    type: "string",
                    nullable: true
                  },
                  recipient: {
                    description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). \n        For email, provide a valid email address (XXXX@XXXX.XX).",
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.Input.Notification",
                "x-readme-ref-name": "Order.Input.Notification"
              }
            ],
            nullable: true
          },
          stats: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  tool: {
                    description: "The used tool code which can be tracked in the stats.",
                    example: "Tool",
                    type: "string",
                    nullable: true
                  },
                  info: {
                    description: "The used info code which can be tracked in the stats.",
                    example: "Info",
                    type: "string",
                    nullable: true
                  },
                  object: {
                    description: "The object which can be tracked in stats.",
                    example: "Object",
                    type: "string",
                    nullable: true
                  },
                  extra1: {
                    description: "The first free value which can be tracked in the stats.",
                    example: "Extra1",
                    type: "string",
                    nullable: true
                  },
                  extra2: {
                    description: "The second free value which can be tracked in the stats.",
                    example: "Extra2",
                    type: "string",
                    nullable: true
                  },
                  extra3: {
                    description: "The third free value which can be tracked in the stats.",
                    example: "Extra3",
                    type: "string",
                    nullable: true
                  },
                  domainId: {
                    example: "WU-1234-1234",
                    type: "string",
                    nullable: true
                  },
                  promotorId: {
                    type: "integer",
                    nullable: true
                  }
                },
                title: "Order.Input.Stats",
                "x-readme-ref-name": "Order.Input.Stats"
              }
            ],
            nullable: true
          },
          transferData: {
            type: "object",
            additionalProperties: {
              type: "string"
            },
            nullable: true
          }
        },
        title: "Order.Input",
        "x-readme-ref-name": "Order.Input"
      },
      "Order.Input.Optimize": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          flow: {
            enum: [
              "fastCheckout"
            ],
            type: "string",
            nullable: true
          },
          shippingAddress: {
            type: "boolean",
            nullable: true
          },
          billingAddress: {
            type: "boolean",
            nullable: true
          },
          contactDetails: {
            type: "boolean",
            nullable: true
          },
          mcc: {
            maxLength: 4,
            type: "string",
            nullable: true
          },
          collectorAccount: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  method: {
                    enum: [
                      "iban"
                    ],
                    type: "string"
                  },
                  iban: {
                    anyOf: [
                      {
                        type: "object",
                        description: "",
                        deprecated: false,
                        required: [
                          "iban",
                          "bic",
                          "owner"
                        ],
                        properties: {
                          iban: {
                            type: "string"
                          },
                          bic: {
                            type: "string"
                          },
                          owner: {
                            type: "string"
                          }
                        },
                        title: "Order.Input.Optimize.CollectorAccount.Iban",
                        "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
                      }
                    ],
                    nullable: true
                  }
                },
                title: "Order.Input.Optimize.CollectorAccount",
                "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount"
              }
            ],
            nullable: true
          },
          collectorCompany: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "id",
                  "name"
                ],
                properties: {
                  id: {
                    type: "string"
                  },
                  name: {
                    type: "string"
                  }
                },
                title: "Order.Input.Optimize.CollectorCompany",
                "x-readme-ref-name": "Order.Input.Optimize.CollectorCompany"
              }
            ],
            nullable: true
          }
        },
        title: "Order.Input.Optimize",
        "x-readme-ref-name": "Order.Input.Optimize"
      },
      "Order.Input.Optimize.CollectorAccount": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          method: {
            enum: [
              "iban"
            ],
            type: "string"
          },
          iban: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "iban",
                  "bic",
                  "owner"
                ],
                properties: {
                  iban: {
                    type: "string"
                  },
                  bic: {
                    type: "string"
                  },
                  owner: {
                    type: "string"
                  }
                },
                title: "Order.Input.Optimize.CollectorAccount.Iban",
                "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
              }
            ],
            nullable: true
          }
        },
        title: "Order.Input.Optimize.CollectorAccount",
        "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount"
      },
      "Order.Input.Optimize.CollectorCompany": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "id",
          "name"
        ],
        properties: {
          id: {
            type: "string"
          },
          name: {
            type: "string"
          }
        },
        title: "Order.Input.Optimize.CollectorCompany",
        "x-readme-ref-name": "Order.Input.Optimize.CollectorCompany"
      },
      "Order.Input.Amount": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "value"
        ],
        properties: {
          value: {
            description: "The amount in cents. \u04041.50 becomes 150",
            example: 1,
            type: "integer"
          },
          currency: {
            externalDocs: {
              url: "https://schema.org/priceCurrency"
            },
            example: "EUR",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Input.Amount",
        "x-readme-ref-name": "Order.Input.Amount"
      },
      "Order.Input.PaymentMethod": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: 10,
            type: "integer",
            nullable: true
          },
          input: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "cardNumber"
                ],
                properties: {
                  cardNumber: {
                    minLength: 10,
                    description: "The card number of the Giftcard",
                    example: "6064363019",
                    type: "string"
                  },
                  pincode: {
                    minLength: 5,
                    maxLength: 6,
                    description: "The pin code of the Giftcard",
                    example: "123456",
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.Giftcard",
                "x-readme-ref-name": "Order.PaymentMethod.Giftcard"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  issuerId: {
                    nullable: true,
                    description: "The ID (4 = ING) or the BIC code of the issuer, required for integrations with iDEAL 1.0",
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.iDEAL",
                "x-readme-ref-name": "Order.PaymentMethod.iDEAL"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "terminalCode"
                ],
                properties: {
                  terminalCode: {
                    pattern: "^(TH-[0-9]{4}-[0-9]{4})$",
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.Pin",
                "x-readme-ref-name": "Order.PaymentMethod.Pin"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "firstName",
                  "lastName",
                  "email",
                  "city",
                  "iban",
                  "bic"
                ],
                properties: {
                  firstName: {
                    type: "string",
                    nullable: true
                  },
                  lastName: {
                    type: "string",
                    nullable: true
                  },
                  email: {
                    format: "email",
                    externalDocs: {
                      url: "https://schema.org/email"
                    },
                    type: "string",
                    nullable: true
                  },
                  city: {
                    type: "string",
                    nullable: true
                  },
                  iban: {
                    externalDocs: {
                      url: "https://schema.org/identifier"
                    },
                    type: "string",
                    nullable: true
                  },
                  bic: {
                    externalDocs: {
                      url: "https://schema.org/identifier"
                    },
                    type: "string",
                    nullable: true
                  },
                  permissionGiven: {
                    type: "boolean"
                  }
                },
                title: "Order.PaymentMethod.DirectDebit",
                "x-readme-ref-name": "Order.PaymentMethod.DirectDebit"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "countryCode"
                ],
                properties: {
                  countryCode: {
                    enum: [
                      "AU",
                      "AT",
                      "BE",
                      "CA",
                      "CZ",
                      "DK",
                      "FI",
                      "FR",
                      "DE",
                      "GR",
                      "IE",
                      "IT",
                      "MX",
                      "NL",
                      "NZ",
                      "NO",
                      "PL",
                      "PT",
                      "RO",
                      "ES",
                      "SE",
                      "CH",
                      "GB",
                      "US"
                    ],
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.Klarna",
                "x-readme-ref-name": "Order.PaymentMethod.Klarna"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "email"
                ],
                properties: {
                  email: {
                    format: "email",
                    externalDocs: {
                      url: "https://schema.org/email"
                    },
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.Przelewy24",
                "x-readme-ref-name": "Order.PaymentMethod.Przelewy24"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "issuer",
                  "country"
                ],
                properties: {
                  issuer: {
                    type: "string",
                    nullable: true
                  },
                  country: {
                    type: "string",
                    nullable: true
                  },
                  debtorIban: {
                    minLength: 1,
                    type: "string",
                    nullable: true
                  },
                  psuId: {
                    minLength: 1,
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.PaymentMethod.PayByBank",
                "x-readme-ref-name": "Order.PaymentMethod.PayByBank"
              },
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "initials",
                  "firstName",
                  "lastName",
                  "gender",
                  "streetName",
                  "houseNumber",
                  "postalCode",
                  "city",
                  "country",
                  "email",
                  "phoneNumber"
                ],
                properties: {
                  initials: {
                    type: "string"
                  },
                  firstName: {
                    type: "string"
                  },
                  lastName: {
                    type: "string"
                  },
                  gender: {
                    enum: [
                      "FEMALE",
                      "MALE"
                    ],
                    type: "string"
                  },
                  streetName: {
                    type: "string"
                  },
                  houseNumber: {
                    type: "string"
                  },
                  houseNumberAddition: {
                    maxLength: 255,
                    type: "string",
                    nullable: true
                  },
                  postalCode: {
                    type: "string"
                  },
                  city: {
                    type: "string"
                  },
                  country: {
                    enum: [
                      "NL",
                      "BE"
                    ],
                    type: "string"
                  },
                  email: {
                    format: "email",
                    externalDocs: {
                      url: "https://schema.org/email"
                    },
                    type: "string"
                  },
                  phoneNumber: {
                    type: "string"
                  }
                },
                title: "Order.PaymentMethod.SprayPay",
                "x-readme-ref-name": "Order.PaymentMethod.SprayPay"
              }
            ],
            type: "object",
            description: "Additional input for the payment method.",
            items: {
              type: "string"
            },
            nullable: true
          }
        },
        title: "Order.Input.PaymentMethod",
        "x-readme-ref-name": "Order.Input.PaymentMethod"
      },
      "Order.Input.Integration": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          test: {
            type: "boolean",
            nullable: true
          }
        },
        title: "Order.Input.Integration",
        "x-readme-ref-name": "Order.Input.Integration"
      },
      "Order.Input.Customer": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          email: {
            format: "email",
            minLength: 1,
            maxLength: 255,
            externalDocs: {
              url: "https://schema.org/email"
            },
            example: "johndoe@example.com",
            type: "string",
            nullable: true
          },
          firstname: {
            minLength: 1,
            maxLength: 255,
            example: "John",
            type: "string",
            nullable: true
          },
          lastname: {
            minLength: 1,
            maxLength: 255,
            example: "Doe",
            type: "string",
            nullable: true
          },
          birthDate: {
            externalDocs: {
              url: "https://schema.org/Date"
            },
            example: "1999-11-22",
            type: "string",
            format: "date-time",
            nullable: true
          },
          gender: {
            minLength: 1,
            maxLength: 1,
            example: "O",
            type: "string",
            nullable: true
          },
          phone: {
            example: "06-12345678",
            type: "string",
            nullable: true
          },
          locale: {
            example: "nl_BE",
            type: "string",
            nullable: true
          },
          ipAddress: {
            example: "192.168.0.1",
            type: "string",
            nullable: true
          },
          trust: {
            example: 1,
            type: "integer",
            nullable: true
          },
          reference: {
            example: "Your customer reference",
            type: "string",
            nullable: true
          },
          gaClientId: {
            example: "GA1.2.904941809.1556093647",
            type: "string",
            nullable: true
          },
          company: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Company.",
                    type: "string",
                    nullable: true
                  },
                  cocNumber: {
                    example: "000000",
                    type: "string",
                    nullable: true
                  },
                  vatNumber: {
                    example: "NL000000000B01",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.Input.Company",
                "x-readme-ref-name": "Order.Input.Company"
              }
            ],
            nullable: true
          }
        },
        title: "Order.Input.Customer",
        "x-readme-ref-name": "Order.Input.Customer"
      },
      "Order.Input.Order": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          countryCode: {
            example: "NL",
            type: "string",
            nullable: true
          },
          deliveryDate: {
            example: "2023-12-24",
            type: "string",
            format: "date-time",
            nullable: true
          },
          invoiceDate: {
            example: "2023-12-24",
            type: "string",
            format: "date-time",
            nullable: true
          },
          deliveryAddress: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  street: {
                    minLength: 1,
                    maxLength: 255,
                    description: "The name of the street",
                    example: "P.C. Hooftstraat",
                    type: "string",
                    nullable: true
                  },
                  streetNumber: {
                    minLength: 1,
                    maxLength: 16,
                    example: "100",
                    type: "string",
                    nullable: true
                  },
                  streetNumberExtension: {
                    minLength: 1,
                    maxLength: 16,
                    example: "second floor",
                    type: "string",
                    nullable: true
                  },
                  zipCode: {
                    minLength: 1,
                    maxLength: 100,
                    example: "3202XA",
                    type: "string",
                    nullable: true
                  },
                  city: {
                    minLength: 1,
                    maxLength: 255,
                    example: "Amsterdam",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    minLength: 2,
                    maxLength: 2,
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  region: {
                    minLength: 1,
                    maxLength: 50,
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                required: [
                  "street",
                  "streetNumber",
                  "zipCode",
                  "city",
                  "country"
                ],
                title: "Order.Input.Address",
                "x-readme-ref-name": "Order.Input.Address"
              }
            ],
            nullable: true
          },
          invoiceAddress: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  firstName: {
                    description: "The forename (also known as a given name, Christian name or a first name).",
                    example: "John",
                    type: "string",
                    nullable: true
                  },
                  lastName: {
                    description: "The surname (also known as a family name or a last name).",
                    example: "Doe",
                    type: "string",
                    nullable: true
                  },
                  street: {
                    minLength: 1,
                    maxLength: 255,
                    description: "The name of the street",
                    example: "P.C. Hooftstraat",
                    type: "string",
                    nullable: true
                  },
                  streetNumber: {
                    minLength: 1,
                    maxLength: 16,
                    example: "100",
                    type: "string",
                    nullable: true
                  },
                  streetNumberExtension: {
                    minLength: 1,
                    maxLength: 16,
                    example: "second floor",
                    type: "string",
                    nullable: true
                  },
                  zipCode: {
                    minLength: 1,
                    maxLength: 100,
                    example: "3202XA",
                    type: "string",
                    nullable: true
                  },
                  city: {
                    minLength: 1,
                    maxLength: 255,
                    example: "Amsterdam",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    minLength: 2,
                    maxLength: 2,
                    example: "NL",
                    type: "string",
                    nullable: true
                  },
                  region: {
                    minLength: 1,
                    maxLength: 50,
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                required: [
                  "street",
                  "streetNumber",
                  "zipCode",
                  "city",
                  "country"
                ],
                title: "Order.Input.Address",
                "x-readme-ref-name": "Order.Input.Address"
              }
            ],
            nullable: true
          },
          products: {
            items: {
              anyOf: [
                {
                  type: "object",
                  description: "",
                  deprecated: false,
                  properties: {
                    id: {
                      example: "123b123h1239",
                      type: "string",
                      nullable: true
                    },
                    description: {
                      example: "Pair of socks",
                      type: "string",
                      nullable: true
                    },
                    type: {
                      description: "The type of product. \n\n             More information can be found here: https://paynl.readme.io/reference/producttypes",
                      example: "ARTICLE",
                      type: "string",
                      nullable: true
                    },
                    price: {
                      anyOf: [
                        {
                          type: "object",
                          description: "",
                          deprecated: false,
                          required: [
                            "value"
                          ],
                          properties: {
                            value: {
                              description: "The amount in cents. \u04041.50 becomes 150",
                              example: 1,
                              type: "integer"
                            },
                            currency: {
                              externalDocs: {
                                url: "https://schema.org/priceCurrency"
                              },
                              example: "EUR",
                              type: "string",
                              nullable: true
                            }
                          },
                          title: "Order.Input.Amount",
                          "x-readme-ref-name": "Order.Input.Amount"
                        }
                      ],
                      nullable: true
                    },
                    quantity: {
                      example: 1,
                      type: "number",
                      nullable: true
                    },
                    vatPercentage: {
                      example: 21,
                      type: "number",
                      nullable: true
                    }
                  },
                  title: "Order.Input.Product",
                  "x-readme-ref-name": "Order.Input.Product"
                }
              ]
            },
            type: "array"
          }
        },
        title: "Order.Input.Order",
        "x-readme-ref-name": "Order.Input.Order"
      },
      "Order.Input.Company": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          name: {
            example: "Company.",
            type: "string",
            nullable: true
          },
          cocNumber: {
            example: "000000",
            type: "string",
            nullable: true
          },
          vatNumber: {
            example: "NL000000000B01",
            type: "string",
            nullable: true
          },
          country: {
            example: "NL",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Input.Company",
        "x-readme-ref-name": "Order.Input.Company"
      },
      "Order.Input.Address": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          firstName: {
            description: "The forename (also known as a given name, Christian name or a first name).",
            example: "John",
            type: "string",
            nullable: true
          },
          lastName: {
            description: "The surname (also known as a family name or a last name).",
            example: "Doe",
            type: "string",
            nullable: true
          },
          street: {
            minLength: 1,
            maxLength: 255,
            description: "The name of the street",
            example: "P.C. Hooftstraat",
            type: "string",
            nullable: true
          },
          streetNumber: {
            minLength: 1,
            maxLength: 16,
            example: "100",
            type: "string",
            nullable: true
          },
          streetNumberExtension: {
            minLength: 1,
            maxLength: 16,
            example: "second floor",
            type: "string",
            nullable: true
          },
          zipCode: {
            minLength: 1,
            maxLength: 100,
            example: "3202XA",
            type: "string",
            nullable: true
          },
          city: {
            minLength: 1,
            maxLength: 255,
            example: "Amsterdam",
            type: "string",
            nullable: true
          },
          country: {
            minLength: 2,
            maxLength: 2,
            example: "NL",
            type: "string",
            nullable: true
          },
          region: {
            minLength: 1,
            maxLength: 50,
            example: "NL",
            type: "string",
            nullable: true
          }
        },
        required: [
          "street",
          "streetNumber",
          "zipCode",
          "city",
          "country"
        ],
        title: "Order.Input.Address",
        "x-readme-ref-name": "Order.Input.Address"
      },
      "Order.Input.Product": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            example: "123b123h1239",
            type: "string",
            nullable: true
          },
          description: {
            example: "Pair of socks",
            type: "string",
            nullable: true
          },
          type: {
            description: "The type of product. \n\n             More information can be found here: https://paynl.readme.io/reference/producttypes",
            example: "ARTICLE",
            type: "string",
            nullable: true
          },
          price: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                required: [
                  "value"
                ],
                properties: {
                  value: {
                    description: "The amount in cents. \u04041.50 becomes 150",
                    example: 1,
                    type: "integer"
                  },
                  currency: {
                    externalDocs: {
                      url: "https://schema.org/priceCurrency"
                    },
                    example: "EUR",
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.Input.Amount",
                "x-readme-ref-name": "Order.Input.Amount"
              }
            ],
            nullable: true
          },
          quantity: {
            example: 1,
            type: "number",
            nullable: true
          },
          vatPercentage: {
            example: 21,
            type: "number",
            nullable: true
          }
        },
        title: "Order.Input.Product",
        "x-readme-ref-name": "Order.Input.Product"
      },
      "Order.Input.Notification": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          type: {
            enum: [
              "push",
              "email"
            ],
            description: 'Use "push" for push messages, or "email" to send out an email.\n                      For more information check the following page: https://paynl.readme.io/reference/accounts-1',
            type: "string",
            nullable: true
          },
          recipient: {
            description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). \n        For email, provide a valid email address (XXXX@XXXX.XX).",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Input.Notification",
        "x-readme-ref-name": "Order.Input.Notification"
      },
      "Order.Input.Stats": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          tool: {
            description: "The used tool code which can be tracked in the stats.",
            example: "Tool",
            type: "string",
            nullable: true
          },
          info: {
            description: "The used info code which can be tracked in the stats.",
            example: "Info",
            type: "string",
            nullable: true
          },
          object: {
            description: "The object which can be tracked in stats.",
            example: "Object",
            type: "string",
            nullable: true
          },
          extra1: {
            description: "The first free value which can be tracked in the stats.",
            example: "Extra1",
            type: "string",
            nullable: true
          },
          extra2: {
            description: "The second free value which can be tracked in the stats.",
            example: "Extra2",
            type: "string",
            nullable: true
          },
          extra3: {
            description: "The third free value which can be tracked in the stats.",
            example: "Extra3",
            type: "string",
            nullable: true
          },
          domainId: {
            example: "WU-1234-1234",
            type: "string",
            nullable: true
          },
          promotorId: {
            type: "integer",
            nullable: true
          }
        },
        title: "Order.Input.Stats",
        "x-readme-ref-name": "Order.Input.Stats"
      },
      "Order.Output": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The unique identifier of your order.",
            example: "655b2da5-5223-8f32-1aee-737862302XXX",
            type: "string"
          },
          serviceId: {
            description: "The Service ID used for creating this order",
            example: "SL-1234-1234",
            type: "string"
          },
          description: {
            description: "The description given for this order.",
            example: "Instore Terminal Order #27",
            type: "string",
            nullable: true
          },
          reference: {
            description: "The reference given for this order.",
            example: "REF1234",
            type: "string",
            nullable: true
          },
          manualTransferCode: {
            description: "The manual transfer code that can be used to transfer the order amount to PAY. using a bank transfer.",
            example: "1234 1234 1234 1234",
            type: "string"
          },
          orderId: {
            description: "The order ID as you would see it within the PAY. platform.",
            example: "52305407020X2325",
            type: "string"
          },
          uuid: {
            description: "The UUID that can be used to create a QR code for this order.",
            example: "ad0e7378-6230-2325-5230-5407020a2XXX",
            type: "string"
          },
          customerKey: {
            readOnly: true,
            description: "An identifier for the customer",
            type: "string",
            nullable: true
          },
          status: {
            description: "The status of the order.",
            type: "object",
            deprecated: false,
            properties: {
              code: {
                description: "The numeric status code.",
                example: 20,
                type: "integer",
                nullable: true
              },
              action: {
                description: "The human readable status string",
                example: "PENDING",
                type: "string",
                nullable: true
              }
            }
          },
          receipt: {
            readOnly: true,
            description: "Base64 encoded string of the receipt for this order when it's paid.",
            example: "<base64 string>",
            type: "string",
            nullable: true
          },
          integration: {
            description: "Information about your integration.",
            type: "object",
            deprecated: false,
            properties: {
              test: {
                description: "Whether this order was created in Test Mode, defaults to false.",
                type: "boolean"
              }
            }
          },
          amount: {
            description: "The amount for this order.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          authorizedAmount: {
            description: "The amount of the order that is authorized.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          capturedAmount: {
            description: "The amount of the order that is captured.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          checkoutData: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  customer: {
                    description: "The customer provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      email: {
                        example: "johndoe@example.com",
                        type: "string",
                        nullable: true
                      },
                      firstname: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastname: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      dateOfBirth: {
                        example: "1999-11-22",
                        type: "string",
                        format: "date-time",
                        nullable: true
                      },
                      gender: {
                        example: "O",
                        type: "string",
                        nullable: true
                      },
                      phone: {
                        example: "06-12345678",
                        type: "string",
                        nullable: true
                      },
                      locale: {
                        example: "nl_BE",
                        type: "string",
                        nullable: true
                      },
                      ipAddress: {
                        example: "192.168.0.1",
                        type: "string",
                        nullable: true
                      },
                      reference: {
                        example: "Cstmr12",
                        type: "string",
                        nullable: true
                      },
                      company: {
                        anyOf: [
                          {
                            type: "object",
                            description: "",
                            deprecated: false,
                            properties: {
                              name: {
                                example: "Pay.",
                                type: "string",
                                nullable: true
                              },
                              cocNumber: {
                                example: "24283498",
                                type: "string",
                                nullable: true
                              },
                              vatNumber: {
                                example: "NL807960147B01",
                                type: "string",
                                nullable: true
                              },
                              country: {
                                example: "NL",
                                type: "string",
                                nullable: true
                              }
                            },
                            title: "Order.Output.CheckoutData.Company",
                            "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                          }
                        ],
                        nullable: true
                      }
                    }
                  },
                  billingAddress: {
                    readOnly: true,
                    description: "The billing address provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      firstName: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastName: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      streetName: {
                        example: "Curieweg",
                        type: "string",
                        nullable: true
                      },
                      streetNumber: {
                        example: "19",
                        type: "string",
                        nullable: true
                      },
                      streetNumberAddition: {
                        example: "C",
                        type: "string",
                        nullable: true
                      },
                      zipCode: {
                        example: "3208 KJ",
                        type: "string",
                        nullable: true
                      },
                      city: {
                        example: "Spijkenisse",
                        type: "string",
                        nullable: true
                      },
                      countryCode: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      },
                      regionCode: {
                        example: "nl-ZH",
                        type: "string",
                        nullable: true
                      }
                    }
                  },
                  shippingAddress: {
                    description: "The delivery address provided by the supplier",
                    type: "object",
                    deprecated: false,
                    properties: {
                      firstName: {
                        example: "John",
                        type: "string",
                        nullable: true
                      },
                      lastName: {
                        example: "Doe",
                        type: "string",
                        nullable: true
                      },
                      streetName: {
                        example: "Curieweg",
                        type: "string",
                        nullable: true
                      },
                      streetNumber: {
                        example: "19",
                        type: "string",
                        nullable: true
                      },
                      streetNumberAddition: {
                        example: "C",
                        type: "string",
                        nullable: true
                      },
                      zipCode: {
                        example: "3208 KJ",
                        type: "string",
                        nullable: true
                      },
                      city: {
                        example: "Spijkenisse",
                        type: "string",
                        nullable: true
                      },
                      countryCode: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      },
                      regionCode: {
                        example: "nl-ZH",
                        type: "string",
                        nullable: true
                      }
                    }
                  }
                },
                title: "Order.Output.CheckoutData",
                "x-readme-ref-name": "Order.Output.CheckoutData"
              }
            ],
            readOnly: true,
            description: "Standardized customer data provided by the supplier",
            nullable: true
          },
          payments: {
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                id: {
                  description: "The unique ID of this payment",
                  example: "2d29c301-c71d-4016-8239-4ee3194a234e",
                  type: "string"
                },
                paymentMethod: {
                  description: "Information of this payments' payment method.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    id: {
                      type: "integer",
                      nullable: true
                    },
                    input: {
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  }
                },
                customerType: {
                  type: "string",
                  nullable: true
                },
                customerKey: {
                  description: "A hashed string identifying the customer itself without exposing sensitive data.",
                  example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
                  type: "string",
                  nullable: true
                },
                customerId: {
                  description: "The identifier of the customer as known by the payment method. For example the IBAN.",
                  example: "GB33BUKB20201555555555",
                  type: "string",
                  nullable: true
                },
                customerName: {
                  description: "The name of the customer as known by the payment method.",
                  type: "string",
                  nullable: true
                },
                ipAddress: {
                  description: "The IP Address of the customer that interacted with this payment.",
                  type: "string",
                  nullable: true
                },
                secureStatus: {
                  description: "Whether or not the customer was 3DS challenged.",
                  type: "boolean"
                },
                paymentVerificationMethod: {
                  description: "A numeric id of how this payment was verified.",
                  type: "integer",
                  nullable: true
                },
                status: {
                  description: "The status of this payment.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    code: {
                      description: "The numeric status code.",
                      example: 20,
                      type: "integer",
                      nullable: true
                    },
                    action: {
                      description: "The human readable status string",
                      example: "PENDING",
                      type: "string",
                      nullable: true
                    }
                  }
                },
                currencyAmount: {
                  description: "The amount of this payment in the currency of the order.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                amount: {
                  description: "The amount of this payment in the currency in which it was processed.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                authorizedAmount: {
                  description: "The amount of this payment that is authorized.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                capturedAmount: {
                  description: "The amount of this payment that is captured.",
                  type: "object",
                  deprecated: false,
                  properties: {
                    value: {
                      example: 1,
                      type: "integer"
                    },
                    currency: {
                      example: "EUR",
                      type: "string"
                    }
                  }
                },
                supplierData: {
                  description: "Relevant data returned by the supplier.",
                  type: "array",
                  items: {
                    type: "string"
                  },
                  nullable: true
                }
              },
              title: "Order.Output.Payment",
              "x-readme-ref-name": "Order.Output.Payment"
            },
            readOnly: true,
            description: "The payments that are linked to this order.",
            type: "array"
          },
          createdAt: {
            description: "The date-time at which this order was created in our system.",
            type: "string",
            format: "date-time"
          },
          createdBy: {
            description: "The API token or Service ID that created this order.",
            type: "string",
            nullable: true
          },
          modifiedAt: {
            description: "The date-time at which this order was modified in our system. This can be done by you or by actions taken within our order-payment flow.",
            type: "string",
            format: "date-time",
            nullable: true
          },
          modifiedBy: {
            description: "The API token or Service ID that did the modification of the order. This can also be the TGU node that was handling the order-payment flow.",
            type: "string",
            nullable: true
          },
          expiresAt: {
            description: "The date-time at which this order expires.",
            type: "string",
            format: "date-time"
          },
          completedAt: {
            description: "The date-time at which this order was completed. This means that all underlying payments are captured and money is guaranteed.",
            type: "string",
            format: "date-time",
            nullable: true
          },
          links: {
            readOnly: true,
            description: "The links that can be used to interact with this order.",
            example: {
              redirect: "<an_url>",
              status: "<an_url>",
              cancel: "<an_url>"
            },
            type: "object",
            additionalProperties: {
              type: "string"
            }
          }
        },
        title: "Order.Output",
        "x-readme-ref-name": "Order.Output"
      },
      "Order.Output.Status": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          code: {
            description: "The numeric status code.",
            example: 20,
            type: "integer",
            nullable: true
          },
          action: {
            description: "The human readable status string",
            example: "PENDING",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Output.Status",
        "x-readme-ref-name": "Order.Output.Status"
      },
      "Order.Output.Integration": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          test: {
            description: "Whether this order was created in Test Mode, defaults to false.",
            type: "boolean"
          }
        },
        title: "Order.Output.Integration",
        "x-readme-ref-name": "Order.Output.Integration"
      },
      "Order.Output.Amount": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          value: {
            example: 1,
            type: "integer"
          },
          currency: {
            example: "EUR",
            type: "string"
          }
        },
        title: "Order.Output.Amount",
        "x-readme-ref-name": "Order.Output.Amount"
      },
      "Order.Output.Payment": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            description: "The unique ID of this payment",
            example: "2d29c301-c71d-4016-8239-4ee3194a234e",
            type: "string"
          },
          paymentMethod: {
            description: "Information of this payments' payment method.",
            type: "object",
            deprecated: false,
            properties: {
              id: {
                type: "integer",
                nullable: true
              },
              input: {
                type: "array",
                items: {
                  type: "string"
                }
              }
            }
          },
          customerType: {
            type: "string",
            nullable: true
          },
          customerKey: {
            description: "A hashed string identifying the customer itself without exposing sensitive data.",
            example: "5d7dbff5bf0a64c7e3d9dbd8806d2b55d3d67731",
            type: "string",
            nullable: true
          },
          customerId: {
            description: "The identifier of the customer as known by the payment method. For example the IBAN.",
            example: "GB33BUKB20201555555555",
            type: "string",
            nullable: true
          },
          customerName: {
            description: "The name of the customer as known by the payment method.",
            type: "string",
            nullable: true
          },
          ipAddress: {
            description: "The IP Address of the customer that interacted with this payment.",
            type: "string",
            nullable: true
          },
          secureStatus: {
            description: "Whether or not the customer was 3DS challenged.",
            type: "boolean"
          },
          paymentVerificationMethod: {
            description: "A numeric id of how this payment was verified.",
            type: "integer",
            nullable: true
          },
          status: {
            description: "The status of this payment.",
            type: "object",
            deprecated: false,
            properties: {
              code: {
                description: "The numeric status code.",
                example: 20,
                type: "integer",
                nullable: true
              },
              action: {
                description: "The human readable status string",
                example: "PENDING",
                type: "string",
                nullable: true
              }
            }
          },
          currencyAmount: {
            description: "The amount of this payment in the currency of the order.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          amount: {
            description: "The amount of this payment in the currency in which it was processed.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          authorizedAmount: {
            description: "The amount of this payment that is authorized.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          capturedAmount: {
            description: "The amount of this payment that is captured.",
            type: "object",
            deprecated: false,
            properties: {
              value: {
                example: 1,
                type: "integer"
              },
              currency: {
                example: "EUR",
                type: "string"
              }
            }
          },
          supplierData: {
            description: "Relevant data returned by the supplier.",
            type: "array",
            items: {
              type: "string"
            },
            nullable: true
          }
        },
        title: "Order.Output.Payment",
        "x-readme-ref-name": "Order.Output.Payment"
      },
      "Order.Output.PaymentMethod": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          id: {
            type: "integer",
            nullable: true
          },
          input: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        title: "Order.Output.PaymentMethod",
        "x-readme-ref-name": "Order.Output.PaymentMethod"
      },
      "Order.Output.CheckoutData": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          customer: {
            description: "The customer provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              email: {
                example: "johndoe@example.com",
                type: "string",
                nullable: true
              },
              firstname: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastname: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              dateOfBirth: {
                example: "1999-11-22",
                type: "string",
                format: "date-time",
                nullable: true
              },
              gender: {
                example: "O",
                type: "string",
                nullable: true
              },
              phone: {
                example: "06-12345678",
                type: "string",
                nullable: true
              },
              locale: {
                example: "nl_BE",
                type: "string",
                nullable: true
              },
              ipAddress: {
                example: "192.168.0.1",
                type: "string",
                nullable: true
              },
              reference: {
                example: "Cstmr12",
                type: "string",
                nullable: true
              },
              company: {
                anyOf: [
                  {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      name: {
                        example: "Pay.",
                        type: "string",
                        nullable: true
                      },
                      cocNumber: {
                        example: "24283498",
                        type: "string",
                        nullable: true
                      },
                      vatNumber: {
                        example: "NL807960147B01",
                        type: "string",
                        nullable: true
                      },
                      country: {
                        example: "NL",
                        type: "string",
                        nullable: true
                      }
                    },
                    title: "Order.Output.CheckoutData.Company",
                    "x-readme-ref-name": "Order.Output.CheckoutData.Company"
                  }
                ],
                nullable: true
              }
            }
          },
          billingAddress: {
            readOnly: true,
            description: "The billing address provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              firstName: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastName: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              streetName: {
                example: "Curieweg",
                type: "string",
                nullable: true
              },
              streetNumber: {
                example: "19",
                type: "string",
                nullable: true
              },
              streetNumberAddition: {
                example: "C",
                type: "string",
                nullable: true
              },
              zipCode: {
                example: "3208 KJ",
                type: "string",
                nullable: true
              },
              city: {
                example: "Spijkenisse",
                type: "string",
                nullable: true
              },
              countryCode: {
                example: "NL",
                type: "string",
                nullable: true
              },
              regionCode: {
                example: "nl-ZH",
                type: "string",
                nullable: true
              }
            }
          },
          shippingAddress: {
            description: "The delivery address provided by the supplier",
            type: "object",
            deprecated: false,
            properties: {
              firstName: {
                example: "John",
                type: "string",
                nullable: true
              },
              lastName: {
                example: "Doe",
                type: "string",
                nullable: true
              },
              streetName: {
                example: "Curieweg",
                type: "string",
                nullable: true
              },
              streetNumber: {
                example: "19",
                type: "string",
                nullable: true
              },
              streetNumberAddition: {
                example: "C",
                type: "string",
                nullable: true
              },
              zipCode: {
                example: "3208 KJ",
                type: "string",
                nullable: true
              },
              city: {
                example: "Spijkenisse",
                type: "string",
                nullable: true
              },
              countryCode: {
                example: "NL",
                type: "string",
                nullable: true
              },
              regionCode: {
                example: "nl-ZH",
                type: "string",
                nullable: true
              }
            }
          }
        },
        title: "Order.Output.CheckoutData",
        "x-readme-ref-name": "Order.Output.CheckoutData"
      },
      "Order.Output.CheckoutData.Address": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          firstName: {
            example: "John",
            type: "string",
            nullable: true
          },
          lastName: {
            example: "Doe",
            type: "string",
            nullable: true
          },
          streetName: {
            example: "Curieweg",
            type: "string",
            nullable: true
          },
          streetNumber: {
            example: "19",
            type: "string",
            nullable: true
          },
          streetNumberAddition: {
            example: "C",
            type: "string",
            nullable: true
          },
          zipCode: {
            example: "3208 KJ",
            type: "string",
            nullable: true
          },
          city: {
            example: "Spijkenisse",
            type: "string",
            nullable: true
          },
          countryCode: {
            example: "NL",
            type: "string",
            nullable: true
          },
          regionCode: {
            example: "nl-ZH",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Output.CheckoutData.Address",
        "x-readme-ref-name": "Order.Output.CheckoutData.Address"
      },
      "Order.Output.CheckoutData.Company": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          name: {
            example: "Pay.",
            type: "string",
            nullable: true
          },
          cocNumber: {
            example: "24283498",
            type: "string",
            nullable: true
          },
          vatNumber: {
            example: "NL807960147B01",
            type: "string",
            nullable: true
          },
          country: {
            example: "NL",
            type: "string",
            nullable: true
          }
        },
        title: "Order.Output.CheckoutData.Company",
        "x-readme-ref-name": "Order.Output.CheckoutData.Company"
      },
      "Order.Output.CheckoutData.Customer": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          email: {
            example: "johndoe@example.com",
            type: "string",
            nullable: true
          },
          firstname: {
            example: "John",
            type: "string",
            nullable: true
          },
          lastname: {
            example: "Doe",
            type: "string",
            nullable: true
          },
          dateOfBirth: {
            example: "1999-11-22",
            type: "string",
            format: "date-time",
            nullable: true
          },
          gender: {
            example: "O",
            type: "string",
            nullable: true
          },
          phone: {
            example: "06-12345678",
            type: "string",
            nullable: true
          },
          locale: {
            example: "nl_BE",
            type: "string",
            nullable: true
          },
          ipAddress: {
            example: "192.168.0.1",
            type: "string",
            nullable: true
          },
          reference: {
            example: "Cstmr12",
            type: "string",
            nullable: true
          },
          company: {
            anyOf: [
              {
                type: "object",
                description: "",
                deprecated: false,
                properties: {
                  name: {
                    example: "Pay.",
                    type: "string",
                    nullable: true
                  },
                  cocNumber: {
                    example: "24283498",
                    type: "string",
                    nullable: true
                  },
                  vatNumber: {
                    example: "NL807960147B01",
                    type: "string",
                    nullable: true
                  },
                  country: {
                    example: "NL",
                    type: "string",
                    nullable: true
                  }
                },
                title: "Order.Output.CheckoutData.Company",
                "x-readme-ref-name": "Order.Output.CheckoutData.Company"
              }
            ],
            nullable: true
          }
        },
        title: "Order.Output.CheckoutData.Customer",
        "x-readme-ref-name": "Order.Output.CheckoutData.Customer"
      },
      "Order.PaymentMethod.Giftcard": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "cardNumber"
        ],
        properties: {
          cardNumber: {
            minLength: 10,
            description: "The card number of the Giftcard",
            example: "6064363019",
            type: "string"
          },
          pincode: {
            minLength: 5,
            maxLength: 6,
            description: "The pin code of the Giftcard",
            example: "123456",
            type: "string"
          }
        },
        title: "Order.PaymentMethod.Giftcard",
        "x-readme-ref-name": "Order.PaymentMethod.Giftcard"
      },
      "Order.PaymentMethod.iDEAL": {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          issuerId: {
            nullable: true,
            description: "The ID (4 = ING) or the BIC code of the issuer, required for integrations with iDEAL 1.0",
            type: "string"
          }
        },
        title: "Order.PaymentMethod.iDEAL",
        "x-readme-ref-name": "Order.PaymentMethod.iDEAL"
      },
      "Order.PaymentMethod.Pin": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "terminalCode"
        ],
        properties: {
          terminalCode: {
            pattern: "^(TH-[0-9]{4}-[0-9]{4})$",
            type: "string"
          }
        },
        title: "Order.PaymentMethod.Pin",
        "x-readme-ref-name": "Order.PaymentMethod.Pin"
      },
      "Order.PaymentMethod.DirectDebit": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "firstName",
          "lastName",
          "email",
          "city",
          "iban",
          "bic"
        ],
        properties: {
          firstName: {
            type: "string",
            nullable: true
          },
          lastName: {
            type: "string",
            nullable: true
          },
          email: {
            format: "email",
            externalDocs: {
              url: "https://schema.org/email"
            },
            type: "string",
            nullable: true
          },
          city: {
            type: "string",
            nullable: true
          },
          iban: {
            externalDocs: {
              url: "https://schema.org/identifier"
            },
            type: "string",
            nullable: true
          },
          bic: {
            externalDocs: {
              url: "https://schema.org/identifier"
            },
            type: "string",
            nullable: true
          },
          permissionGiven: {
            type: "boolean"
          }
        },
        title: "Order.PaymentMethod.DirectDebit",
        "x-readme-ref-name": "Order.PaymentMethod.DirectDebit"
      },
      "Order.PaymentMethod.Klarna": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "countryCode"
        ],
        properties: {
          countryCode: {
            enum: [
              "AU",
              "AT",
              "BE",
              "CA",
              "CZ",
              "DK",
              "FI",
              "FR",
              "DE",
              "GR",
              "IE",
              "IT",
              "MX",
              "NL",
              "NZ",
              "NO",
              "PL",
              "PT",
              "RO",
              "ES",
              "SE",
              "CH",
              "GB",
              "US"
            ],
            type: "string"
          }
        },
        title: "Order.PaymentMethod.Klarna",
        "x-readme-ref-name": "Order.PaymentMethod.Klarna"
      },
      "Order.PaymentMethod.Przelewy24": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "email"
        ],
        properties: {
          email: {
            format: "email",
            externalDocs: {
              url: "https://schema.org/email"
            },
            type: "string"
          }
        },
        title: "Order.PaymentMethod.Przelewy24",
        "x-readme-ref-name": "Order.PaymentMethod.Przelewy24"
      },
      "Order.PaymentMethod.PayByBank": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "issuer",
          "country"
        ],
        properties: {
          issuer: {
            type: "string",
            nullable: true
          },
          country: {
            type: "string",
            nullable: true
          },
          debtorIban: {
            minLength: 1,
            type: "string",
            nullable: true
          },
          psuId: {
            minLength: 1,
            type: "string",
            nullable: true
          }
        },
        title: "Order.PaymentMethod.PayByBank",
        "x-readme-ref-name": "Order.PaymentMethod.PayByBank"
      },
      "Order.PaymentMethod.SprayPay": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "initials",
          "firstName",
          "lastName",
          "gender",
          "streetName",
          "houseNumber",
          "postalCode",
          "city",
          "country",
          "email",
          "phoneNumber"
        ],
        properties: {
          initials: {
            type: "string"
          },
          firstName: {
            type: "string"
          },
          lastName: {
            type: "string"
          },
          gender: {
            enum: [
              "FEMALE",
              "MALE"
            ],
            type: "string"
          },
          streetName: {
            type: "string"
          },
          houseNumber: {
            type: "string"
          },
          houseNumberAddition: {
            maxLength: 255,
            type: "string",
            nullable: true
          },
          postalCode: {
            type: "string"
          },
          city: {
            type: "string"
          },
          country: {
            enum: [
              "NL",
              "BE"
            ],
            type: "string"
          },
          email: {
            format: "email",
            externalDocs: {
              url: "https://schema.org/email"
            },
            type: "string"
          },
          phoneNumber: {
            type: "string"
          }
        },
        title: "Order.PaymentMethod.SprayPay",
        "x-readme-ref-name": "Order.PaymentMethod.SprayPay"
      },
      "Order.Input.Optimize.CollectorAccount.Iban": {
        type: "object",
        description: "",
        deprecated: false,
        required: [
          "iban",
          "bic",
          "owner"
        ],
        properties: {
          iban: {
            type: "string"
          },
          bic: {
            type: "string"
          },
          owner: {
            type: "string"
          }
        },
        title: "Order.Input.Optimize.CollectorAccount.Iban",
        "x-readme-ref-name": "Order.Input.Optimize.CollectorAccount.Iban"
      },
      ErrorOutput: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          type: {
            default: "https://developer.pay.nl/docs/error-codes",
            example: "https://developer.pay.nl/docs/error-codes",
            type: "string"
          },
          code: {
            type: "string"
          },
          title: {
            type: "string"
          },
          detail: {
            type: "string"
          },
          violations: {
            items: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                propertyPath: {
                  type: "string",
                  nullable: true
                },
                message: {
                  type: "string"
                }
              },
              title: "ViolationOutput",
              "x-readme-ref-name": "ViolationOutput"
            },
            type: "array"
          },
          trace: {
            type: "array",
            items: {
              type: "string"
            }
          }
        },
        title: "ErrorOutput",
        "x-readme-ref-name": "ErrorOutput"
      },
      ViolationOutput: {
        type: "object",
        description: "",
        deprecated: false,
        properties: {
          propertyPath: {
            type: "string",
            nullable: true
          },
          message: {
            type: "string"
          }
        },
        title: "ViolationOutput",
        "x-readme-ref-name": "ViolationOutput"
      }
    },
    responses: {
      BadRequest: {
        description: "Bad request, see response body for more information",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              BadRequest: {
                summary: "Bad Request",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1400",
                  title: "Bad request",
                  detail: "The given input is malformed"
                }
              }
            }
          }
        }
      },
      Unauthorized: {
        description: "Unauthorized. Supplied credentials are invalid",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              Unauthorized: {
                summary: "Supplier credentials are invalid",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1401",
                  title: "Authentication is needed to access this resource",
                  detail: ""
                }
              }
            }
          }
        }
      },
      Forbidden: {
        description: "Forbidden. Supplied credentials have no rights",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              Forbidden: {
                summary: "Supplier credentials have no rights",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1403",
                  title: "Access denied",
                  detail: ""
                }
              }
            }
          }
        }
      },
      NotFound: {
        description: "Resource not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              NotFound: {
                summary: "The requested resource is not found",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1404",
                  title: "The requested resource is not found",
                  detail: ""
                }
              }
            }
          }
        }
      },
      MethodNotAllowed: {
        description: "Used HTTP method is not allowed",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              MethodNotAllowed: {
                summary: "The used HTTP method is not allowed",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1405",
                  title: "The request method is not supported by the target resource",
                  detail: ""
                }
              }
            }
          }
        }
      },
      NotAcceptable: {
        description: "Not acceptable. The supplied content type in the accept parameter in the header is not supported",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              NotAcceptable: {
                summary: "The supplied content type in the accept parameter in the header is not supported",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1406",
                  title: "There is no content that is acceptable by this server",
                  detail: ""
                }
              }
            }
          }
        }
      },
      TooManyRequests: {
        description: "Rate limit reached.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              TooManyRequests: {
                summary: "Rate limit reached.",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1429",
                  title: "Too many requests",
                  detail: "Rate limit reached, try again in 15 minutes."
                }
              }
            }
          }
        }
      },
      UnprocessableEntity: {
        description: "Unprocessable Content. The request was well-formed but was unable to be followed due to semantic errors.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              UnprocessableEntity: {
                summary: "The request was well-formed but was unable to be followed due to semantic errors.",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1422",
                  title: "Unable to process the request",
                  detail: "field: cannot be empty",
                  violations: [
                    {
                      propertyPath: "field",
                      message: "cannot be empty"
                    }
                  ]
                }
              }
            }
          }
        }
      },
      Gone: {
        description: "Indicates that this resource is no longer available for use",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              Gone: {
                summary: "The requested resource is no longer available",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1410",
                  title: "The requested resource is no longer available",
                  detail: ""
                }
              }
            }
          }
        }
      },
      InternalServerError: {
        description: "An internal error occurred.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              InternalServerError: {
                summary: "An internal error occurred.",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1500",
                  title: "An internal error has occurred",
                  detail: "Failed to process request due to X"
                }
              }
            }
          }
        }
      },
      ServiceUnavailable: {
        description: "The server is currently unable to handle your request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              description: "",
              deprecated: false,
              properties: {
                type: {
                  default: "https://developer.pay.nl/docs/error-codes",
                  example: "https://developer.pay.nl/docs/error-codes",
                  type: "string"
                },
                code: {
                  type: "string"
                },
                title: {
                  type: "string"
                },
                detail: {
                  type: "string"
                },
                violations: {
                  items: {
                    type: "object",
                    description: "",
                    deprecated: false,
                    properties: {
                      propertyPath: {
                        type: "string",
                        nullable: true
                      },
                      message: {
                        type: "string"
                      }
                    },
                    title: "ViolationOutput",
                    "x-readme-ref-name": "ViolationOutput"
                  },
                  type: "array"
                },
                trace: {
                  type: "array",
                  items: {
                    type: "string"
                  }
                }
              },
              title: "ErrorOutput",
              "x-readme-ref-name": "ErrorOutput"
            },
            examples: {
              InternalServerError: {
                summary: "The server is currently unable to handle your request.",
                value: {
                  type: "https://developer.pay.nl/docs/error-codes",
                  code: "PAY-1503",
                  title: "The server is unable to handle your request, try again later.",
                  detail: "The server is currently unable to handle your request, try again in 15 minuntes."
                }
              }
            }
          }
        }
      }
    },
    parameters: {},
    examples: {
      OrderMinimum: {
        summary: "Minimum order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Minimal Order",
          reference: "REF1234",
          amount: {
            value: 1450
          }
        }
      },
      IdealIngOrder: {
        summary: "iDEAL + ING Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "iDEAL + ING Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 10,
            input: {
              issuerId: "4"
            }
          }
        }
      },
      AccountFundingTransaction: {
        summary: "Account Funding Transaction",
        value: {
          serviceId: "SL-1234-1234",
          description: "Account Funding Transaction",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 10,
            input: {
              issuerId: "4"
            }
          },
          customer: {
            reference: "NL00RABO2098811624"
          }
        }
      },
      IdealC2C: {
        summary: "iDEAL C2C Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "iDEAL C2C",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 10
          },
          optimize: {
            collectorAccount: {
              method: "iban",
              iban: {
                iban: "NL86BANKXXXXXXXXXX",
                bic: "BANK",
                owner: "J. Doe"
              }
            }
          }
        }
      },
      IdealEnd2End: {
        summary: "iDEAL end2end Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "iDEAL end2end",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 10
          },
          optimize: {
            collectorAccount: {
              method: "iban",
              iban: {
                iban: "NL86BANKXXXXXXXXXX",
                bic: "BANK",
                owner: "Company BV"
              }
            },
            collectorCompany: {
              id: "12345",
              name: "Company BV"
            }
          }
        }
      },
      IdealFastCheckout: {
        summary: "iDEAL Fast Checkout Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "iDEAL Fast Checkout",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 10
          },
          optimize: {
            flow: "fastCheckout",
            shippingAddress: true,
            billingAddress: true,
            contactDetails: true
          }
        }
      },
      VVVGiftcard: {
        summary: "Direct VVV Giftcard Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Giftcard Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1714,
            input: {
              cardNumber: "606436430000000",
              pincode: "00000"
            }
          }
        }
      },
      Pin: {
        summary: "Direct Instore Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Pin Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1927,
            input: {
              terminalCode: "TH-1234-1234"
            }
          }
        }
      },
      DirectDebit: {
        summary: "Direct DirectDebit Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Direct Debit Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 137,
            input: {
              email: "JohnDoe@pay.nl",
              firstName: "John",
              lastName: "Doe",
              city: "Spijkenisse",
              iban: "NL00INGB00000000",
              bic: "INGBNL2A",
              permissionGiven: true
            }
          }
        }
      },
      SprayPay: {
        summary: "Direct SprayPay Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "SprayPay Order",
          reference: "REF1234",
          amount: {
            value: 25e3
          },
          paymentMethod: {
            id: 1987,
            input: {
              initials: "J",
              firstName: "John",
              lastName: "Doe",
              gender: "MALE",
              streetName: "Curieweg",
              houseNumber: "19",
              houseNumberAddition: "C",
              postalCode: "3208 KJ",
              city: "Spijkenisse",
              country: "NL",
              phoneNumber: "0600000000",
              email: "johndoe@example.com"
            }
          }
        }
      },
      Klarna: {
        summary: "Direct Klarna Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Klarna Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1717,
            input: {
              countryCode: "NL"
            }
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678"
          },
          order: {
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      KlarnaBusiness: {
        summary: "Direct Klarna Order (Business)",
        value: {
          serviceId: "SL-1234-1234",
          description: "Klarna Business Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1717,
            input: {
              countryCode: "NL"
            }
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678",
            company: {
              name: "Company.",
              cocNumber: "00000000",
              vatNumber: "NL000000000B01",
              country: "NL"
            }
          },
          order: {
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      Riverty: {
        summary: "Direct Riverty Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Riverty Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 2561
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678"
          },
          order: {
            invoiceAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      RivertyBusiness: {
        summary: "Direct Riverty Order (Business)",
        value: {
          serviceId: "SL-1234-1234",
          description: "Riverty Business Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 2561
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678",
            company: {
              name: "Company.",
              cocNumber: "00000000",
              vatNumber: "NL000000000B01",
              country: "NL"
            }
          },
          order: {
            invoiceAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      Billink: {
        summary: "Direct Billink Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Billink Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1672
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678"
          },
          order: {
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            invoiceAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      BillinkBusiness: {
        summary: "Direct Billink Order (Business)",
        value: {
          serviceId: "SL-1234-1234",
          description: "Direct Billink Business Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 1672
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678",
            company: {
              name: "Company.",
              cocNumber: "00000000",
              vatNumber: "NL000000000B01",
              country: "NL"
            }
          },
          order: {
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            invoiceAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      In3: {
        summary: "Direct In3 Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "In3 Order",
          reference: "REF1234",
          amount: {
            value: 5e3
          },
          paymentMethod: {
            id: 1813
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678"
          },
          order: {
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            }
          }
        }
      },
      In3Business: {
        summary: "Direct In3 Order (Business)",
        value: {
          serviceId: "SL-1234-1234",
          description: "In3 Business Order",
          reference: "REF1234",
          amount: {
            value: 25e3
          },
          paymentMethod: {
            id: 3192
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678",
            company: {
              name: "Company.",
              cocNumber: "00000000",
              vatNumber: "NL000000000B01",
              country: "NL"
            }
          },
          order: {
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            }
          }
        }
      },
      Notyd: {
        summary: "Direct Notyd Order (Business only)",
        value: {
          serviceId: "SL-1234-1234",
          description: "Notyd Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 2931
          },
          customer: {
            email: "johndoe@example.com",
            firstname: "John",
            lastname: "Doe",
            birthDate: "1999-11-22T00:00:00+01:00",
            gender: "M",
            phone: "0612345678",
            company: {
              name: "Company.",
              cocNumber: "00000000",
              vatNumber: "NL000000000B01",
              country: "NL"
            }
          },
          order: {
            deliveryAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            invoiceAddress: {
              firstName: "John",
              lastName: "Doe",
              street: "P.C. Hooftstraat",
              streetNumber: "100",
              streetNumberExtension: "A",
              zipCode: "3202XA",
              city: "Amsterdam",
              country: "NL"
            },
            products: [
              {
                id: "ART1234",
                description: "Article 1234",
                type: "ARTICLE",
                price: {
                  value: 2350
                },
                quantity: 1,
                vatPercentage: 0
              }
            ]
          }
        }
      },
      Creditclick: {
        summary: "Direct Creditclick Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Creditclick Order",
          reference: "REF1234",
          amount: {
            value: 25e3
          },
          paymentMethod: {
            id: 2107,
            input: {
              initials: "J",
              firstName: "John",
              lastName: "Doe",
              gender: "MALE",
              streetName: "P.C. Hooftstraat",
              houseNumber: "100",
              houseNumberAddition: "A",
              postalCode: "3202XA",
              city: "Amsterdam",
              country: "NL",
              phoneNumber: "0612345678"
            }
          }
        }
      },
      P24: {
        summary: "Direct Przelewy24 Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "Przelewy24 Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 2151,
            input: {
              email: "JohnDoe@pay.nl"
            }
          }
        }
      },
      PayByBank: {
        summary: "Direct PayByBank Order",
        value: {
          serviceId: "SL-1234-1234",
          description: "PayByBank Order",
          reference: "REF1234",
          amount: {
            value: 2350
          },
          paymentMethod: {
            id: 2970,
            input: {
              issuer: "ing",
              country: "nl",
              psuId: "psu",
              debtorIban: "NL00INGB0000000"
            }
          }
        }
      },
      TestCaseOne: {
        summary: "Sandbox test case #1",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_1",
          reference: "TESTREFERENCE1",
          amount: {
            value: 10101,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          }
        }
      },
      TestCaseTwo: {
        summary: "Sandbox test case #2",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_2",
          reference: "TESTREFERENCE2",
          amount: {
            value: 20202,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          order: {
            deliveryAddress: {
              street: "TEST_DELIVERY_STREET",
              streetNumber: "101",
              streetNumberExtension: "a, first floor",
              zipCode: "1122AB",
              city: "TEST_DELIVERY_CITY",
              country: "NL",
              region: "TEST_DELIVERY_REGION"
            },
            invoiceAddress: {
              street: "TEST_INVOICE_STREET",
              streetNumber: "202",
              streetNumberExtension: "b, second floor",
              zipCode: "2233",
              city: "TEST_INVOICE_CITY",
              country: "BE",
              region: "TEST_INVOICE_REGION"
            }
          }
        }
      },
      TestCaseThree: {
        summary: "Sandbox test case #3",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_3",
          reference: "TESTREFERENCE3",
          amount: {
            value: 30303,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          customer: {
            company: {
              name: "TEST_COMPANY_NAME",
              cocNumber: "12345678",
              vatNumber: "NL0123456789",
              country: "NL"
            }
          }
        }
      },
      TestCaseFour: {
        summary: "Sandbox test case #4",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_4",
          reference: "TESTREFERENCE4",
          amount: {
            value: 40404,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          order: {
            invoiceAddress: {
              zipCode: "1122",
              country: "BE"
            }
          }
        }
      },
      TestCaseFive: {
        summary: "Sandbox test case #5",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_5",
          reference: "TESTREFERENCE5",
          amount: {
            value: 50505,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          stats: {
            object: "TEST_PARTNER_VALUE"
          }
        }
      },
      TestCaseSix: {
        summary: "Sandbox test case #6",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_6",
          reference: "TESTREFERENCE6",
          amount: {
            value: 60606,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          stats: {
            tool: "TEST_TOOL",
            info: "TEST_INFO",
            extra1: "TEST_CUSTOM_EXTRA1",
            extra2: "TEST_CUSTOM_EXTRA2",
            extra3: "TEST_CUSTOM_EXTRA3",
            domainId: "TEST_DOMANID",
            promotorId: 123456789
          }
        }
      },
      TestCaseSeven: {
        summary: "Sandbox test case #7",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_7",
          reference: "TESTREFERENCE7",
          amount: {
            value: 70707,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          customer: {
            gaClientId: "TEST_GA_CLIENT_ID"
          }
        }
      },
      TestCaseEight: {
        summary: "Sandbox test case #8",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_DESCRIPTION_8",
          reference: "TESTREFERENCE8",
          amount: {
            value: 80808,
            currency: "EUR"
          },
          paymentMethod: {
            id: 613
          },
          integration: {
            test: true
          },
          customer: {
            email: "test-email@example.com",
            trust: 7,
            reference: "TEST_CUSTOMER_REFERENCE"
          }
        }
      },
      TestCaseNine: {
        summary: "Sandbox test case #9",
        value: {
          serviceId: "SL-1234-1234",
          description: "TEST_D\xC9SCR\xCDPT\xCDON_9",
          reference: "TESTREFERENCE9",
          amount: {
            value: 90909,
            currency: "EUR"
          },
          customer: {
            firstname: "TEST_CUSTOMER_F\xCDRST_N\xC4M\xCA",
            lastname: "TEST_CUSTOMER_L\xC4ST_N\xC4M\xCA",
            reference: "TEST_CUSTOMER_R\xCAF\xCAR\xCANC\xCA",
            company: {
              name: "TEST_COMP\xC4NY_N\xC2M\xCA"
            }
          },
          order: {
            deliveryAddress: {
              street: "TEST_D\xCAL\xCDV\xCARY_STR\xCA\xCAT",
              streetNumberExtension: "\xE5, f\u012Brst fl\xF8\xF8r",
              city: "TEST_D\xCAL\xCDV\xCARY_C\xCETY",
              region: "TEST_D\xCAL\xCDV\xCARY_R\u0118G\xCDON"
            },
            invoiceAddress: {
              street: "TEST_\xCDNV\u0152\xCDC\xCA_STR\xCA\xCAT",
              streetNumberExtension: "b, s\xEAc\xF5nd fl\xF2\xF2r",
              city: "TEST_\xCDNV\u0152\xCDC\xCA_C\xCDTY",
              region: "TEST_\xCDNV\u0152\xCDC\xCA_R\xCAG\xCD\xD2N"
            },
            products: [
              {
                description: "TEST_PR\xD8D\u016ACT_1_D\u0116SCR\u012EPT\xCF\u014CN",
                type: "ARTICLE",
                price: {
                  value: 90909
                },
                quantity: 1
              }
            ]
          },
          stats: {
            tool: "TEST_T\u014C\u014CL",
            info: "TEST_\xCDNF\u014C",
            object: "TEST_P\xC2RTN\xCBR_V\xC6L\xD9\u0118",
            extra1: "TEST_C\xD9ST\xD5M_\xCAXTR\xC41",
            extra2: "TEST_C\xD9ST\xD5M_\xCAXTR\xC42",
            extra3: "TEST_C\xD9ST\xD5M_\xCAXTR\xC43",
            domainId: "TESTD\u014CM\xC4\xCDN\xCDD"
          },
          transferData: {
            test: "TEST_TR\xC0NSF\xCAR_D\xC2T\xC0_IT\u0118M"
          }
        }
      },
      OrderResponse201Created: {
        summary: "Order created",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 20,
            action: "PENDING"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 0,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Status: {
        summary: "Order",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 50,
            action: "PENDING"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 0,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27a4a35fd",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: 50,
                action: "PENDING"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 0,
                currency: "EUR"
              },
              supplierData: null
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Approve: {
        summary: "Approved order",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 100,
            action: "PAID"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 100,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27a627ec2",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: 100,
                action: "PAID"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 0,
                currency: "EUR"
              },
              supplierData: null
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Decline: {
        summary: "Declined order",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: -64,
            action: "CANCEL"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 0,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27ac52cf8",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: -64,
                action: "CANCEL"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 0,
                currency: "EUR"
              },
              supplierData: null
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Capture: {
        summary: "Captured order (with supplier and checkoutData)",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 100,
            action: "PAID"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 100,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27b7511b9",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: 100,
                action: "PAID"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 100,
                currency: "EUR"
              },
              supplierData: []
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200CapturedWithCheckoutData: {
        summary: "Captured order (with supplier and checkoutData)",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 100,
            action: "PAID"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 100,
            currency: "EUR"
          },
          checkoutData: {
            customer: {
              email: "JohnDoe@pay.nl",
              firstname: "John",
              lastname: "Doe",
              dateOfBirth: "1999-11-22",
              gender: "M",
              phone: "+3161234567890",
              locale: "nl_NL",
              ipAddress: "0:0:0:0:0:0:0:1",
              reference: "Cstmr12",
              company: {
                name: "Pay.",
                cocNumber: "24283498",
                vatNumber: "NL807960147B01",
                country: "NL"
              }
            },
            billingAddress: {
              firstName: "John",
              lastName: "Doe",
              streetName: "Curieweg",
              streetNumber: "19",
              streetNumberAddition: "C",
              zipCode: "3208 KJ",
              city: "Spijkenisse",
              countryCode: "NL",
              regionCode: "nl-ZH"
            },
            shippingAddress: {
              firstName: "John",
              lastName: "Doe",
              streetName: "Curieweg",
              streetNumber: "19",
              streetNumberAddition: "C",
              zipCode: "3208 KJ",
              city: "Spijkenisse",
              countryCode: "NL",
              regionCode: "nl-ZH"
            }
          },
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27be73a4b",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: "iban",
              customerKey: "aefdd1bea7e6f855b74ea7fbe19ba0a646789777",
              customerId: "NL22INGB6512284550",
              customerName: "John Doe",
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: 100,
                action: "PAID"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 100,
                currency: "EUR"
              },
              supplierData: {
                contactDetails: {
                  email: "JohnDoe@mail.nl",
                  firstName: "John",
                  lastName: "Doe",
                  phoneNumber: "+3161234567890"
                },
                invoiceAddress: {
                  firstName: "John",
                  lastName: "Doe",
                  street: "Curieweg",
                  houseNumber: "19",
                  addition: "C",
                  postalCode: "3208 KJ",
                  city: "Spijkenisse",
                  companyName: "Pay.",
                  countryName: "Netherlands"
                },
                shippingAddress: {
                  firstName: "John",
                  lastName: "Doe",
                  street: "Curieweg",
                  houseNumber: "19",
                  addition: "C",
                  postalCode: "3208 KJ",
                  city: "Spijkenisse",
                  companyName: "Pay.",
                  countryName: "Netherlands"
                }
              }
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200PartialCapture: {
        summary: "Partially captured",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: 95,
            action: "AUTHORIZE"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 45,
            currency: "EUR"
          },
          capturedAmount: {
            value: 55,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27c9bd541",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: 97,
                action: "AUTHORIZE"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 45,
                currency: "EUR"
              },
              capturedAmount: {
                value: 55,
                currency: "EUR"
              },
              supplierData: []
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Void: {
        summary: "Voided order",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: -90,
            action: "CANCEL"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 0,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27d9bb14e",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: -90,
                action: "CANCEL"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 0,
                currency: "EUR"
              },
              supplierData: null
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      OrderResponse200Abort: {
        summary: "Aborted order",
        value: {
          id: "018f9f33-d564-75a3-b2eb-20e27974c534",
          serviceId: "SL-1234-1234",
          description: "Instore Terminal Order #27",
          reference: "REF1234",
          manualTransferCode: "0000 0000 0000 0000",
          orderId: "0000",
          uuid: "018f9f33-d564-75a3-b2eb-20e27974c534",
          customerKey: null,
          status: {
            code: -90,
            action: "CANCEL"
          },
          receipt: null,
          integration: {
            test: false
          },
          amount: {
            value: 100,
            currency: "EUR"
          },
          authorizedAmount: {
            value: 0,
            currency: "EUR"
          },
          capturedAmount: {
            value: 0,
            currency: "EUR"
          },
          checkoutData: null,
          payments: [
            {
              id: "018f9f33-d564-75a3-b2eb-20e27dba4d6a",
              paymentMethod: {
                id: 10,
                input: {
                  issuerId: "4"
                }
              },
              customerType: null,
              customerKey: null,
              customerId: null,
              customerName: null,
              ipAddress: "127.0.0.1",
              secureStatus: false,
              paymentVerificationMethod: 21,
              status: {
                code: -90,
                action: "CANCEL"
              },
              currencyAmount: {
                value: 100,
                currency: "EUR"
              },
              amount: {
                value: 100,
                currency: "EUR"
              },
              authorizedAmount: {
                value: 0,
                currency: "EUR"
              },
              capturedAmount: {
                value: 0,
                currency: "EUR"
              },
              supplierData: null
            }
          ],
          createdAt: "2024-05-22T09:28:45+02:00",
          createdBy: "AT-1234-1234",
          modifiedAt: "2024-05-22T09:29:45+02:00",
          modifiedBy: "TGU 123456",
          expiresAt: "2024-05-22T09:43:45+02:00",
          completedAt: null,
          links: {
            status: "<status_url>",
            abort: "<abort_url>",
            redirect: "<redirect_url>"
          }
        }
      },
      CheckoutData: {
        summary: "Checkout data",
        value: {
          customer: {
            email: "JohnDoe@pay.nl",
            firstname: "John",
            lastname: "Doe",
            dateOfBirth: "1999-11-22",
            gender: "M",
            phone: "+3161234567890",
            locale: "nl_NL",
            ipAddress: "0:0:0:0:0:0:0:1",
            reference: "Cstmr12",
            company: {
              name: "Pay.",
              cocNumber: "24283498",
              vatNumber: "NL807960147B01",
              country: "NL"
            }
          },
          billingAddress: {
            firstName: "John",
            lastName: "Doe",
            streetName: "Curieweg",
            streetNumber: "19",
            streetNumberAddition: "C",
            zipCode: "3208 KJ",
            city: "Spijkenisse",
            countryCode: "NL",
            regionCode: "nl-ZH"
          },
          shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            streetName: "Curieweg",
            streetNumber: "19",
            streetNumberAddition: "C",
            zipCode: "3208 KJ",
            city: "Spijkenisse",
            countryCode: "NL",
            regionCode: "nl-ZH"
          }
        }
      },
      GiftcardInput: {
        summary: "A VVV Giftcard",
        value: {
          cardNumber: "6064363019XXXXXXX",
          pincode: "123456"
        }
      },
      IdealInput: {
        summary: "iDEAL with ING as issuer",
        value: {
          issuerId: "INGBNL2A"
        }
      },
      PinInput: {
        summary: "A Pin terminal",
        value: {
          terminalCode: "TH-1234-1234"
        }
      },
      DirectDebitInput: {
        summary: "A DirectDebit order",
        value: {
          firstName: "John",
          lastName: "Doe",
          email: "JohnDoe@pay.nl",
          city: "Spijkenisse",
          iban: "NLXXINGB123456789",
          bic: "INGBNL2A",
          permissionGiven: true
        }
      },
      KlarnaInput: {
        summary: "A Dutch Klarna Order",
        value: {
          countryCode: "NL"
        }
      },
      PrzelewyInput: {
        summary: "A Przelewy24 Order",
        value: {
          email: "JohnDoe@pay.nl"
        }
      },
      PayByBankInput: {
        summary: "A PayByBank order",
        value: {
          issuer: "ING",
          country: "NL",
          debtorIban: "NLXXINGB123456789",
          psuId: "1234"
        }
      },
      SprayPayInput: {
        summary: "A SprayPay order",
        value: {
          initials: "J",
          firstName: "John",
          lastName: "Doe",
          gender: "M",
          streetName: "Curieweg",
          houseNumber: "19",
          houseNumberAddition: "C",
          postalCode: "32028 KJ",
          city: "Spijkenisse",
          country: "NL",
          email: "JohnDoe@pay.nl",
          phoneNumber: "061234567890"
        }
      }
    },
    requestBodies: {},
    headers: {},
    securitySchemes: {
      BasicAuth: {
        type: "http",
        description: "",
        scheme: "basic"
      },
      BearerAuth: {
        type: "http",
        description: "Example: Bearer 12345xx6xxx1x2x123456789123xx123x12345x4",
        scheme: "bearer"
      }
    }
  },
  security: [
    {
      BasicAuth: []
    },
    {
      BearerAuth: []
    }
  ],
  tags: []
};

// src/sdk.ts
var SDK = class {
  
  constructor() {
    this.core = new (0, _apicore2.default)(openapi_default, "paynl-rest/1 (api/7.0.0-beta.8)");
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
   * Create an order on this TGU. An order represents the total order as it exists in your
   * shop and can be fulfilled through one or more payments.
   *
   * @summary Order:Create
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_create_order(body) {
    return this.core.fetch("/v1/orders", "post", body);
  }
  /**
   * Capture a specific amount on an order that has an active reservation (Status 95).
   * Reservations are commonly used for CreditCard and Buy now, Pay later payments. With this
   * API, you can capture a specific amount from the order while the reservation remains
   * active.
   *
   * @summary Order:CaptureAmount
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_amount(body, metadata) {
    return this.core.fetch("/v1/orders/{id}/capture/amount", "patch", body, metadata);
  }
  /**
   * Capture an order that has an active reservation (Status 95). Reservations are commonly
   * used for CreditCard and Buy now, Pay later payments. By using this API, the entire order
   * will be captured.
   *
   * @summary Order:CaptureProducts
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_products(body, metadata) {
    return this.core.fetch("/v1/orders/{id}/capture/products", "patch", body, metadata);
  }
  /**
   * Retrieve the current status of an order along with its corresponding payment attempts.
   *
   * @summary Order:Status
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<410, types.ErrorOutput> Indicates that this resource is no longer available for use
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_get_status(metadata) {
    return this.core.fetch("/v1/orders/{id}/status", "get", metadata);
  }
  /**
   * Approve an order that is flagged for a risk check by the Verify module, continuing the
   * regular order flow.
   *
   * @summary Order:Approve
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_approve_order(metadata) {
    return this.core.fetch("/v1/orders/{id}/approve", "patch", metadata);
  }
  /**
   * Decline an order that is flagged for a risk check by the Verify module, refunding all
   * payments made on this order.
   *
   * @summary Order:Decline
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_decline_order(metadata) {
    return this.core.fetch("/v1/orders/{id}/decline", "patch", metadata);
  }
  /**
   * Capture an order that has an active reservation (Status 95). Reservations are commonly
   * used for CreditCard and Buy now, Pay later payments. By using this API, the entire order
   * will be captured.
   *
   * @summary Order:Capture
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_capture_order(metadata) {
    return this.core.fetch("/v1/orders/{id}/capture", "patch", metadata);
  }
  /**
   * Cancel an order with an active reservation (Status 95), voiding all payments made for
   * that order as well.
   *
   * @summary Order:Void
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_void_order(metadata) {
    return this.core.fetch("/v1/orders/{id}/void", "patch", metadata);
  }
  /**
   * Abort an order, halting the regular order flow and voiding any payment attempts made to
   * fulfill this order.
   *
   * @summary Order:Abort
   * @throws FetchError<400, types.ErrorOutput> Bad request, see response body for more information
   * @throws FetchError<401, types.ErrorOutput> Unauthorized. Supplied credentials are invalid
   * @throws FetchError<403, types.ErrorOutput> Forbidden. Supplied credentials have no rights
   * @throws FetchError<404, types.ErrorOutput> Resource not found
   * @throws FetchError<405, types.ErrorOutput> Used HTTP method is not allowed
   * @throws FetchError<406, types.ErrorOutput> Not acceptable. The supplied content type in the accept parameter in the header is not
   * supported
   * @throws FetchError<422, types.ErrorOutput> Unprocessable Content. The request was well-formed but was unable to be followed due to
   * semantic errors.
   * @throws FetchError<429, types.ErrorOutput> Rate limit reached.
   * @throws FetchError<500, types.ErrorOutput> An internal error occurred.
   * @throws FetchError<503, types.ErrorOutput> The server is currently unable to handle your request
   */
  api_abort_order(metadata) {
    return this.core.fetch("/v1/orders/{id}/abort", "patch", metadata);
  }
};



exports.SDK = SDK;
//# sourceMappingURL=chunk-R6ZHK2W7.cjs.map