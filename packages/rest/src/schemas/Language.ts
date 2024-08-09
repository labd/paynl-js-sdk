const Language = {
  "properties": {
    "code": {
      "description": "The language code",
      "type": "string",
      "examples": [
        "en_US"
      ]
    },
    "name": {
      "description": "The language name.",
      "type": "string"
    },
    "adminLanguageAvailable": {
      "description": "Language is available in the administration panel.",
      "type": "boolean"
    },
    "hostedPaymentPageLanguageAvailable": {
      "description": "Language is available on a hosted payment page.",
      "type": "boolean"
    },
    "payerCommunicationLanguageAvailable": {
      "description": "Language is available for communication to the payer.",
      "type": "boolean"
    },
    "contractLanguageAvailable": {
      "description": "Language is available for contracts.",
      "type": "boolean"
    },
    "image": {
      "type": "string"
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
  "title": "Language",
  "x-readme-ref-name": "Language"
} as const;
export default Language
