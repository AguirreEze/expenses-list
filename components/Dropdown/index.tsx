"use client"

import { useState } from "react"

import styles from "./styles.module.css"

interface Iprops {
  children: React.ReactNode
  title: string
  maxHeight?: string
  hideContentOnClose?: boolean
  gap?: string
  open?: boolean
}

export default function Dropdown({
  children,
  maxHeight = "250px",
  hideContentOnClose = true,
  title,
  gap = ".5rem",
  open = false,
}: Iprops): JSX.Element {
  const [showContent, setShowContent] = useState(open || false)
  return (
    <div className={styles.container} style={showContent ? { gap } : {}}>
      <h2>{title}</h2>
      <div
        className={styles.slider}
        style={
          showContent
            ? { maxHeight }
            : { maxHeight: 0, opacity: hideContentOnClose ? 0 : 1 }
        }
      >
        {children}
      </div>
      <div className={styles.arrowContainer}>
        <label className={styles.arrow}>{">"}</label>
        <input
          className={styles.arrowCheckbox}
          type="checkbox"
          checked={showContent}
          onChange={() => setShowContent(!showContent)}
        />
      </div>
    </div>
  )
}
