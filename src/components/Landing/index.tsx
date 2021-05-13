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
      <Flex alignItemsCenter style={{ height: "75%" }}>
        <Flex column style={{ width: "100%", position: "relative" }}>
          <Flex style={{ width: "100%", position: "absolute", bottom: 15 }}>
            <Grid>
              <p className={styles.headline}>We build<div className="fadeInSlow">web apps.</div></p>
            </Grid>
          </Flex>
          <Flex justifyContentEnd style={{ width: "100%" }}>
            <Logo />
          </Flex>
          <Grid> <div className={`${styles.logo_stripe} ${styles.resetTranslation}`}></div></Grid>
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

