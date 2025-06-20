import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import UtilsIntroBlock from "../../components/UtilsIntroBlock/UtilsIntroBlock"

function LicensesPage() {
    useSetCurrentPage("licenses")

    return (
        <>
            <UtilsIntroBlock title="Licenses" />
        </>
    )
}

export default LicensesPage