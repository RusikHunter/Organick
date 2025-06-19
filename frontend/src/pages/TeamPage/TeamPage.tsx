import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import OurTeamBackgroundmage from "../../images/images/background-our-team.png"
import TeamSection from "../../components/TeamSection/TeamSection"

function TeamPage() {
    useSetCurrentPage("team")

    return (
        <>
            <SubIntroBlock title="Our Team" backgroundImageURL={OurTeamBackgroundmage} />
            <TeamSection />
        </>
    )
}

export default TeamPage