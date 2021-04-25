import styles from "./styles.module.css"
import { useEffect, useState } from "react"

interface Props {
  children?: React.ReactNode
  id?: string
  className?: string
}

export default (props: Props) => {
  const [className, setClassName] = useState("fadeIn")

  useEffect(() => {
    setClassName("fadeIn")
    console.log("fadeIn")
    return () => {
      console.log("fadeOut")
      setClassName("fadeOut")
    }
  }, [])

  const { id, children } = props

  return (
    <div className={`${styles.component} ${className} ${props.className}`} {...{ id }}>{children}</div>
  )
}
