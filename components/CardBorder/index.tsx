import styles from "./styles.module.css"

interface Iprops {
  tag?: string
  maxWidth?: string
  children: React.ReactNode
}

export default function CardBorder({
  children,
  tag = "div",
  maxWidth = "unset",
}: Iprops): JSX.Element {
  return (
    <div className={styles.border} style={{ maxWidth }}>
      {children}
    </div>
  )
}
