import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import ShopBackgroundImage from "@assets/images/background/background-shop.webp"
import ShopSection from "@components/ShopSection/ShopSection"

function ShopPage() {
    return (
        <>
            <SubIntroBlock title="Shop" backgroundImageURL={ShopBackgroundImage} />
            <ShopSection />
        </>
    )
}

export default ShopPage