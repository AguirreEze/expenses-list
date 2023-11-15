"use client"

import { useContext, useEffect } from "react"
import { ListContext } from "@/context/ListContext"
import CardBorder from "@/components/CardBorder"
import { MONTHS } from "@/utils/constants"

import type { TypeItem } from "@/types"

import styles from "./styles.module.css"

export default function ItemDisplay(): JSX.Element {
  const { data, dispatch } = useContext(ListContext)
  useEffect(() => {
    dispatch({ type: "updateList" })
  }, [])

  const filterThisMonth = (item: TypeItem): boolean => {
    return data.filters.thisMonth != null
      ? new Date().getMonth() === parseInt(item.date.split("-")[1]) - 1 &&
          new Date().getFullYear() === parseInt(item.date.split("-")[0])
      : true
  }

  const filterCategory = (item: TypeItem): boolean => {
    return data.filters.category != null
      ? data.filters.category === item.category
      : true
  }

  const filterMonth = (item: TypeItem): boolean => {
    return data.filters.month != null
      ? data.filters.month === MONTHS[parseInt(item.date.split("-")[1]) - 1]
      : true
  }

  const filterYear = (item: TypeItem): boolean => {
    return data.filters.year != null
      ? data.filters.year === item.date.split("-")[0]
      : true
  }

  const filterList = (list: TypeItem[]): TypeItem[] => {
    return list.filter(
      (item) =>
        filterCategory(item) &&
        filterMonth(item) &&
        filterYear(item) &&
        filterThisMonth(item)
    )
  }

  return (
    <CardBorder tag="section" maxWidth="1000px" className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th>descripton</th>
            <th>value</th>
            <th>category</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {filterList(data?.list).map((elem) => (
            <tr key={elem.key} className={styles.tr}>
              <td>{elem.description}</td>
              <td>{elem.value}</td>
              <td className={styles.category}>{elem.category}</td>
              <td>{elem.date.replaceAll("-", "/")}</td>
              <button
                className={styles.removeButton}
                onClick={() =>
                  dispatch({ type: "removeItem", payload: elem.key })
                }
              >
                X
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </CardBorder>
  )
}
