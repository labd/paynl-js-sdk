const TransferData = {
  "type": "object",
  "title": "TransferData",
  "x-readme-ref-name": "TransferData",
  "properties": {
    "name": {
      "description": "The name of the variable to be tracked in the transaction.",
      "type": "string",
      "examples": [
        "stat1"
      ]
    },
    "value": {
      "description": "The value of the variable to be tracked in the transaction.",
      "type": "string",
      "examples": [
        "ab8827dfc"
      ]
    }
  }
} as const;
export default TransferData
