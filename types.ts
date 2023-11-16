export interface TypeItem {
  description: string
  value: string
  date: string
  category: string
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
