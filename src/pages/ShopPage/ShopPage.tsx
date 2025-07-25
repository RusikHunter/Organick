import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import ShopBackgroundImage from "@assets/images/background/background-shop.webp"
import ShopBackgroundBlurredImage from "@assets/images/background/background-shop-blurred.webp"
import ShopSection from "@components/ShopSection/ShopSection"

function ShopPage() {
    return (
        <>
            <SubIntroBlock title="Shop" backgroundImageURL={ShopBackgroundImage} blurredBackgroundImageURL={ShopBackgroundBlurredImage} />
            <ShopSection />
        </>
    )
}

export default ShopPage