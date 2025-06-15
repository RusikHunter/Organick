import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ProductPage() {
    useSetCurrentPage("product")

    return (
        <>
            <h1>ProductPage</h1>
        </>
    )
}

export default ProductPage