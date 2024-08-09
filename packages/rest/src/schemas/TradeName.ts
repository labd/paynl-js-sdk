const TradeName = {
  "type": "object",
  "title": "TradeName",
  "x-readme-ref-name": "TradeName",
  "properties": {
    "code": {
      "description": "An identifier for this TradeName",
      "type": "string"
    },
    "name": {
      "description": "A registered TradeName",
      "type": "string"
    }
  },
  "items": {
    "type": "object",
    "title": "TradeName",
    "x-readme-ref-name": "TradeName",
    "properties": {
      "code": {
        "description": "An identifier for this TradeName",
        "type": "string"
      },
      "name": {
        "description": "A registered TradeName",
        "type": "string"
      }
    }
  }
} as const;
export default TradeName
