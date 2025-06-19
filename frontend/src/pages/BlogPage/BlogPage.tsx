import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import RecentBackgroundImage from "../../images/images/background-recent.png"

function BlogPage() {
    useSetCurrentPage("blog")

    return (
        <>
            <SubIntroBlock title="Recent News" backgroundImageURL={RecentBackgroundImage} />

        </>
    )
}

export default BlogPage