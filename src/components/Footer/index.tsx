import styles from "./styles.module.css"
import Grid from "components/Grid";
import Flex from "components/Flex";
import { withIndexKey } from "helpers";

const sectionTitles = ["HOME", "HOW WE WORK", "MANTRA"]

const technologySectionTitles = ["REACT", "PWA"]

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
    <Flex column justifyContentSpaceBetween className={styles.component}>
        <Flex alignItemsCenter grow className={styles.contactContainer}>
            <Grid>
                <p className={styles.label}>Get in touch</p>
                <a className={styles.email} href="mailto:hello@9.agency">hello@9.agency</a>
            </Grid>
        </Flex>
        <div>
            <hr />
            <Grid>
                <Flex className={styles.linkColumnsContainer}>
                    <Flex column>
                        <p className={styles.linkHeader}>SITEMAP</p>
                        {sectionTitles.map(title => <Link label={title} href={`#${title.split(" ").join("").toLowerCase()}`} />).map(withIndexKey)}
                        <Link label="CONTACT" href="mailto:hello@9.agency" />
                    </Flex>
                    <Flex column >
                        <p className={styles.linkHeader}>TECHNOLOGIES</p>
                        {technologySectionTitles.map(title => <Link label={title} href={`#${title.split(" ").join("").toLowerCase()}`} />).map(withIndexKey)}
                    </Flex>
                    <Flex column>
                        <p className={styles.linkHeader}>OTHER SITES</p>
                        {otherSites.map(Link).map(withIndexKey)}
                    </Flex>
                </Flex>
            </Grid>
        </div>
    </Flex>
)

const Link = ({ label, href, openInNewTab }: { label: string, href: string, openInNewTab?: boolean }) => <a {...openInNewTab && { target: "_blank" }} {...{ href }} className={styles.link} rel="noopener">{label}</a>

