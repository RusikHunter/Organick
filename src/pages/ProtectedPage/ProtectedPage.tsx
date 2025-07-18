import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import UtilsIntroBlock from "../../components/UtilsIntroBlock/UtilsIntroBlock"
import ProtectedSection from "../../components/ProtectedSection/ProtectedSection"

function ProtectedPage() {
    useSetCurrentPage("protected")

    return (
        <>
            <UtilsIntroBlock title="Protected Page" />
            <ProtectedSection />
        </>
    )
}

export default ProtectedPage