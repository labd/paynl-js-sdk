const ServiceConfigCategory = {
  "type": "object",
  "title": "ServiceConfigCategory",
  "x-readme-ref-name": "ServiceConfigCategory",
  "properties": {
    "code": {
      "description": "Category identifier.",
      "type": "string",
      "examples": [
        "CY-1234-4321"
      ]
    },
    "name": {
      "description": "The category name.",
      "type": "string"
    }
  },
  "items": {
    "type": "object",
    "title": "ServiceConfigCategory",
    "x-readme-ref-name": "ServiceConfigCategory",
    "properties": {
      "code": {
        "description": "Category identifier.",
        "type": "string",
        "example": "CY-1234-4321"
      },
      "name": {
        "description": "The category name.",
        "type": "string"
      }
    }
  }
} as const;
export default ServiceConfigCategory
