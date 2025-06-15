import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function PortfolioItemPage() {
    useSetCurrentPage("portfolioitem")

    return (
        <>
            <h1>PortfolioItemPage</h1>
        </>
    )
}

export default PortfolioItemPage