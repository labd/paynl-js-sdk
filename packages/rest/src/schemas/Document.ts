const Document = {
  "properties": {
    "code": {
      "description": "Code of the acceptance document.",
      "type": "string",
      "examples": [
        "D-1234-1234"
      ]
    },
    "type": {
      "description": "Type of the acceptance document.",
      "type": "string",
      "examples": [
        "identification"
      ]
    },
    "status": {
      "description": "Status of the acceptance document.",
      "type": "string",
      "examples": [
        "UPLOADED"
      ]
    }
  },
  "type": "object",
  "title": "Document",
  "x-readme-ref-name": "Document"
} as const;
export default Document
