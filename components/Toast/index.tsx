"use client"

import { useContext } from "react"
import { ToastContext } from "@/context/ToastContext"
import Message from "./Message"

import styles from "./styles.module.css"

export default function Toast(): JSX.Element {
  const { data } = useContext(ToastContext)
  return (
    <div className={styles.container}>
      {data.map((elem) => (
        <Message data={elem} key={elem.key} />
      ))}
    </div>
  )
}
