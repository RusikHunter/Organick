import SubIntroBlock from "@components/SubIntroBlock/SubIntroBlock"
import RecentBackgroundImage from "@assets/images/background/background-recent.webp"
import RecentBackgroundBlurredImage from "@assets/images/background/background-recent-blurred.webp"
import RecentSection from "@components/RecentSection/RecentSection"

function BlogPage() {
    return (
        <>
            <SubIntroBlock title="Recent News" backgroundImageURL={RecentBackgroundImage} blurredBackgroundImageURL={RecentBackgroundBlurredImage} />
            <RecentSection />
        </>
    )
}

export default BlogPage