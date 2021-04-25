import ProjectSection from "components/ProjectSection";
import src from "assets/v18_project.png"

export default () => (
    <ProjectSection
        title="Latest project."
        project={{
            title: "On-demand rental service in San Francisco",
            technology: "REACT",
            description: "No more traveling with bulky equipment. No more scrambling to borrow mismatched stuff from your friends. No more long waits at the local gear rental shop. Rent premium bouldering equipment online with on-demand delivery and pickup service.",
            link: "https://www.v18rentals.com/",
            ImageComponent: () => (
                <img
                    alt="V18 Rentals"
                    width={1300}
                    height={727}
                    {...{ src }}
                />
            )
        }}
    />
)
