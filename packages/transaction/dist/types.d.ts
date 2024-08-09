import { FromSchema } from '@readme/api-core/types';

declare const Address$1: {
    readonly properties: {
        readonly code: {
            readonly type: "string";
        };
        readonly firstName: {
            readonly description: "The forename (also known as a given name, Christian name or a first name).";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["John"];
        };
        readonly lastName: {
            readonly description: "The surname (also known as a family name or a last name).";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Doe"];
        };
        readonly streetName: {
            readonly description: "The name of the street";
            readonly type: "string";
            readonly maxLength: 128;
            readonly minLength: 1;
            readonly examples: readonly ["Visitlane"];
        };
        readonly streetNumber: {
            readonly description: "The street number";
            readonly type: "string";
            readonly maxLength: 32;
            readonly minLength: 1;
            readonly examples: readonly ["13"];
        };
        readonly streetNumberExtension: {
            readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
            readonly type: "string";
            readonly maxLength: 32;
            readonly minLength: 1;
            readonly examples: readonly ["b1"];
        };
        readonly zipCode: {
            readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
            readonly type: "string";
            readonly maxLength: 16;
            readonly minLength: 1;
            readonly examples: readonly ["5678CD"];
        };
        readonly city: {
            readonly description: "The name of a city";
            readonly type: "string";
            readonly maxLength: 128;
            readonly minLength: 1;
            readonly examples: readonly ["Amsterdam"];
        };
        readonly regionCode: {
            readonly description: "Region code (iso-3166-2)";
            readonly type: "string";
            readonly examples: readonly ["ZH"];
        };
        readonly countryCode: {
            readonly description: "The country code consisting of 2 uppercase letters";
            readonly type: "string";
            readonly maxLength: 2;
            readonly minLength: 2;
            readonly examples: readonly ["NL"];
        };
    };
    readonly type: "object";
    readonly title: "Address";
    readonly "x-readme-ref-name": "Address";
};

declare const Amount$1: {
    readonly required: readonly ["value"];
    readonly properties: {
        readonly value: {
            readonly description: "The amount in cents.";
            readonly type: "integer";
            readonly minimum: 1;
            readonly examples: readonly [10];
        };
        readonly currency: {
            readonly description: "The currency in ISO-4217 format.";
            readonly type: "string";
            readonly examples: readonly ["EUR"];
        };
    };
    readonly type: "object";
    readonly title: "Amount";
    readonly "x-readme-ref-name": "Amount";
};

declare const BankAccount$1: {
    readonly required: readonly ["iban", "bic", "owner"];
    readonly properties: {
        readonly iban: {
            readonly description: "The International Bank Account Number (IBAN).";
            readonly type: "string";
            readonly examples: readonly ["NL69INGB0123456789"];
        };
        readonly bic: {
            readonly description: "Business Identifier Codes (BIC/SWIFT).";
            readonly type: "string";
            readonly examples: readonly ["INGBNL2A"];
        };
        readonly owner: {
            readonly description: "The owner of the bank account.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["John Doe"];
        };
    };
    readonly type: "object";
    readonly title: "BankAccount";
    readonly "x-readme-ref-name": "BankAccount";
};

declare const Company$1: {
    readonly properties: {
        readonly name: {
            readonly description: "The name of your merchant.";
            readonly type: "string";
            readonly examples: readonly ["CompanyName"];
        };
        readonly coc: {
            readonly description: "Your Chamber of commerce registration number. This format differs per country.";
            readonly type: "string";
            readonly examples: readonly ["12345678"];
        };
        readonly vat: {
            readonly description: "Value added tax identification number (VAT identification number).";
            readonly type: "string";
            readonly examples: readonly ["NL807960147B01"];
        };
        readonly countryCode: {
            readonly description: "The country code consisting of 2 uppercase letters";
            readonly type: "string";
            readonly examples: readonly ["NL"];
        };
    };
    readonly type: "object";
    readonly title: "Company";
    readonly "x-readme-ref-name": "Company";
};

declare const Customer$1: {
    readonly properties: {
        readonly firstName: {
            readonly description: "The forename (also known as a given name, Christian name or a first name).";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["John"];
        };
        readonly lastName: {
            readonly description: "The surname (also known as a family name or a last name).";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Doe"];
        };
        readonly type: {
            readonly description: "Either B for business or C for consumer.\n\n`B` `C`";
            readonly type: "string";
            readonly enum: readonly ["B", "C"];
        };
        readonly ip: {
            readonly description: "An ip address";
            readonly type: "string";
            readonly examples: readonly ["213.126.82.230"];
        };
        readonly birthDate: {
            readonly description: "Date of birth as defined in ISO-8601.";
            readonly type: "string";
            readonly format: "date";
            readonly examples: readonly ["1999-02-15"];
        };
        readonly gender: {
            readonly description: "The subject's gender. Choose either M for male or F for female.";
            readonly type: "string";
            readonly examples: readonly ["M"];
        };
        readonly phone: {
            readonly description: "The subject's phone number. Optionally prepended with a + and country code";
            readonly type: "string";
            readonly examples: readonly ["0031612345678"];
        };
        readonly email: {
            readonly description: "An email address.";
            readonly type: "string";
            readonly format: "email";
            readonly examples: readonly ["sandbox@pay.nl"];
        };
        readonly language: {
            readonly description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages\n\n`NL` `EN` `DE` `FR` `IT` `ES`";
            readonly type: "string";
            readonly enum: readonly ["NL", "EN", "DE", "FR", "IT", "ES"];
            readonly examples: readonly ["NL"];
        };
        readonly trust: {
            readonly description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).";
            readonly type: "integer";
            readonly maximum: 10;
            readonly minimum: -10;
            readonly examples: readonly [-5];
        };
        readonly reference: {
            readonly description: "Unique reference of the payer. This field only allows alphanumeric characters.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly pattern: "^[a-zA-Z0-9]{1,64}$";
            readonly examples: readonly ["NL87654321"];
        };
        readonly bankAccount: {
            readonly required: readonly ["iban", "bic", "owner"];
            readonly properties: {
                readonly iban: {
                    readonly description: "The International Bank Account Number (IBAN).";
                    readonly type: "string";
                    readonly examples: readonly ["NL69INGB0123456789"];
                };
                readonly bic: {
                    readonly description: "Business Identifier Codes (BIC/SWIFT).";
                    readonly type: "string";
                    readonly examples: readonly ["INGBNL2A"];
                };
                readonly owner: {
                    readonly description: "The owner of the bank account.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["John Doe"];
                };
            };
            readonly type: "object";
            readonly title: "BankAccount";
            readonly "x-readme-ref-name": "BankAccount";
        };
        readonly company: {
            readonly properties: {
                readonly name: {
                    readonly description: "The name of your merchant.";
                    readonly type: "string";
                    readonly examples: readonly ["CompanyName"];
                };
                readonly coc: {
                    readonly description: "Your Chamber of commerce registration number. This format differs per country.";
                    readonly type: "string";
                    readonly examples: readonly ["12345678"];
                };
                readonly vat: {
                    readonly description: "Value added tax identification number (VAT identification number).";
                    readonly type: "string";
                    readonly examples: readonly ["NL807960147B01"];
                };
                readonly countryCode: {
                    readonly description: "The country code consisting of 2 uppercase letters";
                    readonly type: "string";
                    readonly examples: readonly ["NL"];
                };
            };
            readonly type: "object";
            readonly title: "Company";
            readonly "x-readme-ref-name": "Company";
        };
    };
    readonly type: "object";
    readonly title: "Customer";
    readonly "x-readme-ref-name": "Customer";
};

declare const Error$1: {
    readonly properties: {
        readonly type: {
            readonly type: "string";
        };
        readonly title: {
            readonly type: "string";
        };
        readonly detail: {
            readonly type: "string";
        };
        readonly violations: {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly propertyPath: {
                        readonly type: "string";
                    };
                    readonly message: {
                        readonly type: "string";
                    };
                    readonly code: {
                        readonly type: "string";
                    };
                };
                readonly type: "object";
                readonly title: "Violation";
                readonly "x-readme-ref-name": "Violation";
            };
        };
    };
    readonly type: "object";
    readonly title: "Error";
    readonly "x-readme-ref-name": "Error";
};

declare const GetTransactionsTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly description: "The Id of the transaction.";
                    readonly type: "string";
                    readonly examples: readonly ["EX-1234-1234-1234"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
};

declare const GetTransactionsTransactionidStatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly description: "The Id of the transaction.";
                    readonly type: "string";
                    readonly examples: readonly ["EX-1234-1234-1234"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
};

declare const Integration$1: {
    readonly properties: {
        readonly testMode: {
            readonly description: "Indicates if the service is in testmode or not, possible values: false or true";
            readonly type: "boolean";
        };
    };
    readonly type: "object";
    readonly title: "Integration";
    readonly "x-readme-ref-name": "Integration";
};

declare const Notification$1: {
    readonly properties: {
        readonly type: {
            readonly description: "Use \"push\" for push messages, or \"email\" to send out an email. For more information check the following page: https://paynl.readme.io/reference/accounts-1";
            readonly type: "string";
            readonly enum: readonly ["push", "email"];
        };
        readonly recipient: {
            readonly description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). For email, provide a valid email address (XXXX@XXXX.XX).";
            readonly type: "string";
            readonly examples: readonly ["AD-1234-1234"];
        };
    };
    readonly type: "object";
    readonly title: "Notification";
    readonly "x-readme-ref-name": "Notification";
};

declare const Order$1: {
    readonly properties: {
        readonly countryCode: {
            readonly description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction";
            readonly type: "string";
            readonly maxLength: 2;
            readonly minLength: 2;
            readonly examples: readonly ["NL"];
        };
        readonly deliveryDate: {
            readonly description: "The date of delivery.";
            readonly type: "string";
            readonly format: "date";
            readonly examples: readonly ["1999-02-15"];
        };
        readonly invoiceDate: {
            readonly description: "The date of the invoice";
            readonly type: "string";
            readonly format: "date";
            readonly examples: readonly ["1999-02-15"];
        };
        readonly deliveryAddress: {
            readonly properties: {
                readonly code: {
                    readonly type: "string";
                };
                readonly firstName: {
                    readonly description: "The forename (also known as a given name, Christian name or a first name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["John"];
                };
                readonly lastName: {
                    readonly description: "The surname (also known as a family name or a last name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Doe"];
                };
                readonly streetName: {
                    readonly description: "The name of the street";
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly minLength: 1;
                    readonly examples: readonly ["Visitlane"];
                };
                readonly streetNumber: {
                    readonly description: "The street number";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                    readonly examples: readonly ["13"];
                };
                readonly streetNumberExtension: {
                    readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                    readonly examples: readonly ["b1"];
                };
                readonly zipCode: {
                    readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                    readonly type: "string";
                    readonly maxLength: 16;
                    readonly minLength: 1;
                    readonly examples: readonly ["5678CD"];
                };
                readonly city: {
                    readonly description: "The name of a city";
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly minLength: 1;
                    readonly examples: readonly ["Amsterdam"];
                };
                readonly regionCode: {
                    readonly description: "Region code (iso-3166-2)";
                    readonly type: "string";
                    readonly examples: readonly ["ZH"];
                };
                readonly countryCode: {
                    readonly description: "The country code consisting of 2 uppercase letters";
                    readonly type: "string";
                    readonly maxLength: 2;
                    readonly minLength: 2;
                    readonly examples: readonly ["NL"];
                };
            };
            readonly type: "object";
            readonly title: "Address";
            readonly "x-readme-ref-name": "Address";
        };
        readonly invoiceAddress: {
            readonly properties: {
                readonly code: {
                    readonly type: "string";
                };
                readonly firstName: {
                    readonly description: "The forename (also known as a given name, Christian name or a first name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["John"];
                };
                readonly lastName: {
                    readonly description: "The surname (also known as a family name or a last name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Doe"];
                };
                readonly streetName: {
                    readonly description: "The name of the street";
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly minLength: 1;
                    readonly examples: readonly ["Visitlane"];
                };
                readonly streetNumber: {
                    readonly description: "The street number";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                    readonly examples: readonly ["13"];
                };
                readonly streetNumberExtension: {
                    readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                    readonly examples: readonly ["b1"];
                };
                readonly zipCode: {
                    readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                    readonly type: "string";
                    readonly maxLength: 16;
                    readonly minLength: 1;
                    readonly examples: readonly ["5678CD"];
                };
                readonly city: {
                    readonly description: "The name of a city";
                    readonly type: "string";
                    readonly maxLength: 128;
                    readonly minLength: 1;
                    readonly examples: readonly ["Amsterdam"];
                };
                readonly regionCode: {
                    readonly description: "Region code (iso-3166-2)";
                    readonly type: "string";
                    readonly examples: readonly ["ZH"];
                };
                readonly countryCode: {
                    readonly description: "The country code consisting of 2 uppercase letters";
                    readonly type: "string";
                    readonly maxLength: 2;
                    readonly minLength: 2;
                    readonly examples: readonly ["NL"];
                };
            };
            readonly type: "object";
            readonly title: "Address";
            readonly "x-readme-ref-name": "Address";
        };
        readonly products: {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly id: {
                        readonly description: "The product identifier.";
                        readonly type: "string";
                        readonly examples: readonly ["TEST_01"];
                    };
                    readonly description: {
                        readonly description: "The description of the product.";
                        readonly type: "string";
                        readonly examples: readonly ["Some product description"];
                    };
                    readonly type: {
                        readonly description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes\n\n`shipping` `article` `discount` `rounding` `handling` `payment` `credit` `giftcard` `emoney` `crypto`";
                        readonly type: "string";
                        readonly enum: readonly ["shipping", "article", "discount", "rounding", "handling", "payment", "credit", "giftcard", "emoney", "crypto"];
                    };
                    readonly price: {
                        readonly properties: {
                            readonly value: {
                                readonly description: "The amount in cents.";
                                readonly type: "integer";
                                readonly minimum: 1;
                                readonly examples: readonly [10];
                            };
                        };
                        readonly type: "object";
                    };
                    readonly quantity: {
                        readonly description: "The quantity.";
                        readonly type: "number";
                        readonly format: "float";
                    };
                    readonly vatCode: {
                        readonly description: "The VAT code to use.\n\n`N` `H` `L`";
                        readonly type: "string";
                        readonly enum: readonly ["N", "H", "L"];
                    };
                };
                readonly type: "object";
                readonly title: "Product";
                readonly "x-readme-ref-name": "Product";
            };
        };
    };
    readonly type: "object";
    readonly title: "Order";
    readonly "x-readme-ref-name": "Order";
};

declare const PaymentMethod$1: {
    readonly required: readonly ["id"];
    readonly properties: {
        readonly id: {
            readonly description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.";
            readonly type: "integer";
            readonly examples: readonly ["10"];
        };
        readonly subId: {
            readonly description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.";
            readonly type: "string";
            readonly examples: readonly ["10"];
        };
        readonly name: {
            readonly description: "The name of the payment method.";
            readonly type: "string";
            readonly examples: readonly ["ideal"];
        };
    };
    readonly type: "object";
    readonly title: "PaymentMethod";
    readonly "x-readme-ref-name": "PaymentMethod";
};

declare const PostTransactions: {
    readonly body: {
        readonly required: readonly ["amount", "returnUrl"];
        readonly properties: {
            readonly serviceId: {
                readonly description: "The ID of your service. Required if you authenticate with AT-code/token. You can find the service ID here: https://my.pay.nl/programs/programs";
                readonly type: "string";
                readonly examples: readonly ["SL-####-####"];
            };
            readonly description: {
                readonly description: "Is shown on the statement of the payer.";
                readonly type: "string";
                readonly maxLength: 32;
                readonly minLength: 1;
                readonly examples: readonly ["Example description."];
            };
            readonly reference: {
                readonly description: "The merchant identification of this transaction. This field only allows alphanumeric characters";
                readonly type: "string";
                readonly maxLength: 64;
                readonly minLength: 1;
                readonly pattern: "^[a-zA-Z0-9]{1,64}$";
                readonly examples: readonly ["12345XXY0123"];
            };
            readonly expire: {
                readonly description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.";
                readonly type: "string";
                readonly format: "date-time";
                readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
            };
            readonly returnUrl: {
                readonly description: "The URL where the payer has to be send to after the payment.";
                readonly type: "string";
                readonly format: "uri";
                readonly examples: readonly ["https://demo.pay.nl/complete/"];
            };
            readonly exchangeUrl: {
                readonly description: "The URL where we exchange the status of a transaction.";
                readonly type: "string";
                readonly format: "uri";
                readonly examples: readonly ["https://demo.pay.nl/exchange.php"];
            };
            readonly amount: {
                readonly required: readonly ["value"];
                readonly properties: {
                    readonly value: {
                        readonly description: "The amount in cents.";
                        readonly type: "integer";
                        readonly minimum: 1;
                        readonly examples: readonly [10];
                    };
                    readonly currency: {
                        readonly description: "The currency in ISO-4217 format.";
                        readonly type: "string";
                        readonly examples: readonly ["EUR"];
                    };
                };
                readonly type: "object";
                readonly title: "Amount";
                readonly "x-readme-ref-name": "Amount";
            };
            readonly paymentMethod: {
                readonly properties: {
                    readonly id: {
                        readonly description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.";
                        readonly type: "integer";
                        readonly examples: readonly ["10"];
                    };
                    readonly subId: {
                        readonly description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.";
                        readonly type: "string";
                        readonly examples: readonly ["10"];
                    };
                };
                readonly type: "object";
            };
            readonly integration: {
                readonly properties: {
                    readonly testMode: {
                        readonly description: "Indicates if the service is in testmode or not, possible values: false or true";
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
                readonly title: "Integration";
                readonly "x-readme-ref-name": "Integration";
            };
            readonly customer: {
                readonly properties: {
                    readonly firstName: {
                        readonly description: "The forename (also known as a given name, Christian name or a first name).";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["John"];
                    };
                    readonly lastName: {
                        readonly description: "The surname (also known as a family name or a last name).";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Doe"];
                    };
                    readonly ipAddress: {
                        readonly description: "An ip address";
                        readonly type: "string";
                        readonly examples: readonly ["213.126.82.230"];
                    };
                    readonly birthDate: {
                        readonly description: "Date of birth as defined in ISO-8601.";
                        readonly type: "string";
                        readonly format: "date";
                        readonly examples: readonly ["1999-02-15"];
                    };
                    readonly gender: {
                        readonly description: "The subject's gender. Choose either M for male or F for female.";
                        readonly type: "string";
                        readonly examples: readonly ["M"];
                    };
                    readonly phone: {
                        readonly description: "The subject's phone number. Optionally prepended with a + and country code";
                        readonly type: "string";
                        readonly examples: readonly ["0031612345678"];
                    };
                    readonly email: {
                        readonly description: "An email address.";
                        readonly type: "string";
                        readonly format: "email";
                        readonly examples: readonly ["sandbox@pay.nl"];
                    };
                    readonly language: {
                        readonly description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages";
                        readonly type: "string";
                        readonly enum: readonly ["NL", "EN", "DE", "FR", "IT", "ES"];
                        readonly examples: readonly ["NL"];
                    };
                    readonly trust: {
                        readonly description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).";
                        readonly type: "integer";
                        readonly maximum: 10;
                        readonly minimum: -10;
                        readonly examples: readonly [-5];
                    };
                    readonly reference: {
                        readonly description: "Unique reference of the payer. This field only allows alphanumeric characters.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly pattern: "^[a-zA-Z0-9]{1,64}$";
                        readonly examples: readonly ["NL87654321"];
                    };
                    readonly company: {
                        readonly properties: {
                            readonly name: {
                                readonly description: "The name of your merchant.";
                                readonly type: "string";
                                readonly examples: readonly ["CompanyName"];
                            };
                            readonly coc: {
                                readonly description: "Your Chamber of commerce registration number. This format differs per country.";
                                readonly type: "string";
                                readonly examples: readonly ["12345678"];
                            };
                            readonly vat: {
                                readonly description: "Value added tax identification number (VAT identification number).";
                                readonly type: "string";
                                readonly examples: readonly ["NL807960147B01"];
                            };
                            readonly countryCode: {
                                readonly description: "The country code consisting of 2 uppercase letters";
                                readonly type: "string";
                                readonly examples: readonly ["NL"];
                            };
                        };
                        readonly type: "object";
                        readonly title: "Company";
                        readonly "x-readme-ref-name": "Company";
                    };
                };
                readonly type: "object";
            };
            readonly order: {
                readonly properties: {
                    readonly countryCode: {
                        readonly description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction";
                        readonly type: "string";
                        readonly maxLength: 2;
                        readonly minLength: 2;
                        readonly examples: readonly ["NL"];
                    };
                    readonly deliveryDate: {
                        readonly description: "The date of delivery.";
                        readonly type: "string";
                        readonly format: "date";
                        readonly examples: readonly ["1999-02-15"];
                    };
                    readonly invoiceDate: {
                        readonly description: "The date of the invoice";
                        readonly type: "string";
                        readonly format: "date";
                        readonly examples: readonly ["1999-02-15"];
                    };
                    readonly deliveryAddress: {
                        readonly required: readonly ["streetName", "streetNumber", "zipCode", "city"];
                        readonly properties: {
                            readonly firstName: {
                                readonly description: "The forename (also known as a given name, Christian name or a first name).";
                                readonly type: "string";
                                readonly maxLength: 64;
                                readonly minLength: 1;
                                readonly examples: readonly ["John"];
                            };
                            readonly lastName: {
                                readonly description: "The surname (also known as a family name or a last name).";
                                readonly type: "string";
                                readonly maxLength: 64;
                                readonly minLength: 1;
                                readonly examples: readonly ["Doe"];
                            };
                            readonly streetName: {
                                readonly description: "The name of the street";
                                readonly type: "string";
                                readonly maxLength: 128;
                                readonly minLength: 1;
                                readonly examples: readonly ["Visitlane"];
                            };
                            readonly streetNumber: {
                                readonly description: "The street number";
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly minLength: 1;
                                readonly examples: readonly ["13"];
                            };
                            readonly streetNumberExtension: {
                                readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly minLength: 1;
                                readonly examples: readonly ["b1"];
                            };
                            readonly zipCode: {
                                readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                                readonly type: "string";
                                readonly maxLength: 16;
                                readonly minLength: 1;
                                readonly examples: readonly ["5678CD"];
                            };
                            readonly city: {
                                readonly description: "The name of a city";
                                readonly type: "string";
                                readonly maxLength: 128;
                                readonly minLength: 1;
                                readonly examples: readonly ["Amsterdam"];
                            };
                            readonly regionCode: {
                                readonly description: "Region code (iso-3166-2)";
                                readonly type: "string";
                                readonly examples: readonly ["ZH"];
                            };
                            readonly countryCode: {
                                readonly description: "The country code consisting of 2 uppercase letters";
                                readonly type: "string";
                                readonly maxLength: 2;
                                readonly minLength: 2;
                                readonly examples: readonly ["NL"];
                            };
                        };
                        readonly type: "object";
                    };
                    readonly invoiceAddress: {
                        readonly required: readonly ["streetName", "streetNumber", "zipCode", "city"];
                        readonly properties: {
                            readonly firstName: {
                                readonly description: "The forename (also known as a given name, Christian name or a first name).";
                                readonly type: "string";
                                readonly maxLength: 64;
                                readonly minLength: 1;
                                readonly examples: readonly ["John"];
                            };
                            readonly lastName: {
                                readonly description: "The surname (also known as a family name or a last name).";
                                readonly type: "string";
                                readonly maxLength: 64;
                                readonly minLength: 1;
                                readonly examples: readonly ["Doe"];
                            };
                            readonly streetName: {
                                readonly description: "The name of the street";
                                readonly type: "string";
                                readonly maxLength: 128;
                                readonly minLength: 1;
                                readonly examples: readonly ["Visitlane"];
                            };
                            readonly streetNumber: {
                                readonly description: "The street number";
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly minLength: 1;
                                readonly examples: readonly ["13"];
                            };
                            readonly streetNumberExtension: {
                                readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                                readonly type: "string";
                                readonly maxLength: 32;
                                readonly minLength: 1;
                                readonly examples: readonly ["b1"];
                            };
                            readonly zipCode: {
                                readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                                readonly type: "string";
                                readonly maxLength: 16;
                                readonly minLength: 1;
                                readonly examples: readonly ["5678CD"];
                            };
                            readonly city: {
                                readonly description: "The name of a city";
                                readonly type: "string";
                                readonly maxLength: 128;
                                readonly minLength: 1;
                                readonly examples: readonly ["Amsterdam"];
                            };
                            readonly regionCode: {
                                readonly description: "Region code (iso-3166-2)";
                                readonly type: "string";
                                readonly examples: readonly ["ZH"];
                            };
                            readonly countryCode: {
                                readonly description: "The country code consisting of 2 uppercase letters";
                                readonly type: "string";
                                readonly maxLength: 2;
                                readonly minLength: 2;
                                readonly examples: readonly ["NL"];
                            };
                        };
                        readonly type: "object";
                    };
                    readonly products: {
                        readonly type: "array";
                        readonly items: {
                            readonly properties: {
                                readonly id: {
                                    readonly description: "The product identifier.";
                                    readonly type: "string";
                                    readonly examples: readonly ["TEST_01"];
                                };
                                readonly description: {
                                    readonly description: "The description of the product.";
                                    readonly type: "string";
                                    readonly examples: readonly ["Some product description"];
                                };
                                readonly type: {
                                    readonly description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes\n\n`shipping` `article` `discount` `rounding` `handling` `payment` `credit` `giftcard` `emoney` `crypto`";
                                    readonly type: "string";
                                    readonly enum: readonly ["shipping", "article", "discount", "rounding", "handling", "payment", "credit", "giftcard", "emoney", "crypto"];
                                };
                                readonly price: {
                                    readonly properties: {
                                        readonly value: {
                                            readonly description: "The amount in cents.";
                                            readonly type: "integer";
                                            readonly minimum: 1;
                                            readonly examples: readonly [10];
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly quantity: {
                                    readonly description: "The quantity.";
                                    readonly type: "number";
                                    readonly format: "float";
                                };
                                readonly vatCode: {
                                    readonly description: "The VAT code to use.\n\n`N` `H` `L`";
                                    readonly type: "string";
                                    readonly enum: readonly ["N", "H", "L"];
                                };
                            };
                            readonly type: "object";
                            readonly title: "Product";
                            readonly "x-readme-ref-name": "Product";
                        };
                    };
                };
                readonly type: "object";
            };
            readonly stats: {
                readonly properties: {
                    readonly info: {
                        readonly description: "The used info code which can be tracked in the stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Campagne 99"];
                    };
                    readonly tool: {
                        readonly description: "The used tool code which can be tracked in the stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Google"];
                    };
                    readonly object: {
                        readonly description: "The object which can be tracked in stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                    };
                    readonly extra1: {
                        readonly description: "The first free value which can be tracked in the stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Customer 6985615"];
                    };
                    readonly extra2: {
                        readonly description: "The second free value which can be tracked in the stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Invoice 21.3695"];
                    };
                    readonly extra3: {
                        readonly description: "The third free value which can be tracked in the stats.";
                        readonly type: "string";
                        readonly maxLength: 64;
                        readonly minLength: 1;
                        readonly examples: readonly ["Shop Amsterdam"];
                    };
                    readonly domainId: {
                        readonly description: "The ID of the duplicate content URL";
                        readonly type: "string";
                        readonly examples: readonly ["WU-####-####"];
                    };
                };
                readonly type: "object";
                readonly title: "Stats";
                readonly "x-readme-ref-name": "Stats";
            };
            readonly notification: {
                readonly properties: {
                    readonly type: {
                        readonly description: "Use \"push\" for push messages, or \"email\" to send out an email. For more information check the following page: https://paynl.readme.io/reference/accounts-1";
                        readonly type: "string";
                        readonly enum: readonly ["push", "email"];
                    };
                    readonly recipient: {
                        readonly description: "The recipient of the notification. For push messages, use your device id (AD-XXXX-XXXX). For email, provide a valid email address (XXXX@XXXX.XX).";
                        readonly type: "string";
                        readonly examples: readonly ["AD-1234-1234"];
                    };
                };
                readonly type: "object";
                readonly title: "Notification";
                readonly "x-readme-ref-name": "Notification";
            };
            readonly transferData: {
                readonly type: "array";
                readonly items: {
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the variable to be tracked in the transaction.";
                            readonly type: "string";
                            readonly examples: readonly ["stat1"];
                        };
                        readonly value: {
                            readonly description: "The value of the variable to be tracked in the transaction.";
                            readonly type: "string";
                            readonly examples: readonly ["ab8827dfc"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "TransferData";
                    readonly "x-readme-ref-name": "TransferData";
                };
            };
        };
        readonly type: "object";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly properties: {
                readonly id: {
                    readonly description: "The Id of the transaction.";
                    readonly type: "string";
                    readonly examples: readonly ["EX-1234-1234-1234"];
                };
                readonly serviceId: {
                    readonly description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs";
                    readonly type: "string";
                    readonly examples: readonly ["SL-####-####"];
                };
                readonly description: {
                    readonly description: "Is shown on the statement of the payer.";
                    readonly type: "string";
                    readonly maxLength: 32;
                    readonly minLength: 1;
                    readonly examples: readonly ["Example description."];
                };
                readonly reference: {
                    readonly description: "The merchant identification of this transaction. This field only allows alphanumeric characters";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly pattern: "^[a-zA-Z0-9]{1,64}$";
                    readonly examples: readonly ["12345XXY0123"];
                };
                readonly manualTransferCode: {
                    readonly description: "Payment reference used to identify manual bank transfers";
                    readonly type: "string";
                    readonly examples: readonly ["0000 0000 0000 0000"];
                };
                readonly orderId: {
                    readonly description: "The orderId of the transaction.";
                    readonly type: "string";
                    readonly examples: readonly ["0000000000X00000"];
                };
                readonly paymentUrl: {
                    readonly description: "The payment URL for this transaction";
                    readonly type: "string";
                    readonly format: "uri";
                };
                readonly statusUrl: {
                    readonly description: "Api url to get status details of the transaction.";
                    readonly type: "string";
                };
                readonly amount: {
                    readonly required: readonly ["value"];
                    readonly properties: {
                        readonly value: {
                            readonly description: "The amount in cents.";
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly examples: readonly [10];
                        };
                        readonly currency: {
                            readonly description: "The currency in ISO-4217 format.";
                            readonly type: "string";
                            readonly examples: readonly ["EUR"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "Amount";
                    readonly "x-readme-ref-name": "Amount";
                };
                readonly uuid: {
                    readonly description: "The uuid of the QR code.";
                    readonly type: "string";
                };
                readonly hash: {
                    readonly description: "Api url to get status details of the transaction.";
                    readonly type: "string";
                };
                readonly cancelUrl: {
                    readonly description: "Api url to get status details of the transaction.";
                    readonly type: "string";
                };
                readonly orderStatusUrl: {
                    readonly description: "Api url to get status details of a pin transaction.";
                    readonly type: "string";
                    readonly examples: readonly ["https://domain.com/api/status"];
                };
                readonly expire: {
                    readonly description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly deprecated: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly expiresAt: {
                    readonly description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.";
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly created: {
                    readonly description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly deprecated: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly createdAt: {
                    readonly description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.";
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly createdBy: {
                    readonly description: "The reference to an account or token whom created the entity";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^A(T)?(-\\d{4}){2}$";
                    readonly readOnly: true;
                    readonly examples: readonly ["A-1234-4321"];
                };
                readonly modified: {
                    readonly description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation";
                    readonly type: readonly ["string", "null"];
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly deprecated: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly modifiedAt: {
                    readonly description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.";
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly readOnly: true;
                    readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
                };
                readonly modifiedBy: {
                    readonly description: "The reference to an account or token whom modified the entity";
                    readonly type: readonly ["string", "null"];
                    readonly pattern: "^A(T)?(-\\d{4}){2}$";
                    readonly readOnly: true;
                    readonly examples: readonly ["A-1234-4321"];
                };
            };
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};

declare const Product$1: {
    readonly properties: {
        readonly id: {
            readonly description: "The product identifier.";
            readonly type: "string";
            readonly examples: readonly ["TEST_01"];
        };
        readonly description: {
            readonly description: "The description of the product.";
            readonly type: "string";
            readonly examples: readonly ["Some product description"];
        };
        readonly type: {
            readonly description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes\n\n`shipping` `article` `discount` `rounding` `handling` `payment` `credit` `giftcard` `emoney` `crypto`";
            readonly type: "string";
            readonly enum: readonly ["shipping", "article", "discount", "rounding", "handling", "payment", "credit", "giftcard", "emoney", "crypto"];
        };
        readonly price: {
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
            };
            readonly type: "object";
        };
        readonly quantity: {
            readonly description: "The quantity.";
            readonly type: "number";
            readonly format: "float";
        };
        readonly vatCode: {
            readonly description: "The VAT code to use.\n\n`N` `H` `L`";
            readonly type: "string";
            readonly enum: readonly ["N", "H", "L"];
        };
    };
    readonly type: "object";
    readonly title: "Product";
    readonly "x-readme-ref-name": "Product";
};

declare const Stats$1: {
    readonly properties: {
        readonly info: {
            readonly description: "The used info code which can be tracked in the stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Campagne 99"];
        };
        readonly tool: {
            readonly description: "The used tool code which can be tracked in the stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Google"];
        };
        readonly object: {
            readonly description: "The object which can be tracked in stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
        };
        readonly extra1: {
            readonly description: "The first free value which can be tracked in the stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Customer 6985615"];
        };
        readonly extra2: {
            readonly description: "The second free value which can be tracked in the stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Invoice 21.3695"];
        };
        readonly extra3: {
            readonly description: "The third free value which can be tracked in the stats.";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly examples: readonly ["Shop Amsterdam"];
        };
        readonly domainId: {
            readonly description: "The ID of the duplicate content URL";
            readonly type: "string";
            readonly examples: readonly ["WU-####-####"];
        };
    };
    readonly type: "object";
    readonly title: "Stats";
    readonly "x-readme-ref-name": "Stats";
};

declare const Status$1: {
    readonly properties: {
        readonly code: {
            readonly description: "The status code.";
            readonly type: "integer";
        };
        readonly action: {
            readonly description: "The state in which the transaction resides";
            readonly type: "string";
            readonly examples: readonly ["PAID"];
        };
        readonly phase: {
            readonly description: "The current phase in the transaction state";
            readonly type: "string";
            readonly examples: readonly ["APPROVED"];
        };
    };
    readonly type: "object";
    readonly title: "Status";
    readonly "x-readme-ref-name": "Status";
};

declare const Transaction$1: {
    readonly required: readonly ["serviceId", "amount", "returnUrl"];
    readonly properties: {
        readonly id: {
            readonly description: "The Id of the transaction.";
            readonly type: "string";
            readonly examples: readonly ["EX-1234-1234-1234"];
        };
        readonly serviceId: {
            readonly description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs";
            readonly type: "string";
            readonly examples: readonly ["SL-####-####"];
        };
        readonly description: {
            readonly description: "Is shown on the statement of the payer.";
            readonly type: "string";
            readonly maxLength: 32;
            readonly minLength: 1;
            readonly examples: readonly ["Example description."];
        };
        readonly reference: {
            readonly description: "The merchant identification of this transaction. This field only allows alphanumeric characters";
            readonly type: "string";
            readonly maxLength: 64;
            readonly minLength: 1;
            readonly pattern: "^[a-zA-Z0-9]{1,64}$";
            readonly examples: readonly ["12345XXY0123"];
        };
        readonly manualTransferCode: {
            readonly description: "Payment reference used to identify manual bank transfers";
            readonly type: "string";
            readonly examples: readonly ["0000 0000 0000 0000"];
        };
        readonly orderId: {
            readonly description: "The orderId of the transaction.";
            readonly type: "string";
            readonly examples: readonly ["0000000000X00000"];
        };
        readonly ipAddress: {
            readonly description: "An ip address";
            readonly type: "string";
            readonly examples: readonly ["213.126.82.230"];
        };
        readonly exchangeUrl: {
            readonly description: "The URL where we exchange the status of a transaction.";
            readonly type: "string";
            readonly format: "uri";
            readonly examples: readonly ["https://demo.pay.nl/exchange.php"];
        };
        readonly returnUrl: {
            readonly description: "The URL where the payer has to be send to after the payment.";
            readonly type: "string";
            readonly format: "uri";
            readonly examples: readonly ["https://demo.pay.nl/complete/"];
        };
        readonly paymentUrl: {
            readonly description: "The payment URL for this transaction";
            readonly type: "string";
            readonly format: "uri";
        };
        readonly amount: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly expire: {
            readonly description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.";
            readonly type: "string";
            readonly format: "date-time";
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly created: {
            readonly description: "The date at which this entity was created presented in the correct ISO-8601 (a.k.a. ATOM) notation.";
            readonly type: "string";
            readonly format: "date-time";
            readonly readOnly: true;
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly modified: {
            readonly description: "The date at which this entity was modified presented in the correct ISO-8601 (a.k.a. ATOM) notation.";
            readonly type: "string";
            readonly format: "date-time";
            readonly readOnly: true;
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly amountConverted: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly amountPaid: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly amountRefunded: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly paymentMethod: {
            readonly required: readonly ["id"];
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.";
                    readonly type: "integer";
                    readonly examples: readonly ["10"];
                };
                readonly subId: {
                    readonly description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.";
                    readonly type: "string";
                    readonly examples: readonly ["10"];
                };
                readonly name: {
                    readonly description: "The name of the payment method.";
                    readonly type: "string";
                    readonly examples: readonly ["ideal"];
                };
            };
            readonly type: "object";
            readonly title: "PaymentMethod";
            readonly "x-readme-ref-name": "PaymentMethod";
        };
        readonly status: {
            readonly properties: {
                readonly code: {
                    readonly description: "The status code.";
                    readonly type: "integer";
                };
                readonly action: {
                    readonly description: "The state in which the transaction resides";
                    readonly type: "string";
                    readonly examples: readonly ["PAID"];
                };
                readonly phase: {
                    readonly description: "The current phase in the transaction state";
                    readonly type: "string";
                    readonly examples: readonly ["APPROVED"];
                };
            };
            readonly type: "object";
            readonly title: "Status";
            readonly "x-readme-ref-name": "Status";
        };
        readonly integration: {
            readonly properties: {
                readonly testMode: {
                    readonly description: "Indicates if the service is in testmode or not, possible values: false or true";
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
            readonly title: "Integration";
            readonly "x-readme-ref-name": "Integration";
        };
        readonly customer: {
            readonly properties: {
                readonly firstName: {
                    readonly description: "The forename (also known as a given name, Christian name or a first name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["John"];
                };
                readonly lastName: {
                    readonly description: "The surname (also known as a family name or a last name).";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Doe"];
                };
                readonly type: {
                    readonly description: "Either B for business or C for consumer.\n\n`B` `C`";
                    readonly type: "string";
                    readonly enum: readonly ["B", "C"];
                };
                readonly ip: {
                    readonly description: "An ip address";
                    readonly type: "string";
                    readonly examples: readonly ["213.126.82.230"];
                };
                readonly birthDate: {
                    readonly description: "Date of birth as defined in ISO-8601.";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["1999-02-15"];
                };
                readonly gender: {
                    readonly description: "The subject's gender. Choose either M for male or F for female.";
                    readonly type: "string";
                    readonly examples: readonly ["M"];
                };
                readonly phone: {
                    readonly description: "The subject's phone number. Optionally prepended with a + and country code";
                    readonly type: "string";
                    readonly examples: readonly ["0031612345678"];
                };
                readonly email: {
                    readonly description: "An email address.";
                    readonly type: "string";
                    readonly format: "email";
                    readonly examples: readonly ["sandbox@pay.nl"];
                };
                readonly language: {
                    readonly description: "The language code consisting of 2 uppercase letters. Can be one of the following: EN, NL, DE, FR, ES, IT. You can find all available languages here: https://paynl.readme.io/reference/languages\n\n`NL` `EN` `DE` `FR` `IT` `ES`";
                    readonly type: "string";
                    readonly enum: readonly ["NL", "EN", "DE", "FR", "IT", "ES"];
                    readonly examples: readonly ["NL"];
                };
                readonly trust: {
                    readonly description: "Indicates whether you trust the payer, scale -10 -> 10 (10 Reliable, -10 Unreliable).";
                    readonly type: "integer";
                    readonly maximum: 10;
                    readonly minimum: -10;
                    readonly examples: readonly [-5];
                };
                readonly reference: {
                    readonly description: "Unique reference of the payer. This field only allows alphanumeric characters.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly pattern: "^[a-zA-Z0-9]{1,64}$";
                    readonly examples: readonly ["NL87654321"];
                };
                readonly bankAccount: {
                    readonly required: readonly ["iban", "bic", "owner"];
                    readonly properties: {
                        readonly iban: {
                            readonly description: "The International Bank Account Number (IBAN).";
                            readonly type: "string";
                            readonly examples: readonly ["NL69INGB0123456789"];
                        };
                        readonly bic: {
                            readonly description: "Business Identifier Codes (BIC/SWIFT).";
                            readonly type: "string";
                            readonly examples: readonly ["INGBNL2A"];
                        };
                        readonly owner: {
                            readonly description: "The owner of the bank account.";
                            readonly type: "string";
                            readonly maxLength: 64;
                            readonly minLength: 1;
                            readonly examples: readonly ["John Doe"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "BankAccount";
                    readonly "x-readme-ref-name": "BankAccount";
                };
                readonly company: {
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of your merchant.";
                            readonly type: "string";
                            readonly examples: readonly ["CompanyName"];
                        };
                        readonly coc: {
                            readonly description: "Your Chamber of commerce registration number. This format differs per country.";
                            readonly type: "string";
                            readonly examples: readonly ["12345678"];
                        };
                        readonly vat: {
                            readonly description: "Value added tax identification number (VAT identification number).";
                            readonly type: "string";
                            readonly examples: readonly ["NL807960147B01"];
                        };
                        readonly countryCode: {
                            readonly description: "The country code consisting of 2 uppercase letters";
                            readonly type: "string";
                            readonly examples: readonly ["NL"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "Company";
                    readonly "x-readme-ref-name": "Company";
                };
            };
            readonly type: "object";
            readonly title: "Customer";
            readonly "x-readme-ref-name": "Customer";
        };
        readonly order: {
            readonly properties: {
                readonly countryCode: {
                    readonly description: "When used this countryCode takes preference over the one set in the deliveryAddress and is then used as the countryCode for this transaction";
                    readonly type: "string";
                    readonly maxLength: 2;
                    readonly minLength: 2;
                    readonly examples: readonly ["NL"];
                };
                readonly deliveryDate: {
                    readonly description: "The date of delivery.";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["1999-02-15"];
                };
                readonly invoiceDate: {
                    readonly description: "The date of the invoice";
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["1999-02-15"];
                };
                readonly deliveryAddress: {
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly firstName: {
                            readonly description: "The forename (also known as a given name, Christian name or a first name).";
                            readonly type: "string";
                            readonly maxLength: 64;
                            readonly minLength: 1;
                            readonly examples: readonly ["John"];
                        };
                        readonly lastName: {
                            readonly description: "The surname (also known as a family name or a last name).";
                            readonly type: "string";
                            readonly maxLength: 64;
                            readonly minLength: 1;
                            readonly examples: readonly ["Doe"];
                        };
                        readonly streetName: {
                            readonly description: "The name of the street";
                            readonly type: "string";
                            readonly maxLength: 128;
                            readonly minLength: 1;
                            readonly examples: readonly ["Visitlane"];
                        };
                        readonly streetNumber: {
                            readonly description: "The street number";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                            readonly examples: readonly ["13"];
                        };
                        readonly streetNumberExtension: {
                            readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                            readonly examples: readonly ["b1"];
                        };
                        readonly zipCode: {
                            readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                            readonly type: "string";
                            readonly maxLength: 16;
                            readonly minLength: 1;
                            readonly examples: readonly ["5678CD"];
                        };
                        readonly city: {
                            readonly description: "The name of a city";
                            readonly type: "string";
                            readonly maxLength: 128;
                            readonly minLength: 1;
                            readonly examples: readonly ["Amsterdam"];
                        };
                        readonly regionCode: {
                            readonly description: "Region code (iso-3166-2)";
                            readonly type: "string";
                            readonly examples: readonly ["ZH"];
                        };
                        readonly countryCode: {
                            readonly description: "The country code consisting of 2 uppercase letters";
                            readonly type: "string";
                            readonly maxLength: 2;
                            readonly minLength: 2;
                            readonly examples: readonly ["NL"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "Address";
                    readonly "x-readme-ref-name": "Address";
                };
                readonly invoiceAddress: {
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                        };
                        readonly firstName: {
                            readonly description: "The forename (also known as a given name, Christian name or a first name).";
                            readonly type: "string";
                            readonly maxLength: 64;
                            readonly minLength: 1;
                            readonly examples: readonly ["John"];
                        };
                        readonly lastName: {
                            readonly description: "The surname (also known as a family name or a last name).";
                            readonly type: "string";
                            readonly maxLength: 64;
                            readonly minLength: 1;
                            readonly examples: readonly ["Doe"];
                        };
                        readonly streetName: {
                            readonly description: "The name of the street";
                            readonly type: "string";
                            readonly maxLength: 128;
                            readonly minLength: 1;
                            readonly examples: readonly ["Visitlane"];
                        };
                        readonly streetNumber: {
                            readonly description: "The street number";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                            readonly examples: readonly ["13"];
                        };
                        readonly streetNumberExtension: {
                            readonly description: "A house number extension is required to deal with appartments or other addresses sharing the same front door";
                            readonly type: "string";
                            readonly maxLength: 32;
                            readonly minLength: 1;
                            readonly examples: readonly ["b1"];
                        };
                        readonly zipCode: {
                            readonly description: "A zip/postal code. see https://en.wikipedia.org/wiki/List_of_postal_codes for a list of formats per country.";
                            readonly type: "string";
                            readonly maxLength: 16;
                            readonly minLength: 1;
                            readonly examples: readonly ["5678CD"];
                        };
                        readonly city: {
                            readonly description: "The name of a city";
                            readonly type: "string";
                            readonly maxLength: 128;
                            readonly minLength: 1;
                            readonly examples: readonly ["Amsterdam"];
                        };
                        readonly regionCode: {
                            readonly description: "Region code (iso-3166-2)";
                            readonly type: "string";
                            readonly examples: readonly ["ZH"];
                        };
                        readonly countryCode: {
                            readonly description: "The country code consisting of 2 uppercase letters";
                            readonly type: "string";
                            readonly maxLength: 2;
                            readonly minLength: 2;
                            readonly examples: readonly ["NL"];
                        };
                    };
                    readonly type: "object";
                    readonly title: "Address";
                    readonly "x-readme-ref-name": "Address";
                };
                readonly products: {
                    readonly type: "array";
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly description: "The product identifier.";
                                readonly type: "string";
                                readonly examples: readonly ["TEST_01"];
                            };
                            readonly description: {
                                readonly description: "The description of the product.";
                                readonly type: "string";
                                readonly examples: readonly ["Some product description"];
                            };
                            readonly type: {
                                readonly description: "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes\n\n`shipping` `article` `discount` `rounding` `handling` `payment` `credit` `giftcard` `emoney` `crypto`";
                                readonly type: "string";
                                readonly enum: readonly ["shipping", "article", "discount", "rounding", "handling", "payment", "credit", "giftcard", "emoney", "crypto"];
                            };
                            readonly price: {
                                readonly properties: {
                                    readonly value: {
                                        readonly description: "The amount in cents.";
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly examples: readonly [10];
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly quantity: {
                                readonly description: "The quantity.";
                                readonly type: "number";
                                readonly format: "float";
                            };
                            readonly vatCode: {
                                readonly description: "The VAT code to use.\n\n`N` `H` `L`";
                                readonly type: "string";
                                readonly enum: readonly ["N", "H", "L"];
                            };
                        };
                        readonly type: "object";
                        readonly title: "Product";
                        readonly "x-readme-ref-name": "Product";
                    };
                };
            };
            readonly type: "object";
            readonly title: "Order";
            readonly "x-readme-ref-name": "Order";
        };
        readonly stats: {
            readonly properties: {
                readonly info: {
                    readonly description: "The used info code which can be tracked in the stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Campagne 99"];
                };
                readonly tool: {
                    readonly description: "The used tool code which can be tracked in the stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Google"];
                };
                readonly object: {
                    readonly description: "The object which can be tracked in stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                };
                readonly extra1: {
                    readonly description: "The first free value which can be tracked in the stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Customer 6985615"];
                };
                readonly extra2: {
                    readonly description: "The second free value which can be tracked in the stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Invoice 21.3695"];
                };
                readonly extra3: {
                    readonly description: "The third free value which can be tracked in the stats.";
                    readonly type: "string";
                    readonly maxLength: 64;
                    readonly minLength: 1;
                    readonly examples: readonly ["Shop Amsterdam"];
                };
                readonly domainId: {
                    readonly description: "The ID of the duplicate content URL";
                    readonly type: "string";
                    readonly examples: readonly ["WU-####-####"];
                };
            };
            readonly type: "object";
            readonly title: "Stats";
            readonly "x-readme-ref-name": "Stats";
        };
        readonly type: {
            readonly description: "Defines the type of the transaction. Possible values are: CIT = Customer initiated simple e-com transaction, MIT = Merchant initiated transaction, MOTO = Customer initiated payment where card number entered manually, POS = Point of sale, ECOM\n\n`POS` `ECOM` `CIT` `MIT` `MOTO`";
            readonly type: "string";
            readonly enum: readonly ["POS", "ECOM", "CIT", "MIT", "MOTO"];
        };
        readonly transferData: {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly name: {
                        readonly description: "The name of the variable to be tracked in the transaction.";
                        readonly type: "string";
                        readonly examples: readonly ["stat1"];
                    };
                    readonly value: {
                        readonly description: "The value of the variable to be tracked in the transaction.";
                        readonly type: "string";
                        readonly examples: readonly ["ab8827dfc"];
                    };
                };
                readonly type: "object";
                readonly title: "TransferData";
                readonly "x-readme-ref-name": "TransferData";
            };
        };
    };
    readonly type: "object";
    readonly title: "Transaction";
    readonly "x-readme-ref-name": "Transaction";
};

declare const TransactionStatus$1: {
    readonly properties: {
        readonly id: {
            readonly description: "The Id of the transaction.";
            readonly type: "string";
        };
        readonly orderId: {
            readonly description: "The orderId of the transaction.";
            readonly type: "string";
        };
        readonly serviceCode: {
            readonly description: "The ID of your service. You can find the service ID here: https://my.pay.nl/programs/programs";
            readonly type: "string";
        };
        readonly description: {
            readonly description: "Is shown on the statement of the payer.";
            readonly type: "string";
        };
        readonly reference: {
            readonly description: "The merchant identification of this transaction. This field only allows alphanumeric characters";
            readonly type: "string";
        };
        readonly ipAddress: {
            readonly description: "An ip address";
            readonly type: "string";
        };
        readonly amount: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly amountConverted: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly amountPaid: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly amountRefunded: {
            readonly required: readonly ["value"];
            readonly properties: {
                readonly value: {
                    readonly description: "The amount in cents.";
                    readonly type: "integer";
                    readonly minimum: 1;
                    readonly examples: readonly [10];
                };
                readonly currency: {
                    readonly description: "The currency in ISO-4217 format.";
                    readonly type: "string";
                    readonly examples: readonly ["EUR"];
                };
            };
            readonly type: "object";
            readonly title: "Amount";
            readonly "x-readme-ref-name": "Amount";
        };
        readonly status: {
            readonly properties: {
                readonly code: {
                    readonly description: "The status code.";
                    readonly type: "integer";
                };
                readonly action: {
                    readonly description: "The state in which the transaction resides";
                    readonly type: "string";
                    readonly examples: readonly ["PAID"];
                };
                readonly phase: {
                    readonly description: "The current phase in the transaction state";
                    readonly type: "string";
                    readonly examples: readonly ["APPROVED"];
                };
            };
            readonly type: "object";
            readonly title: "Status";
            readonly "x-readme-ref-name": "Status";
        };
        readonly paymentData: {
            readonly properties: {
                readonly method: {
                    readonly description: "Payment method of the transaction.";
                    readonly type: "string";
                };
                readonly customerKey: {
                    readonly description: "Customer key of the customer from the transaction.";
                    readonly type: "string";
                };
                readonly customerId: {
                    readonly description: "Customer id of the customer from the transaction.";
                    readonly type: "string";
                };
                readonly customerName: {
                    readonly description: "Customer name of the customer from the transaction.";
                    readonly type: "string";
                };
                readonly ipAddress: {
                    readonly description: "Ip address of the customer from the transaction.";
                    readonly type: "string";
                };
                readonly secureStatus: {
                    readonly description: "Secure status of the transaction.";
                    readonly type: "boolean";
                };
                readonly paymentVerificationMethod: {
                    readonly type: "integer";
                };
            };
            readonly type: "object";
            readonly title: "TransactionStatusPaymentData";
            readonly "x-readme-ref-name": "TransactionStatusPaymentData";
        };
        readonly paymentMethod: {
            readonly properties: {
                readonly id: {
                    readonly description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.";
                    readonly type: "integer";
                };
                readonly subId: {
                    readonly description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.";
                    readonly type: "integer";
                };
            };
            readonly type: "object";
            readonly title: "TransactionStatusPaymentMethod";
            readonly "x-readme-ref-name": "TransactionStatusPaymentMethod";
        };
        readonly integration: {
            readonly properties: {
                readonly testMode: {
                    readonly description: "Indicates if the service is in testmode or not, possible values: false or true";
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
            readonly title: "Integration";
            readonly "x-readme-ref-name": "Integration";
        };
        readonly expiredAt: {
            readonly description: "Expire date in the correct ISO-8601 (a.k.a. ATOM) notation.";
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
            readonly readOnly: true;
        };
        readonly createdAt: {
            readonly description: "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation";
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
            readonly readOnly: true;
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly createdBy: {
            readonly description: "The reference to an account or token whom created the entity";
            readonly type: readonly ["string", "null"];
            readonly pattern: "^A(T)?(-\\d{4}){2}$";
            readonly readOnly: true;
            readonly examples: readonly ["A-1234-4321"];
        };
        readonly modifiedAt: {
            readonly description: "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation";
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
            readonly readOnly: true;
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly modifiedBy: {
            readonly description: "The reference to an account or token whom modified the entity";
            readonly type: readonly ["string", "null"];
            readonly pattern: "^A(T)?(-\\d{4}){2}$";
            readonly readOnly: true;
            readonly examples: readonly ["A-1234-4321"];
        };
        readonly deletedAt: {
            readonly description: "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)";
            readonly type: readonly ["string", "null"];
            readonly format: "date-time";
            readonly readOnly: true;
            readonly examples: readonly ["2016-06-04T08:15:00+01:00"];
        };
        readonly deletedBy: {
            readonly description: "The reference to an account or token whom deleted the entity";
            readonly type: readonly ["string", "null"];
            readonly pattern: "^A(T)?(-\\d{4}){2}$";
            readonly readOnly: true;
            readonly examples: readonly ["A-1234-4321"];
        };
    };
    readonly type: "object";
    readonly title: "TransactionStatus";
    readonly "x-readme-ref-name": "TransactionStatus";
};

declare const TransactionStatusPaymentData$1: {
    readonly properties: {
        readonly method: {
            readonly description: "Payment method of the transaction.";
            readonly type: "string";
        };
        readonly customerKey: {
            readonly description: "Customer key of the customer from the transaction.";
            readonly type: "string";
        };
        readonly customerId: {
            readonly description: "Customer id of the customer from the transaction.";
            readonly type: "string";
        };
        readonly customerName: {
            readonly description: "Customer name of the customer from the transaction.";
            readonly type: "string";
        };
        readonly ipAddress: {
            readonly description: "Ip address of the customer from the transaction.";
            readonly type: "string";
        };
        readonly secureStatus: {
            readonly description: "Secure status of the transaction.";
            readonly type: "boolean";
        };
        readonly paymentVerificationMethod: {
            readonly type: "integer";
        };
    };
    readonly type: "object";
    readonly title: "TransactionStatusPaymentData";
    readonly "x-readme-ref-name": "TransactionStatusPaymentData";
};

declare const TransactionStatusPaymentMethod$1: {
    readonly properties: {
        readonly id: {
            readonly description: "The ID of the payment option e.g. iDEAL is 10. See: services/get/sl-xxxx-xxx.";
            readonly type: "integer";
        };
        readonly subId: {
            readonly description: "The chosen sub ID of the payment option e.g. The bank id for iDEAL. See: services/get/sl-xxxx-xxx.";
            readonly type: "integer";
        };
    };
    readonly type: "object";
    readonly title: "TransactionStatusPaymentMethod";
    readonly "x-readme-ref-name": "TransactionStatusPaymentMethod";
};

declare const TransferData$1: {
    readonly properties: {
        readonly name: {
            readonly description: "The name of the variable to be tracked in the transaction.";
            readonly type: "string";
            readonly examples: readonly ["stat1"];
        };
        readonly value: {
            readonly description: "The value of the variable to be tracked in the transaction.";
            readonly type: "string";
            readonly examples: readonly ["ab8827dfc"];
        };
    };
    readonly type: "object";
    readonly title: "TransferData";
    readonly "x-readme-ref-name": "TransferData";
};

declare const Violation$1: {
    readonly properties: {
        readonly propertyPath: {
            readonly type: "string";
        };
        readonly message: {
            readonly type: "string";
        };
        readonly code: {
            readonly type: "string";
        };
    };
    readonly type: "object";
    readonly title: "Violation";
    readonly "x-readme-ref-name": "Violation";
};

type Address = FromSchema<typeof Address$1>;
type Amount = FromSchema<typeof Amount$1>;
type BankAccount = FromSchema<typeof BankAccount$1>;
type Company = FromSchema<typeof Company$1>;
type Customer = FromSchema<typeof Customer$1>;
type Error = FromSchema<typeof Error$1>;
type GetTransactionsTransactionidMetadataParam = FromSchema<typeof GetTransactionsTransactionid.metadata>;
type GetTransactionsTransactionidStatusMetadataParam = FromSchema<typeof GetTransactionsTransactionidStatus.metadata>;
type Integration = FromSchema<typeof Integration$1>;
type Notification = FromSchema<typeof Notification$1>;
type Order = FromSchema<typeof Order$1>;
type PaymentMethod = FromSchema<typeof PaymentMethod$1>;
type PostTransactionsBodyParam = FromSchema<typeof PostTransactions.body>;
type PostTransactionsResponse201 = FromSchema<typeof PostTransactions.response['201']>;
type Product = FromSchema<typeof Product$1>;
type Stats = FromSchema<typeof Stats$1>;
type Status = FromSchema<typeof Status$1>;
type Transaction = FromSchema<typeof Transaction$1>;
type TransactionStatus = FromSchema<typeof TransactionStatus$1>;
type TransactionStatusPaymentData = FromSchema<typeof TransactionStatusPaymentData$1>;
type TransactionStatusPaymentMethod = FromSchema<typeof TransactionStatusPaymentMethod$1>;
type TransferData = FromSchema<typeof TransferData$1>;
type Violation = FromSchema<typeof Violation$1>;

export type { Address, Amount, BankAccount, Company, Customer, Error, GetTransactionsTransactionidMetadataParam, GetTransactionsTransactionidStatusMetadataParam, Integration, Notification, Order, PaymentMethod, PostTransactionsBodyParam, PostTransactionsResponse201, Product, Stats, Status, Transaction, TransactionStatus, TransactionStatusPaymentData, TransactionStatusPaymentMethod, TransferData, Violation };
