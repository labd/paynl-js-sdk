import IntegrationPluginVersion from './IntegrationPluginVersion.js';

const IntegrationPlugin = {
  "properties": {
    "code": {
      "description": "A code for this integration",
      "type": "string",
      "examples": [
        "PL-0000-0000"
      ]
    },
    "name": {
      "description": "An integration name.",
      "type": "string"
    },
    "description": {
      "description": "Description of the integration.",
      "type": "string"
    },
    "status": {
      "description": "Status of the integration.",
      "type": "string"
    },
    "image": {
      "description": "Image of the integration.",
      "type": "string"
    },
    "url": {
      "description": "Url to the integration.",
      "type": "string"
    },
    "urlInfo": {
      "description": "Url to more information in the documentation about this integration.",
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
    },
    "versions": {
      "items": IntegrationPluginVersion,
      "type": "array"
    }
  },
  "type": "object",
  "title": "IntegrationPlugin",
  "x-readme-ref-name": "IntegrationPlugin"
} as const;
export default IntegrationPlugin
