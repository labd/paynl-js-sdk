const DeleteTerminalsTerminalcode = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "terminalCode": {
            "description": "The terminal identifier.",
            "type": "string",
            "examples": [
              "TH-1234-1234"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "terminalCode"
        ]
      }
    ]
  }
} as const;
export default DeleteTerminalsTerminalcode
