const Mcc = {
  "properties": {
    "code": {
      "description": "A MCC code",
      "type": "integer",
      "examples": [
        "XXXX"
      ]
    },
    "description": {
      "description": "Description of the MCC code.",
      "type": "string"
    },
    "highRisk": {
      "description": "Should this MCC code be considered high risk?",
      "type": "boolean"
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
  "title": "Mcc",
  "x-readme-ref-name": "Mcc"
} as const;
export default Mcc
