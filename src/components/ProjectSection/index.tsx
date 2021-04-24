import Flex from "components/Flex"
import Grid from "components/Grid"
import React from "react"
import styles from "./styles.module.css"

interface ImageComponent {
    className?: string;
}

interface Project {
    technology: string;
    title: string;
    description: string;
    ImageComponent: React.FC<ImageComponent>;
    link: string;
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
        <Flex justifyContentCenter style={{ backgroundColor: "var(--gray)", width: "100%" }} className={styles.projectImageComponent} onClick={() => window.open(project.link)}>
            <project.ImageComponent />
        </Flex>
    </div>
)
