import ProjectSection from "components/ProjectSection";
import src from "assets/chessclock_project.png"

export default () => (
    <ProjectSection
        title="Grandmaster Essentials."
        project={{
            title: "Digital timer for Chess enthusiasts",
            technology: "PWA",
            description: "Advanced chess clock for rapid, blitz and bullet chess. Each timer can have custom duration, increment and delay. This web application can be installed directly on your mobile or desktop device and act like a native one.",
            link: "https://chessclock.live/#/",
            image: {
                src,
                alt: "Chess Clock"
            }
        }}
    />
)
