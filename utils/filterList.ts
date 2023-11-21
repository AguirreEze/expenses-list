import { MONTHS } from "@/utils/constants"

import type { TypeData, TypeItem } from "@/types"

export default function filterList(
  list: TypeItem[],
  filters: TypeData["filters"]
): TypeItem[] {
  const filterThisMonth = (item: TypeItem): boolean => {
    return filters.thisMonth != null
      ? new Date().getMonth() === parseInt(item.date.split("-")[1]) - 1 &&
          new Date().getFullYear() === parseInt(item.date.split("-")[0])
      : true
  }

  const filterCategory = (item: TypeItem): boolean => {
    return filters.category != null ? filters.category === item.category : true
  }

  const filterMonth = (item: TypeItem): boolean => {
    return filters.month != null
      ? filters.month === MONTHS[parseInt(item.date.split("-")[1]) - 1]
      : true
  }

  const filterYear = (item: TypeItem): boolean => {
    return filters.year != null
      ? filters.year === item.date.split("-")[0]
      : true
  }
  return list.filter(
    (item) =>
      filterCategory(item) &&
      filterMonth(item) &&
      filterYear(item) &&
      filterThisMonth(item)
  )
}
