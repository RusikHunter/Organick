import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ShopPage() {
    useSetCurrentPage("shop")

    return (
        <>
            <h1>ShopPage</h1>
        </>
    )
}

export default ShopPage