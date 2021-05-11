import Flex from "components/Flex"
import Grid from "components/Grid"
import styles from "./styles.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import { useState } from "react"

export default () => {
  const [className, setClassName] = useState("transparent");

  (document as any).fonts.ready.then(() => setClassName("fadeIn"));

  return (
    <div className={`${styles.component} ${className}`}>
      <Header />
      <Flex alignItemsCenter style={{ height: "80%" }}>
        <Flex column style={{ width: "100%"}}>
            <Grid style={{position: "relative"}}>
              <p className={styles.headline}>We design and build great digital products.</p>
              <div className={`${styles.logo_stripe} ${styles.resetTranslation}`}></div>
            </Grid>
        </Flex>
      </Flex>
    </div>
  )
}

const Header = () => (
  <header className={styles.header}>
    <Grid>
      <Flex justifyContentEnd>
        <Flex className={styles.headerLabels}>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#mantra">MANTRA</a>
          <a href="mailto:hello@9.agency">CONTACT</a>
        </Flex>
      </Flex>
    </Grid>
  </header>
)

