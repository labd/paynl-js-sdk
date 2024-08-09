const OrderCaptureAmountInputDto = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "amount": {
      "description": "The desired amount, in cents, to be captured.",
      "type": "integer",
      "examples": [
        1350
      ]
    }
  },
  "title": "Order.CaptureAmountInputDto",
  "x-readme-ref-name": "Order.CaptureAmountInputDto"
} as const;
export default OrderCaptureAmountInputDto
