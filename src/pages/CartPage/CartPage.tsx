import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import CartBackgroundImage from "@assets/images/background/background-contact-us.webp"
import CartSection from "@components/CartSection/CartSection"

function CartPage() {
    return (
        <>
            <SubIntroBlock title="Cart" backgroundImageURL={CartBackgroundImage} />
            <CartSection />
        </>
    )
}

export default CartPage