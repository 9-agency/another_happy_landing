import Flex from "components/Flex"
import Grid from "components/Grid"
import { useState } from "react"
import styles from "./styles.module.css"

interface ImageProps {
    src: string,
    alt: string
}

interface Project {
    technology: string;
    title: string;
    description: string;
    link: string;
    image: ImageProps
}

interface Props {
    title: string;
    project: Project;
}

export default ({ title, project }: Props) => (
    <div className={styles.component}>
        <Grid>
            <h1>{title}</h1>
            <h2>{project.technology}</h2>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </Grid>
        <Flex justifyContentCenter className={styles.projectImageComponent} onClick={() => window.open(project.link)}>
            <Image {...project.image} />
        </Flex>
    </div>
)

const Image = ({ src, alt }: ImageProps) => {
    const [className, setClassName] = useState("transparent")
    return (
        <img
            onLoad={() => setClassName("fadeIn")}
            width={1300}
            height={727}
            {...{ src, alt, className }}
        />
    )
}

