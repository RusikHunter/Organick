import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockPortfolioItem from "../../components/IntroBlockPortfolioItem/IntroBlockPortfolioItem"
import { useParams } from "react-router-dom"
import portfolioItems from "../../assets/portfolio-items"

function PortfolioItemPage() {
    useSetCurrentPage("portfolioitem")

    const { id } = useParams<{ id: string }>()

    const numericID = Number(id)

    const backgroundImageURL = portfolioItems[numericID].imageURL

    return (
        <>
            <IntroBlock content={<IntroBlockPortfolioItem {...portfolioItems[numericID]} />} backgroundImageURL={backgroundImageURL} />
        </>
    )
}

export default PortfolioItemPage