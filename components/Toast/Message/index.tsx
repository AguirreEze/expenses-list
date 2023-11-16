import { useEffect, useContext, useState } from "react"

import { ToastContext } from "@/context/ToastContext"
import type { TypeToast } from "@/types"

import styles from "./styles.module.css"

export default function Message({
  color,
  message,
  id,
  length = 3000,
}: TypeToast): JSX.Element {
  const [hover, setHover] = useState(false)
  const { dispatch } = useContext(ToastContext)

  useEffect(() => {
    if (!hover) {
      const timeout = setTimeout(() => {
        dispatch({ type: "removeToast", payload: id })
      }, length)

      return () => clearTimeout(timeout)
    }
  }, [hover])

  return (
    <div
      className={`${styles.container} ${styles[color]}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{message}</span>
    </div>
  )
}
