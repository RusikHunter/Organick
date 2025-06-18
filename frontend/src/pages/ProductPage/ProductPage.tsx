import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import ShopSingleBackgroundImage from "../../images/images/background-shop-single.png"
import ProductItemSection from "../../components/ProductItemSection/ProductItemSection"

function ProductPage() {
    useSetCurrentPage("product")

    return (
        <>
            <SubIntroBlock title="Shop Single" backgroundImageURL={ShopSingleBackgroundImage} />
            <ProductItemSection />
        </>
    )
}

export default ProductPage