const GetRefundsRefundid = {
  "metadata": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "refundId": {
            "type": "string",
            "examples": [
              "RF-0000-0000-0000"
            ],
            "$schema": "http://json-schema.org/draft-04/schema#"
          }
        },
        "required": [
          "refundId"
        ]
      }
    ]
  }
} as const;
export default GetRefundsRefundid
