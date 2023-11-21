import { type CATEGORIES } from "./utils/constants"

export interface TypeItem {
  description: string
  value: number
  date: string
  category: (typeof CATEGORIES)[number]
  id: string
}
export interface TypeData {
  filters: {
    thisMonth?: boolean
    category?: string
    month?: string
    year?: string
  }
  list: TypeItem[] | []
}

export interface TypeToast {
  color: "red" | "green"
  message: string
  id: string
  length?: number
}
