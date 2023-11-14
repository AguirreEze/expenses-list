"use client"

import { useState } from "react"

import styles from "./styles.module.css"

interface Iprops {
  children: React.ReactNode
  title: string
  maxHeight?: string
  hideContentOnClose?: boolean
}

export default function Dropdown({
  children,
  maxHeight = "250px",
  hideContentOnClose = true,
  title,
}: Iprops): JSX.Element {
  const [showFilters, setShowFilters] = useState(false)
  return (
    <>
      <h2>{title}</h2>
      <div
        className={styles.slider}
        style={
          showFilters
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
          checked={showFilters}
          onChange={() => setShowFilters(!showFilters)}
        />
      </div>
    </>
  )
}
