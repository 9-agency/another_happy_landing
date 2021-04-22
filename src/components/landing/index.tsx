import Grid from "components/Grid"
import Logo from "components/Logo"
import styles from "./styles.module.css"

export default () =>
  <div className={styles.component}>
    <header className={styles.header}>
      <Grid>
        <Logo />
      </Grid>
    </header>
  </div>
