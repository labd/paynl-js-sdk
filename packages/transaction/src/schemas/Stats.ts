const Stats = {
  "properties": {
    "info": {
      "description": "The used info code which can be tracked in the stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Campagne 99"
      ]
    },
    "tool": {
      "description": "The used tool code which can be tracked in the stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Google"
      ]
    },
    "object": {
      "description": "The object which can be tracked in stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1
    },
    "extra1": {
      "description": "The first free value which can be tracked in the stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Customer 6985615"
      ]
    },
    "extra2": {
      "description": "The second free value which can be tracked in the stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Invoice 21.3695"
      ]
    },
    "extra3": {
      "description": "The third free value which can be tracked in the stats.",
      "type": "string",
      "maxLength": 64,
      "minLength": 1,
      "examples": [
        "Shop Amsterdam"
      ]
    },
    "domainId": {
      "description": "The ID of the duplicate content URL",
      "type": "string",
      "examples": [
        "WU-####-####"
      ]
    }
  },
  "type": "object",
  "title": "Stats",
  "x-readme-ref-name": "Stats"
} as const;
export default Stats
