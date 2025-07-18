import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import CartBackgroundImage from "../../images/images/background-cart.png"
import CartSection from "../../components/CartSection/CartSection"

function CartPage() {
    return (
        <>
            <SubIntroBlock title="Cart" backgroundImageURL={CartBackgroundImage} />
            <CartSection />
        </>
    )
}

export default CartPage