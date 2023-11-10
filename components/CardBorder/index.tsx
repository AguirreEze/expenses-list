import styles from "./styles.module.css"

interface Iprops {
  tag?: "div" | "article" | "section" | "aside"
  maxWidth?: string
  className?: string
  children: React.ReactNode
}

export default function CardBorder({
  children,
  tag = "div",
  maxWidth = "unset",
  className = "",
}: Iprops): JSX.Element {
  switch (tag) {
    case "article":
      return (
        <article
          className={`${styles.border} ${className}`}
          style={{ maxWidth }}
        >
          {children}
        </article>
      )
    case "aside":
      return (
        <aside className={`${styles.border} ${className}`} style={{ maxWidth }}>
          {children}
        </aside>
      )
    case "div":
      return (
        <div className={`${styles.border} ${className}`} style={{ maxWidth }}>
          {children}
        </div>
      )
    case "section":
      return (
        <section
          className={`${styles.border} ${className}`}
          style={{ maxWidth }}
        >
          {children}
        </section>
      )

    default:
      return <>{children}</>
  }
}
