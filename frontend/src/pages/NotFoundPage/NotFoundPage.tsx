import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import NotFoundSection from "../../components/NotFoundSection/NotFoundSection"

function NotFoundPage() {
    useSetCurrentPage("notfound")

    return (
        <>
            <NotFoundSection />
        </>
    )
}

export default NotFoundPage