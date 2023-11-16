import { useEffect, useContext, useState } from "react"

import { ToastContext } from "@/context/ToastContext"
import type { TypeToast } from "@/types"

import styles from "./styles.module.css"

interface Iprops {
  data: TypeToast
}

export default function Message({
  data: { color, message, key, length = 3000 },
}: Iprops): JSX.Element {
  const [hover, setHover] = useState(false)
  const { dispatch } = useContext(ToastContext)

  useEffect(() => {
    if (!hover) {
      const timeout = setTimeout(() => {
        dispatch({ type: "removeToast", payload: key })
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
