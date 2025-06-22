import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import CartBackgroundImage from "../../images/images/background-cart.png"

function CartPage() {
    useSetCurrentPage("cart")

    return (
        <>
            <SubIntroBlock title="Cart" backgroundImageURL={CartBackgroundImage} />
        </>
    )
}

export default CartPage