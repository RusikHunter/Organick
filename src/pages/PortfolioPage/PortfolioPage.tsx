import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import PortfolioBackgroundImage from "@assets/images/background/background-portfolio.webp"
import PortfolioSection from "@components/PortfolioSection/PortfolioSection"

function PortfolioPage() {
    return (
        <>
            <SubIntroBlock title="Portfolio Standard" backgroundImageURL={PortfolioBackgroundImage} />
            <PortfolioSection />
        </>
    )
}

export default PortfolioPage