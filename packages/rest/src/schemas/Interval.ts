const Interval = {
  "properties": {
    "period": {
      "description": "Specify the period frequency. Must be one of: day,week,month,trimester,halfyear,year,manual.\n\n`day` `week` `month` `trimester` `halfyear` `year` `manual`",
      "type": "string",
      "enum": [
        "day",
        "week",
        "month",
        "trimester",
        "halfyear",
        "year",
        "manual"
      ]
    },
    "quantity": {
      "description": "Indicated the number of times this order should be executed.",
      "type": "integer",
      "examples": [
        1
      ]
    },
    "value": {
      "description": "Specify the frequency for a period. For examply a weekly period, but only every second week.",
      "type": "integer",
      "examples": [
        1
      ]
    }
  },
  "type": "object",
  "title": "Interval",
  "x-readme-ref-name": "Interval"
} as const;
export default Interval
