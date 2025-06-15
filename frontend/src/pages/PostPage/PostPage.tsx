import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function PostPage() {
    useSetCurrentPage("post")

    return (
        <>
            <h1>PostPage</h1>
        </>
    )
}

export default PostPage