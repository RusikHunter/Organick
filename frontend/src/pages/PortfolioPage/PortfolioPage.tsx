import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function PortfolioPage() {
    useSetCurrentPage("portfolio")

    return (
        <>
            <h1>PortfolioPage</h1>
        </>
    )
}

export default PortfolioPage