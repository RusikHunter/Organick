import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function ProtectedPage() {
    useSetCurrentPage("protected")

    return (
        <>
            <h1>ProtectedPage</h1>
        </>
    )
}

export default ProtectedPage