const Platform = {
  "properties": {
    "loginAccount": {
      "type": "boolean"
    },
    "loginTpa": {
      "type": "boolean"
    },
    "authorisation": {
      "type": "string",
      "enum": [
        "all",
        "specified"
      ],
      "description": "`all` `specified`"
    },
    "authorisationGroups": {
      "type": "array",
      "items": {
        "description": "Authorisation group identifier",
        "type": "string",
        "examples": [
          "AG-1234-4321"
        ]
      }
    }
  },
  "type": "object",
  "title": "Platform",
  "x-readme-ref-name": "Platform"
} as const;
export default Platform
