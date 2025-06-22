import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function CartPage() {
    useSetCurrentPage("cart")

    return (
        <>
            <h1>CartPage</h1>
        </>
    )
}

export default CartPage