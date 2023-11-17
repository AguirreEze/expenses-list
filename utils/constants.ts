const CATEGORIES = [
  "other",
  "recreation",
  "taxes",
  "market",
  "health",
  "suscriptions",
  "cuotas",
] as const

const CATEGORIES_COLORS = {
  other: "#666",
  recreation: "orange",
  taxes: "yellow",
  market: "salmon",
  health: "green",
  suscriptions: "purple",
  cuotas: "red",
} as const

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const

export { CATEGORIES, MONTHS, CATEGORIES_COLORS }
