import styles from "./styles.module.css"

interface Props {
  children?: React.ReactNode
  id?: string
  className?: string
}

export default ({ id, children, className }: Props) => (
  <div className={`${styles.component} ${className} fadeIn`} {...{ id }}>{children}</div>
)
