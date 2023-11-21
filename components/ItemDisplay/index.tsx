"use client"

import { useContext, useEffect } from "react"
import { ListContext } from "@/context/ListContext"
import CardBorder from "@/components/CardBorder"
import filterList from "@/utils/filterList"

import styles from "./styles.module.css"

export default function ItemDisplay(): JSX.Element {
  const { data, dispatch } = useContext(ListContext)
  useEffect(() => {
    dispatch({ type: "updateList" })
  }, [])

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
          {filterList(data?.list, data.filters).map((elem) => (
            <tr key={elem.id} className={styles.tr}>
              <td>{elem.description}</td>
              <td>{elem.value}</td>
              <td className={styles.category}>{elem.category}</td>
              <td>{elem.date.replaceAll("-", "/")}</td>
              <td
                className={styles.removeButton}
                onClick={() =>
                  dispatch({ type: "removeItem", payload: elem.id })
                }
              >
                X
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardBorder>
  )
}
