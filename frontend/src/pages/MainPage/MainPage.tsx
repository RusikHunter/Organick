import IntroBlock from "../../components/IntroBlock/IntroBlock"
import IntroBlockNaturalFood from "../../components/IntroBlockNaturalFood/IntroBlockNaturalFood"
import NaturalFoodImage from "../../images/images/natural-food.png"

function MainPage() {
    return (
        <>
            <IntroBlock content={<IntroBlockNaturalFood />} backgroundImageURL={NaturalFoodImage} />
        </>
    )
}

export default MainPage