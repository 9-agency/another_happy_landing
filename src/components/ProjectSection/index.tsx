import Grid from "components/Grid"
import { useState } from "react"
import styles from "./styles.module.css"

interface ImageProps {
    src: string,
    alt: string,
    href: string,
    openInNewTab?: boolean
}

interface Project {
    technology: string;
    title: string;
    description: string;
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
            <Image {...project.image} />
        </Grid>
    </div>
)

const Image = ({ src, alt, href, openInNewTab }: ImageProps) => {
    const [className, setClassName] = useState("transparent")
    return (
        <a {...{ href, ...openInNewTab && { target: "_blank" } }}>
            <img
                onLoad={() => setClassName("fadeIn")}
                width={940}
                height="auto"
                {...{ src, alt, className }}
            />
        </a>
    )
}

