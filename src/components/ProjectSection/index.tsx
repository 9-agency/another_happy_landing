import Flex from "components/Flex"
import Grid from "components/Grid"
import { useState } from "react"
import styles from "./styles.module.css"

interface Image {
    src: string,
    alt: string
}

interface Project {
    technology: string;
    title: string;
    description: string;
    link: string;
    image: Image
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
            <Image {...project.image} />
        </Flex>
    </div>
)

const Image = ({ src, alt }: Image) => {
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

