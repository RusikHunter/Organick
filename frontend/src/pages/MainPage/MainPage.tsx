import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "../../components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "../../images/images/natural-food.png"
import CouponsSection from "../../components/CouponsSection/CouponsSection"
import BelieveSection from "../../components/BelieveSection/BelieveSection"
import OurProductsSection from "../../components/OurProductsSection/OurProductsSection"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection"
import OrganicSection from "../../components/OrganicSection/OrganicSection"
import EcoSection from "../../components/EcoSection/EcoSection"
import CategoriesListSection from "../../components/CategoriesListSection/CategoriesListSection"
import MoreNewsSection from "../../components/MoreNewsSection/MoreNewsSection"
import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function MainPage() {
    useSetCurrentPage("main")

    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} />
            <CouponsSection />
            <BelieveSection />
            <OurProductsSection />
            <ReviewsSection />
            <OrganicSection />
            <EcoSection />
            <CategoriesListSection />
            {/* <MoreNewsSection /> */}
        </>
    )
}

export default MainPage