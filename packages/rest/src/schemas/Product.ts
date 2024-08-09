const Product = {
  "properties": {
    "id": {
      "description": "The product identifier.",
      "type": "string",
      "examples": [
        "TEST_01"
      ]
    },
    "description": {
      "description": "The description of the product.",
      "type": "string",
      "examples": [
        "Some product description"
      ]
    },
    "type": {
      "description": "The type of product. More information can be found here: https://paynl.readme.io/reference/producttypes",
      "type": "string",
      "enum": [
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
    "price": {
      "properties": {
        "value": {
          "description": "The amount in cents.",
          "type": "integer",
          "minimum": 1,
          "examples": [
            10
          ]
        }
      },
      "type": "object"
    },
    "quantity": {
      "description": "The quantity.",
      "type": "number",
      "format": "float"
    },
    "vatCode": {
      "description": "The VAT code to use.",
      "type": "string",
      "enum": [
        "N",
        "H",
        "L"
      ]
    }
  },
  "type": "object",
  "title": "Product",
  "x-readme-ref-name": "Product"
} as const;
export default Product
