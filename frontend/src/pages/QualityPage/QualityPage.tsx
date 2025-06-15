import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import QualityBackgroundImage from "../../images/images/background-quality.png"
import QualitySection from "../../components/QualitySection/QualitySection"

function QualityPage() {
    useSetCurrentPage("quality")

    return (
        <>
            <SubIntroBlock title="Quality Standard" backgroundImageURL={QualityBackgroundImage} />
            <QualitySection />
        </>
    )
}

export default QualityPage