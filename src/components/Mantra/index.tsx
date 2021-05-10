import styles from "./styles.module.css"
import Grid from "components/Grid"
import { withIndexKey } from "helpers"

const sections = [
    {
        title: "NO HACKING",
        description: "We take no easy routes. Bad software practices leads to technical debt later down the road, which nobody likes."
    },
    {
        title: "SCALABILITY",
        description: "We dissolve the client requirement into scalable components, and make sure each component has a single responsibility and well defined interface."
    },
    {
        title: "INTEGRITY",
        description: "Behind 9 stands a strongly experienced team with passion for building great software. We wan’t everybody onboard to be happy with where the project is going and be honest about what we can achieve."
    },
    {
        title: "UX",
        description: "Enhancing the user experience is always our top priority. We develop the product with the end user in mind."
    },
    {
        title: "CONTROL",
        description: "We carefully pick the tools we use for the job, keeping the codebase as light as possible. Everybody develops their set of tools over the years, but adapting to the new trends is a must."
    },
]

export default () => (
    <div className={styles.component}>
        <Grid>
            <h1>Mantra.</h1>
            <div className={styles.grid} id="fadeInSection">
                {sections.map(section).map(withIndexKey)}
            </div>
        </Grid>
    </div>
)

const section = ({ title, description }: { title: string, description: string }) => (
    <div>
        <p className={styles.sectionTitle}>{title}</p>
        <p className={styles.sectionDescription}>{description}</p>
    </div>
)


