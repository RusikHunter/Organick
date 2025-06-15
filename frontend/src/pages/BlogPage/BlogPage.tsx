import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"

function BlogPage() {
    useSetCurrentPage("blog")

    return (
        <>
            <h1>BlogPage</h1>
        </>
    )
}

export default BlogPage