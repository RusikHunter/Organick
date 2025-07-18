import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import CartBackgroundImage from "../../images/images/background-cart.png"
import CartSection from "../../components/CartSection/CartSection"

function CartPage() {
    useSetCurrentPage("cart")

    return (
        <>
            <SubIntroBlock title="Cart" backgroundImageURL={CartBackgroundImage} />
            <CartSection />
        </>
    )
}

export default CartPage