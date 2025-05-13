import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "../../components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "../../images/images/natural-food.png"
import CouponsSection from "../../components/CouponsSection/CouponsSection"
import BelieveSection from "../../components/BelieveSection/BelieveSection"

function MainPage() {
    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} />
            <CouponsSection />
            <BelieveSection />
        </>
    )
}

export default MainPage