import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import ShopBackgroundImage from "../../images/images/background-shop.png"
import ShopSection from "../../components/ShopSection/ShopSection"

function ShopPage() {
    return (
        <>
            <SubIntroBlock title="Shop" backgroundImageURL={ShopBackgroundImage} />
            <ShopSection />
        </>
    )
}

export default ShopPage