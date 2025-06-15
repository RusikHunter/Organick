import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function NotFoundPage() {
    useSetCurrentPage("notfound")

    return (
        <>
            <h1>NotFoundPage</h1>
        </>
    )
}

export default NotFoundPage