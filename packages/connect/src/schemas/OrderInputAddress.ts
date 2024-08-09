const OrderInputAddress = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "firstName": {
      "description": "The forename (also known as a given name, Christian name or a first name).",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "John"
      ]
    },
    "lastName": {
      "description": "The surname (also known as a family name or a last name).",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Doe"
      ]
    },
    "street": {
      "minLength": 1,
      "maxLength": 255,
      "description": "The name of the street",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "P.C. Hooftstraat"
      ]
    },
    "streetNumber": {
      "minLength": 1,
      "maxLength": 16,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "100"
      ]
    },
    "streetNumberExtension": {
      "minLength": 1,
      "maxLength": 16,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "second floor"
      ]
    },
    "zipCode": {
      "minLength": 1,
      "maxLength": 100,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "3202XA"
      ]
    },
    "city": {
      "minLength": 1,
      "maxLength": 255,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Amsterdam"
      ]
    },
    "country": {
      "minLength": 2,
      "maxLength": 2,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL"
      ]
    },
    "region": {
      "minLength": 1,
      "maxLength": 50,
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL"
      ]
    }
  },
  "required": [
    "street",
    "streetNumber",
    "zipCode",
    "city",
    "country"
  ],
  "title": "Order.Input.Address",
  "x-readme-ref-name": "Order.Input.Address"
} as const;
export default OrderInputAddress
