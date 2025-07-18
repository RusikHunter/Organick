import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import OurTeamBackgroundmage from "../../images/images/background-our-team.png"
import TeamSection from "../../components/TeamSection/TeamSection"

function TeamPage() {
    return (
        <>
            <SubIntroBlock title="Our Team" backgroundImageURL={OurTeamBackgroundmage} />
            <TeamSection defaultExpertsCount={6} />
        </>
    )
}

export default TeamPage