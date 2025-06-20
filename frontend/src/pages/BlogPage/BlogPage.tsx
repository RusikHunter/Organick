import { useSetCurrentPage } from "../../hooks/useSetCurrentPage"
import SubIntroBlock from "../../components/SubIntroBlock/SubIntroBlock"
import RecentBackgroundImage from "../../images/images/background-recent.png"
import RecentSection from "../../components/RecentSection/RecentSection"

function BlogPage() {
    useSetCurrentPage("blog")

    return (
        <>
            <SubIntroBlock title="Recent News" backgroundImageURL={RecentBackgroundImage} />
            <RecentSection />
        </>
    )
}

export default BlogPage