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

export default ({ technology, title, description, image }: Project) => (
    <div id="scaleSection" className={styles.component}>
        <Grid>
            <h2>{technology}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
            <Image {...image} />
        </Grid>
    </div>
)

const Image = ({ src, alt, href, openInNewTab }: ImageProps) => {
    const [className, setClassName] = useState("transparent")
    return (
        <a {...{ href, ...openInNewTab && { target: "_blank" } }} rel="noopener" >
            <img
                onLoad={() => setClassName("fadeIn")}
                width={880}
                height={522}
                {...{ src, alt, className }}
            />
        </a>
    )
}

