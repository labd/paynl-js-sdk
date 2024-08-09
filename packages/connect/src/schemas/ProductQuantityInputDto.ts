const ProductQuantityInputDto = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "id": {
      "description": "The externalId of the product to be captured.",
      "type": "string",
      "examples": [
        "Product1"
      ]
    },
    "quantity": {
      "description": "The quantity of this product to be captured.",
      "type": "number",
      "examples": [
        2
      ]
    }
  },
  "title": "ProductQuantityInputDto",
  "x-readme-ref-name": "ProductQuantityInputDto"
} as const;
export default ProductQuantityInputDto
