import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import ServicesBackgroundImage from "../../images/images/background-services.png"
import GrowSection from "../../components/GrowSection/GrowSection"

function ServicesPage() {
    return (
        <>
            <SubIntroBlock title="Services" backgroundImageURL={ServicesBackgroundImage} />
            <GrowSection />
        </>
    )
}

export default ServicesPage