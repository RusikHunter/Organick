import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import CartBackgroundImage from "@assets/images/background/background-contact-us.webp"
import CartBackgroundBlurredImage from "@assets/images/background/background-contact-us-blurred.webp"
import CartSection from "@components/CartSection/CartSection"

function CartPage() {
    return (
        <>
            <SubIntroBlock title="Cart" backgroundImageURL={CartBackgroundImage} blurredBackgroundImageURL={CartBackgroundBlurredImage} />
            <CartSection />
        </>
    )
}

export default CartPage