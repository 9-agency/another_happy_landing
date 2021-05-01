import ProjectSection from "components/ProjectSection";
import src from "assets/chessclock_project.png"

export default () => (
    <ProjectSection
        title="Grandmaster Essentials."
        project={{
            title: "Digital timer for Chess enthusiasts",
            technology: "PWA",
            description: "Advanced chess clock for rapid, blitz and bullet chess. The UX is simple and straight to the point, with focus on usability over style, so players can focus on the game. This progressive web application can be directly installed to any mobile or desktop device and act like a native one.",
            link: "https://chessclock.live/#/",
            image: {
                src,
                alt: "Chess Clock",
                highlightColor: "#F8C9A0"
            }
        }}
    />
)
