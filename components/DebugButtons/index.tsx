"use client"

import { useContext } from "react"
import { ListContext } from "@/context/ListContext"
import CardBorder from "../CardBorder"
// import Dropdown from "../Dropdown"

import styles from "./styles.module.css"

export default function DebugButtons(): JSX.Element {
  const { dispatch } = useContext(ListContext)

  const handleClick = (): void => {
    dispatch({ type: "clearList" })
  }
  return (
    <CardBorder className={styles.container}>
      {/* <Dropdown title="Debug"> */}
      <h2>Debug</h2>
      <button onClick={handleClick}>clear items</button>
      {/* </Dropdown> */}
    </CardBorder>
  )
}
