import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import PortfolioBackgroundImage from "../../images/images/background-portfolio.png"
import PortfolioSection from "../../components/PortfolioSection/PortfolioSection"

function PortfolioPage() {
    useSetCurrentPage("portfolio")

    return (
        <>
            <SubIntroBlock title="Portfolio Standard" backgroundImageURL={PortfolioBackgroundImage} />
            <PortfolioSection />
        </>
    )
}

export default PortfolioPage