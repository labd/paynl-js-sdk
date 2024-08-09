const DeleteTurnovergroupsTurnovergroupcode = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "turnoverGroupCode": {
            "type": "string",
            "examples": [
              "CT-1234-4321"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "turnoverGroupCode"
        ]
      }
    ]
  }
} as const;
export default DeleteTurnovergroupsTurnovergroupcode
