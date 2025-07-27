import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import OurTeamBackground from "@assets/images/background/background-our-team.webp"
import TeamSection from "@components/TeamSection/TeamSection"

function TeamPage() {
    return (
        <>
            <SubIntroBlock title="Our Team" backgroundImageURL={OurTeamBackground} />
            <TeamSection defaultExpertsCount={6} />
        </>
    )
}

export default TeamPage