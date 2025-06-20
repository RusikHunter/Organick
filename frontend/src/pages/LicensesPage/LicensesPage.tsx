import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import UtilsIntroBlock from "../../components/UtilsIntroBlock/UtilsIntroBlock"
import LicensesSection from "../../components/LicensesSection/LicensesSection"

function LicensesPage() {
    useSetCurrentPage("licenses")

    return (
        <>
            <UtilsIntroBlock title="Licenses" />
            <LicensesSection />
        </>
    )
}

export default LicensesPage