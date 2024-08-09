const Currency = {
  "properties": {
    "id": {
      "description": "Id of the currency.",
      "type": "integer"
    },
    "tag": {
      "description": "The currency in ISO-4217 format.",
      "type": "string",
      "examples": [
        "EUR"
      ]
    },
    "name": {
      "description": "Full name of the currency.",
      "type": "string",
      "examples": [
        "Euro."
      ]
    },
    "isoCurrencyNumber": {
      "description": "ISO number of the currency.",
      "type": "integer"
    },
    "symbol": {
      "description": "Symbol of the currency.",
      "type": "string"
    },
    "exchangeRate": {
      "description": "Exchange rate of the currency.",
      "type": "number"
    },
    "createdAt": {
      "description": "The creation date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "modifiedAt": {
      "description": "The modification date time presented in the correct ISO-8601 (a.k.a. ATOM) notation",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    },
    "deletedAt": {
      "description": "The deletion date time presented in the correct ISO-8601 (a.k.a. ATOM) notation. Can be empty (null)",
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "readOnly": true,
      "examples": [
        "2016-06-04T08:15:00+01:00"
      ]
    }
  },
  "type": "object",
  "title": "Currency",
  "x-readme-ref-name": "Currency"
} as const;
export default Currency
