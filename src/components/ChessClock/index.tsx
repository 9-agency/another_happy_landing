import ProjectSection from "components/ProjectSection";
import src from "assets/chessclock_project.png"
import Flex from "components/Flex";

export default () => (
    <ProjectSection
        title="Grandmaster Essentials."
        project={{
            title: "Digital timer for Chess enthusiasts",
            technology: "PWA",
            description: "Advanced chess clock for rapid, blitz and bullet chess. Each timer can have custom duration, increment and delay. This web application can be installed directly on your mobile or desktop device and act like a native one.",
            ImageComponent: () => (
                <Flex justifyContentCenter style={{ backgroundColor: "#5E5E5E", width: "100%"}}>
                    <img alt="Chess Clock" {...{ src }} />
                </Flex>
            )
        }}
    />
)
