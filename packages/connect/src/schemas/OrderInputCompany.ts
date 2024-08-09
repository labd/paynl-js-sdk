const OrderInputCompany = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "name": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Company."
      ]
    },
    "cocNumber": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "000000"
      ]
    },
    "vatNumber": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL000000000B01"
      ]
    },
    "country": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL"
      ]
    }
  },
  "title": "Order.Input.Company",
  "x-readme-ref-name": "Order.Input.Company"
} as const;
export default OrderInputCompany
