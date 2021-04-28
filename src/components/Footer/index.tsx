import styles from "./styles.module.css"
import Grid from "components/Grid";
import Flex from "components/Flex";
import { withIndexKey } from "helpers";
import { ReactComponent as InstagramLogo } from "assets/instagram.svg"
import { ReactComponent as LinkedInLogo } from "assets/linkedin.svg"
import { ReactComponent as GithubLogo } from "assets/github.svg"
import { ReactNode } from "react";

const sectionTitles = ["HOME", "PORTFOLIO", "HOW WE WORK", "MANTRA"]

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


const SocialMediaIcons = () => {
    return (
        <Flex justifyContentEnd >
            <SVGLink href="https://www.linkedin.com/company/9-agency"><LinkedInLogo className={styles.logo}/></SVGLink>
            <SVGLink href="https://github.com/9-agency"><GithubLogo className={styles.logo}/></SVGLink>
            <SVGLink href=""><InstagramLogo className={styles.logo}/></SVGLink>
        </Flex>
    )
}

export default () => (
    <Flex column justifyContentSpaceBetween className={styles.component}>
        <Flex alignItemsCenter grow className={styles.contactContainer}>
            <Grid>
                <p className={styles.label} style={{ marginBottom: "16px"}}>Get in touch</p>
                <a className={styles.email} href="mailto:hello@9.agency">hello@9.agency</a>
            </Grid>
        </Flex>
        <div>
            <Grid>
                <Flex column>
                <div className={styles.accentLine}/>
                <SocialMediaIcons />
                </Flex>
            </Grid>
            <Grid>
                <Flex className={styles.linkColumnsContainer}>
                    <Flex column>
                        <p className={styles.linkHeader}>SITEMAP</p>
                        {sectionTitles.map(title => <Link label={title} href={`#${title.split(" ").join("").toLowerCase()}`} />).map(withIndexKey)}
                        <Link label="CONTACT" href="mailto:hello@9.agency" />
                    </Flex>
                    {/* <Flex column >
                        <p className={styles.linkHeader}>TECHNOLOGIES</p>
                        {technologySectionTitles.map(title => <Link label={title} href={`#${title.split(" ").join("").toLowerCase()}`} />).map(withIndexKey)}
                    </Flex>
                    <Flex column>
                        <p className={styles.linkHeader}>OTHER SITES</p>
                        {otherSites.map(Link).map(withIndexKey)}
                    </Flex> */}
                </Flex>
            </Grid>
        </div>
    </Flex>
)

const Link = ({ label, href, openInNewTab }: { label: string, href: string, openInNewTab?: boolean }) => <a {...openInNewTab && { target: "_blank" }} {...{ href }} className={styles.link} rel="noopener">{label}</a>

const SVGLink = ({ href, openInNewTab, children }: { href: string, openInNewTab?: boolean, children: React.ReactNode }) => <a {...{ target: "_blank" }} { ...{ href }} className={styles.imageLink} rel="noopener">{children}</a>