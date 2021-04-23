import Flex from "components/Flex"
import Grid from "components/Grid"
import React from "react"
import styles from "./styles.module.css"

interface Project {
    technology: string;
    title: string;
    description: string;
    ImageComponent: React.FC;
}

interface Props {
    title: string;
    project: Project;
}

export default ({ title, project }: Props) => (
    <div className={styles.component}>
        <Grid>
            <h1>{title}</h1>
            <h3>{project.technology}</h3>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </Grid>
        <Flex justifyContentCenter style={{ backgroundColor: "var(--gray)", width: "100%" }} className={`${styles.projectImageComponent} scaleOnHover`}>
            <project.ImageComponent />
        </Flex>
    </div>
)
