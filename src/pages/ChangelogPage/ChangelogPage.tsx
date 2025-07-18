import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import UtilsIntroBlock from "../../components/UtilsIntroBlock/UtilsIntroBlock"
import ChangelogSection from "../../components/ChangelogSection/ChangelogSection"

function ChangelogPage() {
    useSetCurrentPage("changelog")

    return (
        <>
            <UtilsIntroBlock title="Changelog" />
            <ChangelogSection />
        </>
    )
}

export default ChangelogPage