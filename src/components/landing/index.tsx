import Flex from "components/Flex"
import Grid from "components/Grid"
import Logo from "components/Logo"
import styles from "./styles.module.css"

export default () => (
  <div className={styles.component}>
    <header className={styles.header}>
      <Grid>
        <Flex justifyContentSpaceBetween alignItemsCenter>
          <Logo />
          <Flex className={styles.headerLabels}>
            <p>PORTFOLIO</p>
            <p>CONTACT</p>
          </Flex>
        </Flex>
      </Grid>
    </header>
  </div>
)