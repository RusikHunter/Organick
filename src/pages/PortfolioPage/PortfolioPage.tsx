import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"

import PortfolioBackgroundImage from "../../assets/images/background/background-portfolio.webp"
import PortfolioBackgroundBlurredImage from "../../assets/images/background/background-portfolio-blurred.webp"

import PortfolioSection from "../../components/PortfolioSection/PortfolioSection"

function PortfolioPage() {
    return (
        <>
            <SubIntroBlock title="Portfolio Standard" backgroundImageURL={PortfolioBackgroundImage} blurredBackgroundImageURL={PortfolioBackgroundBlurredImage} />
            <PortfolioSection />
        </>
    )
}

export default PortfolioPage