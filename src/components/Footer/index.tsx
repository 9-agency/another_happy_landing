import styles from "./styles.module.css"
import Grid from "components/Grid";

export default () => (
    <div className={styles.component}>
        <Grid>
            <p className={styles.label}>Get in touch</p>
            <a className={`${styles.email} increaseLetterSpacingOnHover`} href="mailto:hello@9.agency">hello@9.agency</a>
        </Grid>
    </div>
)
