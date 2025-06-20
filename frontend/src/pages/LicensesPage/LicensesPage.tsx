import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import UtilsIntroBlock from "../../components/UtilsIntroBlock/UtilsIntroBlock"
import UtilPageBackgroundImage from "../../images/images/background-util-page.png"

function LicensesPage() {
    useSetCurrentPage("licenses")

    return (
        <>
            <UtilsIntroBlock title="Licenses" backgroundImageURL={UtilPageBackgroundImage} />
        </>
    )
}

export default LicensesPage