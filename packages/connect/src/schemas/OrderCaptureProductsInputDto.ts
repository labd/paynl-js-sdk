import ProductQuantityInputDto from './ProductQuantityInputDto.js';

const OrderCaptureProductsInputDto = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "products": {
      "type": "array",
      "items": ProductQuantityInputDto
    }
  },
  "title": "Order.CaptureProductsInputDto",
  "x-readme-ref-name": "Order.CaptureProductsInputDto"
} as const;
export default OrderCaptureProductsInputDto
