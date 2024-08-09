const PostDocumentsDocumentidVeriff = {
  "body": {
    "required": [
      "name"
    ],
    "properties": {
      "sessionId": {}
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "documentId": {
            "description": "Code of the acceptance document.",
            "type": "string",
            "examples": [
              "D-1234-1234"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "documentId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PostDocumentsDocumentidVeriff
