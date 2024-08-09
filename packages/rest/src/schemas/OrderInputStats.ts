const OrderInputStats = {
  "type": "object",
  "description": "",
  "deprecated": false,
  "properties": {
    "tool": {
      "description": "The used tool code which can be tracked in the stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Tool"
      ]
    },
    "info": {
      "description": "The used info code which can be tracked in the stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Info"
      ]
    },
    "object": {
      "description": "The object which can be tracked in stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Object"
      ]
    },
    "extra1": {
      "description": "The first free value which can be tracked in the stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Extra1"
      ]
    },
    "extra2": {
      "description": "The second free value which can be tracked in the stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Extra2"
      ]
    },
    "extra3": {
      "description": "The third free value which can be tracked in the stats.",
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "Extra3"
      ]
    },
    "domainId": {
      "type": [
        "string",
        "null"
      ],
      "examples": [
        "WU-1234-1234"
      ]
    },
    "promotorId": {
      "type": [
        "integer",
        "null"
      ]
    }
  },
  "title": "Order.Input.Stats",
  "x-readme-ref-name": "Order.Input.Stats"
} as const;
export default OrderInputStats
