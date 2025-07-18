import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import AboutUsBackgroundImage from "../../images/images/background-about-us.png"
import CreativeSection from "../../components/CreativeSection/CreativeSection"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"
import TeamSection from "../../components/TeamSection/TeamSection"
import OfferSection from "../../components/OfferSection/OfferSection"
import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function AboutPage() {
    useSetCurrentPage("aboutus")

    return (
        <>
            <SubIntroBlock title="About Us" backgroundImageURL={AboutUsBackgroundImage} />
            <CreativeSection />
            <WhyUsSection />
            <TeamSection defaultExpertsCount={3} />
            <OfferSection />
        </>
    )
}

export default AboutPage