import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"

import QualityBackgroundImage from "../../assets/images/background/background-quality.webp"
import QualityBackgroundBlurredImage from "../../assets/images/background/background-quality-blurred.webp"

import QualitySection from "../../components/QualitySection/QualitySection"

function QualityPage() {
    return (
        <>
            <SubIntroBlock title="Quality Standard" backgroundImageURL={QualityBackgroundImage} blurredBackgroundImageURL={QualityBackgroundBlurredImage} />
            <QualitySection />
        </>
    )
}

export default QualityPage