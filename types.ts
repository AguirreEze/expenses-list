export interface TypeItem {
  description: string
  value: string
  date: string
  category: string
  key: string
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
