const IntegrationPluginVersion = {
  "properties": {
    "code": {
      "description": "A code for this integration version",
      "type": "string",
      "examples": [
        "PV-0000-0000"
      ]
    },
    "version": {
      "description": "Integration version.",
      "type": "string"
    },
    "developer": {
      "description": "Developer of the integration version.",
      "type": "string"
    },
    "status": {
      "description": "Status of the integration.",
      "type": "string"
    },
    "urlDownload": {
      "description": "Url to download.",
      "type": "string"
    },
    "urlManual": {
      "description": "Url to manual.",
      "type": "string"
    },
    "urlShopDemo": {
      "description": "Url to shopDemo.",
      "type": "string"
    },
    "urlGithub": {
      "description": "Url to github.",
      "type": "string"
    },
    "urlImage": {
      "description": "Url to image.",
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
  "title": "IntegrationPluginVersion",
  "x-readme-ref-name": "IntegrationPluginVersion"
} as const;
export default IntegrationPluginVersion
