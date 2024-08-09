const Status = {
  "properties": {
    "code": {
      "description": "The status code.",
      "type": "integer"
    },
    "action": {
      "description": "The state in which the transaction resides",
      "type": "string",
      "examples": [
        "PAID"
      ]
    },
    "phase": {
      "description": "The current phase in the transaction state",
      "type": "string",
      "examples": [
        "APPROVED"
      ]
    }
  },
  "type": "object",
  "title": "Status",
  "x-readme-ref-name": "Status"
} as const;
export default Status
