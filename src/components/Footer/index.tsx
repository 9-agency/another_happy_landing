import styles from "./styles.module.css"
import Grid from "components/Grid";
import Flex from "components/Flex";

const sectionTitles = ["LANDING", "HOW WE WORK", "V18", "CHESS CLOCK", "MANTRA"]

const otherSites = [
    {
        label: "LINKEDIN",
        href: "https://www.linkedin.com/company/9-agency"
    },
    {
        label: "GITHUB",
        href: "https://github.com/9-agency"
    }
].map(model => ({ ...model, openInNewTab: true }))

export default () => (
    <div className={styles.component}>
        <Grid>
            <p className={styles.label}>Get in touch</p>
            <a className={`${styles.email} increaseLetterSpacingOnHover`} href="mailto:hello@9.agency">hello@9.agency</a>
        </Grid>
        <hr />
        <Grid>
            <Flex>
                <Flex column style={{ marginRight: 100 }}>
                    <p className={styles.linkHeader}>SITEMAP</p>
                    {sectionTitles.map(title => <Link label={title} href={`#${title.split(" ").join("").toLowerCase()}`} />)}
                    <Link label="CONTACT" href="mailto:hello@9.agency" />
                </Flex>
                <Flex column>
                    <p className={styles.linkHeader}>OTHER SITES</p>
                    {otherSites.map(Link)}
                </Flex>
            </Flex>
        </Grid>
    </div>
)

const Link = ({ label, href, openInNewTab }: { label: string, href: string, openInNewTab?: boolean }) => <a {...openInNewTab && { target: "_blank" }} {...{ href }} className={styles.link}>{label}</a>

