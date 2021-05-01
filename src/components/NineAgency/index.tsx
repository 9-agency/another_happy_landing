import ProjectSection from "components/ProjectSection";
import src from "assets/9agency_project.png"

export default () => (
    <ProjectSection
        title="Fastest gun in the west."
        project={{
            title: "9 agency web",
            technology: "CODE-SPLITTING",
            description: "Loading times under 1 second are achieved by using advanced techniques like code-splitting and fetching heavier resources on separate threads. Auditing this website in tools like Google Lighthouse will result in highest scores and showcase the powerful connection between React and Typescript.",
            link: "https://9.agency/",
            image: {
                src,
                alt: "Chess Clock",
                highlightColor: "var(--accent)"
            }
        }}
    />
)
