"use client"

import { useContext, useEffect } from "react"
import { ListContext } from "@/context/ListContext"
import CardBorder from "@/components/CardBorder"

import styles from "./styles.module.css"

export default function ItemDisplay(): JSX.Element {
  const { list, dispatch } = useContext(ListContext)
  useEffect(() => {
    dispatch({ type: "updateList" })
  }, [])

  return (
    <CardBorder maxWidth="1000px">
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
          {list.map((elem) => (
            <tr key={elem.key} className={styles.tr}>
              <td>{elem.description}</td>
              <td>{elem.value}</td>
              <td className={styles.category}>{elem.category}</td>
              <td>{elem.date.replaceAll("-", "/")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardBorder>
  )
}
