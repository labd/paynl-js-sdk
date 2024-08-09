const Link = {
  "required": [
    "href",
    "rel",
    "type"
  ],
  "properties": {
    "href": {
      "description": "",
      "type": [
        "string",
        "null"
      ],
      "readOnly": true,
      "examples": [
        ""
      ]
    },
    "rel": {
      "description": "",
      "type": [
        "string",
        "null"
      ],
      "readOnly": true,
      "examples": [
        ""
      ]
    },
    "type": {
      "description": "",
      "type": [
        "string",
        "null"
      ],
      "readOnly": true,
      "examples": [
        ""
      ]
    }
  },
  "type": "object",
  "title": "Link",
  "x-readme-ref-name": "Link"
} as const;
export default Link
