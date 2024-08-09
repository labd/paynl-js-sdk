const OrderOutputCheckoutDataCompany = {
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
        "Pay."
      ]
    },
    "cocNumber": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "24283498"
      ]
    },
    "vatNumber": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "NL807960147B01"
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
  "title": "Order.Output.CheckoutData.Company",
  "x-readme-ref-name": "Order.Output.CheckoutData.Company"
} as const;
export default OrderOutputCheckoutDataCompany
