import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"

import AboutUsBackgroundImage from "../../assets/images/background/background-about-us.webp"
import AboutUsBackgroundBlurredImage from "../../assets/images/background/background-about-us-blurred.webp"


import CreativeSection from "../../components/CreativeSection/CreativeSection"
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection"
import TeamSection from "../../components/TeamSection/TeamSection"
import OfferSection from "../../components/OfferSection/OfferSection"

function AboutPage() {
    return (
        <>
            <SubIntroBlock title="About Us" backgroundImageURL={AboutUsBackgroundImage} blurredBackgroundImageURL={AboutUsBackgroundBlurredImage} />
            <CreativeSection />
            <WhyUsSection />
            <TeamSection defaultExpertsCount={3} />
            <OfferSection />
        </>
    )
}

export default AboutPage