import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import RecentBackgroundImage from "@assets/images/background/background-recent.webp"
import RecentSection from "@components/RecentSection/RecentSection"

function BlogPage() {
    return (
        <>
            <SubIntroBlock title="Recent News" backgroundImageURL={RecentBackgroundImage} />
            <RecentSection />
        </>
    )
}

export default BlogPage