import styles from "./styles.module.css"

interface Iprops {
  tag?: string
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
  return (
    <div className={`${styles.border} ${className}`} style={{ maxWidth }}>
      {children}
    </div>
  )
}
