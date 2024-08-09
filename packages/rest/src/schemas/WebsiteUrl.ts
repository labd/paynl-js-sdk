const WebsiteUrl = {
  "properties": {
    "code": {
      "description": "The code of the website URL.",
      "type": "string",
      "examples": [
        "WU-1234-1234"
      ]
    },
    "website": {
      "description": "The website URL.",
      "type": "string",
      "examples": [
        "https://www.pay.nl"
      ]
    }
  },
  "type": "object",
  "title": "WebsiteUrl",
  "x-readme-ref-name": "WebsiteUrl"
} as const;
export default WebsiteUrl
