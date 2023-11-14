import type { CSSProperties } from "react"

import styles from "./styles.module.css"

interface Iprops {
  children: React.ReactNode
  tag?: "div" | "article" | "section" | "aside"
  maxWidth?: string
  className?: string
  style?: CSSProperties
}

export default function CardBorder({
  children,
  tag = "div",
  maxWidth = "unset",
  className = "",
  style = {},
}: Iprops): JSX.Element {
  switch (tag) {
    case "article":
      return (
        <article
          className={`${styles.border} ${className}`}
          style={{ maxWidth, ...style }}
        >
          {children}
        </article>
      )
    case "aside":
      return (
        <aside
          className={`${styles.border} ${className}`}
          style={{ maxWidth, ...style }}
        >
          {children}
        </aside>
      )
    case "div":
      return (
        <div
          className={`${styles.border} ${className}`}
          style={{ maxWidth, ...style }}
        >
          {children}
        </div>
      )
    case "section":
      return (
        <section
          className={`${styles.border} ${className}`}
          style={{ maxWidth, ...style }}
        >
          {children}
        </section>
      )

    default:
      return <>{children}</>
  }
}
