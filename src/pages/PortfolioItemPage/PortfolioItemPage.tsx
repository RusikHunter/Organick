import IntroBlock from "@components/IntroBlock/IntroBlock"
import IntroBlockPortfolioItem from "@components/IntroBlockPortfolioItem/IntroBlockPortfolioItem"
import { useParams } from "react-router-dom"
import portfolioItems from "@mocks/portfolio-items"
import FarmSection from "@components/FarmSection/FarmSection"

function PortfolioItemPage() {
    const { id } = useParams<{ id: string }>()

    const numericID: number = Number(id)

    const backgroundImageURL: string = portfolioItems[numericID].imageURL

    const blurredBackgroundImageURL: string = portfolioItems[numericID].blurredImageURL

    return (
        <>
            <IntroBlock
                content={<IntroBlockPortfolioItem {...portfolioItems[numericID]} />}
                backgroundImageURL={backgroundImageURL}
                blurredBackgroundImageURL={blurredBackgroundImageURL}
            />
            <FarmSection />
        </>
    )
}

export default PortfolioItemPage