import Flex from "components/Flex"
import Grid from "components/Grid"
import styles from "./styles.module.css"
import { ReactComponent as Logo } from "assets/logo.svg"
import { ReactComponent as IPhone } from "assets/iphone_horizontal.svg"

export default () => (
  <div className={styles.component}>
    <Header />
    <Flex alignItemsCenter style={{ height: "75%" }}>
      <Grid>
        <p style={{position: "relative"}} className={styles.headline}>Crafting awesome web <span style={{ color: "var(--accent)" }}>apps.</span></p>
        <Flex style={{ position: "absolute", zIndex: -1, marginTop: -249, marginLeft: 105 }} justifyContentEnd>
          <IPhone />
        </Flex>
      </Grid>
    </Flex>
  </div>
)

const Header = () => (
  <header className={styles.header}>
    <Grid>
      <Flex justifyContentSpaceBetween alignItemsCenter>
        <Logo />
        <Flex className={styles.headerLabels}>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="mailto:hello@9.agency">CONTACT</a>
        </Flex>
      </Flex>
    </Grid>
  </header>
)

