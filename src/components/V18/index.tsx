import ProjectSection from "components/ProjectSection";
import src from "assets/v18_project.png"

export default () => (
    <ProjectSection
        title="Latest project."
        project={{
            title: "On-demand rental service in San Francisco",
            technology: "REACT + NODE",
            description: "No more traveling with bulky equipment. No more scrambling to borrow mismatched stuff from your friends. No more long waits at the local gear rental shop. Rent premium bouldering equipment online with on-demand delivery and pickup service. State of this application is managed by reusable Context API components which make it blazing fast.",
            image: {
                src,
                alt: "V18 Rentals",
                href: "https://www.v18rentals.com/",
                openInNewTab: true
            }
        }}
    />
)
